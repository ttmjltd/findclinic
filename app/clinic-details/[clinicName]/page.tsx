import BreadCrum from "../../_atoms/BreadCrum";
import Button from "../../_atoms/Button";
import ClinicReviews from "../../_components/ClinicReviews";
import GoogleMap from "../../_components/GoogleMap";
import ClinicCard from "../../_components/ClinicCard";
import ClinicDescription from "../../_components/ClinicDescription";
import ClinicServices from "../../_components/ClinicServices";
import ClinicVideo from "../../_components/ClinicVideo";
import { getClinicsByName } from "@/app/_utils/GlobalApi";
import { Clinic } from "@/app/apiTypes";


const Page = async ({ params }: { params: { clinicName: string } }) => {
  const clinicName = params.clinicName
    .split("-")
    .map((name: string) => name.charAt(0).toUpperCase() + name.slice(1))
    .join(" ");
  const data: Clinic[] = await getClinicsByName(clinicName);
  const mapLink = data[0].attributes.MapEmbedCode;
  const description = data[0].attributes.ClinicDefination;
  const descriptionTransformed = description.map((text: string) => ({
    children: [{ text }],
  }));
  const videoData = data[0].attributes.VideoEmbed;
  const services = data[0].attributes.Services;

  return (
    <div className="mx-8 md:mx-36  max-w-full">
      <div className="max-w-full md:max-w-2xl ">
        <BreadCrum clinicName={clinicName} />
        <ClinicCard clinicName={clinicName} />
        <ClinicDescription description={descriptionTransformed} />

        <div className=" mt-4 md:mt-8 flex justify-center lg:justify-start">
          <Button label="Schedule a call now!" variation="broad-dark" />
        </div>
        <ClinicServices services={services} />
        {mapLink && <GoogleMap mapLink={mapLink} />}
      </div>
      {/* Reviews are already static */}
      <ClinicReviews />
      {videoData && <ClinicVideo videoData={videoData} />}
    </div>
  );
};

export default Page;
