import Image from "next/image";

const ClinicServices = ({services} : {services: string[]}) => {
  return (
    <div className="mt-12">
      <h3 className="text-secondary font-bold">Services</h3>

      <div className="grid grid-cols-2 lg:grid-cols-3 mt-4 gap-2 ">
        {services.map((service, index:number) => (
          <span key={index} className="flex text-xs mr-4 items-center">
            <span className="mr-2">
              
              <Image
                src={service === "Airport Transfer" ? "/services/car-no-bg.gif" : service === "Private Chauffeur" ? "/services/car2-no-bg.gif" : service === "Translation Services" ? "/services/english-no-bg.gif" : service === "Hotel Reservation" ? "/services/hotel-bell-no-bg.gif" : service === "Doctor Consultation" ? "/services/doctor-no-bg.gif" : "" }
                width="32"
                height="32"
                alt="car"
                unoptimized
              />
            </span>
            {service}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ClinicServices;
