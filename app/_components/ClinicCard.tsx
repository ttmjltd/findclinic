import Image from "next/image";
import React from "react";
import { BreadCrumTypes } from "../types";
import { MapPinFC, StarFC } from "../_atoms/Icons";
import { getClinicsByName } from "../_utils/GlobalApi";
import { Clinic } from "../apiTypes";

const ClinicCard: React.FC<BreadCrumTypes> = async ({ clinicName }) => {
  const data: Clinic[] = await getClinicsByName(clinicName);

  return (
    <div className="flex flex-col md:flex-row mt-4 md:mt-10 w-full lg:ml-3">
      <div className="flex-none w-full md:w-5/12 rounded-xl overflow-hidden h-full">
        <Image
          src={"/mayo-clinic.jpeg"}
          alt="mayo-clinic"
          width={285}
          height={171}
          className="w-full md:w-[283px] h-[171px] object-cover object-[50%_25%] rounded-xl "
        />
      </div>
      <div className="flex-grow my-2 md:m-2 h-full pl-2">
        <div className="w-full mb-2 xs:mt-2 lg:mt-0">
          <span className="text-secondary xs:text-3xl text-lg md:text-2xl font-bold">
            {data[0]?.attributes?.ClinicName}
          </span>
          <div className="flex items-center my-3 lg:mt-1 pt-2">
            <span className="mr-2 bg-[#0077B6] text-white text-xs p-1 rounded-md">
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
              <span className="inline-block transform scale-75 mr-3 w-2 h-4">
                <MapPinFC />
              </span>
              Location
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2.5 my-2 lg:pt-3">
          {data[0].attributes.Services.map((service: string, index: number) => (
            <span
              key={index}
              className="text-[11px] text-white bg-[#0077B6] rounded-lg px-2 py-1 flex items-center justify-center whitespace-nowrap"
              style={{ minWidth: "100px" }} // Set a minimum width to prevent overlap
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClinicCard;
