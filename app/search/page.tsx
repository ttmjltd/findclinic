import Link from "next/link";
import SearchComponent from "../_components/SearchComponent";
import SearchClinicCard from "../_components/SearchClinicCard";
import { data as mockData } from "../_mocks_/ClinicSearchData";
import { getClinics, searchedClinics } from "../_utils/GlobalApi";
import { Clinic } from "@/app/apiTypes";

const page = async ({
  searchParams,
}: {
  searchParams: { treatment?: string; location?: string };
}) => {
  const { treatment = "", location = "" } = searchParams;
  const isFilterActive = Boolean(treatment || location);
  const data: Clinic[] = isFilterActive
    ? await searchedClinics(treatment, location)
    : await getClinics();

  const title = isFilterActive
    ? `Result for ${treatment ? `"${treatment}"` : ""} ${
        treatment && location ? "in" : ""
      } ${location ? `"${location}"` : ""}`
    : "Welcome to the easiest clinic search platform";

  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-4xl text-secondary font-bold text-center mt-20  ">
        {title}
      </h1>
      <h1 className="text-xl text-secondary font-bold text-center  mt-2">
        Let&apos;s find the best clinic for you!
      </h1>
      <SearchComponent data={data} />
      {/* TODO - Advance search  */}
      {/* <div className="text-neutralDark underline text-center mt-10">
        <Link href={"#"}>Advanced Search</Link>
      </div> */}
      {isFilterActive && data.length === 0 ? (
        <p className="text-center text-neutralDark mt-10">
          No clinics available with the selected treatment and location.
        </p>
      ) : (
        <SearchClinicCard data={data} mockData={mockData} />
      )}
    </div>
  );
};

export default page;
