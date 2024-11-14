import React from "react";
import Image from "next/image";

const page: React.FC = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-start text-sm md:text-base space-x-1 md:space-x-2 mx-7 mt-2 md:mx-36 max-w-full">
        <a
          className="text-primary hover:text-secondary hover:underline"
          href="/"
        >
          Home
        </a>
        <span className="text-secondary"> {">"} </span>
        <span className="text-primary hover:text-secondary hover:underline">
          Contact Us
        </span>
      </div>
      <div className="flex flex-col items-center w-full container mx-auto sm:py-10">
        <div className="text-center text-3xl font-bold text-secondary p-5 mb-6">
          <h2>Connecting you to Right Care,</h2>
          <h2>Every Step of the Way</h2>
        </div>
        <div className="bg-white w-full rounded-lg shadow-lg lg:p-12 p-20 sm:p-10 xl:w-4/6">
          <section className="md:grid md:grid-cols-2 md:gap-x-16 pl-6 pr-14">
            {/* for patients */}
            <div className="pr-8">
              <h3 className="text-secondary text-md font-bold pb-4">For Patients</h3>
              <h3 className="text-md text-neutralDark font-semibold pb-1">
                Call us:
              </h3>
              <p className="text-neutralDark pb-4">+447564123765</p>
              <h3 className="text-md text-neutralDark font-semibold pb-1">
                Write to us:
              </h3>
              <p className="text-neutralDark pb-4">info@findclinics.co.uk</p>
              <h3 className="text-md text-neutralDark font-semibold pb-1">
                Follow us:
              </h3>
              <div className="flex items-center flex-row  md:bottom-1 space-x-2 mx-auto mb-6">
                <a href="https://www.linkedin.com" rel="noopener noreferrer" target="_blank">
                <Image
                  src="/linkedin.png"
                  alt="linkedin icon"
                  width={24}
                  height={24}
                /> </a>
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
            </div>
            {/* for clinics */}
            <div className="">
              <h3 className="text-secondary text-md font-bold pb-4 ">For Clinics</h3>
              <p className="text-neutralDark pb-2">+447564123765</p>
              <p className="text-neutralDark pb-2">clinics@findclinics.co.uk</p>
              <h3 className="text-secondary text-md font-bold pt-6 pb-3">Already registered as a clinic?</h3>
              <p className="text-neutralDark pb-2">+447564123765</p>
              <p className="text-neutralDark pb-2">customer@findclinics.co.uk</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
