import React from "react";
import logoSU from "../../assets/logoSU.svg";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {

  let redir = useNavigate();
  return (
    <>
      <section className="ml-[160px] mt-[90px] mr-[160px]">
        <div className="logo cursor-pointer mb-[24px]">
          <img  onClick={()=> redir('/')}   src={logoSU} alt="Logo" />
        </div>

        <div className="content">
          <div className="header  mb-[15px]">
            <p className="text-[60px] font-extrabold text-[#333333]">
              Privacy Policy
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

          {/* Collection Line */}
          <ol className="list-decimal pl-6 text-[32px] font-bold text-[#333333]">
            <li>What We Collect</li>
          </ol>
          <ul className="list-disc pl-6 text-[20px] font-normal text-[#333333] mb-[40px]">
            <li>Event organizer data (name, email, phone, payment info)</li>
            <li>Attendee data (name, email, ticket info)</li>
            <li>Analytics on how users interact with the platform</li>
          </ul>
<hr />
          {/* Use Line */}
          <ol
            className="list-decimal pl-6 text-[32px] font-bold text-[#333333]"
            start={2}
          >
            <li>How We Use It</li>
          </ol>
          <ul className="list-disc pl-6 text-[20px] font-normal text-[#333333] mb-[40px]">
            <li> Deliver tickets and event updates</li>
            <li>Process payments</li>
            <li>Respond to complaints or support issues</li>
            <li>Improve our platform performance</li>
          </ul>

          {/* lines */}
          <hr /> 
          {/* Share Line */}
          <ol
            className="list-decimal pl-6 text-[32px] font-bold text-[#333333]"
            start={3}
          >
            <li>Who We Share It With</li>
          </ol>
          <p className="text-[20px] font-normal text-[#333333]">
            We do not sell your data. We only share data with trusted third
            parties, like:
          </p>
          <ul className="list-disc pl-6 text-[20px] font-normal text-[#333333] mb-[40px]">
            <li>Payment processors (e.g., Paystack)</li>
          </ul>


          <hr />
          {/* Share Line */}
          <ol
            className="list-decimal pl-6 text-[32px] font-bold text-[#333333]"
            start={4}
          >
            <li>Your Rights</li>
          </ol>
          <p className="text-[20px] font-normal text-[#333333] mb-[40px]">
            You can request to delete or update your data by contacting us at 
            <a href="" className="text-[#2D6CCF]">
              info.alvent.ng@gmail.com
            </a>
          </p>

          {/* content ends here */}
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
