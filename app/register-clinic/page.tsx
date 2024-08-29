"use client";

import Input from "../_atoms/Input";
import Checkbox from "../_atoms/Checkbox";
import SocialButton from "../_atoms/SocialButton";
import { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { ReactFacebookLoginInfo } from "react-facebook-login";
import axios from "axios";
import { generateCodeVerifier, generateCodeChallenge } from "../../utils/pkce";
import ToggleSwitch from "../_atoms/ToggleSwitch";

const RegisterClinicPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+44",
    mobileCountryCode: "+44",
    clinicName: "",
    country: "",
    acceptTerms: false,
    subscribe: false,
    emailOrPhone: "",
    password: "",
  });

  const [isRegister, setIsRegister] = useState(false);

  const [isPhoneNumber, setIsPhoneNumber] = useState(false);

  // Effect to initialize Facebook SDK
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
        xfbml: true,
        version: "v20.0",
      });
      window.FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js: HTMLScriptElement,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      if (fjs && fjs.parentNode) {
        fjs.parentNode.insertBefore(js, fjs);
      }
    })(document, "script", "facebook-jssdk");
  }, []);

  // Handle input change for form fields
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const value =
      field === "phone" ||
      field === "countryCode" ||
      field === "mobileCountryCode" ||
      (field === "emailOrPhone" && isPhoneNumber)
        ? e.target.value.replace(/\D/g, "")
        : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // Handle checkbox change for form fields
  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.checked }));
  };

  // Toggle between register and login forms
  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  // Toggle between email and phone number for login
  const togglePhoneNumber = () => {
    setIsPhoneNumber(!isPhoneNumber);
    setForm({ ...form, emailOrPhone: "" });
  };

  // Handle Google login
  const handleGoogleLogin = useGoogleLogin({
    flow: "auth-code",
    ux_mode: "popup",
    onSuccess: async ({ code }) => {
      try {
        const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI || "";
        const postLoginRedirectUri =
          process.env.NEXT_PUBLIC_GOOGLE_POST_LOGIN_REDIRECT_URI || "";
        const response = await axios.get(`${redirectUri}?code=${code}`);
        console.log("Logged in successfully:", response.data);
        window.location.href = postLoginRedirectUri;
      } catch (error) {
        console.error("Google login failed:", error);
      }
    },
    onError: (error) => {
      console.error("Google login error:", error);
    },
  });

  // Handle Facebook login
  const handleFacebookLogin = async (response: ReactFacebookLoginInfo) => {
    if (response?.status === "unknown") {
      console.error("Something went wrong with Facebook Login.");
      return;
    }
    try {
      const redirectUri = process.env.NEXT_PUBLIC_FACEBOOK_REDIRECT_URI || "";
      const postLoginRedirectUri =
        process.env.NEXT_PUBLIC_FACEBOOK_POST_LOGIN_REDIRECT_URI || "";
      const { accessToken } = response;
      const res = await axios.get(`${redirectUri}?access_token=${accessToken}`);
      console.log("Logged in successfully:", res.data);
      window.location.href = postLoginRedirectUri;
    } catch (error) {
      console.error("Facebook login failed:", error);
    }
  };

  // Handle Twitter login
  const handleTwitterLogin = async () => {
    console.log("handleTwitterLogin called");
    const rootUrl = "https://twitter.com/i/oauth2/authorize";
    const redirectUri = process.env.NEXT_PUBLIC_TWITTER_REDIRECT_URI || "";
    const clientId = process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID || "";

    const codeVerifier = generateCodeVerifier();
    const codeChallenge = await generateCodeChallenge(codeVerifier);

    localStorage.setItem("pkce_code_verifier", codeVerifier);
    console.log("Code verifier saved to localStorage");

    const options = {
      redirect_uri: redirectUri,
      client_id: clientId,
      state: "state",
      response_type: "code",
      code_challenge: codeChallenge,
      code_challenge_method: "S256",
      scope: ["users.read", "tweet.read"].join(" "),
    };

    const qs = new URLSearchParams(options).toString();
    const authUrl = `${rootUrl}?${qs}`;
    console.log("Auth URL:", authUrl);

    window.location.href = authUrl;
  };

  // Handle social sign-in
  const handleSocialSignIn = (platform: "Google" | "Facebook" | "X") => {
    if (platform === "Google") {
      handleGoogleLogin();
    } else if (platform === "Facebook") {
      window.FB.login(
        (response: any) => {
          if (response.status !== "connected") {
            console.error("Something went wrong with Facebook Login.");
            return;
          }
          handleFacebookLogin({
            id: response.authResponse.userID,
            accessToken: response.authResponse.accessToken,
            name: "",
            email: "",
            picture: null,
            status: response.status,
          });
        },
        { scope: "public_profile,email" }
      );
    } else if (platform === "X") {
      handleTwitterLogin();
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-start">
      {/* Page Heading */}
      <h1 className="text-2xl md:text-4xl font-bold text-secondary text-center mb-8 mt-12 md:mt-24">
        Reach thousands of potential patients <br /> and grow your clinic&apos;s
        client base.
      </h1>

      {/* Forms Container */}
      <div className="flex max-w-5xl w-full px-8 gap-8 flex-col md:flex-row mt-12">
        {/* Left Column - Create an Account */}
        <div
          className={`bg-white rounded-lg shadow-lg p-8 w-full flex flex-col justify-between ${
            isRegister ? "block" : "hidden"
          } md:block`}
        >
          <h2 className="text-center text-neutralDark text-[16px] font-semibold mb-4">
            Create an account
          </h2>
          <form className="flex flex-col gap-2">
            <Input
              label="Full Name"
              value={form.fullName}
              onChange={(e) => handleInputChange(e, "fullName")}
            />
            <Input
              label="Email Address"
              value={form.email}
              onChange={(e) => handleInputChange(e, "email")}
              type="email"
            />
            <div className="flex flex-col mb-2">
              <label className="text-[14px] font-semibold text-neutralDark mb-1">
                Phone Number
              </label>
              <div className="flex gap-2">
                <div className="flex items-center bg-neutral text-secondary italic rounded p-3 h-12">
                  <span>+</span>
                  <input
                    value={form.countryCode.replace("+", "")}
                    onChange={(e) => handleInputChange(e, "countryCode")}
                    className="w-[30px] md:w-[30px] bg-transparent outline-none"
                    type="tel"
                    inputMode="numeric"
                    pattern="\d*"
                  />
                </div>
                <Input
                  label=""
                  value={form.phone}
                  onChange={(e) => handleInputChange(e, "phone")}
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className="w-full"
                />
              </div>
            </div>

            <Input
              label="Clinic Name"
              value={form.clinicName}
              onChange={(e) => handleInputChange(e, "clinicName")}
            />
            <Input
              label="Country"
              value={form.country}
              onChange={(e) => handleInputChange(e, "country")}
              className="mb-2"
            />
            <div className="flex items-center gap-4 mb-2 mt-2 text-[14px] text-[var(--color-primary)]">
              <label className="flex items-center cursor-pointer gap-2">
                <Checkbox
                  className="gap-2 items-center"
                  checked={form.acceptTerms}
                  onChange={(e) => handleCheckboxChange(e, "acceptTerms")}
                  value="acceptTerms"
                  label="Accept the registration terms"
                />
              </label>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <label className="flex items-center cursor-pointer gap-2 text-[14px] text-[var(--color-primary)]">
                <Checkbox
                  className="gap-2 items-center"
                  checked={form.subscribe}
                  onChange={(e) => handleCheckboxChange(e, "subscribe")}
                  value="subscribe"
                  label="Subscribe to our newsletter"
                />
              </label>
            </div>
            <button
              className="w-[95%] mx-auto mt-4 px-4 py-2 font-medium bg-accent text-white text-lg rounded-xl focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-[var(--color-accent)] hover:to-[var(--color-secondary)] transition-colors"
              type="button"
            >
              Register
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleForm();
              }}
              className="mt-4 text-secondary underline text-center md:hidden"
            >
              Already have an account? Sign in
            </button>
          </form>
        </div>

        {/* Middle Divider (Only visible on Desktop) */}
        <div className="hidden md:block w-[1.5px] bg-[var(--color-primary)] h-auto"></div>

        {/* Right Column - Sign In */}
        <div
          className={`bg-white rounded-lg shadow-lg p-8 w-full flex flex-col ${
            !isRegister ? "block" : "hidden"
          } md:block`}
        >
          <h2 className="text-center text-neutralDark text-[16px] font-semibold mb-4">
            Sign in
          </h2>
          <form className="flex flex-col gap-2">
            <div className="flex items-center mb-2">
              <label className="text-[14px] font-semibold text-neutralDark mr-2">
                Email Address
              </label>
              <ToggleSwitch
                checked={isPhoneNumber}
                onChange={togglePhoneNumber}
              />
              <label className="text-[14px] font-semibold text-neutralDark ml-2">
                Phone Number
              </label>
            </div>
            <div className="flex gap-2 mb-2">
              {isPhoneNumber && (
                <div className="flex items-center bg-neutral text-secondary italic rounded p-3 h-12">
                  <span>+</span>
                  <input
                    value={form.mobileCountryCode.replace("+", "")}
                    onChange={(e) => handleInputChange(e, "mobileCountryCode")}
                    className="w-[30px] md:w-[30px] bg-transparent outline-none"
                    type="tel"
                    inputMode="numeric"
                    pattern="\d*"
                  />
                </div>
              )}
              <Input
                label=""
                value={form.emailOrPhone}
                onChange={(e) => handleInputChange(e, "emailOrPhone")}
                className="w-full"
                type={isPhoneNumber ? "tel" : "email"}
                inputMode={isPhoneNumber ? "numeric" : undefined}
                pattern={isPhoneNumber ? "[0-9]*" : undefined}
              />
            </div>

            <Input
              label="Password"
              value={form.password}
              onChange={(e) => handleInputChange(e, "password")}
              type="password"
              className="mb-4"
            />
            <button
              className="w-full px-4 py-2 mb-2 font-semibold bg-accent text-white text-lg rounded-xl focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-[var(--color-accent)] hover:to-[var(--color-secondary)] transition-colors"
              type="button"
            >
              Sign in
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleForm();
              }}
              className="mt-4 text-secondary underline text-center md:hidden"
            >
              Don&apos;t have an account? Create one
            </button>
            <div className="text-center text-neutralDark text-[16px] font-semibold my-2 mt-16">
              Or sign in with
            </div>
            {/* Social Login Buttons */}
            <div className="flex flex-col gap-2 mt-2">
              <SocialButton
                platform="Google"
                onClick={() => handleSocialSignIn("Google")}
              />
              <SocialButton
                platform="Facebook"
                onClick={() => handleSocialSignIn("Facebook")}
              />
              <SocialButton
                platform="X"
                onClick={() => handleSocialSignIn("X")}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterClinicPage;
