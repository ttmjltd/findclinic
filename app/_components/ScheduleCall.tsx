import Image from "next/image";
import ScheduleCallForm from "./ScheduleCallForm";

const ScheduleCall = () => {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="w-[900px] h-[675px] bg-white rounded m-4 flex flex-col gap-2 pt-8 ">
        <span className="text-2xl text-secondary text-center font-bold">
          Schedule a Call Today!
        </span>
        <span className="text-xl text-neutralDark text-center ">
          Fill out the form and your personal health advisor will reach you!
        </span>
        <div className="flex gap-12 p-8">
          <ScheduleCallForm />
          <div className="w-[342px] relative">
            <div className="bg-secondary  w-[320px] rounded h-[310px] opacity-60 absolute bottom-[145px] left-0 "></div>
            <Image
              src="/advisor.png"
              alt="advisor-image"
              width={350}
              height={400}
              className="object-cover absolute bottom-[145px] left-0"
            />
            <div className="flex flex-col absolute bottom-[70px] left-14">
              <span className="text-[32px] ">Jane Marson</span>
              <span className="text-[16px] ">Your personal health advisor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCall;
