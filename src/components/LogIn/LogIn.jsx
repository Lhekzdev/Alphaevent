import React, { useState,useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import googleSU from '../../assets/googleSU.svg';
import passwordEye from '../../assets/passwordEye.svg';
import passwordEyeOpen from '../../assets/passwordEyeOpen.svg';
import logoSU from '../../assets/logoSU.svg';
import arrowBack from '../../assets/arrowBack.svg';
import { Image } from 'cloudinary-react';
import { Link, useNavigate } from 'react-router-dom';

import { jwtDecode } from "jwt-decode";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Must contain 8 characters').required('Required'),



});



  
export const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [userName, setUserName] = useState("");  // Store username

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

const navigate = useNavigate();

  let redir = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
 
const images = [
      "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1731619932/Images_4_qubhel.png",
      "https://res.cloudinary.com/dzyvwxh7n/image/upload/v1732892772/Images_2_wqgwnp.png",
      "https://res.cloudinary.com/dzyvwxh7n/image/upload/v1732892772/Images_gkw7pr.png",
      "https://res.cloudinary.com/dzyvwxh7n/image/upload/v1732892772/Images_1_lfigsw.png",
    ];
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    // Auto-slide every 3 seconds
    useEffect(() => {
      const interval = setInterval(nextSlide, 3000); // 3 seconds interval
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);



    const handleForgotPassword = () => {
      // Navigate to the VerifyAcc page
      navigate("/ForgotPassword");
    };



   
   
    

   

   

    
  const handleLoginForm = async (values, actions) => {
    if (!values.email || !values.password) {
      toast.error("Please enter both email and password.");
      return;
    }

    setIsSubmitted(true);
    try {
      const payload = { email: values.email, passWd: values.password };
      console.log("Sending payload:", payload);

      const response = await fetch("https://alphaeventappdevmode.onrender.com/api/loginUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();
      console.log("Full Response Data:", responseData); // ✅ Debugging Step

      if (!response.ok) {
        throw new Error(responseData.msg || "Login failed");
      }

      toast.success("Login Successful!");

      // ✅ Check if token is received
      if (responseData?.token) {
        localStorage.setItem("authToken", responseData.token);
       
        localStorage.setItem("userEmail", values.email); // ✅ add this line
        console.log("New token stored:", responseData.token);

        // ✅ Decode token and set username
        try {
          const decodedToken = jwtDecode(responseData.token);
          console.log("Decoded Token:", decodedToken);

          if (decodedToken?.name) {
            setUserName(decodedToken.name);
            localStorage.setItem("userName", decodedToken.name);
          } else {
            console.warn("❌ Username missing in token payload!");
          }
        } catch (error) {
          console.error("❌ Error decoding token:", error);
        }
      } else {
        console.warn("❌ No token received from login response!");
      }

      navigate("/OnboardingMain");
      actions.resetForm();
    } catch (error) {
      console.error("❌ Login Error:", error);
      toast.error(error.message || "An error occurred. Please try again.");
    } finally {
      setIsSubmitted(false);
    }
  };

  const handleLoginAuth = () => {
    window.location.href = 'https://alphaeventappdevmode.onrender.com/auth/google';
  };

    

  return (
    <div className="flex w-full min-h-screen bg-white">
      {/* Toast Notification Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      {/* Image Section */}
      {/* <div className="hidden lg:flex w-1/2">
        <Image
          className="w-full h-auto"
          cloudName="dqtyrjpeh"
          publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1731619932/Images_4_qubhel.png"
          loading="lazy"
          alt="Login Background"
        />
      </div> */}

<div className="relative hidden lg:flex lg:flex-nowrap w-1/2 h-auto mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-auto object-cover flex-shrink-0" // flex-shrink-0 prevents image from shrinking
          />
        ))}
      </div>
      
      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex ? 'bg-gray-700' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)} // Allow dot navigation
          ></div>
        ))}
      </div>
    </div>


      {/* Login Form Section */}
      <div className="flex flex-col items-center w-full lg:w-1/2 max-w-md mx-auto p-8 bg-white  rounded-lg">
        {/* Logo Section */}
        <div className="flex justify-between items-center w-full mb-[60px]">
  <Link to="/">
    <img src={logoSU} alt="Logo" className="w-[82px]" />
  </Link>
  <img src={arrowBack} onClick={() => redir('/')} alt="arrowBack" className="w-[44px] cursor-pointer" />
