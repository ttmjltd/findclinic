import React from 'react'

const ClinicVideo = () => {
  return (
    <div className='mt-6 md:mt-12 w-full'>
      <h3 className='text-secondary font-bold text-lg md:text-xl'>Mayo Health Clinic Says</h3>
      <div className='relative pt-[56.25%]'>
        <iframe
          src="https://www.youtube.com/embed/TgYY6cRazHM"
          title="Mayo Clinic in Minnesota Virtual Tour for Prospective Residents"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className='absolute top-0 left-0 w-full h-full border-0 md:w-[800px] md:h-[450px] lg:w-[960px] lg:h-[540px]'
        ></iframe>
      </div>
    </div>
  )
}

export default ClinicVideo
