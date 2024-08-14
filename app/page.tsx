import dynamic from "next/dynamic";

const ClinicGallery = dynamic(() => import("./_components/ClinicGallery"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main>
      <h1>Main Page</h1>
      <ClinicGallery />
    </main>
  );
}
