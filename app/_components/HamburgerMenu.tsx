"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExitCrossFC, HamburgerMenuButton } from "../_atoms/Icons";

const linkGroups = [
  [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact Us" },
  ],
  [
    { href: "/treatments", label: "Treatments" },
    { href: "/clinics", label: "Clinics" },
    { href: "/locations", label: "Locations" },
    { href: "/blogs", label: "Blogs" },
  ],
  [
    { href: "/faqs", label: "FAQs" },
    { href: "/sitemap", label: "Sitemap" },
  ],
  [
    { href: "/termsandconditions", label: "Terms & Conditions" },
    { href: "/privacypolicy", label: "Privacy Policy" },
  ],
];

const HamburgerMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
  }, [menuOpen]);

  const renderLinks = (links: { href: string; label: string }[]) => (
    <div className="pt-4">
      {links.map(({ href, label }) => (
        <Link href={href} key={href}>
          <li
            className="py-3 text-neutralDark  font-normal leading-4 transition hover:underline hover:rounded-l hover:bg-neutral hover:rounded-lg cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </li>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="flex items-center gap-4 relative z-10">
      <button
        onClick={toggleMenu}
        className="block rounded p-2.5 text-secondary transition hover:bg-neutral md:hidden"
      >
        <span className="sr-only">Toggle menu</span>
        <HamburgerMenuButton />
      </button>
      <nav
        ref={menuRef}
        className={`fixed right-0 top-0 bottom-0 w-[85%] bg-white rounded-xl sm:hidden h-min-screen p-6 ease-in duration-300 z-100 overflow-hidden ${
          menuOpen ? "fixed" : "hidden"
        }`}
      >
        <div className="flex w-[90%] mt-5 mb-4 items-center justify-between">
          <Image
            src="/small-logo.png"
            alt="company logo"
            width={100}
            height={30}
            className="mx-1 cursor-pointer"
          />
          <div onClick={toggleMenu} className="cursor-pointer mr-5">
            <ExitCrossFC />
          </div>
        </div>
        <div className="flex-col py-3 overflow-hidden">
          <ul className="text-md gap-2">
            {linkGroups.map((group, index) => (
              <div key={index}>{renderLinks(group)}</div>
            ))}
          </ul>
          <div className="pt-6 text-md leading-4">
            <p className="text-neutralDark  mb-4">info@healthway.co.uk</p>
            <p className="text-neutralDark ">+447564123765</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start absolute mb-6 space-x-3 pt-6">
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
            className="bg-secondary rounded-sm p-0.5"
          />
          <Image
            src="/instagram.png"
            alt="instagram icon"
            width={32}
            height={32}
            className="bg-secondary rounded-sm p-1"
          />
          <Image
            src="/Youtube.png"
            alt="youtube icon"
            width={32}
            height={32}
            className="bg-secondary rounded-sm p-1"
          />
        </div>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
