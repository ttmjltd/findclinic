import dynamic from "next/dynamic";
import OptionalCards from "./_components/OptionalCards";
import PatientPopUp from "./_components/PatientPopUp";
import ScheduleCall from "./_components/ScheduleCall";

const ClinicGallery = dynamic(() => import("./_components/ClinicGallery"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main>
      <PatientPopUp />
      <ClinicGallery />
      <OptionalCards />
      <ScheduleCall />
    </main>
  );
}
