import React from 'react'

const Dropdown = ({placeholder}) => {
  return (
    <div className='mx-2'>
        

        <select placeholder={placeholder} className='bg-neutral rounded-lg p-2 w-56'>
            <option value="">{placeholder}</option>
            <option value="others..">Others..</option>
        </select>
    
        
        </div>
  )
}

export default Dropdown