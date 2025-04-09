import React, { useEffect, useState } from "react";
import verifyLogo from '../../assets/verifyLogo.svg';
import lineBlue from '../../assets/lineBlue.svg';
import lineGrey from '../../assets/lineGrey.svg';
import verifyGit from '../../assets/verifyGit.svg';
import verifyTwitter from '../../assets/verifyTwitter.svg';
import verifyLinkedin from '../../assets/veifyLinkedin.svg';
import forgotKeyLock from '../../assets/forgotKeyLock.svg';
import verifyArrowRight from '../../assets/verifyArrowRight.svg';
import { Image } from "cloudinary-react";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const VerifyAcc = () => {
  const [email, setEmail] = useState("");
  const [activeInput, setActiveInput] = useState(5);
  const navigate = useNavigate();
  const [otp, setOtp] = useState(Array(6).fill("")); // ✅ Fix: Ensure OTP is stored

  useEffect(() => {
    // Focus the last input when the component mounts
    document.getElementById(`input-${activeInput}`)?.focus();
  }, [activeInput]);


  // const handleVerify2 = () => {
  //   // Navigate to the VerifyAcc page
  //   navigate("/VerifyAcc2");
  // };

  const handleSendOTP = async () => {
    // console.log("Email entered:", email);

    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    try {
      const response = await fetch(" https://alphaeventappdevmode.onrender.com/forgtPassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      // console.log("Server response:", data); // Debugging

      if (response.ok) {
        
       const now = Date.now(); // current timestamp
       localStorage.setItem("otpStartTime", now);
       localStorage.setItem("otpSent", "true");
        toast.success("OTP sent successfully! Check your email.");

       
        navigate("/VerifyAcc2", { state: { email } }); // Pass email to OTP page
        // console.log("Navigating to VerifyAcc2...");

      } else {
        toast.error(data.msg || "Something went wrong!");
      }

    } catch (error) {
      // console.error("Error:", error); // ✅ See full error in console
      toast.error("Failed to send OTP.");
    }
  };





  return (
    <section>
      <div className="background w-full h-full bg-[#444444] pt-[25px] pb-[25px]">
        {/* Form container centered with a width of 850px */}
        <form action="" className="container w-[850px] h-[650px] mx-auto bg-white rounded-[12px] p-8 relative">

          {/* Logo container - Positioned at the top-left */}
          <div className="logoContainer absolute top-15 left-15 ">
            <img src={verifyLogo} alt="verifyLogo" />
          </div>



          {/* Main content container - Centered inside the form */}
          <div className="contentContainer text-center mt-[50px]">
            <div>
              {/* Envelope icon and heading */}
              <img src={forgotKeyLock} alt="verifyEnvelop" className="mx-auto mb-4" />
              <p className="text-[32px] font-bold w-[416px] mx-auto">
                Forgot Password?
              </p>
              <p className="text-[16px] font-light text-[#333333] w-[416px] mx-auto">
                Don’t worry! Enter your email below, and we’ll send you a <br /> link to reset your password!
              </p>
            </div>

            {/* Input fields for the 6-digit verification code */}
            <div className="inputContainer  my-6 ">
              {/* Input fields for code - Centered */}
              <fieldset>

                <p className="text-left ml-[190px]">Email</p>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    // console.log("Entered Email:", e.target.value); // ✅ Debugging log
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter your email"
                  className="border border-[#BEBEBE] w-full max-w-[414px] rounded-[12px] py-[16.5px] px-[20px] mb-[16px] text-left"
                />
              </fieldset>

            </div>

            {/* Verify button */}
            <div className="w-[416px] mx-auto bg-[#3A7BD5] rounded-[12px] mb-[55px]">
              <button type="button" className="flex items-center justify-center gap-[5px] py-[16px] px-[120px]" onClick={handleSendOTP}>
                <p className="font-bold text-[20px] text-white">Send OTP code</p>
                <img
                  src={verifyArrowRight}
                  alt="verifyArrowRight"
                  className="w-[16px] pt-[8px]"
                />

              </button>
            </div>
          </div>

          {/* Background image - Positioned bottom-left */}
          <Image
            className="backgroundImage absolute bottom-0 left-0 w-[300px]"
            cloudName="dqtyrjpeh"
            publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1737798576/verifyBg_uzej1r.png"
            loading="lazy"
          />

          {/* Social icons - Positioned at the bottom-left */}
          <div className="iconContainer flex gap-[90px] ml-[220px] mt-[70px] ">
            <div className="flex gap-[12px]">
              <img src={lineBlue} alt="lineBlue" className="w-[80px]" />
              <img src={lineGrey} alt="lineGrey" className="w-[80px]" />
              <img src={lineGrey} alt="lineGrey" className="w-[80px]" />
              <img src={lineGrey} alt="lineGrey" className="w-[80px]" />
            </div>
            <div className="iconContainer flex gap-[30px] ">
              <img src={verifyGit} alt="verifyGit" />
              <img src={verifyTwitter} alt="verifyTwitter" />
              <img src={verifyLinkedin} alt="verifyLinkedin" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default VerifyAcc;
