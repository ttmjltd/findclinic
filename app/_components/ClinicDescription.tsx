import React from "react";
import { DescriptionType } from "../types";

const ClinicDescription: React.FC<DescriptionType> = ({ description }) => {
  return (
    <div className="text-xl md:text-base mt-6 md:mt-12 lg:px-4 md:px-0 text-justify">
      {description.map((des, index) => (
        <p key={index}>
          {des.children.map((child, idx) => {
            // Eğer child.text bir nesne ise, içindeki metni almak için children'a iniyoruz
            if (typeof child.text === 'object' && child.text.children) {
              // child.text'in children dizisini işliyoruz
              return child.text.children.map((nestedChild, nestedIdx) => (
                <span key={nestedIdx}>{nestedChild.text}</span>
              ));
            }

            // Eğer child.text doğrudan bir string ise onu yazdırıyoruz
            if (typeof child.text === 'string') {
              return (
                <span key={idx}>{child.text}</span>
              );
            }

            // Eğer child.text ne string ne de nesne ise null döndürüyoruz
            return null;
          })}
        </p>
      ))}
    </div>
  );
};

export default ClinicDescription;
