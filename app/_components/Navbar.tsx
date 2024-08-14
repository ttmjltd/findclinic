import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="block w-auto max-w-screen-xxl my-6 py-4 mx-6 xl:mx-20 text-neutralDark bg-white border shadow-sm rounded-lg border-white/80 bg-opacity-80 backdrop-blur-xl backdrop-saturate-200">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex items-center">
          <a
            href="/"
            className="mx-4 block cursor-pointer py-1.5 text-primary"
          >
            L O G O
          </a>
          <div className="hidden md:block">
            <ul className="flex flex-shrink-0 items-center gap-2 my-2 ml-6 lg:mb-0 lg:mt-0 lg:flex-row lg:gap-6 text-md">
              <li className="block p-1 font-sans antialiased font-medium leading-normal hover:text-blue-500">
                <Link
                  href="/"
                  className="flex items-center hover:text-blue-500"
                >
                  Home
                </Link>
              </li>
              <li className="block p-1 font-sans antialiased font-medium leading-normal hover:text-blue-500">
                <Link
                  href="/"
                  className="flex items-center hover:text-blue-500"
                >
                  About Us
                </Link>
              </li>
              <li className="block p-1 font-sans antialiased font-medium leading-normal text-blue-gray-900">
                <Link
                  href="/"
                  className="flex items-center transition-colors hover:text-blue-500"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <button
          className="relative ml-auto mr-4 h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:hidden"
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
