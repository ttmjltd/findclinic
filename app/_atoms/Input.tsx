import React, { ChangeEvent } from "react";
import { InputProps } from "../types";

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  className,
  type = "text",
  pattern,
  inputMode,
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="text-[14px] font-semibold text-neutralDark">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full rounded p-3 h-10 bg-neutral text-secondary outline-none placeholder-brightNavy"
        pattern={pattern}
        inputMode={inputMode}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
