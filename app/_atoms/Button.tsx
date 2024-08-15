
import React from 'react'

interface ButtonProps {
  label: string;
  icon: string;
}

const Button: React.FC<ButtonProps> = ({label, icon}) => {
  return (
    <button className='flex bg-neutral px-3 py-2 text-secondary text-md rounded-lg' >
      <span className='mr-2 size-5'>{icon}</span>
      <span>{label}</span>

    </button>
  )
}

export default Button