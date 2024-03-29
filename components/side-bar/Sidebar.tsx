"use client"
import React, { useState } from "react";
import { ICON_DATA } from "@/utils/db/icon-data";

function Sidebar({side}:{side?:boolean}) {
 
  return (
    <div className={`${side? "max-md:z-40 fixed max-md:left-0 ": "max-md:hidden"} flex py-5 min-h-screen flex-col justify-between  bg-[#EBECF2]`}>
     <div className="flex flex-col items-center  gap-2 justify-center">
     {ICON_DATA.slice(0, 8).map(({ icon, name }) => (
      <div key={`icon${name}`} title={name}  className="px-2 cursor-pointer hover:border-r-2 border-black w-full py-1 flex justify-center">
        <span  className="px-2 cursor-pointer">
         {icon()}
        </span>
      </div>
      ))}
     </div>
      <div className="space-y-2">
      {ICON_DATA.slice(8).map(({ icon, name }) => (
         <div key={`icon${name}`} title={name}  className="px-2 cursor-pointer hover:border-r-2 border-black w-full py-1 flex justify-center">
         <span  className="px-2 cursor-pointer">
          {icon()}
         </span>
       </div>
      ))}
      </div>
    </div>
  );
}

export default Sidebar;
