import { PlatFormData } from "@/utils/db/platFormData";
import { formatNumberInput } from '@/utils/helper/numberConvert';

const Platform = () => {
  return (
    <section className="md:w-11/12 max-lg:w-9/12 max-md:w-10/12 mx-auto bg-[#FFF] rounded-[8px] p-2">
      <div className="flex justify-between items-center w-full">
        <span className="text-lg font-normal text-[#26282C]">Top Platform</span>
        <span className="text-[#34CAA5] pr-3">See All</span>
      </div>
      <div>
        {PlatFormData.map(({name, color, val}) => {
            const percentageWidth = (val / 3600000) * 100;
            const limitedWidth = percentageWidth > 100 ? 100 : percentageWidth;
          return (
            <div key={`key22${name}`}>
              <h3 className="font-semibold text-lg py-2">{name}</h3>
              <div className="mb-2 mt-1 w-full h-3 rounded-full shrink-0 overflow-hidden bg-[#F5F5F5] ">
                <span style={{background: color, width: `${limitedWidth}%`}} className="block h-full rounded-full"></span>
              </div>
              <div className="w-full flex justify-between">
                <p>${formatNumberInput(val)}</p>
                <p>+15% {percentageWidth.toFixed(2)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Platform;
