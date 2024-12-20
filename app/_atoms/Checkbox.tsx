import { CheckboxProps } from "../types";

const Checkbox: React.FC<CheckboxProps & { className?: string }> = ({
  label,
  value,
  onChange,
  checked,
  className,
}) => {
  return (
    <div className={`flex gap-1 ${className}`}>
      <input
        type="checkbox"
        name={value.toString()}
        value={value}
        onChange={onChange}
        checked={checked}
        className="h-6 w-6 text-secondary border-2 border-brightNavy"
      />
      <span className="text-brightNavy text-[14px] ps-2">{label}</span>
    </div>
  );
};

export default Checkbox;
