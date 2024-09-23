import BreadCrum from "../../_atoms/BreadCrum";
import { ClinicDetailsTypes } from "../../types";
import Button from "../../_atoms/Button";
import ClinicReviews from "../../_components/ClinicReviews";
import GoogleMap from "../../_components/GoogleMap";
import ClinicCard from "../../_components/ClinicCard";
import ClinicDescription from "../../_components/ClinicDescription";
import ClinicServices from "../../_components/ClinicServices";
import ClinicVideo from "../../_components/ClinicVideo";
import { getClinicsByName } from "@/app/_utils/GlobalApi";
import { Clinic } from "../../apiTypes";

const Page: React.FC<ClinicDetailsTypes> = async ({ params }) => {
  const clinicName = params.clinicName
    .split("-")
    .map((name: string) => name.charAt(0).toUpperCase() + name.slice(1))
    .join(" ");
  const data: Clinic[] = await getClinicsByName(clinicName)
  const mapLink =
  data[0].attributes.MapEmbedCode;
  const description = data[0].attributes.ClinicDefination;

  return (
    <div className="mx-8 md:mx-36  max-w-full">
      <div className="max-w-full md:max-w-2xl ">
        <BreadCrum clinicName={clinicName} />
        <ClinicCard clinicName={clinicName}  />
        <ClinicDescription description={description} />

        <div className=" mt-4 md:mt-8 flex justify-center lg:justify-start">
          <Button label="Schedule a call now!" variation="broad-dark" />
        </div>
        <ClinicServices />
        <GoogleMap mapLink={mapLink} />
      </div>
      <ClinicReviews />
      <ClinicVideo />
    </div>
  );
};

export default Page;
