import React from "react";
import logoSU from "../../assets/logoSU.svg";
import organizer from "../../assets/organizer.svg";
import attendees from "../../assets/attendees.svg";
import mission from "../../assets/mission.svg";
import { useNavigate } from "react-router-dom";

const About = () => {

  let redir =useNavigate()
  return (
    <>
      <section className=" mt-[40px]  mb-[68px]">
        <div onClick={()=>{redir('/') }}  className="logo mb-[24px] cursor-pointer ml-[60px]">
          <img  src={logoSU} alt="Logo" />
        </div>

        {/* Heading */}
        <div className="content flex flex-col items-center ">
          <p className="text-[60px] font-extrabold text-[#333333]">About Us</p>
          <p className="text-[24px] font-normal text-[#333333] w-[800px] text-center">
            Building seamless event experiences through smart tools and a
            beautiful user journey.
          </p>
        </div>

        

        <div className="insight bg-[#2F3B4C] w-full h-[346px] flex items-center justify-center gap-[120px] text-[#FFFFFF] mt-[40px]">

        {/* organiser */}
  <div className="organiser bg-[#DDDDDD66] rounded-[10px] p-[30px] w-[418px] h-[auto] flex flex-col gap-4 border border-1 border-[#ABABAB]">
    <div className="headingb flex items-center gap-3">
      <img src={organizer} alt="Organizer icon" className="w-[32px] h-[32px]" />
      <p className="font-bold text-[24px]">For Organizers</p>
    </div>
    <p className="text-[16px] text-[#DDDDDD]">
      From ticket sales to insights, we power your event from start to finish.
    </p>
    <ul className="list-disc pl-5 text-[16px] text-[#ABABAB] ">
      <li>Instant ticket creation</li>
      <li>Sales and attendance analytics</li>
      <li>Real-time payment tracking</li>
    </ul>
  </div>

          {/* attendees */}
  <div className="attendees bg-[#DDDDDD66] rounded-[10px] p-[30px] w-[418px] h-[auto] flex flex-col gap-4 border border-1 border-[#ABABAB]">
    <div className="headingb flex items-center gap-3">
      <img src={attendees} alt="Organizer icon" className="w-[32px] h-[32px]" />
      <p className="font-bold text-[24px]">For Attendees</p>
    </div>
    <p className="text-[16px] text-[#DDDDDD]">
      From ticket sales to insights, we power your event from start to finish.
    </p>
    <ul className="list-disc pl-5 text-[16px] text-[#ABABAB] ">
      <li>Instant ticket creation</li>
      <li>Sales and attendance analytics</li>
      <li>Real-time payment tracking</li>
    </ul>
  </div>

          {/* End Insight */}
        </div>

        {/* Misson */}
        <div className="mission flex flex-col items-center mt-[70px] mb-[80px]">
            <div className="mb-[24px]">
                <img src={mission} alt="" />
            </div>
            <div>
                <p className="text-[60px] font-extrabold text-[#333333] mb-[24px]">Our Mission</p>
            </div>
            <div>
                <p className="text-[24px] font-normal text-[#333333] w-[980px] text-center">We empower communities and creators with the tools to host exceptional events, removing the friction from planning, ticketing, and engagement.</p>
            </div>
        </div>
        {/* mission ends */}

        <div className="experiences bg-[#2D6CCF] w-full h-[290px] flex flex-col items-center justify-center">
            <p className="text-[#FFFFFF] text-[40px] font-extrabold mb-[34px]">Let's build great experiences, one event at a time!</p>

            <div className="flex gap-[31px]">
                <button className="w-[175px] h-[42px] bg-[#FFFFFF] rounded-[12px] px-[24px]  text-[#2D6CCF] font-light">
                Create Your Event
                </button>
                <button className="border border-1 border-[#FFFFFF] w-[175px] h-[42px]  rounded-[12px] px-[24px]  text-[rgb(255,255,255)] font-light hover:bg-[#FF7F50] hover:border-[#FF7F50]">
                Create Your Event
                </button>
            </div>
        </div>
      </section>
    </>
  );
};

export default About;
