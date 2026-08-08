
import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosBriefcase } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";
import { IoRocketSharp } from "react-icons/io5";
import { MdArrowBack } from "react-icons/md";

const About = () => {

  let redir = useNavigate();

  return (
    <>
      <section className="mt-[40px] mb-[68px] ml-[12px] mr-[18px] w-full overflow-hidden">

        {/* Logo */}
        <div className="ml-4 sm:ml-8 md:ml-[60px] mb-[24px]">
          <img
            onClick={() => redir("/")}
            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/q_auto/f_auto/v1770048496/Blue_Logo_ijoxkj.png"
            alt="Alvent Logo"
            className="w-[150px] sm:w-[170px] md:w-[189px] h-auto cursor-pointer"
          />
        </div>


        {/* Heading */}
        <div className="content flex flex-col items-center px-4">

          <div
            className="
              w-[44px]
              h-[44px]
              rounded-[22px]
              bg-[#E5EDF9]
              flex
              items-center
              justify-center
              cursor-pointer
            "
            onClick={() => redir("/")}
          >
            <MdArrowBack
              className="text-[#123499] text-[30px]"
            />
          </div>


          <p
            className="
              text-[36px]
              sm:text-[48px]
              md:text-[60px]
              font-extrabold
              text-[#333333]
              text-center
            "
          >
            About Us
          </p>


          <p
            className="
              text-[18px]
              sm:text-[20px]
              md:text-[24px]
              font-normal
              text-[#333333]
              w-full
              max-w-[800px]
              text-center
            "
          >
            Building seamless event experiences through smart tools and a
            beautiful user journey.
          </p>

        </div>



        {/* Insight */}

        <div
          className="
            insight
            bg-[#2F3B4C]
            w-full
            min-h-[346px]
            flex
            flex-col
            md:flex-row
            items-center
            justify-center
            gap-6
            md:gap-[120px]
            text-[#FFFFFF]
            mt-[40px]
            px-4
            py-10
            md:py-0
          "
        >


          {/* Organiser */}

          <div
            className="
              organiser
              bg-[#F8F9FC1A]
              rounded-[10px]
              p-5
              sm:p-[30px]
              w-full
              max-w-[418px]
              h-auto
              flex
              flex-col
              gap-4
              border
              border-1
              border-[#ABABAB]
            "
          >

            <div className="headingb flex items-center gap-3">

              <IoIosBriefcase
                className="
                  text-[#123499]
                  text-[32px]
                  sm:text-[40px]
                  flex-shrink-0
                "
              />

              <p className="font-bold text-[20px] sm:text-[24px]">
                For Organizers
              </p>

            </div>


            <p className="text-[15px] sm:text-[16px] text-[#DDDDDD]">
              From ticket sales to insights, we power your event from start to finish.
            </p>


            <ul className="list-disc pl-5 text-[15px] sm:text-[16px] text-[#ABABAB]">

              <li>Instant ticket creation</li>

              <li>Sales and attendance analytics</li>

              <li>Real-time payment tracking</li>

            </ul>

          </div>



          {/* Attendees */}

          <div
            className="
              attendees
              bg-[#F8F9FC1A]
              rounded-[10px]
              p-5
              sm:p-[30px]
              w-full
              max-w-[418px]
              h-auto
              flex
              flex-col
              gap-4
              border
              border-1
              border-[#ABABAB]
            "
          >

            <div className="headingb flex items-center gap-3">

              <FaUsers
                className="
                  text-[#E7470D]
                  text-[32px]
                  sm:text-[40px]
                  flex-shrink-0
                "
              />

              <p className="font-bold text-[20px] sm:text-[24px]">
                For Attendees
              </p>

            </div>


            <p className="text-[15px] sm:text-[16px] text-[#DDDDDD]">
              From ticket sales to insights, we power your event from start to finish.
            </p>


            <ul className="list-disc pl-5 text-[15px] sm:text-[16px] text-[#ABABAB]">

              <li>Instant ticket creation</li>

              <li>Sales and attendance analytics</li>

              <li>Real-time payment tracking</li>

            </ul>

          </div>


        </div>



        {/* Mission */}

        <div
          className="
            mission
            flex
            flex-col
            items-center
            mt-[50px]
            md:mt-[70px]
            mb-[60px]
            md:mb-[80px]
            px-4
          "
        >

          <div className="mb-[24px]">

            <IoRocketSharp
              className="text-[#123499] text-[40px]"
            />

          </div>


          <div>

            <p
              className="
                text-[36px]
                sm:text-[48px]
                md:text-[60px]
                font-extrabold
                text-[#333333]
                mb-[24px]
                text-center
              "
            >
              Our Mission
            </p>

          </div>


          <div className="w-full">

            <p
              className="
                text-[18px]
                sm:text-[20px]
                md:text-[24px]
                font-normal
                text-[#333333]
                w-full
                max-w-[980px]
                text-center
                mx-auto
              "
            >
              We empower communities and creators with the tools to host
              exceptional events, removing the friction from planning,
              ticketing, and engagement.
            </p>

          </div>

        </div>



        {/* Second Insight Section */}

      <div
  className="experiences w-full h-[290px] flex flex-col items-center justify-center"
  style={{
    background: "linear-gradient(60deg, #123499 75%, #FF7F50 100%)"
  }}
>
            <p className="text-[#FFFFFF] text-[24px] lg:text-[40px] font-center font-extrabold mb-[34px] px-[24px] ">Let's build great experiences, one event at a time!</p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-[20px] mx-auto w-full">
  <button className="w-[190px] h-[42px] bg-[#F3F5FA] rounded-[12px] px-[24px] text-[#123499] text-[14px] lg:text-[16px] font-medium">
    Create Your Account
  </button>

  <button className="w-[190px] h-[42px] border border-[#FFFFFF] rounded-[12px] px-[24px] text-[16px] font-medium text-white hover:bg-[#FF7F50] hover:border-[#FF7F50]">
    Create Your Event
  </button>
</div>
        </div>
  
      </section>
    </>
  );
};

export default About;
