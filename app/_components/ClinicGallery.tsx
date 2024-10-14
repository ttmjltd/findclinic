"use client";

import Image from "next/image";
import { data } from "../_mocks_/ClinicCarouselData";
import { Clinic } from "../apiTypes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getClinics } from "../_utils/GlobalApi";

const ClinicGallery: React.FC = () => {
  const [clinics, setClinics] = useState<Clinic[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchClinicsData = async () => {
      try {
        const fetchedClinics = await getClinics();
        setClinics(fetchedClinics);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching clinic data:", error);
        setLoading(false);
      }
    };

    fetchClinicsData();
  }, []);

  if (loading) {
    return <p>Loading clinics...</p>;
  }

  return (
    <div className="flex flex-col items-center w-5/6 container mx-auto sm:p-10">
      <h1 className="text-xl text-secondary font-bold text-center m-8">
        Featured Clinics
      </h1>
      <div className="flex flex-wrap justify-center sm:justify-start">
        {clinics.map((clinic: Clinic) => (
          <div
            key={clinic.id}
            className="w-full sm:w-1/3 flex-grow-0 sm:flex-grow pl-4 mb-4 sm:mb-0"
          >
            <Link
              href={`/clinic-details/${clinic.attributes.ClinicName.split(" ")
                .map(
                  (word) =>
                    word.charAt(0).toLowerCase() + word.slice(1).toLowerCase()
                )
                .join("-")}`}
            >
              <div className="relative w-2/3 h-[280px] sm:w-full sm:h-[388px] mx-auto">
                <Image
                  src={clinic.attributes.ClinicMainImage.data.attributes.url}
                  alt={
                    clinic.attributes.ClinicMainImage.data.attributes
                      .alternativeText || clinic.attributes.ClinicName
                  }
                  width={320}
                  height={388}
                  className="rounded-lg object-cover w-full h-full"
                />
                <div className="absolute bottom-0 w-full bg-white bg-opacity-50 text-primary p-4 text-center rounded-b-lg text-base xs:text-[10px]">
                  {clinic.attributes.ClinicName}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicGallery;
