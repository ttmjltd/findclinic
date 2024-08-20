import React from 'react'
import { BreadCrumTypes } from '../types'

const BreadCrum: React.FC<BreadCrumTypes> = ({clinicName}) => {
  return (
    <div>

        <span>Home</span>
        <span className='text-secondary'> {">"} </span>
        <span>Treatment</span>
        <span className='text-secondary'> {">"} </span>
        <span className='text-secondary'>{clinicName}</span>
    </div>
  )
}

export default BreadCrum