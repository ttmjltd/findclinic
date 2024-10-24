import Image from "next/image";

const ClinicServices = ({services} : {services: string[]}) => {
 const iconsData:any = { "Airport Transfer" : "/services/car-no-bg.gif", 
                      "Private Chauffeur" : "/services/car2-no-bg.gif", 
                      "Translation Services" : "/services/english-no-bg.gif", 
                      "Hotel Reservation" : "/services/hotel-bell-no-bg.gif",  
                      "Doctor Consultation" : "/services/doctor-no-bg.gif"

 }

  return (
    <div className="mt-12">
      <h3 className="text-secondary text-xl font-bold">Services</h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-4 gap-4 ">
        {services.map((service, index:number) => (
          <span key={index} className="flex text-primary bg-white rounded-lg text-sm mr-4 px-1 items-center justify-center">
            <span className="mr-2">
              
              <Image
                src={iconsData[service]}
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
