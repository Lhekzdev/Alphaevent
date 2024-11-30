import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import googleSU from '../../assets/googleSU.svg';
import passwordEye from '../../assets/passwordEye.svg';
import passwordEyeOpen from '../../assets/passwordEyeOpen.svg';
import logoSU from '../../assets/logoSU.svg';
import { Link, useNavigate } from 'react-router-dom';

// Validation Schema
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
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      localStorage.setItem('authToken', token);
      navigate('OnboardingMain/');
    }
  }, [navigate]);

  return (
    <>
      <div className="flex w-full min-h-screen bg-white">
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

        {/* Form Section */}
        <div className="flex flex-col items-center w-full lg:w-1/2 max-w-md mx-auto p-8 rounded-lg">
          <div className="text-center">
            <Link to="/">
              <img src={logoSU} alt="Logo" className="w-[82px] mx-auto mb-4" />
            </Link>
            <h1 className="text-[35px] font-bold">Join Us Today!</h1>
            <p className="text-gray-600 text-sm mt-2 mb-[25px]">
              Create your account to unlock seamless access to exciting events
              and personalized experiences.
            </p>
          </div>

          <div className="flex justify-center items-center gap-[10px] mb-4 rounded-[36px] w-full max-w-[250px] border-2 border-[#3A7BD5] mx-auto">
            <a href="https://alphaeventappdevmode.onrender.com/auth/google">
              <button className="text-[#77abf5] py-2 px-4 flex items-center justify-center">
                Sign in with Google
              </button>
            </a>
            <img
              src={googleSU}
              alt="Google Sign In"
              className="w-[16px] sm:w-auto ml-2"
            />
          </div>

          <div className="text-center mb-[18px] mt-[18px]">
            <p className="text-[14px font-light text-[#333333]">or</p>
          </div>

          <Formik
            initialValues={{
              name: '',
              email: '',
              passWd: '',
              confirmPassword: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values, { resetForm }) => {
              try {
                const response = await fetch(
                  'https://alphaeventappdevmode.onrender.com/new&User',
                  {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                  }
                );

                if (response.ok) {
                  toast.success('Sign Up Successful!');
                  navigate('/OnboardingMain');
                  resetForm();
                } else {
                  const { msg } = await response.json();
                  toast.error(msg || 'Sign Up Failed');
                }
              } catch (error) {
                toast.error('An error occurred');
              }
            }}
          >
            {({ errors, touched }) => (
              <Form className="space-y-6 w-full">
                <div>
                  <Field
                    name="name"
                    placeholder="Name"
                    className="w-full border  border-[#BEBEBE] rounded-lg py-2 px-4 text-sm"
                  />
                  {errors.name && touched.name && (
                    <div className="text-red-500 text-[10px]">
                      {errors.name}
                    </div>
                  )}
                </div>
                <div>
                  <Field
                    name="email"
                    placeholder="Email"
                    className="w-full border  border-[#BEBEBE] rounded-lg py-2 px-4 text-sm"
                  />
                  {errors.email && touched.email && (
                    <div className="text-red-500 text-[10px]">{errors.email}</div>
                  )}
                </div>
                <div className="relative">
                  <Field
                    name="passWd"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    className="w-full border  border-[#BEBEBE] rounded-lg py-2 px-4 text-sm"
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
                    className="w-full border border-[#BEBEBE]  rounded-lg py-2 px-4 text-sm"
                  />
                  <img
                    src={showConfirmPassword ? passwordEyeOpen : passwordEye}
                    alt="Toggle Confirm Password"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute top-3 right-3 w-5 cursor-pointer"
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <div className="text-red-500 text-[10px]">
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
                <p className="text-gray-500 text-xs text-center">
                  By continuing, you agree to Alvent’s{' '}
                  <a href="#" className="text-blue-500">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-blue-500">
                    Privacy Policy
                  </a>
                  .
                </p>
                <button
                  type="submit"
                  className="w-full bg-[#D8E5F7] text-[#7CA7E3] hover:text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Sign Up
                </button>
                <p className="text-center text-gray-600 text-sm">
                  Already have an account?{' '}
                  <a className="text-blue-500">
                    <Link to="/LogIn">Log in</Link>
                  </a>
                </p>
              </Form>
            )}
          </Formik>
        </div>

        {/* Sliding Image Section */}
        <div className="hidden lg:flex w-1/2">
          <Swiper
            modules={[Autoplay]}
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
      </div>
    </>
  );
};
