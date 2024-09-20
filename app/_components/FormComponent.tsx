"use client";
import { useState } from "react";
import { PatientFormState } from "../types";
import Input from "../_atoms/Input";
import Checkbox from "../_atoms/Checkbox";
import Button from "../_atoms/Button";
import Image from "next/image";

const FormComponent = () => {
  const [form, setForm] = useState<PatientFormState>({
    fullName: "",
    email: "",
    phone: "",
    treatment: "",
  });
  const [terms, setTerms] = useState<boolean>(false);
  const [subscribe, setSubscribe] = useState<boolean>(false);
  const handleOnChange = (e: any, stateName: string) => {
    setForm((prev) => ({ ...prev, [stateName]: e.target.value }));
  };

  return (
    <div className="h-full lg:flex lg:justify-center ">
      <div className="lg:w-[900px] h-full  lg:h-[675px] bg-white rounded mx-4  flex flex-col gap-2 pt-8 px-4 lg:px-0  ">
        <span className="text-2xl text-secondary text-center font-bold">
          Schedule a Call Today!
        </span>
        <span className="text-xl text-neutralDark text-center ">
          Fill out the form and your personal health advisor will reach you!
        </span>
        <div className="flex  flex-col lg:flex-row lg:gap-12 p-8">
          <div className="w-full lg:w-[434px] lg:h-[532px] lg:p-7 flex flex-col gap-3  ">
            <Input
              label="Full Name"
              value={form?.fullName}
              onChange={(e) => handleOnChange(e, "fullName")}
            />
            <Input
              label="Email Address"
              value={form?.email}
              onChange={(e) => handleOnChange(e, "email")}
            />
            <Input
              label="Phone Number"
              value={form?.phone}
              onChange={(e) => handleOnChange(e, "phone")}
            />
            <Input
              label="Treatment ?"
              value={form?.treatment}
              onChange={(e) => handleOnChange(e, "treatment")}
            />
            <Checkbox
              label="Accept the registration terms"
              onChange={(e) => setTerms(e.target.checked)}
              value={terms}
              checked={terms}
            />
            <Checkbox
              label="Subscribe to our newsletter"
              onChange={(e) => setSubscribe(e.target.checked)}
              value={subscribe}
              checked={subscribe}
            />
            {/* 
            <Image
              src="/advisor.png"
              alt="advisor-image"
              width={350}
              height={400}
              className="object-cover"
            /> */}
          </div>
          <div className=" mt-12 md:mt-8 flex justify-center lg:hidden">
            <Button label="Schedule a call now!" variation="broad-dark" />
          </div>
          <div className="w-full  lg:w-[342px] relative mt-40 ">
            <div className="bg-secondary  lg:w-[320px] rounded  h-[310px]  lg:absolute opacity-60   bottom-[145px] left-0"></div>
            <Image
              src="/advisor.png"
              alt="advisor-image"
              width={350}
              height={400}
              className="object-cover absolute  bottom-[145px] left-0"
            />
            <div className="flex flex-col  left-0 lg:absolute lg:bottom-[70px] lg:left-14 text-center lg:text-lef  ">
              <span className="text-[32px] ">Jane Marson</span>
              <span className="text-[16px] ">Your personal health advisor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
