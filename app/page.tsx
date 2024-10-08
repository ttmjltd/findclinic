import dynamic from "next/dynamic";
import OptionalCards from "./_components/OptionalCards";
import PatientPopUp from "./_components/PatientPopUp";
import ScheduleCall from "./_components/ScheduleCall";
import Testimonials from "./_components/Testimonials";
import TreatmentCounter from "./_components/TreatmentCounter";
import Link from "next/link";
import SearchComponent from "./_components/SearchComponent";

const ClinicGallery = dynamic(() => import("./_components/ClinicGallery"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main>
      <PatientPopUp />
      <h1 className="text-4xl text-secondary font-bold text-center mt-20">
        Welcome to the easiest clinic search platform
      </h1>
      <h1 className="text-xl text-secondary font-bold text-center mt-2">
        Let&apos;s find the best clinic for you!
      </h1>
      <SearchComponent />
      <div className="text-neutralDark underline text-center mt-10 mb-44">
        <Link href={"#"}>Advanced Search</Link>
      </div>
      <TreatmentCounter />
      <ClinicGallery />
      <OptionalCards />
      <Testimonials />
      <ScheduleCall />
    </main>
  );
}
