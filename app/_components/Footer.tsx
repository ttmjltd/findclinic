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
  terms: {
    label: "Terms & Conditions",
    href: "/terms",
  },
  clinics: {
    label: "Clinics",
    href: "/clinics",
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
    <section className="container w-full mx-auto bg-white text-primary leading-4 border rounded-xl backdrop-blur-xl backdrop-saturate-200 mt-10 py-4 flex flex-col sm:flex-row justify-between items-start sm:w-2/3 sm:h-2/6">
      <div className="flex flex-col sm:flex-row items-start w-full sm:w-full sm:justify-between">
        <div className="flex sm:flex-col sm:items-start ml-6 mt-6 items-center">
          <Image
            width={100}
            height={30}
            src="/Logo2findclinics.png"
            alt="find clinics logo small"
            className="block sm:hidden w-2/5 h-auto mr-auto"
          />

          <Image
            width={230}
            height={45}
            src="/Logo1findclinics.png"
            alt="find clinics logo"
            className="hidden sm:block w-full h-auto"
          />
          <div className="sm:mt-10 sm:ml-0 ml-auto">
            <p className="text-primary mb-4">info@healthway.co.uk</p>
            <p className="text-primary">+447564123765</p>
          </div>
        </div>

        <div className="flex items-start ml-6 sm:w-3/4">
          <div className="hidden md:block w-px h-36 border border-[#2A9D8F] m-4 my-6 mr-6"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 my-10 gap-2 w-full">
            {Object.entries(footerLinks).map(([key, link]) => (
              <ul key={key} className="flex flex-col space-y-1">
                <li>
                  <a
                    href={link.href}
                    className="text-primary font-normal text-base hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className="flex sm:flex-col items-center md:flex-row absolute bottom-6 space-x-2 sm:right-10 right-3">
        <Image src="/linkedin.png" alt="linkedin icon" width={24} height={24} />
        <Image
          src="/facebook.png"
          alt="facebook icon"
          width={24}
          height={24}
          className="bg-[#2A9D8F] rounded-sm p-0.5"
        />
        <Image
          src="/instagram.png"
          alt="instagram icon"
          width={24}
          height={24}
          className="bg-[#2A9D8F] rounded-sm p-1"
        />
        <Image
          src="/Youtube.png"
          alt="youtube icon"
          width={24}
          height={24}
          className="bg-[#2A9D8F] rounded-sm p-1"
        />
      </div>
    </section>
  );
};

export default Footer;
