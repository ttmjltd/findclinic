import { CheckboxProps } from "../types";

const Checkbox: React.FC<CheckboxProps> = (
  { label, value, onChange, checked },
  name
) => {
  return (
    <div className="flex  gap-1">
      <input
        type="checkbox"
        name={value}
        value={value}
        onChange={onChange}
        checked={checked}
        className="h-6 w-6 text-secondary  border-2 border-[#0275B4] "
      />
      <span className="text-[#0275B4] text-[14px] ps-2 ">{label}</span>
    </div>
  );
};

export default Checkbox;
