import Image from "next/image";
import { Clinic } from "../types";

export const data: Clinic[] = [
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
      {
        name: "Airport Transfer",
        icon: (
          <Image
            src="/services/car-no-bg.gif"
            width="32"
            height="32"
            alt="car"
            unoptimized
          />
        ),
      },
      {
        name: "Hotel Reservation",
        icon: (
          <Image
            src="/services/hotel-bell-no-bg.gif"
            width="32"
            height="32"
            alt="car"
            unoptimized
          />
        ),
      },
      {
        name: "Doctor Consultation",
        icon: (
          <Image
            src="/services/doctor-no-bg.gif"
            width="32"
            height="32"
            alt="car"
            unoptimized
          />
        ),
      },
      {
        name: "Translation Services",
        icon: (
          <Image
            src="/services/english-no-bg.gif"
            width="32"
            height="32"
            alt="car"
            unoptimized
          />
        ),
      },
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
      {
        name: "Airport Transfer",
        icon: (
          <Image
            src="/services/car-no-bg.gif"
            width="32"
            height="32"
            alt="car"
            unoptimized
          />
        ),
      },
      {
        name: "Hotel Reservation",
        icon: (
          <Image
            src="/services/hotel-bell-no-bg.gif"
            width="32"
            height="32"
            alt="car"
            unoptimized
          />
        ),
      },
      {
        name: "Doctor Consultation",
        icon: (
          <Image
            src="/services/doctor-no-bg.gif"
            width="32"
            height="32"
            alt="car"
            unoptimized
          />
        ),
      },
      {
        name: "Translation Services",
        icon: (
          <Image
            src="/services/english-no-bg.gif"
            width="32"
            height="32"
            alt="car"
            unoptimized
          />
        ),
      },
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
      {
        name: "Airport Transfer",
        icon: (
          <Image
            src="/services/car-no-bg.gif"
            width="32"
            height="32"
            alt="car"
            unoptimized
          />
        ),
      },
      {
        name: "Hotel Reservation",
        icon: (
          <Image
            src="/services/hotel-bell-no-bg.gif"
            width="32"
            height="32"
            alt="car"
            unoptimized
          />
        ),
      },
      {
        name: "Doctor Consultation",
        icon: (
          <Image
            src="/services/doctor-no-bg.gif"
            width="32"
            height="32"
            alt="car"
            unoptimized
          />
        ),
      },
      {
        name: "Translation Services",
        icon: (
          <Image
            src="/services/english-no-bg.gif"
            width="32"
            height="32"
            alt="car"
            unoptimized
          />
        ),
      },
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
      {
        name: "Airport Transfer",
        icon: (
          <Image
            src="/services/car-no-bg.gif"
            width="32"
            height="32"
            alt="car"
            unoptimized
          />
        ),
      },
      {
        name: "Hotel Reservation",
        icon: (
          <Image
            src="/services/hotel-bell-no-bg.gif"
            width="32"
            height="32"
            alt="car"
            unoptimized
          />
        ),
      },
      {
        name: "Doctor Consultation",
        icon: (
          <Image
            src="/services/doctor-no-bg.gif"
            width="32"
            height="32"
            alt="car"
            unoptimized
          />
        ),
      },
      {
        name: "Translation Services",
        icon: (
          <Image
            src="/services/english-no-bg.gif"
            width="32"
            height="32"
            alt="car"
            unoptimized
          />
        ),
      },
    ],
  },
];
