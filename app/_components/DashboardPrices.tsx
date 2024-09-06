import { PenFC } from "../_atoms/Icons";
import { PriceItemProps } from "../types";

const priceData = [
  { service: "Hair Transplant", minPrice: "£1000", maxPrice: "£2000" },
  { service: "Dental Implant", minPrice: "£500", maxPrice: "£1200" },
  { service: "Botox", minPrice: "£250", maxPrice: "£750" },
  // You can add more services here
];

const PriceItem: React.FC<PriceItemProps> = ({ service, minPrice, maxPrice }) => (
    <div className="flex flex-col sm:flex-row items-start mb-4"> {/* Stacks on small screens, flex on larger */}
      <h2 className="text-[24px] leading-6 sm:text-2xl text-primary sm:w-2/3 pt-2 sm:pt-6">{service}</h2>
      <div className="flex flex-col w-full sm:w-1/6 mt-4 sm:mt-0"> {/* Full width on small screens, fixed on larger */}
        <div className="text-sm font-semibold text-primary mb-1">Min. Price</div>
        <div className="w-full md:w-2/3 sm:w-40 h-12 pl-4 pr-4 bg-bgWhite rounded-lg flex items-center justify-center">
          <span className="font-normal text-primary">{minPrice}</span>
        </div>
      </div>
      <div className="flex flex-col w-full sm:w-1/6 mt-4 sm:mt-0"> {/* Full width on small screens, fixed on larger */}
        <div className="text-sm font-semibold text-primary mb-1">Max. Price</div>
        <div className="w-full md:w-2/3 sm:w-40 h-12 pl-4 pr-4 bg-bgWhite rounded-lg flex items-center justify-center">
          <span className="leading-4 font-normal text-primary">{maxPrice}</span>
        </div>
      </div>
    </div>
  );


  const DashboardPrices: React.FC = () => {
    return (
      <section className="p-5">
        <div className="w-full sm:w-10/12 lg:w-3/4 mx-auto">
          <div className="flex gap-4 sm:gap-8 items-center" >
            <h2 className="text-xl sm:text-xl text-secondary font-bold mb-4">Prices</h2>
            <span className="mb-5 ps-2">
              <PenFC />
            </span>
          </div>
          <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg md:p-8 lg:p-12">
            {priceData.map((item, index) => (
              <PriceItem 
                key={index} 
                service={item.service} 
                minPrice={item.minPrice} 
                maxPrice={item.maxPrice} 
              />
            ))}
          </div>
        </div>
      </section>
    );
  };

export default DashboardPrices;
