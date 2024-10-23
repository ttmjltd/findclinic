import Image from "next/image";
import { DoctorDataTypes } from "../types";
import { doctorsData } from "../_mocks_/DoctorsData";

const DoctorsCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full container mx-auto sm:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center ">
        {doctorsData.map((item: DoctorDataTypes) => (
          <div
            key={item.id}
            className="border border-brightNavy rounded-lg p-4 w-full text-start hover:bg-neutral hover:border-none"
          >
            <div className="flex items-center justify-between">
              <div className="w-3/6">
                <Image
                  src={item.image}
                  alt={item.alt}
                  title={item.fullName}
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-semibold text-lg">{item.fullName}</h2>
                <p className="text-gray-500">{item.treatment}</p>
                <div className="flex items-center justify-start mt-2">
                  <span className="text-accent mr-2 text-2xl">★</span>
                  <p className="text-sm font-medium">
                    {item.rating} ({item.reviews} reviews)
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsCard;
