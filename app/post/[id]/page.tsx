import { Label } from "@/components/ui/label";
import PostBody from "@/components/uiParts/feed/PostDetail/PostBody";
import RightMenuBase from "@/components/uiParts/right-menu/RightMenuBase";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="postdetailhero" id="particles-js">
        <div className="flex items-center justify-center h-full  ">
          <Label className="text-white text-3xl font-extrabold relative  ">
            Lorem ipsun Dolar amet
          </Label>
        </div>
        <div className="w wave"></div>
        <div className="w wave2"></div>
        <div className="w wave3"></div>
        <div className="w wave4"></div>
      </div>

      {/* -------------------------------- */}
      <div className="flex  md:px-10 md:gap-3 mt-10 w-full  ">
      

        <PostBody />
        
        <RightMenuBase />
   

      </div>
      
    </div>
  );
};

export default Page;
