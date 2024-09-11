import React from "react";
import { FaChevronDown } from "react-icons/fa";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-300 max-w-5xl mx-auto w-full">
      <button
        className="w-full flex justify-between items-center text-left p-4 text-lg font-medium text-secondary  focus:outline-none"
        onClick={onToggle}
      >
        <span>{title}</span>
        {/* Arrow icon that rotates when open */}
        <FaChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="p-4 bg-white">{children}</div>}
    </div>
  );
};

export default AccordionItem;