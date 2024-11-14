import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

const Navbar: React.FC = () => {
  return (
    <nav className="block w-auto max-w-screen-xxl my-6 py-3 mx-6 xl:mx-20 text-neutralDark  lg:bg-white lg:rounded-xl  lg:backdrop-blur-xl lg:backdrop-saturate-200">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 md:gap-20">
          <Link href="/">
          <Image
            src="/Logo1findclinics.png"
            alt="company logo"
            width={230}
            height={55}
            className="mx-4 relative left-[15px] hidden lg:block"
          />
          <Image
            src="/small-logo.png"
            alt="company logo"
            width={84}
            height={25}
            className="mr-8 block cursor-pointer lg:hidden"
          />
          </Link>

          <div className="hidden md:flex items-center justify-center w-full h-full gap-8 text-base">
            <ul className="inline-flex gap-8">
              <li className="block p-2 antialiased leading-normal hover:rounded-l hover:bg-neutral hover:rounded-lg">
                <Link href="/" className="flex items-center hover:underline">
                  Home
                </Link>
              </li>
              <li className="block p-2 antialiased leading-normal hover:bg-neutral hover:rounded-lg">
                <Link
                  href="/about-us"
                  className="flex items-center hover:underline whitespace-nowrap"
                >
                  About Us
                </Link>
              </li>
              <li className="block p-2 antialiased leading-normal hover:rounded-l hover:bg-neutral hover:rounded-lg">
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-end gap-1">
          <Link href="/register-clinic">
            <button
              className="block sm:block px-2 py-1 sm:px-4 sm:py-2 mx-2 ml-6 font-inter font-semibold bg-secondary text-white text-sm sm:text-lg rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-accent hover:to-secondary transition-colors whitespace-nowrap"
              type="button"
            >
              Register your clinic!
            </button>
          </Link>
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
