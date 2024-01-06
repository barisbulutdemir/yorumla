'use client'
import Icons from "./Icons"
import Yorumla from "./Yorumla"
import Logo from "./Logo"
import useAuth from '@/hooks/useAuth'


const NavbarBase = () => {


  return (
    <nav className="w-full h-12 bg-white
     flex items-center px-4 justify-between  
     ">
  
      
      <Logo/>
      <Icons />
      <Yorumla/>
    </nav>
  )
}

export default NavbarBase