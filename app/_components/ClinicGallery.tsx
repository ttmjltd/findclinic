import Image from "next/image";
import Link from "next/link";
import { getClinics } from "../_utils/GlobalApi";
import { Clinic } from "../apiTypes";




const ClinicGallery: React.FC = async() => {
  const clinics: Clinic[] = await getClinics();

  if (!clinics || clinics.length === 0) {
    return <p>No clinics available at the moment.</p>;
  }

  return (
    <div className="flex flex-col items-center w-5/6 container mx-auto sm:p-10">
      <h1 className="text-xl text-secondary font-bold text-center m-8">
        Featured Clinics
      </h1>
      <div className="flex flex-wrap justify-center sm:justify-start">
        {clinics?.map((clinic) => {
          // Safeguard against missing data
          const clinicImage = clinic?.attributes?.ClinicMainImage?.data?.attributes;
          const clinicName = clinic?.attributes?.ClinicName;

          return (
            <div
              key={clinic.id}
              className="w-full sm:w-1/3 flex-grow-0 sm:flex-grow pl-4 mb-4 sm:mb-0"
            >
              <Link
                href={`/clinic-details/${clinicName
                  .split(" ")
                  .map(
                    (word) =>
                      word.charAt(0).toLowerCase() + word.slice(1).toLowerCase()
                  )
                  .join("-")}`}
              >
                <div className="relative w-2/3 h-[280px] sm:w-full sm:h-[388px] mx-auto">
                  {clinicImage ? (
                    <Image
                      src={clinicImage.url}
                      alt={clinicImage.alternativeText || clinicName}
                      width={320}
                      height={388}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                      <span>No Image Available</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 w-full bg-white bg-opacity-50 text-primary p-4 text-center rounded-b-lg text-base xs:text-[10px]">
                    {clinicName}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClinicGallery;