"use client";
import { useState } from "react";
import Checkbox from "../_atoms/Checkbox";

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
    console.log(event.target.value);
    setCheckedServices((prev) => ({
      ...prev,
      [value]: checked,
    }));
  };

  return (
    <div className="p-4 bg-white rounded-lg">
      <div className="grid grid-cols-3  gap-4">
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
  );
};

export default DashboardServices;
