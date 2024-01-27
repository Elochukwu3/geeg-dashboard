"use client"
import { ORDER_DATA } from '@/utils/db/orderData'
import { TreandWrapper, Trendinner  } from '../style'
import Image from 'next/image';
import { formatNumberInput } from '@/utils/helper/numberConvert';
import useCollapseAll from '@/utils/helper/useCollapse';

const LastOrder = () => {
    const orderHeader= ["Name", "Date", "Amount", "Status", "Invoice"];
    const { collapse, handler } = useCollapseAll();
  return (
    <TreandWrapper>
        <Trendinner >
        <span className='text-lg font-normal text-[#26282C]'>Last Orders</span>
            <span className='text-[#34CAA5] pr-3'>See All</span>
        </Trendinner>
        <div className='px-2 mx-auto'>
        <div className='grid grid-cols-6 py-3'>
            {orderHeader.map((item, i)=>(
                <span  key={`keys${item}`} className={`${i == 0 && "col-span-2"} text-base font-[500] text-[#9CA4AB]`}>
                    {item}
                </span>
            ))}
        </div>
        {ORDER_DATA.map(({icon, name,date, id, amount, Status}, i)=>{
            const StatusText = Status ? "Paid" : "Refund"
            return(
            <div key={`key${id}`}>
            <div className='grid grid-cols-6 py-3 border-t border-[#EDF2F6] text-base'>
                <span className={"col-span-2 flex gap-2 items-center"}>
                    <Image src={icon} width={32} height={32} alt={name} className='rounded-full'/>
                    <span>{name}</span>
                    </span>
                <span className='font-normal text-[#737373]'>{date}</span>
                <span>${formatNumberInput(amount)}</span>
                <span className={StatusText === "Paid" ? "text-[#34CAA5]" : "text-[#ED544E]"}>{StatusText}</span>
                <span className='text-sm cursor-pointer' onClick={()=>handler(i)}>View</span>
            </div>
            <div
              className={`overflow-hidden text-sm transition-[max-height] duration-300 ${
                collapse === i? "max-h-80" : "max-h-0"
              }`}
            >
                Invioce to be here
            </div>
            </div>
            )
        })}
        </div>
    </TreandWrapper>
  )
}

export default LastOrder