import React from "react";
import { DescriptionType } from "../types";

const ClinicDescription: React.FC<DescriptionType> = ({ description }) => {
  return (
    <div className="text-xl md:text-base mt-6 md:mt-12 lg:px-4 md:px-0 text-justify">
      {description.map((des, index) => (
        <p key={index}>
          {des.children.map((child, idx) => (
            <span key={idx}>{child.text}</span>  // Sadece text'i render ediyoruz
          ))}
        </p>
      ))}
    </div>
  );
};

export default ClinicDescription;
