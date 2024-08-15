"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { data } from "../_mocks_/ClinicCarouselData";
import { ClinicData } from "../types";



const ClinicGallery: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative sm:w-[60%] w-[98%]">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {data.map((item: ClinicData) => (
              <div key={item.id} className="min-w-[calc(100%/3)] pl-4">
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    title={item.title}
                    width={800}
                    height={500}
                    className="rounded-lg object-cover h-[500px] w-full"
                  />
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4 text-center rounded-b-lg text-base xs:text-[10px]">
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10 ml-2"
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10 mr-2"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ClinicGallery;
