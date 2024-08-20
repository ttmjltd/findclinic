import React from 'react'

const ClinicVideo = () => {
  return (
    <div className='mt-12 w-fit h-fit'>
        <h3 className='text-secondary font-bold'>Mayo Health Clinic Says</h3>
        
        <iframe width="689" height="440" src="https://www.youtube.com/embed/TgYY6cRazHM" title="Mayo Clinic in Minnesota Virtual Tour for Prospective Residents" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='border-0 mt-6'></iframe>
    </div>
  )
}

export default ClinicVideo