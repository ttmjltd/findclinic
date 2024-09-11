"use client";
import React, { useState } from "react";

import ProfileInfo from "../_components/ProfileInfo";
import DashboardServices from "../_components/DashboardServices";
import { ProfileInfoValues } from "../types";
import DashboardTreatments from "../_components/DashboardTreatments";
import DashboardLocation from "../_components/DashboardLocation";
import AccordionItem from "../_components/AccordionItem";

const DashboardPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleAccordionToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = (values: ProfileInfoValues) => {
    console.log("Submitted values:", values);
  };

  return (
    <div>
      <div className="text-center text-3xl text-secondary p-5">
        <p>Reach thousands of potential patients</p>
      </div>
      <AccordionItem
        title="Profile Info"
        isOpen={openIndex === 0}
        onToggle={() => handleAccordionToggle(0)}
      >
        <ProfileInfo onSubmit={handleSubmit} />
      </AccordionItem>
      <AccordionItem
        title="Services"
        isOpen={openIndex === 1}
        onToggle={() => handleAccordionToggle(1)}
      >
        <DashboardServices />
      </AccordionItem>
      <AccordionItem
        title="Treatments"
        isOpen={openIndex === 2}
        onToggle={() => handleAccordionToggle(2)}
      >
        <DashboardTreatments />
      </AccordionItem>
      <AccordionItem
        title="Location"
        isOpen={openIndex === 3}
        onToggle={() => handleAccordionToggle(3)}
      >
        <DashboardLocation />
      </AccordionItem>
    </div>
  );
};

export default DashboardPage;
