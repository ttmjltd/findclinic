import Image from "next/image";
import { data } from "../_mocks_/ClinicCarouselData";
import { ClinicDataTypes } from "../types";
import Link from "next/link";

const ClinicGallery: React.FC = () => {

  return (
    <div className="flex flex-col items-center w-5/6 container mx-auto sm:p-10">
      <h1 className="text-xl text-secondary font-bold text-center m-8">Featured Clinics</h1>
      <div className="flex flex-wrap justify-center sm:justify-start">
        {data.map((item: ClinicDataTypes) => (
          <div key={item.id} className="w-full sm:w-1/3 flex-grow-0 sm:flex-grow pl-4 mb-4 sm:mb-0">
            <Link href={`/clinic-details/${item.title.split(' ')
              .map(word => word.charAt(0).toLowerCase() + word.slice(1).toLowerCase())
              .join('-')}`}>
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.alt}
                  title={item.title}
                  width={800}
                  height={500}
                  className="rounded-lg object-cover h-[500px] w-full"
                />
                <div className="absolute bottom-0 w-full bg-white bg-opacity-50 text-primary p-4 text-center rounded-b-lg text-base xs:text-[10px]">
                  {item.title}
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
