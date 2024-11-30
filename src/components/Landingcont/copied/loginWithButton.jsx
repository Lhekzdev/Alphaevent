import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import googleSU from '../../assets/googleSU.svg';
import passwordEye from '../../assets/passwordEye.svg';
import passwordEyeOpen from '../../assets/passwordEyeOpen.svg';
import logoSU from '../../assets/logoSU.svg';
import { Link, useNavigate } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Must contain 8 characters').required('Required'),
});

export const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex w-full min-h-screen bg-white">
      {/* Toast Notification Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      {/* Sliding Image Section */}
      <div className="hidden lg:flex w-1/2">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-full h-full"
        >
          <SwiperSlide>
            <img
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1731619932/Images_4_qubhel.png"
              alt="Slide 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1732807901/Images_7_re1mff.png"
              alt="Slide 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1732807777/Images_5_xvsquc.png"
              alt="Slide 3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1732807785/Images_6_htxtij.png"
              alt="Slide 4"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Login Form Section */}
      <div className="flex flex-col items-center w-full lg:w-1/2 max-w-md mx-auto p-8 bg-white rounded-lg">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-6">
          <Link to="/">
            <img src={logoSU} alt="Logo" className="w-[82px] mb-4" />
          </Link>
          <h1 className="text-[35px] font-bold mb-2">Welcome Back!</h1>
        </div>

        {/* Continue with Google */}
        <div className="flex justify-center items-center gap-[10px] mb-4 rounded-[36px] w-full max-w-[250px] border-2 border-[#3A7BD5] mx-auto">
          <button className="text-[#3A7BD5] py-2 px-4 flex items-center justify-center">
            Continue with Google
          </button>
          <img src={googleSU} alt="Google Sign In" className="w-[16px] sm:w-auto ml-2" />
        </div>

        {/* Separator */}
        <div className="text-center mb-[18px] mt-[18px]">
          <p className="text-[14px] font-light text-[#333333]">or</p>
        </div>

        {/* Login Form */}
        <div className="w-full">
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values, { resetForm }) => {
              try {
                const response = await fetch(
                  'https://alphaeventappdevmode.onrender.com/new&User',
                  {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ ...values }),
                  }
                );

                if (response.ok) {
                  toast.success('Log in Successful!');
                  navigate('/OnboardingMain');
                  resetForm();
                } else {
                  const { msg } = await response.json();
                  toast.error(msg || 'Log in Failed');
                }
              } catch (error) {
                toast.error('An error occurred while logging in.');
              }
            }}
          >
            {({ errors, touched }) => (
              <Form className="space-y-6">
                {/* Email Field */}
                <div>
                  <Field
                    name="email"
                    placeholder="Email"
                    className="w-full border border-[#BEBEBE] px-[20px] py-[6px] rounded-[12px] text-[16px] text-[#C5C5C5]"
                  />
                  {errors.email && touched.email && (
                    <div className="text-red-500 text-[10px]">{errors.email}</div>
                  )}
                </div>

                {/* Password Field */}
                <div className="relative">
                  <Field
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    className="w-full border border-[#BEBEBE] px-[20px] py-[6px] rounded-[12px] text-[16px] text-[#C5C5C5]"
                  />
                  <img
                    src={showPassword ? passwordEyeOpen : passwordEye}
                    alt="Show/Hide Password"
                    onClick={togglePasswordVisibility}
                    className="absolute top-2 right-2 w-[20px] cursor-pointer"
                  />
                  {errors.password && touched.password && (
                    <div className="text-red-500 text-[10px]">{errors.password}</div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-5 bg-[#D8E5F7] text-[#7CA7E3] hover:text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Proceed
                </button>

                {/* Terms and Signup Link */}
                <div className="text-center text-gray-500 text-[12px] mb-4">
                  By proceeding, you agree to Alvent’s{' '}
                  <a href="#" className="text-blue-500">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-blue-500">
                    Privacy Policy
                  </a>
                  .
                </div>
                <div className="text-center mt-4 text-[12px]">
                  <p className="text-[#757575]">
                    Don’t have an account?{' '}
                    <Link to="/signUp" className="text-blue-500">
                      Sign up
                    </Link>
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
