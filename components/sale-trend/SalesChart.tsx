import React from 'react'

const SalesChart = () => {
    const frequency = ["50.000","40.000",  "30.000", "20.000", "10.000", "5.000", "0"]
    const abbreviatedMonths = Array.from({ length: 12 }, (_, monthIndex) => {
        const date = new Date(2000, monthIndex, 1);
        return date.toLocaleString('default', { month: 'short' });
    });
    
    const data = [30, 43, 3, 25, 50, 70, 10, 40, 50, 16, 48, 55]
    
  return (
    <div>
        <section className='relative h-auto'>
            <div className='space-y-3 my-3'>
                {frequency.map((item)=>(
                <div  key={`${item}chart`} className='flex gap-5 justify-between'>
                <p className='w-auto pr-2'>{item}</p>
                <div className='justify-end w-[90%] border-t-2 border-dashed  border-[#F5F5F5]'/>
            </div>
            ))}
            </div>
           <div  className='flex gap-3 px-2 text-sm justify-between text-[#525252] w-[90%] ml-auto'>
            {abbreviatedMonths.map((item, index) => (
                <div key={item}>
                <p className='w-auto'>{item}</p>
            </div>
            ))}
           </div>
           <div className='absolute inset-y-0 items-end right-0 bottom-5 max-md:gap-2 pb-6 h-full  flex gap-3 px-2 text-sm justify-between w-[90%] ml-auto'>
           {data.map((item) => (
                <div key={`${item}charBar`} 
                style={{height:`${item}%`}}
                className={ `${item >= 70 ? "grad" : "bg-[#34CAA51A]"} w-8 max-md:w-5 rounded-t-full  origin-bottom'`}/>
            ))}
           </div>
        </section>
    </div>
  )
}

export default SalesChart