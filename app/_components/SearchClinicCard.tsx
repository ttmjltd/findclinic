import Image from "next/image";
import { data } from "../_mocks_/ClinicSearchData";
import { Clinic } from "../types";
import { LikeButtonFC, MapMarkerFC, StarFC } from "../_atoms/Icons";

const SearchClinicCard: React.FC = () => {
  return (
    <div className="p-4 mt-20 sm:w-4/6">
      <h1 className="text-2xl font-bold text-center mb-8 text-secondary">
        Here are the best clinics for you
      </h1>
      <div className="space-y-8">
        {data.map((clinic: Clinic, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex items-center flex-col lg:flex-row relative"
          >
            <div className="absolute top-2 right-3">
              <LikeButtonFC />
            </div>
            <div className="m:w-1/4 ">
              <Image
                src="/doctor-working.avif"
                alt={clinic.name}
                width={300}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="m:w-1/2 px-4 space-y-3 text-center lg:text-start">
              <h1 className="lg:text-3xl text-secondary font-bold text-xl">
                {clinic.name}
              </h1>
              <div className="flex mb-10 text-xs sm:flex-row items-center justify-center">
                <span className="bg-sky-600 text-white w-5 text-center font-thin">
                  {clinic.rating}
                </span>
                <span className="flex items-center m-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <StarFC color="#0077B6" key={i} />
                  ))}
                </span>
                <span className="mx-2">|</span>
                <span>{clinic.reviews} reviews</span>
                <span className="ml-4 flex items-center">
                  <MapMarkerFC className="mr-2" /> {clinic.location}
                </span>
              </div>
              <div className="text-xs flex flex-row flex-wrap items-center container justify-center">
                {clinic.treatments.map((treatment, i) => (
                  <div
                    key={i}
                    className="text-blue-700 bg-blue-100 rounded-lg m-2 px-3 h-8 flex items-center justify-center w-2/5"
                  >
                    {treatment}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-2/5 space-y-1 lg:space-y-6 flex flex-col justify-center items-start">
              {clinic.services.map((service, i) => (
                <div key={i} className="flex items-center text-xs m:text-lg">
                  {service.icon}
                  <span className="sm:ml-6 ml-8">{service.name}</span>
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
