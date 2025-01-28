import React, { useState } from 'react';
import verifyLogo from '../../assets/verifyLogo.svg';
import lineBlue from '../../assets/lineBlue.svg';
import lineGrey from '../../assets/lineGrey.svg';
import verifyGit from '../../assets/verifyGit.svg';
import verifyTwitter from '../../assets/verifyTwitter.svg';
import createPasswordIcon from '../../assets/createPasswordIcon.svg';
import verifyLinkedin from '../../assets/veifyLinkedin.svg';
import passwordEye from '../../assets/passwordEye.svg';
import passwordEyeOpen from '../../assets/passwordEyeOpen.svg';
import { Image } from "cloudinary-react";
import { Link, useNavigate } from 'react-router-dom';

const CreateAcc = () => {
     const [showPassword, setShowPassword] = useState(false);
     const navigate = useNavigate();

     const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleCraeteAcc = () => {
    // Navigate to the VerifyAcc page
    navigate("/SuccessAcc");
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

            <div className="mt-[30px] ">
    <img src={createPasswordIcon} alt="createPasswordIcon" className="mx-auto mb-4 "/>
    </div>


          {/* Main content container - Centered inside the form */}
          <div className="contentContainer text-center mt-[10px]">
            <div>
              {/* Envelope icon and heading */}
            
              <p className="text-[32px] font-bold w-[416px] mx-auto">
              Create Your New Password
              </p>
              <p className="text-[16px] font-light text-[#333333] w-[416px] mx-auto">
              Create a strong password—at least 8 characters with a mix of letters, numbers, and symbols for added security
              </p>
            </div>

            {/* Input fields for the 6-digit verification code */}
            <div className="inputContainer flex justify-center gap-[11px] my-6 ">
                <fieldset>
                    
 {/* Password */}
                <div className="relative mb-[15px]">
                  <input
                    name="passWd"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter Password"
                    className="border border-[#BEBEBE] w-[414px] rounded-[12px] py-[16.5px] px-[20px]"
                  />
                  <img
                    src={showPassword ? passwordEyeOpen : passwordEye}
                    alt="Toggle Password"
                    onClick={togglePasswordVisibility}
                    className="absolute top-5 right-6 w-5 cursor-pointer"
                  />
               
                </div>
                <div className="relative">
                  <input
                    name="passWd"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Confirm Password"
                    className="border border-[#BEBEBE] w-[414px] rounded-[12px] py-[16.5px] px-[20px]"
                  />
                  <img
                    src={showPassword ? passwordEyeOpen : passwordEye}
                    alt="Toggle Password"
                    onClick={togglePasswordVisibility}
                    className="absolute top-5 right-6 w-5 cursor-pointer"
                  />
               
                </div>
                </fieldset>

            </div>

      

            {/* Verify button */}
            <div className="w-[416px] mx-auto hover:bg-[#3A7BD5] bg-[#D8E5F7] rounded-[12px] mb-[55px] z-10">
              <button className="flex items-center justify-center gap-[5px] py-[16px] px-[167.5px] text-[#7CA7E3] hover:text-white text-[16px] font-normal" onClick={handleCraeteAcc}>
              Proceed
              </button>
            </div>
          </div>

          {/* Background image - Positioned bottom-left */}
          <Image
            className="backgroundImage absolute bottom-0 left-0 w-[300px]"
            cloudName="dqtyrjpeh"
            publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1738002696/newPassword_wiupcg.png"
            loading="lazy"
          />

          {/* Social icons - Positioned at the bottom-left */}
         <div className="iconContainer flex gap-[90px] ml-[220px] mt-[70px] ">
                              <div className="flex gap-[12px]">
                                  <img src={lineGrey} alt="lineGrey" className="w-[80px]"/>
                                  <img src={lineGrey} alt="lineGrey" className="w-[80px]"/>
                                  <img src={lineBlue} alt="lineBlue" className="w-[80px]"/>
                                  <img src={lineGrey} alt="lineGrey" className="w-[80px]"/>
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

export default CreateAcc;
