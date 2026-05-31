import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import googleSU from '../../assets/googleSU.svg';
import passwordEye from '../../assets/passwordEye.svg';
import passwordEyeOpen from '../../assets/passwordEyeOpen.svg';
import logoSU from '../../assets/logoSU.svg';  
import { MdArrowBack } from "react-icons/md";
import arrowBack from '../../assets/arrowBack.svg';
import { Image } from 'cloudinary-react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from "react-icons/ai"

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  passWd: Yup.string()
    .min(8, 'Must Contain 8 Characters')
    .matches(/^(?=.*[a-z])/, 'Must Contain One Lowercase Character')
    .matches(/^(?=.*[A-Z])/, 'Must Contain One Uppercase Character')
    .matches(/^(?=.*[0-9])/, 'Must Contain One Number Character')
    .matches(/^(?=.*[!@#\$%\^&\*])/, 'Must Contain One Special Character')
    .required('Required'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('passWd'), null], 'Passwords must match')
    .required('Required')
});

export const SignUp = () => {

  const [isSubmitted,setIsSubmitted] =useState("")

  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  let redir = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

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

  // ✅ FIXED SIGNUP FUNCTION
  const handleSignUp = async (values, {resetForm}) => {

    setIsSubmitted(true);

    try {

      const response = await fetch(`https://alphaeventappdevmode.onrender.com/new&User`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json(); // ✅ ALWAYS parse

      if (response.ok) {

        // ✅ backend does NOT return email/_id
        localStorage.setItem('userEmail', values.email);

        toast.info('Check your email for the OTP to complete registration');

        navigate('/VerifyAcc', { 
          state: { email: values.email } // ✅ FIXED
        });

        resetForm();

      } else {
        toast.error(data.msg || 'Sign Up Failed');
        setIsSubmitted(false);
      }

    } catch (error) {
      toast.error('Network error, try again');
      setIsSubmitted(false);
    }
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  // ✅ FIXED TOKEN HANDLING
  useEffect(() => {

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      localStorage.setItem('authToken', token);

      // ❌ removed undefined email usage
      navigate('/VerifyAcc'); 
    }
  }, [navigate]);

  return (
    <>
      <div className="flex w-full min-h-screen bg-[#F3F5FA] ">
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

        {/* Form Section */}
        <div className="flex flex-col bg-[#F3F5FA] items-center w-full max-w-[745px] mx-auto p-8 rounded-tr-[32px] rounded-br-[32px] relative z-10 lg:-mr-[40px]">
       
          <div className="flex justify-between items-center w-full mb-[60px]">
            <Link to="/">
              <img src="https://res.cloudinary.com/dqtyrjpeh/image/upload/q_auto/f_auto/v1770048496/Blue_Logo_ijoxkj.png" alt="Logo" className="w-[189px]" />
            </Link>

            <div className='w-[44px] h-[44px] rounded-[22px] bg-[#E5EDF9] flex items-center justify-center'>
              <MdArrowBack onClick={() => redir('/')} className='text-[#123499] text-[30px]'/>
            </div>
          </div>
   
          <div className='w-full max-w-[435px] '>
            <div className="text-center text-[#333333]">
              <h1 className="text-[32px] font-bold">Join Us Today!</h1>
              <p className="text-gray-600 text-[16px] mt-2 mb-[25px]">
                Create your account to unlock seamless access to exciting events
                and personalized experiences.
              </p>
            </div>

            <div className="flex justify-center items-center gap-[10px] mb-4 rounded-[36px] w-full max-w-[435px] border-2 border-[#123499] mx-auto">
              <a href='https://alphaeventappdevmode.onrender.com/auth/google'>
                <button className="text-[#123499] text-[16px] font-semibold py-2 px-4 flex items-center justify-center">
                  Sign in with Google
                </button>
              </a>

              <img src={googleSU} alt="Google Sign In" className="w-[16px] sm:w-auto ml-2" />
            </div>

            <div className="text-center mb-[18px] mt-[18px]">
              <p className="text-[14px font-light text-[#333333]">or</p>
            </div>

            <Formik
              initialValues={{
                name: '',
                email: '',
                passWd: '',
                confirmPassword: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={handleSignUp}
            >
              {({ errors, touched }) => (
                <Form className="space-y-6 w-full">

                  <div>
                    <Field
                      name="name"
                      placeholder="Enter Full Name"
                      className="w-full max-w-[435px] h-[52px] border bg-transparent border-[#BEBEBE] rounded-[12px] py-2 px-4 text-[14px] text-[#333333] placeholder:text-[#C5C5C5]"
                    />
                    {errors.name && touched.name && (
                      <div className="text-red-500 text-[10px]">{errors.name}</div>
                    )}
                  </div>

                  <div>
                    <Field
                      name="email"
                      placeholder="Enter Email"
                      className="w-full max-w-[435px] h-[52px] border bg-transparent border-[#BEBEBE] rounded-[12px] py-2 px-4 text-[14px] text-[#333333] placeholder:text-[#C5C5C5]"
                    />
                    {errors.email && touched.email && (
                      <div className="text-red-500 text-[10px]">{errors.email}</div>
                    )}
                  </div>

                  <div className="relative">
           <Field
  name="passWd"
  type={showPassword ? 'text' : 'password'}
  placeholder="Enter Password"
  className="w-full max-w-[435px] h-[52px] border bg-transparent border-[#BEBEBE] rounded-[12px] py-2 px-4 text-[14px] text-[#333333] placeholder:text-[#C5C5C5]"
/>
                    <img
                      src={showPassword ? passwordEyeOpen : passwordEye}
                      alt="Toggle Password"
                      onClick={togglePasswordVisibility}
                      className="absolute top-3 right-3 w-5 cursor-pointer"
                    />
                    {errors.passWd && touched.passWd && (
                      <div className="text-red-500 text-[10px]">{errors.passWd}</div>
                    )}
                  </div>

                  <div className="relative">
                    <Field
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm Password"
                      className="w-full max-w-[435px] h-[52px] border bg-transparent border-[#BEBEBE] rounded-[12px] py-2 px-4 text-[14px] text-[#333333] placeholder:text-[#C5C5C5]"
                    />
                    <img
                      src={showConfirmPassword ? passwordEyeOpen : passwordEye}
                      alt="Toggle Confirm Password"
                      onClick={toggleConfirmPasswordVisibility}
                      className="absolute top-3 right-3 w-5 cursor-pointer"
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                      <div className="text-red-500 text-[10px]">{errors.confirmPassword}</div>
                    )}
                  </div>

                  <p className="text-[#333333] text-[12px] text-center font-light">
                    By continuing, you agree to Alvent’s{' '}
                    <a onClick={()=> redir('/termsSer')} className="underline cursor-pointer">Terms of Service</a>{' '}
                    and{' '}
                    <a onClick={()=> redir('/PrivacyPolicy')} className="underline cursor-pointer">Privacy Policy</a>.
                  </p>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 bg-[#D8E5F7] text-[#7CA7E3] hover:text-white py-2 rounded-lg hover:bg-[#123499] transition duration-300 relative"
                    disabled={isSubmitted}
                  >
                    <span>{isSubmitted ? "Signing up" : "Sign Up"}</span>

                    {isSubmitted && (
                      <svg className="animate-spin h-5 w-5 text-white absolute right-4" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                      </svg>
                    )}
                  </button>

                  <p className="text-center text-[#333333] text-[12px] font-light">
                    Already have an account?{' '}
                    <Link to="/LogIn" className="text-[#123499]">Log in</Link>
                  </p>

                </Form>
              )}
            </Formik>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative hidden lg:flex lg:flex-nowrap w-1/2 h-auto mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <img key={index} src={src} className="w-full h-auto object-cover flex-shrink-0" />
            ))}
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-700' : 'bg-gray-400'}`}
                onClick={() => setCurrentIndex(index)}
              ></div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

try {} catch (error) {}