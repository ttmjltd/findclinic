"use client";

import { useState } from "react";
import { PatientFormState } from "../types";
import Input from "../_atoms/Input";
import Checkbox from "../_atoms/Checkbox";
import Button from "../_atoms/Button";

const ScheduleCallForm: React.FC = () => {
  const [form, setForm] = useState<PatientFormState>({
    fullName: "",
    email: "",
    phone: "",
    treatment: "",
  });
  const [terms, setTerms] = useState<boolean>(false);
  const [subscribe, setSubscribe] = useState<boolean>(false);
  const handleOnChange = (e: any, stateName: string) => {
    setForm((prev: any) => ({ ...prev, [stateName]: e.target.value }));
  };
  return (
    <form className="w-full lg:w-[434px] lg:h-[532px] lg:p-7 flex flex-col gap-3">
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
        onChange={(e: {
          target: { checked: boolean | ((prevState: boolean) => boolean) };
        }) => setTerms(e.target.checked)}
        value={terms}
        checked={terms}
      />
      <Checkbox
        label="Subscribe to our newsletter"
        onChange={(e: {
          target: { checked: boolean | ((prevState: boolean) => boolean) };
        }) => setSubscribe(e.target.checked)}
        value={subscribe}
        checked={subscribe}
      />
      <div className=" mt-2 flex justify-center">
        <Button label="Schedule a call now!" variation="broad-dark" />
      </div>
    </form>
  );
};

export default ScheduleCallForm;
