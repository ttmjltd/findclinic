import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaStar,
  FaHeart,
  FaCar,
  FaHotel,
  FaStethoscope,
  FaLanguage,
} from "react-icons/fa";
import { Clinic } from "../types";

const clinics: Clinic[] = [
  {
    name: "Mayo Health Clinic",
    rating: 5.0,
    reviews: 49,
    location: "Ankara",
    treatments: [
      "NS Face Lift",
      "Hair Transplant",
      "Laser Eye",
      "Dental Implant",
      "Eye Lift",
      "Rhinoplasty",
    ],
    services: [
      { name: "Airport Transfer", icon: FaCar },
      { name: "Hotel Reservation", icon: FaHotel },
      { name: "Doctor Consultation", icon: FaStethoscope },
      { name: "Translation Services", icon: FaLanguage },
    ],
  },
  {
    name: "Johns Hopkins Clinic",
    rating: 4.8,
    reviews: 30,
    location: "Istanbul",
    treatments: [
      "Cancer Treatment",
      "Orthopedic Surgery",
      "Heart Surgery",
      "Neurosurgery",
      "Pediatric Care",
    ],
    services: [
      { name: "Airport Transfer", icon: FaCar },
      { name: "Hotel Reservation", icon: FaHotel },
      { name: "Doctor Consultation", icon: FaStethoscope },
      { name: "Translation Services", icon: FaLanguage },
    ],
  },
  {
    name: "Cleveland Health Clinic",
    rating: 4.9,
    reviews: 60,
    location: "Izmir",
    treatments: [
      "Cardiac Rehabilitation",
      "Physical Therapy",
      "Cosmetic Surgery",
      "Gastroenterology",
      "Neurology",
    ],
    services: [
      { name: "Airport Transfer", icon: FaCar },
      { name: "Hotel Reservation", icon: FaHotel },
      { name: "Doctor Consultation", icon: FaStethoscope },
      { name: "Translation Services", icon: FaLanguage },
    ],
  },
  {
    name: "Massachusetts General",
    rating: 4.7,
    reviews: 55,
    location: "Antalya",
    treatments: [
      "General Surgery",
      "Psychiatry",
      "Pediatrics",
      "Oncology",
      "Transplant Surgery",
    ],
    services: [
      { name: "Airport Transfer", icon: FaCar },
      { name: "Hotel Reservation", icon: FaHotel },
      { name: "Doctor Consultation", icon: FaStethoscope },
      { name: "Translation Services", icon: FaLanguage },
    ],
  },
];

const SearchClinicCard: React.FC = () => {
  return (
    <div className="p-4 mt-20 sm:w-4/6">
      <h1 className="text-2xl font-bold text-center mb-8 text-secondary">
        Here are the best clinics for you
      </h1>
      <div className="space-y-8">
        {clinics.map((clinic, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex items-center flex-col sm:flex-row"
          >
            <div className="sm:w-1/4 w-2/4">
              <Image
                src="/doctor-working.avif"
                alt={clinic.name}
                width={300}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="sm:w-1/2 px-4 space-y-3">
              <h1 className="sm:text-3xl text-secondary font-bold text-xl">
                {clinic.name}
              </h1>
              <div className="flex mb-10 text-xs flex-col sm:flex-row items-center">
                <span>{clinic.rating}</span>
                <span className="text-yellow-500 flex items-center m-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar key={i} />
                  ))}
                </span>
                <span className="mx-2">|</span>
                <span>{clinic.reviews} reviews</span>
                <span className="ml-4 flex items-center">
                  <FaMapMarkerAlt className="mr-1" /> {clinic.location}
                </span>
              </div>
              <div className="text-xs flex flex-wrap items-center">
                {clinic.treatments.map((treatment, i) => (
                  <div
                    key={i}
                    className="text-blue-700 bg-blue-100 rounded-lg m-1 px-3 h-6 text-center flex items-center"
                  >
                    {treatment}
                  </div>
                ))}
              </div>
            </div>
            <div className="m:w-1/4 space-y-8 pl-8">
              {clinic.services.map((service, i) => (
                <div key={i} className="flex items-center text-xs m:text-lg">
                  <service.icon />
                  <span className="ml-5">{service.name}</span>
                </div>
              ))}
            </div>
            <div className="sm:ml-auto mt-4 sm:mt-0">
              <FaHeart
                className="text-white text-l cursor-pointer"
                style={{ stroke: "#2A9D8F", strokeWidth: 60, fill: "white" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchClinicCard;
