import { ToggleSwitchProps } from '../types';

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => {
  return (
    <label className="relative inline-block w-10 h-6">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="opacity-0 w-0 h-0"
      />
      <span
        className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition-colors ${
          checked ? 'bg-secondary' : ''
        }`}
      >
        <span
          className={`absolute left-1 bottom-1 bg-white w-4 h-4 rounded-full transition-transform ${
            checked ? 'transform translate-x-4' : ''
          }`}
        />
      </span>
    </label>
  );
};

export default ToggleSwitch;
