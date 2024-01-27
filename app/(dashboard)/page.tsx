import Income from "@/components/income/Income";
import LastOrder from "@/components/last-order/LastOrder";
import Navbar from "@/components/nav-bar/NavBar";
import Trend from "@/components/sales-trend/Trend";
import Sales from "@/components/sales/Sales";
import Sidebar from "@/components/side-bar/Sidebar";
import Platform from "@/components/top-platform/Platform";
import Refund from "@/components/refund/Refund";
import TotalIncome from "@/components/total-incom/TotalIcome";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex text-black min-h-screen flex-col p-0 m-0 relative">
      <div className="flex h-full min-h-screen">
        <div className="sticky top-0 left-0 h-full flex max-w-20 w-full  shrink-0 flex-col">
       <Sidebar/>
        </div>
        <div className="flex-1">
          <div className="sticky top-0 max-w-[1360px] z-40 bg-white"><Navbar/></div>
          <div className="space-x-4 p-3 grid grid-cols-3 space-y-3">
            <Trend/>
            <div className="grid grid-cols-2 gap-x-2">
            <Income/>
            <Refund/>
            <Sales/>
            <TotalIncome/>
            </div>
          </div>
          <div className="p-3 grid grid-cols-3 space-y-3">
            <LastOrder/>
            <Platform/>
          </div>
        </div>
      </div>
    </main>
  );
}
