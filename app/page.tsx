import dynamic from "next/dynamic";
import OptionalCards from "./_components/OptionalCards";
// import PatientPopUp from "./_components/PatientPopUp";
// import ScheduleCall from "./_components/ScheduleCall";
import Testimonials from "./_components/Testimonials";
import TreatmentCounter from "./_components/TreatmentCounter";
import { getClinics } from "./_utils/GlobalApi";
import Link from "next/link";
import SearchComponent from "./_components/SearchComponent";
import { clinics } from "./_mocks_/ClinicCarouselData";
import { blogPostsData } from "./_mocks_/BlogMocks";
import { Clinic } from "@/app/apiTypes";

const ClinicGallery = dynamic(() => import("./_components/ClinicGallery"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Home = async () => {
  const data: Clinic[] = await getClinics();

  return (
    <main>
      {/* <PatientPopUp /> */}
      <h1 className=" text-2xl md:text-4xl text-secondary font-bold text-center mt-20 mx-1 ">
        Welcome to the easiest clinic search platform
      </h1>
      <h1 className="text-xl text-secondary md:font-bold text-center mt-8 md:mt-2">
        Let&apos;s find the best clinic for you!
      </h1>
      <SearchComponent data={data} />
      <div className="text-brightNavy underline text-center mt-10 mb-44">
        <Link href={"#"}>Advanced Search</Link>
      </div>
      <TreatmentCounter />
      <ClinicGallery />
      <OptionalCards
        data={clinics}
        text="Explore other options"
        type="clinic"
      />
      <Testimonials />
      <OptionalCards
        data={blogPostsData}
        text="What our clinics say"
        type="blogPost"
      />
      {/* <ScheduleCall /> */}
    </main>
  );
};
export default Home;
