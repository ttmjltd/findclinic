import React from 'react'

export interface DropdownProps {
  placeholder:string
}

const Dropdown: React.FC<DropdownProps> = ({placeholder}) => {
  return (
    <div className='mx-2'>
        

        <select className='bg-neutral rounded-lg p-2 w-56'>
            <option value="">{placeholder}</option>
            <option value="others..">Others..</option>
        </select>
    
        
        </div>
  )
}



export default Dropdown