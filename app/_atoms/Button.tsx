
import React from 'react'

const Button = ({label, icon}) => {
  return (
    <button className='flex bg-neutral px-3 py-2 text-secondary text-md rounded-lg' >
      <span className='mr-2 size-5'>{icon}</span>
      <span>{label}</span>

    </button>
  )
}

export default Button