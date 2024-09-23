import React from "react";
import { FooterLink } from "../types";
import Image from "next/image";

const footerLinks: { [key: string]: FooterLink } = {
  treatments: {
    label: "Treatments",
    href: "/treatments",
  },
  about: {
    label: "About Us",
    href: "/about",
  },
  clinics: {
    label: "Clinics",
    href: "/clinics",
  },
  terms: {
    label: "Terms & Conditions",
    href: "/terms",
  },
  contact: {
    label: "Contact Us",
    href: "/contact",
  },
  privacy: {
    label: "Privacy Policy",
    href: "/privacy",
  },
  locations: {
    label: "Locations",
    href: "/locations",
  },
  faqs: {
    label: "FAQs",
    href: "/faqs",
  },
  sitemap: {
    label: "Sitemap",
    href: "/sitemap",
  },
  blog: {
    label: "Blog",
    href: "/blog",
  },
};
const Footer: React.FC = () => {
  return (
    <div>
      <section className="md:container w-full mx-auto bg-white text-primary leading-4 border rounded-xl backdrop-blur-xl backdrop-saturate-200 mt-10 py-4 flex flex-col md:flex-row justify-between items-start md:w-2/3">
        <div className="flex flex-col md:flex-row items-start w-full md:justify-between">
          <div className="flex md:flex-col md:items-start md:ml-6 mt-6 items-center md:w-1/4 w-5/6 mx-auto">
            <Image
              width={100}
              height={30}
              src="/Logo2findclinics.png"
              alt="Find Clinics Logo Small"
              className="block md:hidden w-2/6 h-auto mr-auto"
            />
            <Image
              width={230}
              height={45}
              src="/Logo1findclinics.png"
              alt="Find Clinics Logo"
              className="hidden md:block w-full h-auto"
            />
            <div className="md:mt-10 md:ml-0 ml-auto">
              <p className="text-primary mb-4">info@healthway.co.uk</p>
              <p className="text-primary">+447564123765</p>
            </div>
          </div>

          <section className="flex items-start ml-6 md:w-3/4">
            <div className="hidden md:block w-px h-36 border border-accent m-4 my-6 mr-6"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 my-10 gap-2 w-full">
              <ul className="flex flex-col space-y-1">
                {Object.entries(footerLinks).map(([key, link]) => (
                  <li key={key}>
                    <a
                      href={link.href}
                      className="text-primary font-normal text-base hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <div className="flex items-center md:flex-row md:absolute md:bottom-6 space-x-2 md:right-10 mx-auto">
          <Image src="/linkedin.png" alt="LinkedIn icon" width={24} height={24} />
          <Image
            src="/facebook.png"
            alt="Facebook icon"
            width={24}
            height={24}
            className="bg-[#2A9D8F] rounded-md p-0.5"
          />
          <Image
            src="/instagram.png"
            alt="Instagram icon"
            width={24}
            height={24}
            className="bg-accent rounded-sm p-1"
          />
          <Image
            src="/Youtube.png"
            alt="YouTube icon"
            width={24}
            height={24}
            className="bg-accent rounded-sm p-1"
          />
        </div>
      </section>
    </div>
  );
};
};

export default Footer;
