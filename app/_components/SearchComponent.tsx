import Button from "../_atoms/Button";
import Dropdown from "../_atoms/Dropdown";
import { FiSearch } from "react-icons/fi";

const SearchComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch bg-white w-fit p-4 mx-auto mt-10 border-neutral rounded-xl">
      <div className="mb-4 md:mb-0 md:mr-4">
        <Dropdown placeholder={"Treatment"} />
      </div>
      <div className="mb-4 md:mb-0 md:mr-4">
        <Dropdown placeholder={"Location"} />
      </div>
      <div>
        <Button label={"Search"} icon={<FiSearch />} />
      </div>
    </div>
  );
};

export default SearchComponent;
