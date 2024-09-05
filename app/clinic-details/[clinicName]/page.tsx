import BreadCrum from '../../_atoms/BreadCrum'
import { ClinicDetailsTypes } from "../../types"
import Button from '../../_atoms/Button';
import ClinicReviews from '../../_components/ClinicReviews';
import GoogleMap from '../../_components/GoogleMap';
import ClinicCard from '../../_components/ClinicCard';
import ClinicDescription from '../../_components/ClinicDescription';
import ClinicServices from '../../_components/ClinicServices';
import ClinicVideo from '../../_components/ClinicVideo';

const page: React.FC<ClinicDetailsTypes> = ({ params }) => {
  const clinicName = params.clinicName.split('-')
    .map((name: string) =>
      name.charAt(0).toUpperCase() + name.slice(1))
    .join(' ');
    const mapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26516.77604770113!2d-0.18982571400458337!3d51.51061097518277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761bca44c14939%3A0x8cfeb62084da4c6d!2sMayo%20Clinic%20Healthcare!5e0!3m2!1str!2suk!4v1724169987417!5m2!1str!2suk";

  return (
    <div className='mx-4 md:mx-36 max-w-full'>

      <div className='max-w-full md:max-w-2xl'>
        <BreadCrum clinicName={clinicName} />
        <ClinicCard clinicName={clinicName} />
        <ClinicDescription />

        <div className='mt-4 md:mt-8'>
          <Button label='Schedule a call now!' icon={null} variation='broad-dark' />
        </div>
        <ClinicServices />
        <GoogleMap mapLink={mapLink} />
      </div>
      <ClinicReviews />
      <ClinicVideo />
    </div>
  )
}

export default page
