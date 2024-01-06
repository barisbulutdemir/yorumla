import { Card, CardFooter } from "@/components/ui/card";
import { CarrotIcon, CherryIcon, CitrusIcon } from "lucide-react";

const BannerLeft = () => {
  return (
    <div className="flex-1">
      <Card className="w-full h-[200px] bg-[url('/bgpic2.png')] bg-center "></Card>
      <div className="flex justify-between gap-2 h-[90px] mt-[10px]">
        <Card className="flex-1 box h-[90px] overflow-hidden flex justify-end">
          
          <div className="w-32 h-32  carrot overflow-hidden  ">
            <CarrotIcon className="w-full h-full overflow-hidden" />
          </div>
        </Card>
        <Card className="flex-1 box h-[90px] overflow-hidden flex justify-end">
          
          <div className="w-32 h-32  carrot overflow-hidden  ">
            <CherryIcon className="w-full h-full overflow-hidden" />
          </div>
        </Card>
        <Card className="flex-1 box h-[90px] overflow-hidden flex justify-end">
          
          <div className="w-32 h-32  carrot overflow-hidden  ">
            <CitrusIcon className="w-full h-full overflow-hidden" />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BannerLeft;
