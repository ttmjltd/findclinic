import Image from "next/image";
import { data } from "../_mocks_/ClinicSearchData";
import { ClinicProps } from "../types";
import { LikeButtonFC, MapMarkerFC, StarFC } from "../_atoms/Icons";

const SearchClinicCard: React.FC = () => {
  return (
    <div className="p-4 mt-20 max-w-5xl">
      <h1 className="text-2xl font-bold text-center mb-8 text-secondary">
        Here are the best clinics for you
      </h1>
      <div className="space-y-8">
        {data.map((clinic: ClinicProps, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row relative"
          >
            {/* <div className="absolute top-2 right-3">
              <LikeButtonFC />
            </div> TODO: When patients have accounst it can be implemented */}

            <Image
              src="/doctor-working.avif"
              alt={clinic.name}
              width={224}
              height={240}
              className="rounded-lg w-full md:w-min"
            />

            <div className="md:w-2/5 lg:w-3/5 md:px-4 space-y-3">
              <h1 className="lg:text-3xl text-secondary font-bold text-xl">
                {clinic.name}
              </h1>
              <div className="flex mb-10 sm:flex-row items-center">
                <span className="bg-sky-600 text-white text-center text-xxs px-1 py-2">
                  {clinic.rating}
                </span>
                <span className="flex items-center m-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <StarFC color="#0077B6" key={i} />
                  ))}
                </span>
                <span className="mx-2">|</span>
                <span className="text-xxs">{clinic.reviews} reviews</span>
                <span className="ml-4 flex items-center">
                  <MapMarkerFC className="mr-2" />
                  <span className=" text-xs">{clinic.location}</span>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 container">
                {clinic.treatments.map((treatment, i) => (
                  <div
                    key={i}
                    className=" text-brightNavy bg-neutral rounded-lg px-3 h-8 flex items-center justify-center text-sm sm:text-base"
                  >
                    {treatment}
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-2/5 space-y-1 lg:space-y-6 flex flex-row  justify-start sm:flex-col px-4  ">
              {clinic.services.map((service, i) => (
                <div key={i} className="flex items-center  ">
                  {service.icon}
                  <span className=" hidden sm:inline sm:ml-6 text-sm sm:text-base">
                    {service.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchClinicCard;
