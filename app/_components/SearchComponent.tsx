import { Search } from "lucide-react";
import Button from "../_atoms/Button";
import Dropdown from "../_atoms/Dropdown";
import React from "react";

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
        <Button label={"Search"} icon={<Search />} />
      </div>
    </div>
  );
};

export default SearchComponent;
