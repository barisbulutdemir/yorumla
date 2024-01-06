import {  PenToolIcon } from "lucide-react"
import Link from "next/link"

const Yorumla = () => {
  return (
    <Link href="/post/add" className="flex gap-1 text-sm hover:text-blue-500">
      <PenToolIcon />
        Yorumla!</Link>
  )
}

export default Yorumla