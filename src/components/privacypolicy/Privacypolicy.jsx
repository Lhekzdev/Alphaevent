import React from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const PrivacyPolicy = () => {
  const redir = useNavigate();

  return (
    <>
      <section className="w-full px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-40 pt-8 sm:pt-12 md:pt-16 lg:pt-20">
        
        {/* Logo */}
        <div
          onClick={() => redir("/")}
          className="mb-6 cursor-pointer"
        >
          <img
            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/q_auto/f_auto/v1770048496/Blue_Logo_ijoxkj.png"
            alt="Alvent Logo"
            className="w-[100px] sm:w-[120px] md:w-[130px] h-auto"
          />
        </div>

        {/* Back Button */}
        <div
          className="
            w-11 h-11
            rounded-full
            bg-[#E5EDF9]
            flex items-center justify-center
            cursor-pointer
            mb-6
          "
          onClick={() => redir("/")}
        >
          <MdArrowBack className="text-[#123499] text-[28px]" />
        </div>

        {/* Content */}
        <div className="w-full max-w-[1100px]">

          {/* Header */}
          <div className="mb-6">
            <p className="text-[36px] sm:text-[42px] md:text-[50px] lg:text-[60px] leading-tight font-extrabold text-[#333333]">
              Privacy Policy
            </p>

            <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal text-[#ABABAB] mt-2">
              Effective Date:{" "}
              <span className="text-[#333333]">
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </p>
          </div>

          {/* Welcome */}
          <div className="mb-8">
            <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-7 md:leading-8 font-normal">
              Welcome to <span className="font-extrabold">Alvent!</span> These
              Terms of Service (“Terms”) govern your use of our platform. By
              creating an account or using our services, you agree to these
              Terms.
            </p>
          </div>

          {/* 1. What We Collect */}
          <ol className="list-decimal pl-6 text-[24px] sm:text-[27px] md:text-[30px] lg:text-[32px] font-bold text-[#333333]">
            <li>What We Collect</li>
          </ol>

          <ul className="list-disc pl-6 sm:pl-8 text-[16px] sm:text-[18px] md:text-[20px] leading-7 font-normal text-[#333333] mb-8">
            <li>Event organizer data (name, email, phone, payment info)</li>
            <li>Attendee data (name, email, ticket info)</li>
            <li>Analytics on how users interact with the platform</li>
          </ul>

          {/* 2. How We Use It */}
          <ol
            className="list-decimal pl-6 text-[24px] sm:text-[27px] md:text-[30px] lg:text-[32px] font-bold text-[#333333]"
            start={2}
          >
            <li>How We Use It</li>
          </ol>

          <ul className="list-disc pl-6 sm:pl-8 text-[16px] sm:text-[18px] md:text-[20px] leading-7 font-normal text-[#333333] mb-8">
            <li>Deliver tickets and event updates</li>
            <li>Process payments</li>
            <li>Respond to complaints or support issues</li>
            <li>Improve our platform performance</li>
          </ul>

          {/* 3. Who We Share It With */}
          <ol
            className="list-decimal pl-6 text-[24px] sm:text-[27px] md:text-[30px] lg:text-[32px] font-bold text-[#333333]"
            start={3}
          >
            <li>Who We Share It With</li>
          </ol>

          <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-7 font-normal text-[#333333]">
            We do <span className="font-semibold">not sell</span> your data.
            We only share data with trusted third parties, like:
          </p>

          <ul className="list-disc pl-6 sm:pl-8 text-[16px] sm:text-[18px] md:text-[20px] leading-7 font-normal text-[#333333] mb-8">
            <li>Payment processors (e.g., Paystack)</li>
          </ul>

          {/* 4. Your Rights */}
          <ol
            className="list-decimal pl-6 text-[24px] sm:text-[27px] md:text-[30px] lg:text-[32px] font-bold text-[#333333]"
            start={4}
          >
            <li>Your Rights</li>
          </ol>

          <div className="text-[16px] sm:text-[18px] md:text-[20px] leading-7 flex flex-col sm:flex-row sm:flex-wrap gap-1 sm:gap-2 items-start sm:items-center font-normal text-[#333333] mb-10">
            <p>
              You can request to delete or update your data by contacting us at
            </p>

            <a
              href="mailto:info.alvent.ng@gmail.com"
              className="text-[#123499] font-semibold break-all hover:underline"
            >
              info.alvent.ng@gmail.com
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
