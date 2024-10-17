"use client";
import { useState } from "react";
import Button from "../_atoms/Button";
import Input from "../_atoms/Input";
import { SearchFC } from "../_atoms/Icons";

const SearchComponent = () => {
  const [treatment, setTreatment] = useState("");
  const [location, setLocation] = useState("");
  return (
    <div className="flex flex-row items-center md:items-stretch bg-white w-fit p-4 mx-5 md:mx-auto mt-10 border-neutral rounded-xl">
      <div className="mb-1 md:mb-0 ">
        <Input
          type="text"
          label=""
          value={treatment}
          placeholder="Treatment..."
          onChange={(e) => setTreatment(e.target.value)}
          className="mr-2 md:mr-4  w-44 md:w-fit"
        />
      </div>
      <div className="mb-1 md:mb-0 ">
        <Input
          type="text"
          label=""
          value={location}
          placeholder="Location..."
          onChange={(e) => setLocation(e.target.value)}
          className="mr-2 md:mr-4 w-[90px] md:w-fit"
        />
      </div>
      <div className="mb-1 md:mb-0  md:mr-2">
        <Button
          label={<span className="hidden md:inline"> Search</span>}
          icon={<SearchFC />}
          variation="narrow-light"
        />
      </div>
    </div>
  );
};

export default SearchComponent;
