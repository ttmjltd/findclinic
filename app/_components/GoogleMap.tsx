import React from 'react'
import { DashboardLocationProps } from '../types';

const GoogleMap: React.FC<DashboardLocationProps> = ({ mapLink }) => {
  const defaultLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26516.77604770113!2d-0.18982571400458337!3d51.51061097518277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761bca44c14939%3A0x8cfeb62084da4c6d!2sMayo%20Clinic%20Healthcare!5e0!3m2!1str!2suk!4v1724169987417!5m2!1str!2suk";
  const validMapLink = mapLink || defaultLink;
  return (
    <div className='mt-6 md:mt-12 w-full'>
      <h3 className='text-secondary font-bold text-lg md:text-xl'>Location</h3>
      <div className='bg-white py-4 px-4 rounded-xl mt-4'>
        <div className='relative w-full' style={{ paddingBottom: '56.25%' }}> {/* Aspect Ratio 16:9 */}
          <iframe
           src={validMapLink}
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default GoogleMap
