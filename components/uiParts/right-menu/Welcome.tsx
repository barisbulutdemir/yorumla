import { Label } from "@/components/ui/label";
import Confetti from "@/lib/confetti";
import {
    BugIcon,
  CherryIcon,
  FingerprintIcon,
  PhoneCallIcon,
  UserCircle2,
} from "lucide-react";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Welcome = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between ">
        <div className="p-2 bg-indigo-300 rounded-lg">Hello Stranger!</div>
        <div className="h-10 w-10 rounded-full p-2 bg-indigo-300">
          <CherryIcon />{" "}
        </div>
      </div>
      <div className="text-white mt-4 px-4 space-y-2">
        <Label className="text-extrabold text-2xl">Content</Label>
        <div className="flex items-center gap-1">
          <Confetti />
          <Label className="text-lg">Yenilikler</Label>
          <Confetti />
        </div>
        <div className="flex flex-col gap-2 px-4 ">
          <Label className=" font-light">- Lorem ipsun dola amet</Label>
          <Label className=" font-light">- Lorem ipsun dola amet</Label>
          <Label className=" font-light">- Lorem ipsun dola amet</Label>
          <Label className=" font-light">- Lorem ipsun dola amet</Label>
        </div>
      </div>

      <div className="flex flex-col text-white mt-6 px-4">
        <Label className="font-thin text-md underline">Lorem</Label>
        <Label className="font-thin text-md underline">Lorem Ipsun</Label>
        <Label className="font-thin text-md underline">Dola Amed</Label>
      </div>
      <div className="flex justify-between">

      <div className="flex mt-10 gap-2">
       
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
            <Link href="/">
          <div className=" w-10 h-10 bg-indigo-300 p-2 rounded-full text-white hover:text-indigo-900">
            <PhoneCallIcon />
          </div>
        </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Contact Us</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
            <Link href="/">
          <div className=" w-10 h-10 bg-indigo-300 p-2 rounded-full text-white hover:text-indigo-900">
            <UserCircle2 />
          </div>
        </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Customer Service</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Link href="/" className="inline-block mt-10">
      <div className="flex text-white hover:text-indigo-800 items-center p-2 bg-indigo-300 rounded-lg cursor-pointer  ">
        <BugIcon />
        <Label className=" ">Report Bug</Label>
      </div>
      </Link>

    </div>
    </div>

  );
};

export default Welcome;
