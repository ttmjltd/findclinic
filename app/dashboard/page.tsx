"use client";
import React from "react";

import ProfileInfo from "../_components/ProfileInfo";
import DashboardServices from "../_components/DashboardServices";
import { ProfileInfoValues } from "../types";
import DashboardTreatments from "../_components/DashboardTreatments";
<<<<<<< feat/dashboard-prices
import DashboardPrices from "../_components/DashboardPrices";
=======
import DashboardLocation from "../_components/DashboardLocation";
>>>>>>> main

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
<<<<<<< feat/dashboard-prices
      <DashboardPrices />
=======
      <DashboardLocation/>
>>>>>>> main
    </div>
  );
};

export default DashboardPage;
