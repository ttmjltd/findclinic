import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const ClinicCard = ({clinicName}) => {
  return (
    <div className='flex mt-10 w-fit'>
        <div className='rounded-xl'>
            <Image src={"/mayo-clinic.jpeg"} alt='mayo-clinic' width="283" height="171" className="w-[283px] h-[171px] object-cover overflow-hidden object-[50%_25%] rounded-xl"/>    
            </div>
            <div className='grid m-2'>
                <div className='w-full h-6/12'>
                    <span className='text-secondary text-2xl font-bold '>
                    {clinicName}
                    </span>
                    <div className='flex'>

                                <span className='mt-0 mr-2 bg-primary text-white text-xs'>5.0</span>
                                    {[5,5,5,5,5].map((_, index) => (
                                        
                                        <span key={index} className='text-primary text-xs'><FaStar/></span>
                                    ))}
                                <span className='ml-2 text-xs'>49 Reviews</span>
                                <span className='ml-2 text-xs'>Location</span>
                            </div>
                
                
                </div>
                
                <div className='grid grid-cols-3 items-center align-middle'>
                    <span className='text-sm text-white bg-primary rounded-xl w-fit py-1 px-2 mx-auto'>NS Face Lift</span>
                    <span className='text-sm text-white bg-primary rounded-xl w-fit py-1 px-2 mx-auto'>Hair Transplant</span>
                    <span className='text-sm text-white bg-primary rounded-xl w-fit py-1 px-2 mx-auto'>Eye Lift</span>
                    <span className='text-sm text-white bg-primary rounded-xl w-fit py-1 px-2 mx-auto'>Laser Eye</span>

                </div>
            </div>
    </div>
  )
}

export default ClinicCard