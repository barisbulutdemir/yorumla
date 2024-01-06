"use client";
import {
  HomeIcon,
  LogInIcon,
  PhoneIcon,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";
import { NavigationMenuDemo } from "./Category";
import Login from "../Auth/Login";
import useStore from "@/zustand/store";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/features/authSlice";

const Icons = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);


  const handleLogout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    // Burada kimlik doğrulama token ve kullanıcı bilgilerini yeniden yüklemek için işlevlerinizi yazın
    // Örneğin:
  }, [dispatch]);
  return (
    <div className="hidden md:flex gap-2 text-sm">
      <Link className="navbarIcons " href="/">
        <HomeIcon />
        <p>Home</p>
      </Link>
      <Link className="navbarIcons " href="/">
        <SearchIcon />
        <p>Search</p>
      </Link>
      <Link className="navbarIcons -mx-4  " href="/">
        <div>
          <NavigationMenuDemo />
          </div>
      </Link>
      <Link className="navbarIcons" href="/">
        <PhoneIcon />
        <p>Contact us</p>
      </Link>
      {isAuthenticated ? (
        <div onClick={handleLogout} className="navbarIcons">Logout</div>
      ) : (
        <div className="navbarIcons">
          <LogInIcon />
          <Login />
        </div>
      )}
    </div>
  );
};

export default Icons;
