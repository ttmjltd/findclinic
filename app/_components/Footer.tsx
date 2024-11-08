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
    href: "/about-us",
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
    <section className="md:container w-full mx-auto bg-white text-neutralDark  leading-4 border sm:rounded-xl backdrop-blur-xl backdrop-saturate-200 mt-10 py-4 flex flex-col md:flex-row justify-between items-start md:w-2/3 md:h-2/6">
      <div className="flex flex-col md:flex-row items-start w-full md:w-full md:justify-between">
        <div className="flex md:flex-col md:items-start md:ml-6 mt-6 items-center md:w-1/4 w-5/6 mx-auto">
          <Image
            width={100}
            height={30}
            src="/Logo2findclinics.png"
            alt="find clinics logo small"
            className="block md:hidden w-2/6 h-auto mr-auto"
          />

          <Image
            width={230}
            height={45}
            src="/Logo1findclinics.png"
            alt="find clinics logo"
            className="hidden md:block w-full h-auto"
          />
          <div className="md:mt-10 md:ml-0 ml-auto">
            <p className="text-neutralDark  mb-4">info@healthway.co.uk</p>
            <p className="text-neutralDark ">+447564123765</p>
          </div>
        </div>

        <div className="flex items-start ml-6 w-full">
          <div className="hidden md:block w-px h-36 border border-secondary m-4 my-6 mr-6"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 my-10 gap-2 w-full">
            {Object.entries(footerLinks).map(([key, link]) => (
              <ul key={key} className="flex flex-col space-y-1">
                <li>
                  <a
                    href={link.href}
                    className="text-neutralDark  font-normal text-base hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center md:flex-row md:absolute md:bottom-6 space-x-2 md:right-10 mx-auto">
        <Image src="/linkedin.png" alt="linkedin icon" width={24} height={24} />
        <Image
          src="/facebook.png"
          alt="facebook icon"
          width={24}
          height={24}
          className="bg-secondary rounded-md p-0.5"
        />
        <Image
          src="/instagram.png"
          alt="instagram icon"
          width={24}
          height={24}
          className="bg-secondary rounded-md p-1"
        />
        <Image
          src="/Youtube.png"
          alt="youtube icon"
          width={24}
          height={24}
          className="bg-secondary rounded-md p-1"
        />
      </div>
    </section>
  );
};

export default Footer;
