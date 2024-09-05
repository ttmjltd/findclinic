"use client";
import { useState } from "react";
import Checkbox from "../_atoms/Checkbox";
import { PenFC } from "../_atoms/Icons";

const treatments = [
  { label: "Non-surgical Face Lift", value: "nonSurgicalFaceLift" },
  { label: "Non-surgical Liposuction", value: "nonSurgicalLiposuction" },
  { label: "Dental Implant", value: "dentalImplant" },
  { label: "Hair Transplant", value: "hairTransplant" },
  { label: "Facial Aesthetics", value: "facialAesthetics" },
  { label: "Hair Mesotherapy", value: "hairMesotherapy" },
  { label: "Obesity Surgery", value: "obesitySurgery" },
  { label: "Body Aesthetics", value: "bodyAesthetics" },
  { label: "Botox", value: "botox" },
];

const DashboardTreatments = () => {
  const [checkedTreatments, setCheckedTreatments] = useState({
    nonSurgicalFaceLift: true,
    nonSurgicalLiposuction: true,
    dentalImplant: true,
    hairTransplant: true,
    facialAesthetics: true,
    hairMesotherapy: true,
    obesitySurgery: true,
    bodyAesthetics: true,
    botox: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setCheckedTreatments((prev) => ({
      ...prev,
      [value]: checked,
    }));
  };
  return (
    <section className="p-5">
      <div className="w-full sm:w-10/12 lg:w-3/4 mx-auto">
        <div className="flex gap-4 items-center">
          <h2 className="text-xl text-secondary font-bold mb-4">Treatments</h2>
          <span className="mb-5 ps-2">
            <PenFC />
          </span>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg lg:p-12">
          <div className="grid grid-cols-3 gap-6">
            {treatments.map((treatment) => (
              <Checkbox
                key={treatment.value}
                label={treatment.label}
                value={treatment.value}
                checked={
                  checkedTreatments[
                    treatment.value as keyof typeof checkedTreatments
                  ]
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

export default DashboardTreatments;
