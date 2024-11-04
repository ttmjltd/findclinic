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
  const fullData: Clinic[] = await getClinics();
  const data: Clinic[] = await searchedClinics(treatment, location);

  // const filteredClinics = data.filter((clinic) => {
  //   const matchesTreatment = treatment
  //     ? clinic.attributes.Treatments.some((t) =>
  //         t.toLowerCase().includes(treatment.toLowerCase())
  //       )
  //     : true;
  //   const matchesLocation = location
  //     ? clinic.attributes.ClinicCity.toLowerCase().includes(
  //         location.toLowerCase()
  //       )
  //     : true;
  //   {
  //   }
  //   return matchesTreatment && matchesLocation;
  // });
  const isFilterActive = Boolean(treatment || location);

  const title = isFilterActive
    ? `Result for ${treatment ? `"${treatment}"` : ""} ${
        treatment && location ? "in" : ""
      } ${location ? `"${location}"` : ""}`
    : "Welcome to the easiest clinic search platform";

  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-4xl text-secondary font-bold text-center mt-20  ">
        {/* Welcome to the easiest clinic search platform */}
        {title}
      </h1>
      <h1 className="text-xl text-secondary font-bold text-center  mt-2">
        Let&apos;s find the best clinic for you!
      </h1>
      <SearchComponent data={fullData} />
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