</div>

       
        <div className="flex flex-col items-center mb-6">
      

          {userName ? (
          <h1 className="text-[35px] font-bold mb-2">Welcome, {userName}!</h1>
        ) : (
          <h1 className="text-[35px] font-bold mb-2">Welcome Back!</h1>
        )}
        </div>

        {/* Continue with Google */}
      <div className="flex justify-center items-center gap-[10px] mb-4 rounded-[36px] w-full max-w-[250px] border-2 border-[#3A7BD5] mx-auto">
         <a onClick={handleLoginAuth}>  <button className="text-[#3A7BD5] py-2 px-4 flex items-center justify-center">
            Continue with Google
          </button></a> 
          <img src={googleSU} alt="Google Sign In" className="w-[16px] sm:w-auto ml-2" />
        </div>

        {/* Separator */}
        <div className="text-center mb-[18px] mt-[18px]">
          <p className="text-[14px font-light text-[#333333]">or</p>
        </div>

        {/* Login Form */}
        <div className="w-full">
          <Formik
            initialValues={{
              email: '',
              password: '',

            }}
            validationSchema={SignupSchema}
            onSubmit={handleLoginForm}
          >
            {({ errors, touched, values }) => (
              <Form className="space-y-6">
                {/* Email Field */}
                <div>
                  <Field
                    name="email"
                        type="email"
                    placeholder="Email"
                    className="w-full border border-[#BEBEBE] px-[20px] py-[6px] rounded-[12px] text-[16px] text-black"
                
                />
                  {errors.email && touched.email ? (
                    <div className="text-red-500 text-[10px]">{errors.email}</div>
                  ) : null}
                </div>

                {/* Password Field */}
                <div className="relative">
                  <Field
                    name="password"
                  
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    className="w-full border border-[#BEBEBE] px-[20px] py-[6px] rounded-[12px] text-black text-[16px] placeholder-gray-400"
                  />
                  <img
                    src={showPassword ? passwordEyeOpen : passwordEye}
                    alt="Show/Hide Password"
                    onClick={togglePasswordVisibility}
                    className="absolute top-2 right-2 w-[20px] cursor-pointer"
                  />
                  {errors.password && touched.password ? (
                    <div className="text-red-500 text-[10px]">{errors.password}</div>
                  ) : null}
                </div>

{/* onClick={()=> redir('/OnboardingMain')}  */}

<div    className="forget w-full flex items-end justify-end">
                  
  <p className='text-[#FF6B6B] text-[12px] right-8 cursor-pointer' onClick={handleForgotPassword}>Forgot Password?</p>
</div>
                {/* Submit Button */}
          
  {/* <button
    type="submit"
    className="w-full mt-5 bg-[#D8E5F7] text-[#7CA7E3] hover:text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
    disabled={isSubmitted} // Disable the button if the form is being submitted
  >
 {isSubmitted ? "Submitting..." : "Login"}
  </button> */}

   {/* Submit Button */}
  <button


// onClick={()=> redir('/createEvent')}



  type="submit"
  className="w-full flex items-center justify-center px-6 bg-[#D8E5F7] text-[#7CA7E3] hover:text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 relative"

  disabled={isSubmitted}
>
  {/* Keep the text centered */}
  <span className="text-center">
    {isSubmitted ? "Logging In" : "Login"}</span>

  {/* SVG positioned at the right end */}
  {isSubmitted && (
    <svg
      className="animate-spin h-5 w-5 text-white absolute right-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      ></path>
    </svg>
  )}
</button>

             

                {/* Terms and Signup Link */}
                <p className="text-gray-500 text-[12px] text-center">
                  By proceeding, you agree to Alvent’s{' '}
                  <button onClick={()=> redir('/termsSer')} className="text-[#333333] underline font-light">
                    Terms of Service
                  </button>{' '}
                  and{' '}
                  <button onClick={()=> redir('/PrivacyPolicy')}  className="text-[#333333] underline font-light">
                    Privacy Policy
                  </button>
                  .
                </p>
                <div className="text-center mt-4 text-[12px]">
                  <p className="text-[#757575]">
                    Don’t have an account?{' '}
                    <a className="text-blue-500"><Link to="/signUp">Sign up</Link>

                    </a>
                  </p>
                </div>
   
              </Form>
            )}
          </Formik>

          
        </div>
      </div>




      

    </div>
  );
};
