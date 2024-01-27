import Image from 'next/image'
import React from 'react'

const Sales = () => {
  return (
    <div className='border-[#EDF2F7] p-2 rounded-[8px] border h-fit'>
    <div className='flex justify-between items-center'>
    <div className='border-[0.8px] border-[#E6E6E6] w-10 h-10 flex justify-center items-center rounded-full'>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.25 22.5C17.2165 22.5 18 21.7165 18 20.75C18 19.7835 17.2165 19 16.25 19C15.2835 19 14.5 19.7835 14.5 20.75C14.5 21.7165 15.2835 22.5 16.25 22.5Z" fill="#34CAA5"/>
  <path d="M8.25 22.5C9.2165 22.5 10 21.7165 10 20.75C10 19.7835 9.2165 19 8.25 19C7.2835 19 6.5 19.7835 6.5 20.75C6.5 21.7165 7.2835 22.5 8.25 22.5Z" fill="#34CAA5"/>
  <path opacity="0.4" d="M4.84 3.94L4.64 6.39C4.6 6.86 4.97 7.25 5.44 7.25H20.75C21.17 7.25 21.52 6.92999 21.55 6.50999C21.68 4.73999 20.33 3.3 18.56 3.3H6.28999C6.18999 2.86 5.98999 2.44 5.67999 2.09C5.18999 1.56 4.49 1.25 3.77 1.25H2C1.59 1.25 1.25 1.59 1.25 2C1.25 2.41 1.59 2.75 2 2.75H3.74001C4.05001 2.75 4.34 2.88001 4.55 3.10001C4.76 3.33001 4.86 3.63 4.84 3.94Z" fill="#34CAA5"/>
  <path d="M20.5101 8.75H5.17006C4.75006 8.75 4.41005 9.07 4.37005 9.48L4.01005 13.83C3.87005 15.53 5.21006 17 6.92006 17H18.0401C19.5401 17 20.8601 15.77 20.9701 14.27L21.3001 9.60001C21.3401 9.14001 20.9801 8.75 20.5101 8.75Z" fill="#34CAA5"/>
</svg>
</div>
<svg width="106" height="33" viewBox="0 0 106 33" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.00584 8.46666H1L1 33L105 33V11.4536L101.991 18.9203L100.796 21.9069H99.3945L96.5917 18.9203L94.6298 21.907L88.744 21.9072L85.661 18.9204L83.9793 14.4396L81.5317 16.6803L79.3253 18.9203L78.6362 22.3333L77.2349 21.9069H75.5142L72.3048 11.4536L71.3019 14.4403L69.6972 11.4536L68.4937 16.6803L65.2844 7.72028L63.4791 11.4536H60.0692L56.4587 3.98696L54.2523 7.72028L51.3465 5.48L47.806 11.4533L45.5296 1L43.8821 11.4533L32.8928 15.9333L31.4887 12.9466H30.0847L26.8753 8.46666H23.666L22.4625 12.9466L17.6485 3.98666L15.6426 15.9333L14.6397 11.4533H12.4333L10.4274 1L8.4216 9.95999L7.41868 5.48H4.81109L3.00584 8.46666Z" fill="url(#paint0_linear_2133_4778)" fill-opacity="0.16"/>
  <path d="M1 8.4667H3.00584L4.81109 5.48004H7.41868L8.4216 9.96003L10.4274 1.00004L12.4333 11.4534H14.6397L15.6426 15.9333L17.6485 3.9867L22.4625 12.9467L23.666 8.4667H26.8753L30.0847 12.9467H31.4887L32.8928 15.9333L43.8821 11.4534L45.5296 1.00004L47.806 11.4534L51.3465 5.48004L54.2523 7.72032L56.4587 3.987L60.0692 11.4536H63.4791L65.2844 7.72032L68.4937 16.6803L69.6972 11.4536L71.3019 14.4403L72.3048 11.4536L75.5142 21.907H77.2349L78.6362 22.3334L79.3253 18.9203L81.5317 16.6803L83.9794 14.4396L85.661 18.9204L88.744 21.9073L94.6298 21.907L96.5917 18.9203L99.3945 21.907H100.796L101.991 18.9203L105 11.4536" stroke="#ED544E" stroke-linecap="round"/>
  <defs>
    <linearGradient id="paint0_linear_2133_4778" x1="53" y1="33" x2="53" y2="1" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ED544E" stop-opacity="0"/>
      <stop offset="0.809892" stop-color="#ED544E"/>
    </linearGradient>
  </defs>
</svg>
    </div>
   <span className='space-y-2'>
   <p className='text-[#898989] text-base'>Average sales</p>
    <p className='text-[#3A3F51] text-xl'>1567</p>
   </span>
    <div className='flex justify-between items-center ' >
        <div className='text-[#ED544E] px-1 gap-1 text-[11px] flex rounded-full' style={{background: "rgba(237, 84, 78, 0.12)"}}>
            <Image className='object-contain' src={"/icon/Group.svg"} alt='signa' width={12} height={12}/>
            <span>23.5%</span>
        </div>
        <div className='text-[12px] text-[#898989]'>vs. previous month</div>
    </div>
    </div>
  )
}

export default Sales