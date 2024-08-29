import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { BreadCrumTypes } from '../types'

const ClinicCard: React.FC<BreadCrumTypes> = ({ clinicName }) => { //BreadCrum Types used until ClinicCardTypes Created
  return (
    <div className='flex flex-col md:flex-row mt-4 md:mt-10 w-full md:w-fit'>
      <div className='rounded-xl overflow-hidden'>
        <Image
          src={"/mayo-clinic.jpeg"}
          alt='mayo-clinic'
          width={283}
          height={171}
          className="w-full md:w-[283px] h-[171px] object-cover object-[50%_25%] rounded-xl"
        />
      </div>
      <div className='grid m-2'>
        <div className='w-full mb-2'>
          <span className='text-secondary text-lg md:text-2xl font-bold'>
            {clinicName}
          </span>
          <div className='flex items-center mt-1'>
            <span className='mr-2 bg-primary text-white text-xs p-1 rounded-md'>5.0</span>
            {[5, 5, 5, 5, 5].map((_, index) => (
              <span key={index} className='text-primary text-xs'><FaStar /></span>
            ))}
            <span className='ml-2 text-xs md:text-sm'>49 Reviews</span>
            <span className='ml-2 text-xs md:text-sm'>Location</span>
          </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
          {["NS Face Lift", "Hair Transplant", "Eye Lift", "Laser Eye"].map((service, index) => (
            <span
              key={index}
              className='text-xs md:text-sm text-white bg-primary rounded-xl py-1 px-2 text-center'
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClinicCard