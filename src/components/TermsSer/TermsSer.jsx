import React from "react";
import logoSU from "../../assets/logoSU.svg";
import { useNavigate } from "react-router-dom";
const TermsSer = () => {

  let redir = useNavigate();
  return (
    <>
      <section className="ml-[160px] cursor-pointer mt-[90px] mr-[160px]">
        <div className="logo mb-[24px]">
          <img onClick={()=> redir('/')}  src={logoSU} alt="Logo" />
        </div>

        <div className="content">
          <div className="header  mb-[15px]">
            <p className="text-[60px] font-extrabold text-[#333333]">
            Terms of Service
            </p>
            <p className="text-[16px] font-normal text-[#ABABAB]">
              Effective Date:{" "}
              <span className="text-[#333333]">
  {new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })}
</span>

            </p>
          </div>

          <div className="welcome mb-[40px]">
            <p className="text-[20px] font-normal">
              Welcome to <span className="font-extrabold">Alvent!</span> These
              Terms of Service (“Terms”) govern your use of our platform. By
              creating an account or using our services, you agree to these
              Terms.
            </p>
          </div>

          {/* Collection Platform */}
          <ol className="list-decimal pl-6 text-[32px] font-bold text-[#333333]">
            <li>Who Can Use the Platform</li>
          </ol>
          <p className="list-disc pl-6 text-[20px] font-normal text-[#333333] mb-[40px]">
            Only event organizers may create accounts. Attendees do not need an
            account to access tickets. You must be at least 18 years old to
            create an organizer account.
          </p>

<hr />
          {/* Use Responsibilities */}
          <ol
            className="list-decimal pl-6 text-[32px] font-bold text-[#333333]"
            start={2}
          >
            <li>Your Responsibilities</li>
          </ol>
          <p className="list-disc pl-6 text-[20px] font-normal text-[#333333] mb-[10px]">
            Organizers are responsible for:
          </p>
          <ul className="list-disc pl-6 text-[20px] font-normal text-[#333333] mb-[10px]">
            <li> Providing accurate event details</li>
            <li>Managing ticket sales and refunds</li>
            <li>Handling event logistics and communication with attendees</li>
          </ul>
          <p className="list-disc pl-6 text-[20px] font-normal text-[#333333] mb-[40px]">
            We are not responsible for the success, quality, or delivery of any
            event.
          </p>


          <hr />
          {/* Payments Line */}
          <ol
            className="list-decimal pl-6 text-[32px] font-bold text-[#333333]"
            start={3}
          >
            <li>Payments</li>
          </ol>
          <p className="text-[20px] font-normal text-[#333333] mb-[40px]">
            Payments are processed through Paystack. We do not store card
            details. Revenue from tickets is paid to organizers after standard
            processing time.
          </p>


          <hr />
          {/* Cancellations Line */}
          <ol
            className="list-decimal pl-6 text-[32px] font-bold text-[#333333]"
            start={4}
          >
            <li>Refunds & Cancellations</li>
          </ol>
          <p className="text-[20px] font-normal text-[#333333] mb-[40px]">
          Organizers manage their own refund policies. We are not liable for event cancellations, delays, or disputes between attendees and organizers.
          </p>


          <hr />
          {/* Rights Line */}
          <ol
            className="list-decimal pl-6 text-[32px] font-bold text-[#333333]"
            start={5}
          >
            <li>Platform Rights</li>
          </ol>
          <p className="text-[20px] font-normal text-[#333333] mb-[40px]">
            We may suspend accounts that violate our policies or abuse the
            platform. We reserve the right to modify or terminate services at
            any time.
          </p>

          {/* content ends here */}
        </div>
      </section>
    </>
  );
};

export default TermsSer;
