import React from 'react'
import locatn from "/locatn.svg"
import arrowd from "/arrowd.svg"
import line from "/line.svg"
import search from "/search.svg"

const imgi = "https://res.cloudinary.com/dzyvwxh7n/image/upload/v1731183922/Ellipse_12_qkw4ft.png"
const imgii ="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1731183923/Ellipse_13_djj8jp.png"
const imgiii ="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1731183923/Ellipse_11_bmkvho.png"
const imgiv = "https://res.cloudinary.com/dzyvwxh7n/image/upload/v1731183922/Ellipse_10_ozxkt4.png"
const imgv = "https://res.cloudinary.com/dzyvwxh7n/image/upload/v1731183923/Ellipse_9_xtbof4.png"
const imgvi = "https://res.cloudinary.com/dzyvwxh7n/image/upload/v1731183923/Ellipse_8_md8ttk.png"
const Herocontainer = () => {
  return (
    <div className='px-5 md:px-[80px]  my-[120px] '>
 
<div loading="lazy" className=' bg-cover  bg-black opacity-[100%]  bg-center  h-screen rounded-[28px] w-full '  style={{ backgroundImage: "url('https://res.cloudinary.com/dzyvwxh7n/image/upload/v1731133726/alventbg_mfjdm4.jpg')" }} >
<ul className=' ' > 
  <li className='relative'><img className=' absolute w-[60px]  md:w-[65px]    pt-[70px] ml-[2.083vw] md:ml-[5.68vw]' src={imgi} alt="" /></li>
  <li className='relative'><img loading='lazy' className='absolute hidden lg:flex w-[148px] md:w-[148px] md:pt-[213px]  '  src={imgii} alt="" /></li>
  <li className='relative'><img className='  absolute w-[40px] md:w-[70px] ml-3 md:ml-[5.36vw] pt-[550px]  md:pt-[510px]   ' src={imgiii} alt="" /></li>

  <li className='relative'> <img loading='lazy' className=' absolute hidden lg:flex md:h-[43px] md:w-[43px] right-0 md:mr-[49px] md:mt-[113px] '  src={imgiv} alt="" /></li>
  <li className='relative'> <img loading='lazy' className=' absolute hidden lg:flex w-[43px] md:w-[91px]  h-[90px] right-0 md:mr-[9.60vw] md:mt-[211px] '  src={imgv} alt="" /></li>
  <li className='relative'> <img loading='lazy' className=' absolute hidden lg:flex w-[7.71vw]  md:w-[91px]  h-[148px] right-0  md:mt-[399px] '  src={imgvi} alt="" /></li>

</ul>
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