import Image from "next/image";
import React from "react";
import { BreadCrumTypes } from "../types";
import { StarFC } from "../_atoms/Icons";

const ClinicCard: React.FC<BreadCrumTypes> = ({ clinicName }) => {
  return (
    <div className="flex flex-col md:flex-row mt-4 md:mt-10 w-full md:w-fit">
      <div className="rounded-xl overflow-hidden">
        <Image
          src={"/mayo-clinic.jpeg"}
          alt="mayo-clinic"
          width={283}
          height={171}
          className="w-full md:w-[283px] h-[171px] object-cover object-[50%_25%] rounded-xl "
        />
      </div>
      <div className="grid my-2 md:m-2">
        <div className="w-full mb-2 xs:mt-2 lg:mt-0">
          <span className="text-secondary xs:text-3xl text-lg md:text-2xl font-bold">
            {clinicName}
          </span>
          <div className="flex items-center my-3 lg:mt-1">
            <span className="mr-2 bg-primary text-white text-xs p-1 rounded-md">
              5.0
            </span>
            {[5, 5, 5, 5, 5].map((_, index) => (
              <span key={index} className="text-primary text-xs">
                <StarFC color="#0077B6" />
              </span>
            ))}
            <span className="ml-5 text-xs md:text-sm text-primary">
              49 Reviews
            </span>
            <span className="ml-5 text-xs md:text-sm  text-primary">
              Location
            </span>
          </div>
        </div>
        <div className="text-xs flex flex-row flex-wrap items-center container gap-3">
          {["NS Face Lift", "Hair Transplant", "Eye Lift", "Laser Eye"].map(
            (service, index) => (
              <span
                key={index}
                className="text-xs md:text-sm text-white bg-primary rounded-lg py-1 px-2 text-center xs:mt-2 lg:mt-0"
              >
                {service}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ClinicCard;
