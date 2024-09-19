"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExitCrossFC } from "../_atoms/Icons";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="flex items-center gap-4 relative z-10">
      <button
        onClick={handleNav}
        className="block rounded p-2.5 text-accent transition hover:text-gray-600/75 md:hidden"
      >
        <span className="sr-only">Toggle menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`fixed right-0 top-0 w-full bg-white rounded-lg sm:hidden h-full p-10 ease-in duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex w-[60%] mt-10 mb-5 items-center justify-between">
          <Image
            src="/small-logo.png"
            alt="company logo" width={100} height={30}
            className="mx-1 cursor-pointer"
          />
           
          <div onClick={handleNav} className="cursor-pointer mr-10">
           <ExitCrossFC/>
          </div>
        </div>
        <div className="flex-col py-4">
          <ul className="text-lg gap-2">
            <div className="py-3 ">
            <Link href="/">
              <li
                className="py-4 text-primary font-normal leading-4 transition hover:text-primary cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </li>
            </Link>

            <Link href="/about">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 text-primary font-normal leading-4 transition hover:text-primary"
              >
                About Us
              </li>
            </Link>

            <Link href="/contactus">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 text-primary font-normal leading-4 transition hover:text-primary"
              >
                Contact Us
              </li>
            </Link>
            </div>
            <div className="pt-6">
            <Link href="/treatments">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 text-primary font-normal leading-4 transition hover:text-primary"
              >
                Treatments
              </li>
            </Link>
            <Link href="/clinics">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 text-primary font-normal leading-4 transition hover:text-primary"
              >
                Clinics
              </li>
            </Link>
            <Link href="/locations">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 text-primary font-normal leading-4 transition hover:text-primary"
              >
                Locations
              </li>
            </Link>
            <Link href="/blogs">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 text-primary font-normal leading-4 transition hover:text-primary"
              >
                Blogs
              </li>
            </Link>
            <div className="pt-6">
            <Link href="/faqs">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 text-primary font-normal leading-4 transition hover:text-primary"
              >
                FAQs
              </li>
            </Link>
            <Link href="/sitemap">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 text-primary font-normal leading-4 transition hover:text-primary"
              >
                Sitemap
              </li>
            </Link>
            </div>
            <div className="pt-6">
            <Link href="/termsandconditions">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 text-primary font-normal leading-4 transition hover:text-primary"
              >
                Terms & Conditions
              </li>
            </Link>
            <Link href="/privavcypolicy">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 text-primary font-normal leading-4 transition hover:text-primary"
              >
                Privacy Policy
              </li>
            </Link>
            </div>
            </div>
          </ul>
          <div className="pt-8 text-lg leading-4">
            <p className="text-primary mb-4">info@healthway.co.uk</p>
            <p className="text-primary">+447564123765</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start absolute mb-6 space-x-3 pt-8">
        <Image
          src="/linkedin.png"
          alt="linkedin icon"
          width={32}
          height={32}
        />
        <Image
          src="/facebook.png"
          alt="facebook icon"
          width={32}
          height={32}
          className="bg-accent rounded-sm p-0.5"
        />
        <Image
          src="/instagram.png"
          alt="instagram icon"
          width={32}
          height={32}
          className="bg-accent rounded-sm p-1"
        />
        <Image
          src="/Youtube.png"
          alt="youtube icon"
          width={32}
          height={32}
          className="bg-accent rounded-sm p-1"
        />
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
