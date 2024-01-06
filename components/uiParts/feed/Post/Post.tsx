import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

const Post = () => {
  return (
    <Card className="post-card w-full hover:border-slate-900 transition-all duration-300 rounded-lg 
     md:h-[200px] overflow-hidden grid md:flex gap-4 md:gap-6 ">
      <div className="h-[200px] md:h-full md:basis-2/5 relative overflow-hidden ">
        <Image
          src="/bgpic2.png"
          alt="Background image"
          fill
          className="h-full w-full object-cover post-image transition-all duration-300"
        />{" "}
      </div>
      {/* ---------------------- ----------*/}

      <div className="md:my-4 px-2  flex md:basis-3/5  flex-col gap-4 md:justify-between">
        <div>
          <Label className="text-slate-600   ">Yorum</Label>
          <Link href="/">
          <h1 className="font-extrabold text-xl">Philips Lumea 921</h1>
          </Link>
        </div>
        <Label className="text-md font-light ">
          Lorem ipsun dolar amed sit amed dola ipsun.
        </Label>
        <div className="w-full flex  items-center md:justify-between  md:gap-10 px-4  ">
          <div className="flex gap-2 md:gap-4">
            <b className="text-xs md:text-sm font-thin text-slate-600 italic whitespace-nowrap ">3 hours ago</b>
            <Label className="text-xs md:text-sm  font-thin text-slate-600 italic">Baris</Label>
          </div>
          <div className="flex text-xs md:text-sm px-2 justify-end gap-2 text-slate-500 font-thin italic w-full  ">
            <span>#electronic</span>
            <span>#home</span>
            <span>#cleaning</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Post;
