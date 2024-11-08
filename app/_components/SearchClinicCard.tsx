import Image from "next/image";
import { ClinicProps } from "../types";
import { Clinic } from "@/app/apiTypes";
import { IMAGE_URL } from "../_utils/GlobalApi";
import { LikeButtonFC, MapMarkerFC, StarFC } from "../_atoms/Icons";

interface SearchClinicCardProps {
  data: Clinic[];
  mockData?: ClinicProps[];
}

const SearchClinicCard: React.FC<SearchClinicCardProps> = ({
  data,
  mockData = [],
}) => {
  const iconsData: Record<string, string> = {
    "Airport Transfer": "/services/car-no-bg.gif",
    "Private Chauffeur": "/services/car2-no-bg.gif",
    "Translation Services": "/services/english-no-bg.gif",
    "Hotel Reservation": "/services/hotel-bell-no-bg.gif",
    "Doctor Consultation": "/services/doctor-no-bg.gif",
  };

  return (
    <div className="p-4 mt-20 max-w-5xl">
      <h1 className="text-2xl font-bold text-center mb-8 text-secondary">
        Here are the best clinics for you
      </h1>
      <div className="space-y-8">
        {data?.map((clinic, id) => {
          const clinicImages = clinic?.attributes.ClinicImages;

          return (
            <div
              key={id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col lg:flex-row relative lg:h-80"
            >
              {/* <div className="absolute top-2 right-3">
              <LikeButtonFC />
            </div> TODO: When patients have accounst it can be implemented */}
              <div className="m:w-1/4  max-h-48 max-w-56 items-center justify-center">
                <Image
                  src={
                    clinic.attributes.ClinicMainImage?.data?.attributes.url
                      ? IMAGE_URL +
                        clinic.attributes.ClinicMainImage.data.attributes.url
                      : "/doctor-working.avif"
                  }
                  alt={clinic.attributes.ClinicName}
                  width={300}
                  height={400}
                  className="rounded-lg object-cover max-h-44"
                />
              </div>
              <div className="md:w-2/5 lg:w-3/5 md:px-4 space-y-3">
                <h1 className="lg:text-3xl text-secondary font-bold text-xl">
                  {clinic.attributes.ClinicName}
                </h1>
                <div className="flex mb-10 sm:flex-row items-center">
                  <span className="bg-primary text-white text-center text-xxs px-1 py-1 rounded-sm">
                    {/* //TODO */}
                    {/* {clinic.attributes.rating} */}
                    4.8
                  </span>
                  <span className="flex items-center m-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <StarFC color="#0077B6" key={i} />
                    ))}
                  </span>
                  <span className="mx-2">|</span>
                  {/* //TODO */}
                  {/* <span>{clinic.reviews} reviews</span> */}
                  <span className="text-xxs"> 49 reviews</span>
                  <span className="ml-4 flex items-center">
                    <MapMarkerFC className="mr-2" />{" "}
                    <span className=" text-xs">
                      {" "}
                      {clinic.attributes.ClinicCity}
                    </span>
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 container">
                  {clinic.attributes.Treatments.map((treatment, i) => (
                    <div
                      key={i}
                      className="text-brightNavy bg-neutral rounded-lg px-3 h-8 flex items-center justify-center text-sm sm:text-base"
                    >
                      {treatment}
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-2/5 space-y-1 lg:space-y-6 flex flex-row  justify-start sm:flex-col px-4  ">
                {clinic.attributes.Services.map((serviceName, i) => {
                  return (
                    <div key={i} className="flex items-center ">
                      <Image
                        src={iconsData[serviceName]}
                        width="32"
                        height="32"
                        alt={iconsData[serviceName]}
                        unoptimized
                      />
                      <span className="hidden sm:inline sm:ml-6 text-sm sm:text-base">
                        {serviceName}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchClinicCard;
