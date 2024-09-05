"use client";
import React from "react";

import ProfileInfo from "../_components/ProfileInfo";
import DashboardServices from "../_components/DashboardServices";
import { ProfileInfoValues } from "../types";
import DashboardTreatments from "../_components/DashboardTreatments";

const DashboardPage = () => {
  const handleSubmit = (values: ProfileInfoValues) => {
    console.log("Submitted values:", values);
  };

  return (
    <div>
      <div className="text-center text-3xl text-secondary p-5">
        <p>Reach thousands of potential patients</p>
      </div>
      <ProfileInfo onSubmit={handleSubmit} />
      <DashboardServices />
      <DashboardTreatments />
    </div>
  );
};

export default DashboardPage;
