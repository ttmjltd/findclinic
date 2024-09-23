import dynamic from "next/dynamic";
import FormComponent from "./_components/FormComponent";
import OptionalCards from "./_components/OptionalCards";
import Testimonials from "./_components/Testimonials";
import TreatmentCounter from "./_components/TreatmentCounter";
import { getClinics } from "./_utils/GlobalApi";

const ClinicGallery = dynamic(() => import("./_components/ClinicGallery"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main>
      <ClinicGallery />
      <TreatmentCounter/>
      <OptionalCards/>
      <Testimonials/>
      <FormComponent/>
    </main>
  );
}
