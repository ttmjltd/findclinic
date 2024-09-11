import dynamic from "next/dynamic";
import FormComponent from "./_components/FormComponent";
import OptionalCards from "./_components/OptionalCards";
import Testimonials from "./_components/Testimonials";
import TreatmentsCounter from "./_components/TreatmentsCounter";

const ClinicGallery = dynamic(() => import("./_components/ClinicGallery"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main>
      <ClinicGallery />
      <TreatmentsCounter/>
      <OptionalCards/>
      <Testimonials/>
      <FormComponent/>
    </main>
  );
}
