"use client";

import React, { useState } from "react";
import { ProfileInfoProps, ProfileInfoValues } from "../types";


const ProfileInfo: React.FC<ProfileInfoProps> = ({ onSubmit }) => {
  const [values, setValues] = useState<ProfileInfoValues>({
    name: "",
    email: "",
    password: "",
    phoneCode: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(values);
  };
  return (
    <section className="p-5">
      <div className="w-full sm:w-10/12 lg:w-3/4 mx-auto">
        <h2 className="text-xl text-secondary font-bold mb-4">Profile Info</h2>

        <div className="rounded-lg bg-white p-8 shadow-lg lg:p-12">
          <form action="#" className="space-y-4" onSubmit={handleSubmit}>
            <div className="lg:flex gap-10">
              <div className="lg:w-1/2 mb-3">
                <label
                  className="block text-md font-medium text-gray-700"
                  htmlFor="name"
                >
                  Clinic Name
                </label>
                <div className="relative w-full">
                  <input
                    className="mt-1 p-2 w-full rounded-md border-gray-400 bg-neutral shadow-sm sm:text-sm"
                    placeholder="John Doe"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    type="text"
                    id="name"
                    required
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-0 grid w-10 place-content-center text-gray-500">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.1936 0.195853C12.2555 0.133771 12.3291 0.0845147 12.4101 0.050907C12.4911 0.0172993 12.5779 0 12.6656 0C12.7533 0 12.8401 0.0172993 12.9211 0.050907C13.0021 0.0845147 13.0756 0.133771 13.1376 0.195853L15.8041 2.86245C15.8662 2.92437 15.9155 2.99794 15.9491 3.07893C15.9827 3.15992 16 3.24675 16 3.33443C16 3.42212 15.9827 3.50895 15.9491 3.58994C15.9155 3.67093 15.8662 3.7445 15.8041 3.80642L5.13777 14.4728C5.06427 14.5457 4.97479 14.6005 4.87644 14.6328L0.876552 15.9661C0.759199 16.005 0.633332 16.0105 0.513018 15.9821C0.392705 15.9536 0.282685 15.8922 0.195258 15.8047C0.10783 15.7173 0.0464374 15.6073 0.0179438 15.487C-0.0105498 15.3667 -0.0050223 15.2408 0.0339079 15.1234L1.36721 11.1236C1.39952 11.0252 1.4543 10.9357 1.5272 10.8622L12.1936 0.195853ZM2.58184 11.6942L1.72053 14.2808L4.30579 13.4182L14.3895 3.33443L12.6656 1.61048L2.58184 11.6942Z"
                        fill="#2A9D8F"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="lg:w-1/2">
                <label
                  htmlFor="UserEmail"
                  className="block text-md font-medium text-gray-700"
                >
                  Email Address
                </label>
                <div className="relative w-full">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="example@mail.com"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 w-full rounded-md border-gray-400 bg-neutral shadow-sm sm:text-sm"
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-0 grid w-10 place-content-center text-gray-500">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.1936 0.195853C12.2555 0.133771 12.3291 0.0845147 12.4101 0.050907C12.4911 0.0172993 12.5779 0 12.6656 0C12.7533 0 12.8401 0.0172993 12.9211 0.050907C13.0021 0.0845147 13.0756 0.133771 13.1376 0.195853L15.8041 2.86245C15.8662 2.92437 15.9155 2.99794 15.9491 3.07893C15.9827 3.15992 16 3.24675 16 3.33443C16 3.42212 15.9827 3.50895 15.9491 3.58994C15.9155 3.67093 15.8662 3.7445 15.8041 3.80642L5.13777 14.4728C5.06427 14.5457 4.97479 14.6005 4.87644 14.6328L0.876552 15.9661C0.759199 16.005 0.633332 16.0105 0.513018 15.9821C0.392705 15.9536 0.282685 15.8922 0.195258 15.8047C0.10783 15.7173 0.0464374 15.6073 0.0179438 15.487C-0.0105498 15.3667 -0.0050223 15.2408 0.0339079 15.1234L1.36721 11.1236C1.39952 11.0252 1.4543 10.9357 1.5272 10.8622L12.1936 0.195853ZM2.58184 11.6942L1.72053 14.2808L4.30579 13.4182L14.3895 3.33443L12.6656 1.61048L2.58184 11.6942Z"
                        fill="#2A9D8F"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:flex gap-10">
              <div className="lg:w-1/2 mb-3">
                <label
                  htmlFor="Address"
                  className="block text-md font-medium text-gray-700"
                >
                  Address
                </label>
                <div className="relative w-full">
                  <input
                    type="text"
                    id="Address"
                    placeholder="162 Regent Street, London"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 w-full rounded-md border-gray-400 bg-neutral shadow-sm sm:text-sm"
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-0 grid w-10 place-content-center text-gray-500">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.1936 0.195853C12.2555 0.133771 12.3291 0.0845147 12.4101 0.050907C12.4911 0.0172993 12.5779 0 12.6656 0C12.7533 0 12.8401 0.0172993 12.9211 0.050907C13.0021 0.0845147 13.0756 0.133771 13.1376 0.195853L15.8041 2.86245C15.8662 2.92437 15.9155 2.99794 15.9491 3.07893C15.9827 3.15992 16 3.24675 16 3.33443C16 3.42212 15.9827 3.50895 15.9491 3.58994C15.9155 3.67093 15.8662 3.7445 15.8041 3.80642L5.13777 14.4728C5.06427 14.5457 4.97479 14.6005 4.87644 14.6328L0.876552 15.9661C0.759199 16.005 0.633332 16.0105 0.513018 15.9821C0.392705 15.9536 0.282685 15.8922 0.195258 15.8047C0.10783 15.7173 0.0464374 15.6073 0.0179438 15.487C-0.0105498 15.3667 -0.0050223 15.2408 0.0339079 15.1234L1.36721 11.1236C1.39952 11.0252 1.4543 10.9357 1.5272 10.8622L12.1936 0.195853ZM2.58184 11.6942L1.72053 14.2808L4.30579 13.4182L14.3895 3.33443L12.6656 1.61048L2.58184 11.6942Z"
                        fill="#2A9D8F"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="lg:w-1/2">
                <label
                  htmlFor="Password"
                  className="block text-md font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative w-full">
                  <input
                    type="password"
                    id="Password"
                    placeholder="******"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 w-full rounded-md border-gray-400 bg-neutral shadow-sm sm:text-sm"
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-0 grid w-10 place-content-center text-gray-500">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.1936 0.195853C12.2555 0.133771 12.3291 0.0845147 12.4101 0.050907C12.4911 0.0172993 12.5779 0 12.6656 0C12.7533 0 12.8401 0.0172993 12.9211 0.050907C13.0021 0.0845147 13.0756 0.133771 13.1376 0.195853L15.8041 2.86245C15.8662 2.92437 15.9155 2.99794 15.9491 3.07893C15.9827 3.15992 16 3.24675 16 3.33443C16 3.42212 15.9827 3.50895 15.9491 3.58994C15.9155 3.67093 15.8662 3.7445 15.8041 3.80642L5.13777 14.4728C5.06427 14.5457 4.97479 14.6005 4.87644 14.6328L0.876552 15.9661C0.759199 16.005 0.633332 16.0105 0.513018 15.9821C0.392705 15.9536 0.282685 15.8922 0.195258 15.8047C0.10783 15.7173 0.0464374 15.6073 0.0179438 15.487C-0.0105498 15.3667 -0.0050223 15.2408 0.0339079 15.1234L1.36721 11.1236C1.39952 11.0252 1.4543 10.9357 1.5272 10.8622L12.1936 0.195853ZM2.58184 11.6942L1.72053 14.2808L4.30579 13.4182L14.3895 3.33443L12.6656 1.61048L2.58184 11.6942Z"
                        fill="#2A9D8F"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:flex">
              <div className="lg:w-1/2 pr-5">
                <label
                  className="block text-md font-medium text-gray-700"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <div className="flex gap-4">
                  <input
                    className="mt-1 p-2 w-20 rounded-md border-gray-400 bg-neutral shadow-sm sm:text-sm"
                    placeholder="+44"
                    name="phoneCode"
                    value={values.phoneCode}
                    onChange={handleChange}
                    type="tel"
                    id="country"
                    required
                  />
                  <input
                    required
                    type="tel"
                    id="phone"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    placeholder="1234567"
                    className="mt-1 p-2 w-full rounded-md border-gray-400 bg-neutral shadow-sm sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="bg-secondary text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfileInfo;
