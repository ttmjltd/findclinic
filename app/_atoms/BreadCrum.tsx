import React from 'react'
import { BreadCrumTypes } from '../types'

const BreadCrum: React.FC<BreadCrumTypes> = ({ clinicName }) => {
  return (
    <div className="flex flex-wrap text-sm md:text-base space-x-1 md:space-x-2">
      <span>Home</span>
      <span className='text-secondary'> {">"} </span>
      <span>Treatment</span>
      <span className='text-secondary'> {">"} </span>
      <span className='text-secondary'>{clinicName}</span>
    </div>
  )
}

export default BreadCrum
