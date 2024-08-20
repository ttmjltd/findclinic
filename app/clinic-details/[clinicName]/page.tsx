import BreadCrum from '../../_atoms/BreadCrum'
import { ClinicDetailsTypes } from "../../types"
import Button from '../../_atoms/Button';
import ClinicReviews from '../../_components/ClinicReviews';
import GoogleMap from '../../_components/GoogleMap';
import ClinicCard from '../../_components/ClinicCard';
import ClinicDescription from '../../_components/ClinicDescription';
import ClinicServices from '../../_components/ClinicServices';
import ClinicVideo from '../../_components/ClinicVideo';

const page: React.FC<ClinicDetailsTypes>  = ({params}) => {
  const  clinicName = params.clinicName.split('-')
  .map((name: string) => 
      name.charAt(0).toUpperCase() + name.slice(1))
  .join(' ');
  
  return (
    <div className='mx-48 max-w-full'>

    <div className='max-w-2xl'>
        <BreadCrum clinicName={clinicName}/>
        <ClinicCard clinicName={clinicName}/>
        <ClinicDescription/>

        <div className='mt-8'>
            <Button label='Schedule a call now!' icon={null} variation='broad-dark'/>
        </div>
        <ClinicServices/>
        <GoogleMap/>
    </div>
        <ClinicReviews/>
        <ClinicVideo/>
    </div>
  )
}

export default page