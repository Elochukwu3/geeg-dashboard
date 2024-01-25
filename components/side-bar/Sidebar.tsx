import React from "react";
import { ICON_DATA } from "@/utils/db/icon-data";
import Image from "next/image";

function Sidebar() {
  return (
    <div className="flex py-5 min-h-screen flex-col items-center  gap-5 bg-[#EBECF2]">
      {ICON_DATA.slice(0, 8).map(({ icon, name }) => (
        <span key={`icon${name}`} title={name} className="px-2 cursor-pointer">
          <Image className="object-contain " src={icon} width={24} height={24} priority alt="name" />
        </span>
      ))}
    </div>
  );
}

export default Sidebar;
