import Image from "next/image";
import ScheduleCallForm from "./ScheduleCallForm";

const ScheduleCall = () => {
  return (
    <div className="h-full lg:flex lg:justify-center ">
      <div className="lg:w-[900px] h-full  lg:h-[675px] bg-white rounded mx-4 md:mx-16 lg:mx-4 flex flex-col gap-2 pt-8 md:px-16  lg:px-0  ">
        <span className="text-2xl text-secondary text-center font-bold">
          Schedule a Call Today!
        </span>
        <span className="sm:text-lg md:text-xl text-neutralDark text-center px-2">
          Fill out the form and your personal health advisor will reach you!
        </span>
        <div className="flex  flex-col lg:flex-row lg:gap-12 p-8">
          <ScheduleCallForm />
          <div className="w-full  lg:w-[342px] relative mt-40  ">
            <div className="bg-secondary  lg:w-[320px] rounded  h-[310px]   lg:absolute opacity-60   bottom-[145px] left-0 "></div>
            <Image
              src="/advisor.png"
              alt="advisor-image"
              width={350}
              height={400}
              className="object-cover absolute  bottom-[145px] left-0 md:left-24 lg:left-0"
            />
            <div className="flex flex-col  left-0 lg:absolute lg:bottom-[70px] lg:left-14 text-center lg:text-left  ">
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
