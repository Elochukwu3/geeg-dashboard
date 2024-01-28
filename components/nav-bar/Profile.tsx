import Image from "next/image";
import React from "react";
import CalendarSvg from "./Calendar"
import NotifySvg from "./Notify";

const Profile = ({val}: {val: boolean}) => {
  return (
    <div className={`${val ? "max-lg:block p-2 space-y-3": "max-lg:hidden "} bg-white z-30 max-lg:block flex gap-2 items-center max-lg:absolute right-0 max-lg:-bottom-[160px]`}>
            <div className="flex gap-2 pr-1" title="calendar">
                <CalendarSvg/>
                <p>November 15, 2023</p>
            </div>
            <div className="max-lg:hidden block"><NotifySvg/></div>
            <div className="flex items-center gap-1 boreder-[#DADDDD] border-[0.769px] p-1 rounded-[28px]">
                <Image
                src={"/images/profile.png"}
                width={38}
                height={38}
                className="object-contain rounded-full"
                alt="profile"
                title="Justin"
                />
                <div>
                    <p className="text-base text-[#26282C]">Justin Bergson</p>
                    <p className="text-[#787486] text-sm">Justin@gmail.com</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z" fill="#0D062D"/>
</svg>
            </div>
            <div className="max-lg:block hidden"><NotifySvg/></div>
        </div>
  )
}

export default Profile