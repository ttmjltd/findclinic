"use client";

import React, { useState } from "react";

interface ProfileFormProps {
  onSubmit: (values: ProfileFormValues) => void;
}

interface ProfileFormValues {
  name: string;
  email: string;
  phoneCode: string;
  phoneNumber: string;
  address: string;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ onSubmit }) => {
  const [values, setValues] = useState<ProfileFormValues>({
    name: "",
    email: "",
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
    <div className="w-full sm:w-9/12 lg:w-1/2 mx-auto">
      <h2 className="text-xl text-secondary font-bold mb-4">Profile Info</h2>
      <div className="rounded-lg bg-white p-8 shadow-lg lg:p-12">
      <form className="grid gap-5 " onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col ">
            <label htmlFor="name" className="text-gray-700">
              Clinic Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              className="border rounded-md px-3 py-2"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700">
              E-mail Adress
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="border rounded-md px-3 py-2"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="phoneCode" className="text-gray-700">
              Phone Code
            </label>
            <input
              type="text"
              id="phoneCode"
              name="phoneCode"
              value={values.phoneCode}
              onChange={handleChange}
              className="border rounded-md px-3 py-2"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              className="border rounded-md px-3 py-2"
              required
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="address" className="text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={values.address}
            onChange={handleChange}
            className="border rounded-md px-3 py-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      </div>
    </div>
  );
};

export default ProfileForm;
