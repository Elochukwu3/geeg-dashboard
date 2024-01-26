import Navbar from "@/components/nav-bar/NavBar";
import Sidebar from "@/components/side-bar/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex text-black min-h-screen flex-col p-0 m-0 relative">
      <div className="flex h-full min-h-screen">
        <div className="sticky top-0 left-0 h-full flex max-w-20 w-full  shrink-0 flex-col gap-8">
       <Sidebar/>
        </div>
        <div className="flex-1">
          <div className="sticky top-0 max-w-[1360px]"><Navbar/></div>
          <div>content</div>
        </div>
      </div>
    </main>
  );
}
