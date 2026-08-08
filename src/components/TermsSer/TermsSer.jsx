import React from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const TermsSer = () => {
  const redir = useNavigate();

  return (
    <>
      <section
        className="
          w-full
          px-5
          sm:px-8
          md:px-12
          lg:px-20
          xl:px-32
          2xl:px-40
          pt-8
          sm:pt-10
          md:pt-14
          lg:pt-20
        "
      >
        {/* Logo */}
        <div
          onClick={() => redir("/")}
          className="mb-6 cursor-pointer"
        >
          <img
            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/q_auto/f_auto/v1770048496/Blue_Logo_ijoxkj.png"
            alt="Alvent Logo"
            className="
              w-[100px]
              sm:w-[110px]
              md:w-[120px]
              lg:w-[130px]
              h-auto
            "
          />
        </div>

        {/* Back Button */}
        <div
          className="
            w-10
            h-10
            sm:w-11
            sm:h-11
            rounded-full
            bg-[#E5EDF9]
            flex
            items-center
            justify-center
            cursor-pointer
            mb-6
          "
          onClick={() => redir("/")}
        >
          <MdArrowBack
            className="
              text-[#123499]
              text-[25px]
              sm:text-[28px]
            "
          />
        </div>

        {/* Main Content */}
        <div className="w-full max-w-[1100px]">

          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <h1
              className="
                text-[36px]
                sm:text-[42px]
                md:text-[50px]
                lg:text-[60px]
                leading-tight
                font-extrabold
                text-[#333333]
              "
            >
              Terms of Service
            </h1>

            <p
              className="
                mt-2
                text-[13px]
                sm:text-[14px]
                md:text-[16px]
                font-normal
                text-[#ABABAB]
              "
            >
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

          {/* Introduction */}
          <div className="mb-8 sm:mb-10">
            <p
              className="
                text-[16px]
                sm:text-[17px]
                md:text-[18px]
                lg:text-[20px]
                leading-7
                sm:leading-8
                font-normal
                text-[#333333]
              "
            >
              Welcome to{" "}
              <span className="font-extrabold">Alvent!</span>{" "}
              These Terms of Service (“Terms”) govern your use of our
              platform. By creating an account or using our services,
              you agree to these Terms.
            </p>
          </div>

          {/* 1. Who Can Use the Platform */}
          <ol
            className="
              list-decimal
              pl-6
              text-[23px]
              sm:text-[26px]
              md:text-[29px]
              lg:text-[32px]
              leading-tight
              font-bold
              text-[#333333]
            "
          >
            <li>Who Can Use the Platform</li>
          </ol>

          <p
            className="
              text-[16px]
              sm:text-[17px]
              md:text-[18px]
              lg:text-[20px]
              leading-7
              sm:leading-8
              font-normal
              text-[#333333]
              mb-8
              sm:mb-10
            "
          >
            Only event organizers may create accounts. Attendees do not
            need an account to access tickets. You must be at least 18
            years old to create an organizer account.
          </p>

          {/* 2. Your Responsibilities */}
          <ol
            className="
              list-decimal
              pl-6
              text-[23px]
              sm:text-[26px]
              md:text-[29px]
              lg:text-[32px]
              leading-tight
              font-bold
              text-[#333333]
            "
            start={2}
          >
            <li>Your Responsibilities</li>
          </ol>

          <p
            className="
              text-[16px]
              sm:text-[17px]
              md:text-[18px]
              lg:text-[20px]
              leading-7
              font-normal
              text-[#333333]
              mb-2
            "
          >
            Organizers are responsible for:
          </p>

          <ul
            className="
              list-disc
              pl-6
              sm:pl-8
              text-[16px]
              sm:text-[17px]
              md:text-[18px]
              lg:text-[20px]
              leading-7
              sm:leading-8
              font-normal
              text-[#333333]
              mb-2
            "
          >
            <li>Providing accurate event details</li>
            <li>Managing ticket sales and refunds</li>
            <li>
              Handling event logistics and communication with attendees
            </li>
          </ul>

          <p
            className="
              text-[16px]
              sm:text-[17px]
              md:text-[18px]
              lg:text-[20px]
              leading-7
              sm:leading-8
              font-normal
              text-[#333333]
              mb-8
              sm:mb-10
            "
          >
            We are not responsible for the success, quality, or delivery
            of any event.
          </p>

          {/* 3. Payments */}
          <ol
            className="
              list-decimal
              pl-6
              text-[23px]
              sm:text-[26px]
              md:text-[29px]
              lg:text-[32px]
              leading-tight
              font-bold
              text-[#333333]
            "
            start={3}
          >
            <li>Payments</li>
          </ol>

          <p
            className="
              text-[16px]
              sm:text-[17px]
              md:text-[18px]
              lg:text-[20px]
              leading-7
              sm:leading-8
              font-normal
              text-[#333333]
              mb-8
              sm:mb-10
            "
          >
            Payments are processed through Paystack. We do not store card
            details. Revenue from tickets is paid to organizers after
            standard processing time.
          </p>

          {/* 4. Refunds & Cancellations */}
          <ol
            className="
              list-decimal
              pl-6
              text-[23px]
              sm:text-[26px]
              md:text-[29px]
              lg:text-[32px]
              leading-tight
              font-bold
              text-[#333333]
            "
            start={4}
          >
            <li>Refunds & Cancellations</li>
          </ol>

          <p
            className="
              text-[16px]
              sm:text-[17px]
              md:text-[18px]
              lg:text-[20px]
              leading-7
              sm:leading-8
              font-normal
              text-[#333333]
              mb-8
              sm:mb-10
            "
          >
            Organizers manage their own refund policies. We are not liable
            for event cancellations, delays, or disputes between attendees
            and organizers.
          </p>

          {/* 5. Platform Rights */}
          <ol
            className="
              list-decimal
              pl-6
              text-[23px]
              sm:text-[26px]
              md:text-[29px]
              lg:text-[32px]
              leading-tight
              font-bold
              text-[#333333]
            "
            start={5}
          >
            <li>Platform Rights</li>
          </ol>

          <p
            className="
              text-[16px]
              sm:text-[17px]
              md:text-[18px]
              lg:text-[20px]
              leading-7
              sm:leading-8
              font-normal
              text-[#333333]
              pb-10
              sm:pb-16
            "
          >
            We may suspend accounts that violate our policies or abuse the
            platform. We reserve the right to modify or terminate services
            at any time.
          </p>

        </div>
      </section>
    </>
  );
};

export default TermsSer;
