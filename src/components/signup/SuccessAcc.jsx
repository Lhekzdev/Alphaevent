import React from 'react';
import verifyLogo from '../../assets/verifyLogo.svg';
import lineBlue from '../../assets/lineBlue.svg';
import lineGrey from '../../assets/lineGrey.svg';
import success from '../../assets/success.svg';
import verifyArrowRight from '../../assets/verifyArrowRight.svg';
import verifyGit from '../../assets/verifyGit.svg';
import verifyTwitter from '../../assets/verifyTwitter.svg';
import verifyLinkedin from '../../assets/veifyLinkedin.svg';
import { Image } from 'cloudinary-react';
import { useNavigate } from 'react-router-dom';

const SuccessAcc = () => {
  const navigate = useNavigate();

  const handleLoginBack = () => {
    // Navigate to the OnboardingMain page
    navigate('/LogIn');
  };

  return (
    <section>
      <div className="background w-full h-full bg-[#444444] pt-[25px] pb-[25px]">
        {/* Form container centered with a width of 850px */}
        <form
          action=""
          className="container w-[850px] mx-auto bg-white rounded-[12px] p-8 relative"
        >
          {/* Logo container */}
          <div className="logoContainer absolute top-[20px] left-[20px]">
            <img src={verifyLogo} alt="verifyLogo" />
          </div>

          {/* Flower confetti image */}
          <div className="mx-auto mt-6">
           <img src={success} alt="success" className="mx-auto mb-4" />
          </div>

          {/* Main content */}
          <div className="contentContainer text-center mt-8 mb-[30px]">
            <p className="text-[32px] font-bold w-[416px] mx-auto">
              Password Updated Successfully!
            </p>
            <p className="text-[16px] font-light text-[#333333] w-[416px] mx-auto mt-2">
              Your account is now more secure. Remember to keep your password private.
            </p>
          </div>

          {/* Button to proceed */}
         <div className="w-[416px] mx-auto bg-[#3A7BD5] cursor-pointer rounded-[12px] mb-[55px]" onClick={handleLoginBack}>
                       <button className="flex items-center justify-center gap-[5px] py-[16px] px-[90px] cursor-pointer" >
                         <p className="font-bold text-[20px] text-white">Proceed to Log in</p>
                         <img
                           src={verifyArrowRight}
                           alt="verifyArrowRight"
                           className="w-[20px] pt-[8px]"
                         />
                       </button>
                     </div>

          {/* Decorative background image */}
          <Image
            className="backgroundImage absolute top-0  right-0 w-[450px] h-[635px] "
            cloudName="dqtyrjpeh"
            publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1738004346/success_uzwjsv.png"
            loading="lazy"
          />

          {/* Social icons */}
          <div className="iconContainer flex gap-[90px] ml-[220px] mt-[70px] ">
                                        <div className="flex gap-[12px]">
                                            <img src={lineGrey} alt="lineGrey" className="w-[80px]"/>
                                            <img src={lineGrey} alt="lineGrey" className="w-[80px]"/>
                                            <img src={lineGrey} alt="lineGrey" className="w-[80px]"/>
                                            <img src={lineBlue} alt="lineBlue" className="w-[80px]"/>
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

export default SuccessAcc;
