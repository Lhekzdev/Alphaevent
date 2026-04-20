import React from 'react'
import SupportForm from "../../../components/Landingcont/Footer/SupportForm"
import helpTalk1 from '../../../assets/helpTalk1.svg'
import helptalk2 from '../../../assets/helptalk2.svg'


const Support = () => {
  return (
    <>
      <section className="w-full h-[1024px] relative   flex  items-center ">
        <div className="relative w-[1000px] h-full ml-[130px]">
        <div className="absolute  animate-zoom  bg-center z-0">
    <img
      src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1749680750/confident-customer-service-agent_1_1_zjkpmz.png"
      className="w-full max-w-[720px] h-[1024px]"
      alt="Customer Service"
    />
  </div>
            {/* <div className='absolute bottom-[260px] left-[50px]'>
                <img src={helptalk2} alt="" className='mb-[5px] mr-[80px] pr-[80px]'/>
                <img src={helpTalk1} alt="" />
            </div> */}
          {/* <div className="absolute bottom-20 left-10 ml-[40px] bg-[#EEF2FFCC] px-[30px] py-[20px] w-[430px] h-[180px] rounded-lg text-black">
            <p className="text-[24px] font-bold mb-4">Need Help With Your Ticket?</p>
            <p className="text-[16px] w-[350px]">
              We’re here to assist you with any ticketing or payment issues. Submit a report and our team will respond within 24 hours.
            </p>
          </div> */}
      <div className='absolute bottom-[290px] left-[90px]'>
          <img src="https://res.cloudinary.com/dqtyrjpeh/image/upload/q_auto/f_auto/v1776696225/Button_vn70ps.png" className='w-[450px]'  alt="" />
          </div>
        
        </div>
  

        <SupportForm />
      </section>
    </>
  )
}

export default Support
