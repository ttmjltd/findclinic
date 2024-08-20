import Image from 'next/image'
import React from 'react'

const ClinicServices = () => {
  return (
    <div className='mt-12'>
            <h3 className='text-secondary font-bold'>
            Services
            </h3>

            <div className='grid grid-cols-3 mt-4'>
                <span className='flex text-xs mr-4 items-center'>
                    <span className='mr-2'>
                       <Image src="/services/car.gif" width="32" height="32" alt='car'/>
                    </span>
                    Airport Transfer
                </span>
                <span className='flex text-xs mr-4 items-center'>
                    <span className='mr-2'>
                       <Image src="/services/hotel-bell.gif" width="32" height="32" alt='car'/>
                    </span>
                    Hotel Reservation
                </span>
                <span className='flex text-xs mr-4 items-center'>
                    <span className='mr-2'>
                       <Image src="/services/car2.gif" width="32" height="32" alt='car'/>
                    </span>
                    Private Chauffeur
                </span>
                <span className='flex text-xs mr-4 items-center'>
                    <span className='mr-2'>
                       <Image src="/services/doctor.gif" width="32" height="32" alt='car'/>
                    </span>
                    Doctor Consultation
                </span>
                <span className='flex text-xs mr-4 items-center'>
                    <span className='mr-2'>
                       <Image src="/services/english.gif" width="32" height="32" alt='car'/>
                    </span>
                    Translation Services
                </span> 
            </div>
        </div>

  )
}

export default ClinicServices