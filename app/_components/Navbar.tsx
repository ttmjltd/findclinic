import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="block w-auto max-w-screen-xxl my-6 py-3 mx-6 xl:mx-20 text-primary bg-white border rounded-xl  backdrop-blur-xl backdrop-saturate-200">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 md:gap-20">
          <img
            src="/Logo1findclinics.png"
            alt="company logo"
            className="mx-4 relative w-15 h-11 left-[15px] hidden lg:block"
          />
          <img
            src="/small-logo.png"
            alt="company logo"
            className="mx-4 block cursor-pointer w-15 h-10 lg:hidden"
          />

          <div className="hidden md:flex items-center justify-center w-full h-full gap-8 text-base">
            <ul className="inline-flex font-epilogue gap-8">
              <li className="block p-2 antialiased leading-normal hover:rounded-l hover:bg-bgWhite hover:rounded-lg">
                <Link href="/" className="flex items-center hover:underline">
                  Home
                </Link>
              </li>
              <li className="block p-2 antialiased leading-normal hover:bg-bgWhite hover:rounded-lg">
                <Link
                  href="/aboutus"
                  className="flex items-center hover:underline whitespace-nowrap"
                >
                  About Us
                </Link>
              </li>
              <li className="block p-2 antialiased leading-normal hover:rounded-l hover:bg-bgWhite hover:rounded-lg">
                <Link
                  href="/contactus"
                  className="flex items-center hover:underline whitespace-nowrap"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/register-clinic">
            <button
              className="hidden sm:block px-4 py-2 mx-8 font-inter font-semibold bg-accent text-white text-lg rounded-xl focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-[#ADE8F4] hover:to-[#2A9D8F] transition-colors
             whitespace-nowrap"
              type="button"
            >
              Register your clinic
            </button>
          </Link>
          <button
            className="relative mr-4 h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center align-middle font-epilogue text-xs font-medium transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:hidden"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
