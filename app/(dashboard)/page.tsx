"use client"
import React, { useState } from "react";
import Income from "@/components/income/Income";
import LastOrder from "@/components/last-order/LastOrder";
import Navbar from "@/components/nav-bar/NavBar";
import Trend from "@/components/sales-trend/Trend";
import Sales from "@/components/sales/Sales";
import Sidebar from "@/components/side-bar/Sidebar";
import Platform from "@/components/top-platform/Platform";
import Refund from "@/components/refund/Refund";
import TotalIncome from "@/components/total-incom/TotalIcome";

export default function Home() {
  const[side, setSide]= useState<boolean>(false)
  return (
    <main className="flex text-black min-h-screen flex-col p-0 m-0 relative">
      <div className="flex h-full min-h-screen">
        <div className="max-md:w-auto max-md:relative sticky md:top-0 md:left-0 h-full flex max-w-20 w-full  shrink-0 flex-col">
       <Sidebar side={side}/>
        </div>
        <div className="flex-1 max-md:w-full">
          <div className="sticky top-0 max-w-[1360px] z-40 bg-white"><Navbar side={side} stateSette={setSide}/></div>
          <div className="max-lg:grid-cols-1 space-x-4 p-3 grid grid-cols-3 space-y-3">
            <Trend/>
            <div className="grid grid-cols-2 gap-x-2">
            <Income/>
            <Refund/>
            <Sales/>
            <TotalIncome/>
            </div>
          </div>
          <div className="md:p-3 sm:p-2 grid grid-cols-3 space-y-3 max-lg:grid-cols-1">
            <LastOrder/>
            <Platform/>
          </div>
        </div>
      </div>
    </main>
  );
}
