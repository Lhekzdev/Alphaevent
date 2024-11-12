import React from 'react'
import locatn from "/locatn.svg"
import arrowd from "/arrowd.svg"
import line from "/line.svg"
import search from "/search.svg"


const Herocontainer = () => {
  return (
    <div className='px-5 md:px-[80px] pt-[60px] my-[60px] '>
 
<div loading="lazy" className=' bg-cover  bg-black opacity-[100%]  bg-center  h-screen rounded-[28px] w-full '  style={{ backgroundImage: "url('https://res.cloudinary.com/dzyvwxh7n/image/upload/v1731364264/Hero_Section_ooujz0.png')" }} >

<div className='flex flex-col text-[16px] gap-y-[71px] text-white items-center justify-center px-[10px] w-full py-[184px] h-screen'>
<ol>
  <h4 className='leading-[30px]  max-w-full md:max-w-full lg:max-w-[50.63vw] lg:h-[108px] text-[32px] md:text-[42px] lg:text-[52px]  text-center md:leading-[54.08px] font-bold'>Find, Explore, and Experience Events with a Single Click!</h4>
</ol>

<div className='md:max-w-[600px] lg:max-w-[613px] '>
  <ol className='grid mt-20 gap-y-4 md:flex  font-bold border-[2px]  items-center md:px-[24px] md:max-w-[600px] lg:max-w-[613px] md:h-[64px] py-[20px] px-[10px] md:py-[12px] border-white   place-content-center '>
    <li className='flex  '>
      <img className='pr-[4px] ' src={locatn} alt="locatn" />
      <h3 className='pr-[25px] md:pr-[2.13vw] '>Port Harcourt</h3>
      <img loading='lazy' className="md:pr-[40px]" src={arrowd} alt="arrowd" />
    </li>
<img className='hidden md:flex' src={line} alt="line" />
    <li className='flex pl-[6px] md:pl-[2.13vw] items-center'>
<h3 className='pr-[30px] md:pr-[76px]'>Search for an event</h3>
<img className='w-[40px] h-[40px]' src={search} alt="search" />

    </li>
  </ol>


</div>
</div>
</div>


 </div>

  )
}

export default Herocontainer