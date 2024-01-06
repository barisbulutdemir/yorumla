import { Label } from "@/components/ui/label";
import { HistoryIcon } from "lucide-react";
import Image from "next/image";

const LastPosts = () => {
  return (
    <div className="w-full border rounded-lg p-6 h-[450px] bg-white mt-5">
      <div className="flex gap-1">
        <HistoryIcon />
        <h2>Lastest</h2>    
      </div>
      <div className="flex items-center gap-2 mt-6">
        <div className="h-16 w-16 relative rounded-lg overflow-hidden bg-green-300">
          <Image className=" absolute" src="/   next.svg" alt="" fill />
        </div>
        <div>
          <h1 className="font-light">Title Lorem</h1>
          <p className=" font-thin text-slate-500">01.02.2023</p>
        </div>
      </div>
    </div>
  );
};

export default LastPosts;
