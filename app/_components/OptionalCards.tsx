"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { data } from "../_mocks_/ClinicCarouselData";
import { ClinicDataTypes } from "../types";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const OptionalCards: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl text-center text-secondary font-bold mb-4">
        Explore Other Options
      </h2>
      <div className="relative">
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-5 ml-4"
          onClick={() => scroll("left")}
        >
          <FaArrowLeft size={20} />
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll pb-10 hide-scroll-bar"
        >
          <div className="flex flex-nowrap">
            {data.map((item: ClinicDataTypes) => (
              <div key={item.id} className="inline-block px-3">
                <div className="w-64 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-32 sm:h-48 object-cover"
                    width={200}
                    height={200}
                  />
                  <div className="p-1 text-center">
                    <h3 className="mt-0.5 text-sm  font-medium text-blue-900">
                      {item.title}
                    </h3>
                  </div>
                  <div className="m-3 flex flex-wrap gap-2">
                    <span className="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600">
                      Hair Transplant
                    </span>

                    <span className="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600">
                      Dental Care
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-5 mr-2"
          onClick={() => scroll("right")}
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default OptionalCards;
