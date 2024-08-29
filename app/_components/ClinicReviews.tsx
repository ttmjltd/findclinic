import Image from 'next/image'
import React from 'react'
import { StarFC } from '../_atoms/Icons'

const ClinicReviews = () => {
  return (
    <div className='mt-6 lg:mt-12 w-full'>
      <h3 className='text-secondary font-bold text-lg lg:text-xl'>Patient Reviews</h3>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-4'>
        <div className='bg-white m-2 p-4 text-center rounded-xl'>
          <Image src="/reviews/adam.jpeg" width="133" height="133" alt='review-1' className='rounded-full mx-auto'/>
          <div className='font-bold text-center mt-4'>Adam D.</div>
          <div className='flex justify-center mt-2'>
            {[5, 5, 5, 5, 5].map((_, index) => (
              <span key={index} className='text-primary text-xs'><StarFC color="#2A9D8F"/></span>
            ))}
          </div>
          <div className='mt-4 text-sm'>
            &quot;I can&apos;t say enough good things about Mayo Health Clinic. I&apos;ve been to several clinics over the years, but none compare to the quality of care and attention to detail I&apos;ve experienced here.&quot;
          </div>
        </div>

        <div className='bg-white m-2 p-4 text-center rounded-xl'>
          <Image src="/reviews/adam.jpeg" width="133" height="133" alt='review-1' className='rounded-full mx-auto'/>
          <div className='font-bold text-center mt-4'>John D.</div>
          <div className='flex justify-center mt-2'>
            {[5, 5, 5, 5, 5].map((_, index) => (
              <span key={index} className='text-primary text-xs'><StarFC color="#2A9D8F"/></span>
            ))}
          </div>
          <div className='mt-4 text-sm'>
            &quot;I was impressed with how they took the time to understand my specific needs and customized a treatment plan just for me. Today, I feel better, and I owe it all to the incredible care I received.&quot;
          </div>
        </div>

        <div className='bg-white m-2 p-4 text-center rounded-xl'>
          <Image src="/reviews/adam.jpeg" width="133" height="133" alt='review-1' className='rounded-full mx-auto'/>
          <div className='font-bold text-center mt-4'>Peter M.</div>
          <div className='flex justify-center mt-2'>
            {[5, 5, 5, 5, 5].map((_, index) => (
              <span key={index} className='text-primary text-xs'><StarFC color="#2A9D8F"/></span>
            ))}
          </div>
          <div className='mt-4 text-sm'>
            &quot;From the moment I walked in, the receptionist greeted me with a warm smile, and the waiting area was so calm and relaxing. The doctors and nurses were professional yet personable, making me feel at ease.&quot;
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClinicReviews
