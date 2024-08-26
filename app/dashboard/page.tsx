"use client";
import React from "react";

import ProfileInfo from "../_components/ProfileInfo";

interface ProfileFormValues {
  name: string;
  email: string;
  phoneCode: string;
  phoneNumber: string;
  address: string;
}

const DashboardPage = () => {
  const handleSubmit = (values: ProfileFormValues) => {
    //Handle form submission here
    console.log(values);
  };
  return (
    <div>
      <div className="text-center text-3xl text-secondary p-5">
        <p>Reach thousands of potential patients</p>
      </div>
      <ProfileInfo onSubmit={handleSubmit} />
    </div>
  );
};

export default DashboardPage;
