import React, { ChangeEvent } from "react";
import { InputProps } from "../types";

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  className,
  type = "text",
  pattern,
  inputMode,
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <span className="text-[14px] font-semibold text-neutralDark">
          {label}
        </span>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full rounded p-3 h-12 bg-[#EEF4FD] text-secondary outline-none"
        pattern={pattern}
        inputMode={inputMode}
      />
    </div>
  );
};

export default Input;