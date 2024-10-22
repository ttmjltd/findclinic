"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { CompareButtonFC, LikeButtonFC, StarFC } from "../_atoms/Icons";
import { BlogPostDataTypes, ClinicDataTypes } from "../types";

// Union type to allow passing either clinics or blog posts
type CardData = ClinicDataTypes | BlogPostDataTypes;

interface OptionalCardsProps {
  data: CardData[]; // Accept both clinic and blog post data as an array
  text: string; // Text for the section heading
  type: "clinic" | "blogPost"; // To differentiate between clinics and blog posts
}

const OptionalCards: React.FC<OptionalCardsProps> = ({ data, text, type }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container lg:max-w-4xl 2xl:max-w-7xl mx-auto py-8">
      <h2 className="text-2xl text-center text-secondary font-bold mb-4">
        {text}
      </h2>
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll pb-10 hide-scroll-bar"
        >
          <div className="flex flex-nowrap pl-7">
            {data.map((item: CardData) => (
              <div key={item.id} className="inline-block px-2 ">
                <div className="w-[275px] h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <div>
                    <div className="flex justify-center">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        className=" w-full h-32 xs:h-40 object-cover m-3 rounded-lg"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="pl-3 py-4 space-y-2 flex justify-between items-center">
                      <h3 className="mt-0.5 text-start text-lg font-medium text-neutralDark">
                        {item.title}
                      </h3>
                      <div className="inline-flex space-x-2 pr-2">
                        {type === "clinic" && <CompareButtonFC />}
                        <LikeButtonFC />
                      </div>
                    </div>
                    {"rating" in item && (
                      <div className="flex items-center pl-3 mb-3 lg:mt-1">
                        <span>
                          <StarFC color="#2A9D8F" />
                        </span>
                        <span className="mr-2 text-neutralDark px-1">
                          {item.rating}{" "}
                          <span className="ml-1">({item.reviews} Reviews)</span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionalCards;
