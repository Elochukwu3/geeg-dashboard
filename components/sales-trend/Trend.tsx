import React from 'react'
import { TreandWrapper, Trendinner  } from '../style'
import SalesChart from '../sale-trend/SalesChart'
const Trend = () => {
  return (
    <TreandWrapper>
        <Trendinner >
            <span className='text-lg font-normal'>Sales Trends</span>
            <div className='flex gap-2'>
            <span>Short by :</span>
            <div className='p-1 rounded-full text-[#3A3F51] text-[12px] flex items-center gap-1 border border-[#EDF2F7]'>
                <span>Weekly</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z" fill="#0D062D"/>
</svg>
            </div>
            </div>
        </Trendinner>
        <SalesChart/>
    </TreandWrapper>
  )
}

export default Trend