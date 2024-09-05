import React, { useState, ChangeEvent } from 'react';
import GoogleMap from './GoogleMap';

const DashboardLocation: React.FC = () => {
    const [mapLink, setMapLink] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMapLink(e.target.value);
    }

    const handleSubmit = () => {
    }

    return (
        <div className='sm:w-2/3 w-full'>
            <h1>Location</h1>
            <p>Enter your clinic&#39;s location link</p>
            <div className='flex flex-col md:flex-row'>
                <input 
                    type="text" 
                    className='w-full mb-4 md:mb-0 md:mr-2 border p-2' 
                    onChange={handleInputChange} 
                    placeholder="Enter Google Maps embed link"
                />
                <button 
                    type='submit' 
                    className='w-full md:w-auto bg-blue-500 text-white p-2'
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
            <GoogleMap mapLink={mapLink}/> 
        </div>
    )
}

export default DashboardLocation;
