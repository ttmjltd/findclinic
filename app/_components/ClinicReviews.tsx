"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { StarFC } from "../_atoms/Icons";

const reviews = [
  {
    name: "Adam D.",
    image: "/reviews/adam.jpeg",
    text: "I can't say enough good things about Mayo Health Clinic. I've been to several clinics over the years, but none compare to the quality of care and attention to detail I've experienced here.",
  },
  {
    name: "John D.",
    image: "/reviews/adam.jpeg",
    text: "I was impressed with how they took the time to understand my specific needs and customized a treatment plan just for me. Today, I feel better, and I owe it all to the incredible care I received.",
  },
  {
    name: "Peter M.",
    image: "/reviews/adam.jpeg",
    text: "From the moment I walked in, the receptionist greeted me with a warm smile, and the waiting area was so calm and relaxing. The doctors and nurses were professional yet personable, making me feel at ease.",
  },
];

const ClinicReviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container lg:max-w-4xl 2xl:max-w-7xl py-8">
      <h3 className="text-secondary font-bold text-lg lg:text-xl pb-4">
        Patient Reviews
      </h3>
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll pb-10 hide-scroll-bar"
        >
          <div className="flex flex-nowrap lg:gap-6 ">
            {" "}
            {/* This div remains unchanged */}
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white m-2 p-4 text-center w-[270px] h-[390px] rounded-xl"
              >
                <Image
                  src={review.image}
                  width={133}
                  height={133}
                  alt={`review-${index + 1}`}
                  className="rounded-full mx-auto"
                />
                <div className="font-bold text-center mt-4">{review.name}</div>
                <div className="flex justify-center mt-2">
                  {[5, 5, 5, 5, 5].map((_, starIndex) => (
                    <span key={starIndex} className="text-primary text-xs">
                      <StarFC color="#2A9D8F" />
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-sm">&quot;{review.text}&quot;</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicReviews;