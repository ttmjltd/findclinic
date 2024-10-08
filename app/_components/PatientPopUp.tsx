"use client";

import { useRef } from "react";
import ScheduleCallForm from "./ScheduleCallForm";
import { useEffect } from "react";

const PatientPopUp: React.FC = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    let timer: number;
    let isPopupShown = sessionStorage.getItem("isPopupShown") ? true : false;
    const isMobile = window.innerWidth <= 768;
    if (!isMobile && !isPopupShown) {
      timer = window.setTimeout(() => {
        dialogRef.current?.showModal();
        sessionStorage.setItem("isPopupShown", "true");
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="rounded-xl backdrop:bg-primary backdrop:opacity-30"
    >
      <div className="flex justify-end px-3 pt-3">
        <button
          className=" text-secondary text-xl p-1 outline-none"
          onClick={() => {
            if (dialogRef.current) dialogRef.current.close();
          }}
        >
          X
        </button>
      </div>

      <div className=" text-center">
        <h2 className=" text-secondary text-2xl font-bold pb-2">
          Schedule a Call Today!
        </h2>
        <p className="text-primary w-[437px] px-7">
          Fill out the form and your personal health advisor will reach you!
        </p>
      </div>
      <ScheduleCallForm />
    </dialog>
  );
};

export default PatientPopUp;
