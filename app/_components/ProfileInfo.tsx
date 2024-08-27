"use client";

import React, { useState } from "react";
import { ProfileInfoProps, ProfileInfoValues } from "../types";
import { PenFC } from "../_atoms/Icons";

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
                    <PenFC />
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
                  <PenFC />
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
                  <PenFC />
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
                  <PenFC />
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
