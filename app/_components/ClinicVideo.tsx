import React from 'react'

const ClinicVideo = () => {
  return (
    <div className='mt-6 md:mt-12 w-full'>
      <div className='w-full max-w-[672px]'>
        <h3 className='text-secondary font-bold text-lg md:text-xl'>Mayo Health Clinic Says</h3>
        <div className='relative w-full' style={{ paddingBottom: '56.25%' }}> {/* Aspect Ratio 16:9 */}
          <iframe
            src="https://www.youtube.com/embed/TgYY6cRazHM"
            title="Mayo Clinic in Minnesota Virtual Tour for Prospective Residents"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className='absolute inset-0 w-full h-full border-0'
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default ClinicVideo
