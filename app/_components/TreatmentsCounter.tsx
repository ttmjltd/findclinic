import Image from "next/image";
import React from "react";

const TreatmentsCounter = () => {
  return (
    <div className="container bg-slate-50 rounded-lg mx-auto p-3">
      <div className="my-3 flex  flex-row items-center justify-between gap-8 text-xs">
        <div className="flex items-center">
          <span className="mr-2">
            <Image
              src="/medical-assistant.png"
              width={40} height={40}
              className="w-[40px] h-[40px] sm:w-[61px] sm:h-[61px]"
              alt="medical assistant"
              unoptimized
            />
          </span>

          <div className=" ">
            <p className="text-primary font-extrabold text-sm md:text-lg">3490</p>
            <p className="w-16 md:text-base text-primary font-medium text-xs">
              Registered Patients
            </p>
          </div>
        </div>

        <div className="flex items-center sm:gap-2">
          <span className="mr-2">
            <Image
              src="/heartbeat.png"
              width={40} height={40}
              className="w-[40px] h-[40px] sm:w-[61px] sm:h-[61px]"
              alt="heartbeat"
              unoptimized
            />
          </span>

          <div className="">
            <p className="text-primary font-extrabold text-sm md:text-lg">250</p>
            <p className="w-16 md:text-base text-primary font-medium text-xs">
              Verified Clinics
            </p>
          </div>
        </div>

        <div className="flex items-center sm:gap-2">
          <span className="mr-2">
            <Image
              src="/stethoscope.svg"
              width={40} height={40}
              className="w-[40px] h-[40px] sm:w-[61px] sm:h-[61px]"
              alt="stethoscope"
              unoptimized
            />
          </span>

          <div className="">
            <p className="text-primary font-extrabold text-sm md:text-lg">80</p>
            <p className="w-16 md:text-base text-primary font-medium text-xs">
              Specialist Doctors
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentsCounter;
