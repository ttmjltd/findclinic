import dynamic from "next/dynamic";
import FormComponent from "./_components/FormComponent";
import OptionalCards from "./_components/OptionalCards";

const ClinicGallery = dynamic(() => import("./_components/ClinicGallery"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main>
      <ClinicGallery />
      <OptionalCards />
      <FormComponent />
    </main>
  );
}
