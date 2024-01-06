import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Facebook } from "lucide-react";

const PostBody = () => {
  return (
    <div className="md:basis-3/4 px-4 md:px-0">
      <Card className=" md:px-20 md:py-10 ">
        <CardHeader className="">
          <div className="flex flex-col p-4 bg-slate-100 rounded-sm ">
            <Label className="text-md font-thin tracking-wider">
              {"Editor's comment:"}
            </Label>
            <Label className="text-md font-thin tracking-wide">
              - Lorem ipsun dolar amet sit dolar.Lorem ipsun dolar amet sit
              dolar.Lorem ipsun dolar amet sit dolar.
            </Label>
          </div>
        </CardHeader>
        <CardContent className="  py-4 ">
          <h1 className="text-2xl tracking-wider font-bold">Lorem ipsun dolar amet sit dolar.Lorem ipsun dolar amet</h1>
          <p className="text-lg indent-6 mt-14">
            {"   "}There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration in some form,
            by injected humour, or randomised words which don t look even
            slightly believable. If you are going to use a passage of Lorem
            Ipsum, you need to be sure there isn t anything embarrassing hidden
            in the middle of text. All the Lorem Ipsum generators on the
            Internet tend to repeat predefined chunks as necessary, making this
            the first true generator on the Internet. It uses a dictionary of
            over 200 Latin words, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable. The
            generated Lorem Ipsum is therefore always free from repetition,
            injected humour, or non-characteristic words etc.
          </p>
        </CardContent>
        <CardFooter className=" mt-14 flex flex-col items-start gap-2">
        <div className="flex gap-1 w-full justify-end">
            <Facebook />
            <Facebook />
            <Facebook />
          </div>
          <div className="flex flex-col w-full gap-2 py-2 border-l-2 border-blue-500 bg-slate-100 px-2">
            <Label className="font-thin text-md text-slate-900">
              Barış Bulut Demir
            </Label>
            <Label className="font-thin italic text-md text-slate-900">
              10 gün önce - 12.10.2023
            </Label>
            <Label className=" text-slate-700 font-thin italic  ">
            Copyright:Bu blogda yer alan tüm yazılar, özel açıklamalar dışında, BY-NC-SA anlaşmasını kabul etmektedir. Lütfen kaynak belirtiniz!

            </Label>
          </div>
          
        </CardFooter>
      </Card>
    </div>
  );
};

export default PostBody;
