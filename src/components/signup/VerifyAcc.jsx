import React, { useEffect, useState } from "react";
import verifyLogo from '../../assets/verifyLogo.svg';
import verifyGit from '../../assets/verifyGit.svg';
import verifyTwitter from '../../assets/verifyTwitter.svg';
import verifyLinkedin from '../../assets/veifyLinkedin.svg';
import verifyEnvelop from '../../assets/verifyEnvelop.svg';
import verifyArrowRight from '../../assets/verifyArrowRight.svg';
import { Image } from "cloudinary-react";
import { Link,useLocation, useNavigate } from 'react-router-dom';

const VerifyAcc = () => {
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const [activeInput, setActiveInput] = useState(0); 
    const [userEmail, setUserEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
              // Fetch user email from local storage
        const storedEmail = localStorage.getItem("userEmail");
        if (storedEmail) {
        setUserEmail(storedEmail);}
        // Focus the last input when the component mounts
        document.getElementById(`input-${activeInput}`)?.focus();
      }, [activeInput]);
      //console.log("User Email:", userEmail);
      // Function to handle input change{BACKEND TOUCH}
    const handleChange = (index, value) => {
        if (value.length > 1) return; // Prevent entering more than one digit

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
              // Move to next input if value is entered
              if (value !== "" && index < 5) {
                setActiveInput(index + 1);
            }};
            
      const handleVerify = async(e) => {
        e.preventDefault();

        const verificationCode = code.join(""); // Convert array to string
        //console.log("Entered Verification Code:", verificationCode);
        //console.log("Entered mail:", userEmail);
        // Navigate to the VerifyAcc page
        //navigate("/SetAcc");
            // Send to backend
            try {
              const response = await fetch(`https://alphaeventappdevmode.onrender.com/verifyOTp/${userEmail}`, { // Update URL as needed
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                  },
                  body: JSON.stringify({verificationCode}),
              });
              const result = await response.json();
              //console.log("Server Response:", result);
  
              if (response.ok) {
                  navigate("/SetAcc");  // Navigate on success
              } else {
                  alert("Verification failed. Please try again.");
              }
          } catch (error) {
              // console.error("Error verifying code:", error);
          }
      };
  return (
    <section>
      <div className="background w-full h-full bg-[#444444] pt-[25px] pb-[25px]">
        {/* Form container centered with a width of 850px */}
        <form action="" className="container w-[850px] mx-auto bg-white rounded-[12px] p-8 relative">
          
          {/* Logo container - Positioned at the top-left */}
          <div className="logoContainer absolute top-15 left-15 ">
            <img src={verifyLogo} alt="verifyLogo" />
          </div>



          {/* Main content container - Centered inside the form */}
          <div className="contentContainer text-center mt-[50px]">
            <div>
              {/* Envelope icon and heading */}
              <img src={verifyEnvelop} alt="verifyEnvelop" className="mx-auto mb-4" />
              <p className="text-[32px] font-bold w-[416px] mx-auto">
                Verify your account!
              </p>
              <p className="text-[16px] font-light text-[#333333] w-[416px] mx-auto">
                A 6-digit verification code has been sent to your email <br />
                address. Please enter the code sent <br />
                to ade****45@gmail.com
              </p>
            </div>

            {/* Input fields for the 6-digit verification code */}
            <div className="inputContainer flex justify-center gap-[11px] my-6 ">
             {/* Input fields for code - Centered */}
             <div className="inputContainer flex justify-center gap-[11px] my-6 relative z-10">
      {["3", "7", "0", "1", "7", "2"].map((placeholder, index) => (
        <input
          key={index}
          id={`input-${index}`}
          type="text"
          placeholder={placeholder}
          onChange={(e) => handleChange(index, e.target.value)}
          className={`w-[60px] border-[1px] border-[#BEBEBE] rounded-[12px] py-[15px] px-[18px] text-[24px] text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#3A7BD5] ${
            activeInput === index ? "ring-2 ring-[#3A7BD5]" : ""
          }`}
          onFocus={() => setActiveInput(index)} // Update activeInput on focus
        />
      ))}
    </div>
            </div>

            {/* Resend link section */}
            <div className="mb-6">
              <p className="text-[#333333] text-[16px] font-bold">
                Didn’t get the email?{" "}
                <a href="#" className="text-[#E65757]">
                  Resend link
                </a>{" "}
                in 30 seconds
              </p>
            </div>

            {/* Verify button */}
            <div className="w-[416px] mx-auto bg-[#3A7BD5] rounded-[12px] mb-[55px]">
              <button className="flex items-center justify-center gap-[5px] py-[16px] px-[167.5px]" onClick={handleVerify}>
                <p className="font-bold text-[20px] text-white">Verify</p>
                <img
                  src={verifyArrowRight}
                  alt="verifyArrowRight"
                  className="w-[16px] pt-[10px]"
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
          <div className="iconContainer flex gap-[30px] absolute bottom-4 right-8 ">
            <img src={verifyGit} alt="verifyGit" />
            <img src={verifyTwitter} alt="verifyTwitter" />
            <img src={verifyLinkedin} alt="verifyLinkedin" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default VerifyAcc;
