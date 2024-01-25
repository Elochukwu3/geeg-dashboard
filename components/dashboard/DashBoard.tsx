import { ICON_DATA } from "@/utils/db/icon-data";
import Image from "next/image";
import React from "react";

function DashBoard() {
  return (
    <div>
      <div>
        <nav>
        <div className="max-w-3xl flex justify-between items-center">
        <h1 className="text-xl font-jarkata font-bold text-[#26282C]">
          Dashboard
        </h1>
            <form action="#" className="">
                <input type="text" placeholder="Search.." />
                <button type="submit">Search</button>
            </form>
        </div>
        <div>
            <div className="flex gap-2">
                <Image className="" src={ICON_DATA[10].icon} alt="calendar" width={24} height={24}/>
                <p>November 15, 2023</p>
            </div>
        </div>
        </nav>
      </div>
    </div>
  );
}

export default DashBoard;
