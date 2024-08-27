"use client"
import React from 'react'
import ProfileForm from '../_components/mock'
 import ProfileInfo from '../_components/ProfileInfo'

// interface ProfileFormValues {
//   name: string;
//   email: string;
//   phoneCode: string;
//   phoneNumber: string;
//   address: string;
// }

const DashboardPage = () => {
  // const handleSubmit = (values: ProfileFormValues ) => {
  //   // Handle form submission here
  //   console.log(values);
  // };
  return (
    <div>
      {/* <ProfileForm onSubmit={handleSubmit}/> */}
        <ProfileInfo/>
    </div>
  )
}

export default DashboardPage