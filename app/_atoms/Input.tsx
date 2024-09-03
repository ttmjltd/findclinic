import { InputProps } from "../types";

const Input: React.FC<InputProps> = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[14px] font-semibold text-neutralDark">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full rounded p-3 h-12 bg-[#EEF4FD] text-secondary outline-none"
      />
    </div>
  );
};

export default Input;
