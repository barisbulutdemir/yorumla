import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowRight, CarrotIcon } from "lucide-react";

const BannerRight = () => {
  return (
    <Card className="h-[300px] flex-1 overflow-hidden relative group cursor-pointer">
      <div className="w-full h-full bg-[url('/bgpic.png')] hover:scale-105 bg-cover transition duration-500 ease-in-out">
        <div className="absolute inset-0 transition-all duration-500 ease-in-out bg-red-500 bg-opacity-0 group-hover:bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-start  group-hover:justify-center transition-all duration-500 ease-in-out">
          <div className="opacity-0 group-hover:opacity-75 text-white w-52 h-36 transform -translate-x-full group-hover:-translate-x-20 translate-y-2 transition-transform duration-1000 ease-in-out" >
            <div className="mt-24 text-3xl filter opacity-100 ">
              <p className="font-extrabold text-white">
              Learn More
                </p>
              <ArrowRight />
            </div>

          </div>
        </div>
      </div>
    </Card>
  );
};

export default BannerRight;
