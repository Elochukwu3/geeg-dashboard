"use client"
import React, { useState } from "react";
import SearchSvg from "./Search";
import Profile from "./Profile";
import Box from "@/utils/db/icon/Box";
import Logo from "@/utils/db/icon/Logo";

function NavBar({side, stateSette}:{side:boolean, stateSette:React.Dispatch<React.SetStateAction<boolean>>}) {
  const[profile, setprofile]= useState<boolean>(false)
  return (
    <div>
      <div className="relative block bg-[#FAFAFA] border-[0.769px] border-[#DADDDD]">
        <nav className="flex py-4 items-center gap-5 px-2">
        <div className="max-w-[740px] flex justify-between items-center flex-1">
        <h1 className="text-xl font-jarkata font-bold text-[#26282C] max-md:hidden">
          Dashboard
        </h1>
        <div className="hidden max-md:block cursor-pointer" onClick={()=> stateSette(!side)}><Logo/></div>
            <form action="#" className="border rounded-full overflow-hidden p-1 border-[#DADDDD] h-[34px] bg-[#FFF] flex items-center">
     <SearchSvg/>
                <input type="text" placeholder="Search.." className="pl-2 outline-none"/>
            </form>
        </div>
        <Profile val={profile}/>
        <div className="hidden max-lg:block cursor-pointer p-1" onClick={()=> setprofile(!profile)}>
          <Box />
        </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
