import React from 'react'
import SupportForm from "../../../components/Landingcont/Footer/SupportForm"
import helpTalk1 from '../../../assets/helpTalk1.svg'
import helptalk2 from '../../../assets/helptalk2.svg'


const Support = () => {
  return (
    <>
      <section className="w-full h-[1024px]   relative  bg-white flex  ">
        <div className="relative md:flex hidden   ">
        <div className="absolute  animate-zoom  bg-center z-0">
    <img
      src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1749680750/confident-customer-service-agent_1_1_zjkpmz.png"
      className=" "
      alt="Customer Service"
    />
  </div>
         
            <div className="w-[560px] relative mt-[500px] ml-[144px] mr-[26px] mb-[260px] bg-transparent h-[264px]">
            <div className='relative'>
                <img src={helptalk2} alt="" className='mb-[5px] absolute h-[24px] w-[24px]  '/>
                <img src={helpTalk1} alt="" className='w-[36px] absolute h-[36px] mt-[24px] ml-[22px]' />
            </div>
         
          <div className="absolute  bg-[#EEF2FFCC]  rounded-[20px] w-[492px] h-[206px] mt-[58px] ml-[58px] p-[20px] text-black">
            <p className="text-[24px] font-bold mb-4">Need Help With Your Ticket?</p>
            <p className="text-[16px] w-[350px]">
              We’re here to assist you with any ticketing or payment issues. Submit a report and our team will respond within 24 hours.
            </p>
          </div>

          </div>
        </div>
        
        {/* Image Ends */}

   <div className='max-w-[720px]'>
      <SupportForm/>
 </div>
      </section>
    </>
  )
}

export default Support
