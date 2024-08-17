
'use client';
import { useState } from "react";
import { PatientFormState } from "../types";
import Input from "../_atoms/Input";
import Checkbox from "../_atoms/Checkbox";


const FormComponent = () => {
    const [form, setForm] = useState<PatientFormState>({
        fullName: "",
        email: "",
        phone: "",
        treatment: "",
    })
    const [terms, setTerms] = useState<boolean>(false)
    const [subscribe, setSubscribe] = useState<boolean>(false)
    const handleOnChange = (e: any, stateName: string) => {
        setForm((prev) => ({ ...prev, [stateName]: e.target.value }))
    }

    return (
        <div className="w-full h-lvh flex justify-center">
            <div className="w-[900px] h-[675px] bg-white rounded m-4 flex flex-col gap-2  pt-8 ">
                <span className="text-2xl text-secondary text-center font-bold">Schedule a Call Today!</span>
                <span className="text-xl text-neutralDark text-center ">Fill out the form and your personal health advisor will reach you!</span>
                <div className="flex gap-12 p-8">
                    <div className="w-[434px] h-[532px] p-7 flex flex-col gap-3">
                        <div className="flex justify-center">
                            <img src="/healtWayLogo.png" alt="healtWay-Logo" width={100} height={120} />
                        </div>
                        <Input label="Full Name" value={form?.fullName} onChange={(e) => handleOnChange(e, "fullName")} />
                        <Input label="Email Address" value={form?.email} onChange={(e) => handleOnChange(e, "email")} />
                        <Input label="Phone Number" value={form?.phone} onChange={(e) => handleOnChange(e, "phone")} />
                        <Input label="Treatment ?" value={form?.treatment} onChange={(e) => handleOnChange(e, "treatment")} />
                        <Checkbox label="Accept the registration terms" onChange={(e) => setTerms(e.target.checked)} value={terms} checked={terms} />
                        <Checkbox label="Subscribe to our newsletter" onChange={(e) => setSubscribe(e.target.checked)} value={subscribe} checked={subscribe} />
                    </div>
                    <div className="w-[342px] relative">
                        <div className="bg-secondary  w-[320px] rounded h-[310px] opacity-60 absolute bottom-[145px] left-0 "></div>
                        <img src="/advisor.png" alt="advisor-image" className="object-fit absolute bottom-[145px] left-0" />
                        <div className="flex flex-col absolute bottom-[70px] left-14">
                            <span className="text-[32px] ">Jane Marson</span>
                            <span className="text-[16px] ">Your personal health advisor</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FormComponent