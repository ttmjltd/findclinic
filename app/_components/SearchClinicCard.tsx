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

const clinics = [
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

const SearchClinicCard = () => {
  return (
    <div className="p-4 w-4/3 mt-20">
      <h1 className="text-2xl font-bold text-center mb-8 text-secondary">
        Here are the best clinics for you
      </h1>
      <div className="space-y-8">
        {clinics.map((clinic, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex items-center"
          >
            <div className="w-1/4">
              <Image
                src="/doctor-working.avif"
                alt={clinic.name}
                width={300}
                height={400}
              />
            </div>
            <div className="w-1/2 px-4">
              <h1 className="text-4xl text-secondary font-bold text-center">
                {clinic.name}
              </h1>
              <div className="flex items-center my-2 text-xs">
                <span className="text-yellow-500 flex items-center mr-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar key={i} />
                  ))}
                </span>
                <span>{clinic.rating}</span>
                <span className="mx-2">|</span>
                <span>{clinic.reviews} reviews</span>
                <span className="ml-auto flex items-center">
                  <FaMapMarkerAlt className="mr-1" /> {clinic.location}
                </span>
              </div>
              <div className="text-xs space-y-1 flex flex-wrap">
                {clinic.treatments.map((treatment, i) => (
                  <div
                    key={i}
                    className="text-blue-700 bg-blue-100 py-1 rounded m-1 px-1 w-[calc(50%-0.5rem)]"
                  >
                    {treatment}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-1/4 space-y-2 pl-8">
              {clinic.services.map((service, i) => (
                <div key={i} className="flex items-center">
                  <service.icon className="mr-2" />
                  <span>{service.name}</span>
                </div>
              ))}
            </div>
            <div className="mb-56">
              <FaHeart
                className="text-white text-l cursor-pointer"
                style={{ stroke: "#2A9D8F", strokeWidth: 40, fill: "white" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchClinicCard;
