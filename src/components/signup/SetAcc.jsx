import React, { useEffect } from 'react';
import verifyLogo from '../../assets/verifyLogo.svg';
import verifyGit from '../../assets/verifyGit.svg';
import verifyTwitter from '../../assets/verifyTwitter.svg';
import verifyLinkedin from '../../assets/veifyLinkedin.svg';
import passwordEye from '../../assets/passwordEye.svg';
import passwordEyeOpen from '../../assets/passwordEyeOpen.svg';
import { motion } from 'framer-motion'; // Import Framer Motion
import { Image } from 'cloudinary-react';
import { useNavigate } from 'react-router-dom';

const SetAcc = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleLoginNow = () => {
    navigate('/OnboardingMain');
  };

  // Generate colorful petals for the animation
  const generatePetals = () => {
    const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#F45D48'];
    const shapes = ['rounded-full', 'rounded-lg', '']; // Circle, rounded square, square
    const petals = [];

    for (let i = 0; i < 15; i++) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
      const randomSize = Math.random() * 20 + 10; // Random size between 10px and 30px

      petals.push(
        <motion.div
          key={i}
          initial={{
            x: 0,
            y: 0,
            scale: 0,
          }}
          animate={{
            x: Math.random() * 300 - 150, // Spread in X-axis
            y: Math.random() * 300 + 100, // Spread in Y-axis
            scale: 1,
            opacity: 0,
          }}
          transition={{
            duration: 2 + Math.random(), // Random duration
            ease: 'easeOut',
          }}
          className={`absolute ${randomShape} bg-[${randomColor}]`}
          style={{
            width: `${randomSize}px`,
            height: `${randomSize}px`,
            backgroundColor: randomColor,
          }}
        />
      );
    }
    return petals;
  };

  return (
    <section>
      <div className="background w-full h-full bg-[#444444] pt-[25px] pb-[25px]">
        {/* Form container */}
        <form
          action=""
          className="container w-[850px] mx-auto bg-white rounded-[12px] p-8 relative"
        >
          {/* Logo container */}
          <div className="logoContainer absolute top-15 left-15">
            <img src={verifyLogo} alt="verifyLogo" />
          </div>

          {/* Flower throwing animation */}
          <div className="relative w-full h-[150px] flex justify-center">
            <motion.div
              className="flower"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                className="w-[150px]"
                cloudName="dqtyrjpeh"
                publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1737836122/confetti-1SNZxe6Ss8_wyui94.png"
                loading="lazy"
              />
            </motion.div>
            {generatePetals()}
          </div>

          {/* Main content */}
          <div className="contentContainer text-center mt-[10px]">
            <div>
              <p className="text-[32px] font-bold w-[416px] mx-auto">You’re all set!</p>
              <p className="text-[16px] font-light text-[#333333] w-[416px] mx-auto">
                You can now log in and start exploring events or managing your own.
              </p>
            </div>

            {/* Input fields */}
            <div className="inputContainer flex justify-center gap-[11px] my-6">
              <fieldset>
                <input
                  type="text"
                  placeholder="Email"
                  className="border border-[#BEBEBE] w-[414px] rounded-[12px] py-[16.5px] px-[20px] mb-[16px]"
                />
                {/* Password */}
                <div className="relative">
                  <input
                    name="passWd"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
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

            {/* Log in button */}
            <div className="w-[416px] mx-auto hover:bg-[#3A7BD5] bg-[#D8E5F7] rounded-[12px] mb-[55px]">
              <button
                className="flex items-center justify-center gap-[5px] py-[16px] px-[167.5px] text-[#7CA7E3] hover:text-white text-[16px] font-normal"
                onClick={handleLoginNow}
              >
                Log in
              </button>
            </div>
          </div>

          {/* Background image */}
          <Image
            className="backgroundImage absolute bottom-0 left-0 w-[300px]"
            cloudName="dqtyrjpeh"
            publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1737831114/setAcc_syza1z.png"
            loading="lazy"
          />

          {/* Social icons */}
          <div className="iconContainer flex gap-[20px] absolute bottom-4 right-8">
            <a href="https://www.facebook.com/61571255750751/posts/122094648410708525/">
              <img src={verifyGit} alt="verifyGit" />
            </a>
            <a href="https://www.instagram.com/al.vent?igsh=Ymg4aXV4amhldjZk">
              <img src={verifyTwitter} alt="verifyGit" />
            </a>
            <a href="https://www.linkedin.com/posts/al-vents_merrychristmas-happyholidays-eventmanagement-activity-7277584960570454016-q5Vh?utm_source=share&utm_medium=member_android">
              <img src={verifyLinkedin} alt="verifyGit" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SetAcc;
