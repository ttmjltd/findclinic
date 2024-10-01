"use client";
import { useState } from "react";
import Checkbox from "../_atoms/Checkbox";
import { PenFC } from "../_atoms/Icons";

const services = [
  { label: "Airport transfer", value: "airportTransfer" },
  { label: "Hotel Reservation", value: "hotelReservation" },
  { label: "Private Chauffeur", value: "privateChauffeur" },
  { label: "Translation Services", value: "translationServices" },
  { label: "Rent a car", value: "rentACar" },
  { label: "Open 7/24", value: "open247" },
  { label: "Health Insurance", value: "healthInsurance" },
  { label: "Doctor Consultation", value: "doctorConsultation" },
];

const DashboardServices = () => {
  const [checkedServices, setCheckedServices] = useState({
    airportTransfer: true,
    hotelReservation: true,
    privateChauffeur: false,
    translationServices: true,
    rentACar: false,
    open247: true,
    healthInsurance: false,
    doctorConsultation: true,
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setCheckedServices((prev) => ({
      ...prev,
      [value]: checked,
    }));
  };

  return (
    <section className="p-5">
      <div className="w-full sm:w-10/12 lg:w-3/4 mx-auto">
        <div className="flex gap-4 items-center ">
          <h2 className="text-xl text-secondary font-bold mb-4">Services</h2>
          <span className="mb-5 ps-2">
            <PenFC />
          </span>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg lg:p-12">
          <div className="grid grid-cols-3  gap-6">
            {services.map((service) => (
              <Checkbox
                key={service.value}
                label={service.label}
                value={service.value}
                checked={
                  checkedServices[service.value as keyof typeof checkedServices]
                }
                onChange={handleChange}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardServices;
