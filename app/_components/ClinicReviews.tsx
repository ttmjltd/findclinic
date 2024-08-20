import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const ClinicReviews = () => {
  return (
    <div className='mt-12 w-fit h-fit'>
            <h3 className='text-secondary font-bold'>Patient Reviews</h3>

            <div className='grid grid-cols-3 w-full mt-4'>
                <div className='bg-white ml-0 m-4 p-6 text-center rounded-xl'>
                    <Image src="/reviews/adam.jpeg" width="133" height="133" alt='review-1' className='rounded-full mx-auto'/>
                    <div className='font-bold text-center'>Adam D.</div>
                    <div className='flex justify-center'>
                      {[5,5,5,5,5].map((_, index) => (
                                                  
                                                  <span key={index} className='text-primary text-xs'><FaStar/></span>
                                              ))}
                    </div>
                    <div>
                    &quot;I can&apos;t say enough good things about Mayo Health Clinic. I&apos;ve been to several clinics over the years, but none compare to the quality of care and attention to detail I&apos;ve experienced here.&quot;
                    </div>

                </div>
                <div className='bg-white ml-0 m-4 p-6 text-center rounded-xl'>
                    <Image src="/reviews/adam.jpeg" width="133" height="133" alt='review-1' className='rounded-full mx-auto'/>
                    <div className='font-bold text-center'>Jhon D.</div>
                    <div className='flex justify-center'>
                      {[5,5,5,5,5].map((_, index) => (
                                                  
                                                  <span key={index} className='text-primary text-xs'><FaStar/></span>
                                              ))}
                    </div>
                    <div>
                    &quot;I was impressed with how they took the time to understand my specific needs and customized a treatment plan just for me. Today, I feel better, and I owe it all to the incredible care I received.&quot;
                    </div>

                </div>
                <div className='bg-white ml-0 m-4 p-6 text-center rounded-xl'>
                    <Image src="/reviews/adam.jpeg" width="133" height="133" alt='review-1' className='rounded-full mx-auto'/>
                    <div className='font-bold text-center'>Peter M.</div>
                    <div className='flex justify-center'>
                      {[5,5,5,5,5].map((_, index) => (
                                                  
                                                  <span key={index} className='text-primary text-xs'><FaStar/></span>
                                              ))}
                    </div>
                    <div>
                    &quot;From the moment I walked in, the receptionist greeted me with a warm smile, and the waiting area was so calm and relaxing. The doctors and nurses were professional yet personable, making me feel at ease.&quot;
                    </div>

                </div>
            </div>
            
    </div>
  )
}

export default ClinicReviews