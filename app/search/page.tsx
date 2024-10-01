import Link from "next/link";
import SearchComponent from "../_components/SearchComponent";
import SearchClinicCard from "../_components/SearchClinicCard";


const page = () => {
  return (
    <div className="flex flex-col items-center">
     <h1 className="text-4xl text-secondary font-bold text-center mt-20">
        Welcome to the easiest clinic search platform
      </h1>
      <h1 className="text-xl text-secondary font-bold text-center mt-2">
        Let&apos;s find the best clinic for you!
      </h1>
      <SearchComponent />
      <div className="text-neutralDark underline text-center mt-10">
        <Link href={"#"}>Advanced Search</Link>
      </div>
        <SearchClinicCard />
    </div>
  );
};

export default page;
