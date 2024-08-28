import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter as XIcon } from "react-icons/fa6";

interface SocialButtonProps {
  platform: "Google" | "Facebook" | "X";
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({ platform, onClick }) => {
  const getButtonStyles = () => {
    switch (platform) {
      case "Google":
        return "bg-neutral text-neutralDark hover:bg-neutralDark hover:text-white";
      case "Facebook":
        return "bg-neutral text-neutralDark hover:bg-[var(--color-primary)] hover:text-white";
      case "X":
        return "bg-neutral text-neutralDark hover:bg-black hover:text-white";
      default:
        return "";
    }
  };

  const getIcon = () => {
    switch (platform) {
      case "Google":
        return <FcGoogle className="mr-2 text-lg" />;
      case "Facebook":
        return <FaFacebookF className="mr-2 text-lg" />;
      case "X":
        return <XIcon className="mr-2 text-lg" />;
      default:
        return null;
    }
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className={`w-full h-12 px-4 py-2 text-md rounded-lg font-semibold flex items-center justify-center transition-colors ${getButtonStyles()}`}
    >
      {getIcon()}
      {`Sign in with ${platform}`}
    </button>
  );
};

export default SocialButton;
