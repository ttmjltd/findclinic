"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../_atoms/Button";
import Input from "../_atoms/Input";
import { SearchFC } from "../_atoms/Icons";
import { Clinic } from "@/app/apiTypes";

interface SearchComponentProps {
  data: Clinic[];
}

const SearchComponent: React.FC<SearchComponentProps> = ({ data }) => {
  const [treatment, setTreatment] = useState("");
  const [location, setLocation] = useState("");
  const [isTreatmentDropdownVisible, setIsTreatmentDropdownVisible] =
    useState(false);
  const [isLocationDropdownVisible, setIsLocationDropdownVisible] =
    useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const router = useRouter();

  const treatmentsSet = new Set<string>();
  const locationsSet = new Set<string>();

  data?.forEach((clinic) => {
    clinic.attributes.Treatments.forEach((treatment) =>
      treatmentsSet.add(treatment)
    );
    locationsSet.add(clinic.attributes.ClinicCity);
  });

  const availableTreatments = Array.from(treatmentsSet);
  const availableLocations = treatment
    ? Array.from(
        new Set(
          data
            .filter((clinic) =>
              clinic.attributes.Treatments.some((t) =>
                t.toLowerCase().includes(treatment.toLowerCase())
              )
            )
            .map((clinic) => clinic.attributes.ClinicCity)
        )
      )
    : Array.from(locationsSet);

  const handleTreatmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTreatment(value);
    setIsTreatmentDropdownVisible(true);
    setIsTyping(true);
  };
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocation(value);
    setIsLocationDropdownVisible(true);
    setIsTyping(true);
  };
  // Select treatment from dropdown
  const handleTreatmentSelect = (treat: string) => {
    setTreatment(treat);
    setIsTreatmentDropdownVisible(false);
    setIsTyping(false);
  };
  // Select location  from dropdown
  const handleLocationSelect = (location: string) => {
    setLocation(location);
    setIsLocationDropdownVisible(false);
    setIsTyping(false);
  };

  const filteredTreatments = isTyping
    ? availableTreatments.filter((treat) =>
        treat.toLowerCase().startsWith(treatment.toLowerCase())
      )
    : availableTreatments;

  const filteredLocations = isTyping
    ? availableLocations.filter((location) =>
        location.toLowerCase().startsWith(location.toLowerCase())
      )
    : availableLocations;

  const handleSearch = () => {
    const query = new URLSearchParams({
      treatment,
      location,
    }).toString();
    router.push(`/search?${query}`);
  };

  return (
    <div className="flex flex-row items-center md:items-stretch bg-white w-fit p-4 mx-5 md:mx-auto mt-10 border-neutral rounded-xl">
      <div className="mb-1 md:mb-0 ">
        <Input
          type="text"
          label=""
          value={treatment}
          placeholder="Treatment..."
          onChange={handleTreatmentChange}
          onFocus={() => setIsTreatmentDropdownVisible(true)}
          onBlur={() =>
            setTimeout(() => setIsTreatmentDropdownVisible(false), 200)
          }
          className="mr-2 md:mr-4  w-44 md:w-fit"
        />

        {isTreatmentDropdownVisible && (
          <div className="absolute z-10 bg-white border border-neutral rounded-lg shadow-md max-h-48 overflow-y-auto w-52">
            {filteredTreatments.length > 0 ? (
              filteredTreatments.map((treat, index) => (
                <div
                  key={index}
                  onClick={() => handleTreatmentSelect(treat)}
                  className="cursor-pointer px-2 py-1 hover:bg-gray-100"
                >
                  {treat}
                </div>
              ))
            ) : (
              <div className="px-2 py-1">No options found</div>
            )}
          </div>
        )}
      </div>

      <div className="mb-1 md:mb-0 ">
        <Input
          type="text"
          label=""
          value={location}
          placeholder="Location..."
          onChange={handleLocationChange}
          onFocus={() => {
            setIsLocationDropdownVisible(true);
          }}
          onBlur={() =>
            setTimeout(() => {
              setIsLocationDropdownVisible(false);
            }, 200)
          }
          className="mr-2 md:mr-4 w-[90px] md:w-fit"
        />
        {isLocationDropdownVisible && (
          <div className="absolute z-10 bg-white border-neutral rounded-lg shadow-md max-h-48 overflow-y-auto w-52">
            {filteredLocations.length > 0 ? (
              filteredLocations.map((location, id) => (
                <div
                  key={id}
                  onClick={() => handleLocationSelect(location)}
                  className="cursor-pointer px-2 py-1 hover:bg-gray-100"
                >
                  {location}
                </div>
              ))
            ) : (
              <div>No options found</div>
            )}
          </div>
        )}
      </div>

      <div className="mb-1 md:mb-0  md:mr-2">
        <Button
          label={<span className="hidden md:inline"> Search</span>}
          icon={<SearchFC />}
          variation="narrow-light"
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchComponent;
