import { CandyIcon, CarrotIcon, ChevronLeft, ChevronRight } from "lucide-react";
import BannerRight from "./BannerRight";
import BannerLeft from "./BannerLeft";

const BannerBase = () => {
  return (
    <div>
      <div className="w-full border bg-white border-slate-900 hover:border-purple-600 hover:shadow-md cursor-pointer hover:text-violet-500 rounded-2xl flex justify-between items-center px-2">
        <CandyIcon />
        <div className=" kayar-yazi-container w-full h-full space-y-12  ">
          <p className="text-center kayar-yazi mt-2">Welcome the page </p>
          <p className="kayar-yazi  text-center">Sen de yorumla !</p>
        </div>
        <CarrotIcon />
      </div>
            {/*  ---------Cards-------------*/}
      <div className="md:flex justify-between mt-4 gap-4 ">
        <BannerLeft />
        <BannerRight />

      </div>
    </div>
  );
};

export default BannerBase;
