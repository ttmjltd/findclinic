import Image from "next/image";
import React from "react";
import { services } from "../_mocks_/ClinicServices";

const ClinicServices = () => {
  return (
    <div className="mt-12">
      <h3 className="text-secondary font-bold">Services</h3>

      <div className="grid grid-cols-2 lg:grid-cols-3 mt-4 gap-2 ">
        {services.map((service) => (
          <span key={service.id} className="flex text-xs mr-4 items-center">
            <span className="mr-2">
              <Image
                src={service.icon}
                width="32"
                height="32"
                alt="car"
                unoptimized
              />
            </span>
            {service.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ClinicServices;
