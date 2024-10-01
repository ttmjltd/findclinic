import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { AccordionItemProps } from "../types";

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border-b border-gray-300 max-w-5xl mx-auto w-full">
      <button
        className="w-full flex justify-between items-center text-left p-4 focus:outline-none"
        onClick={onToggle}
        aria-expanded={isOpen} // Accessibility: indicates open state
        aria-controls={`accordion-content-${title}`} // Unique ID reference
        id={`accordion-header-${title}`} // Unique ID for the button
      >
        <span>{title}</span>
        {/* Arrow icon that rotates when open */}
        <FaChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      {isOpen &&  <div
          id={`accordion-content-${title}`}
          className="p-4 bg-white"
          role="region" 
          aria-labelledby={`accordion-header-${title}`}
        >{children}</div>}
    </div>
  );
};

export default React.memo(AccordionItem);
