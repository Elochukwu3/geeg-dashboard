import React from "react";
import { ICON_DATA } from "@/utils/db/icon-data";
import Image from "next/image";

function Sidebar() {
  return (
    <div className="flex py-5   min-h-screen flex-col items-center  gap-5 bg-[#EBECF2]">
     <div className="flex flex-col items-center  gap-5">
     {ICON_DATA.slice(0, 8).map(({ icon, name }) => (
        <span key={`icon${name}`} title={name} className="px-2 cursor-pointer">
         {icon()}
        </span>
      ))}
     </div>
      <div className="bg-red-900">
      {ICON_DATA.slice(8).map(({ icon, name }) => (
        <span key={`icon${name}`} title={name} className="px-2 cursor-pointer">
         {icon()}
        </span>
      ))}
      </div>
    </div>
  );
}

export default Sidebar;
