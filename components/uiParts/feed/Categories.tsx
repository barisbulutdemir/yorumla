'use client'
import { cn } from "@/lib/utils";
import Link from "next/link"
import {  usePathname } from "next/navigation"

const Categories = () => {

    const pathname = usePathname();

    const linkClass = (path: any) => cn(
        'text-sm whitespace-nowrap  md:text-md font-mono px-2 py-1 rounded',
        {
            'hover:text-purple-500': pathname !== path,
            'bg-purple-400 text-white': pathname === path
        }
    );



  return (
    <div className="w-full h-10  border bg-white border-slate-900 hover:border-purple-600
     hover:shadow-md px-4 rounded-2xl flex justify-between items-center ">
        <div className="flex gap-2 md:gap-5 items-center">

        <Link href="/" className={linkClass('/')}>Blog</Link>
        
        <Link href="/" className={linkClass('/sa')}>Lastest</Link>
        <Link href="/" className={linkClass('/as')}>Most Comments</Link>
        <Link href="/" className={linkClass('/ss')}>{"Editor's Choices"}</Link>


        </div>
    </div>
  )
}

export default Categories