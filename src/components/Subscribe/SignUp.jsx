import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Image } from "cloudinary-react";
import envelopeFooter from '../../assets/envelopeFooter.svg';
import arrowwhiteright from '../../assets/arrowwhiteright.svg';
import SubscribePopup from '../path-to/SubscribePopup'; // update this path based on your project structure

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

export const SignUp = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="w-full px-4 lg:px-0 font-Lato relative">
      <div className="max-w-[1280px] bg-[#FFFFFF] flex flex-wrap gap-[160px] rounded-[30px] px-[40px] overflow-hidden shadow-md">
        {/* Text and Form Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
          <p className="text-[18px] font-light text-[#333333]">Don’t miss out on future updates!</p>
          <p className="text-[#3A7BD5] font-bold text-[24px] mb-[40px]">Subscribe to our newsletter today!</p>

          <Formik
            initialValues={{ email: '' }}
            validationSchema={SignUpSchema}
            onSubmit={async (values, { resetForm }) => {
              try {
                const response = await fetch("https://alphaeventappdevmode.onrender.com/api/userSubscribe", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                });

                const data = await response.json();

                if (response.ok) {
                  setShowPopup(true);
                  resetForm();
                  console.log("Response:", data);
                } else {
                  alert(data?.message || "Subscription failed!");
                }
              } catch (error) {
                alert("Network error. Please try again.");
                console.error("Error:", error);
              }
            }}
          >
            {({ errors, touched }) => (
              <Form className="w-full">
                <fieldset className="flex flex-col lg:flex-row gap-4 items-center">
                  {/* Email Field with Icon */}
                  <div className="w-full relative">
                    <img
                      src={envelopeFooter}
                      alt="Envelope Icon"
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 opacity-50"
                    />
                    <Field
                      className="w-full pl-12 pr-4 py-2 border border-[#757575] rounded-[12px] focus:outline-none"
                      placeholder="Enter email address"
                      name="email"
                      type="email"
                    />
                  </div>

                  {/* Error Message */}
                  {errors.email && touched.email && (
                    <div className="text-red-500 text-[12px] mt-1">{errors.email}</div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#FF7F50] text-white rounded-[10px] hover:bg-[#2F3B4C] transition flex items-center justify-center gap-2"
                  >
                    Subscribe
                    <img src={arrowwhiteright} alt="Arrow Right" className="w-4 h-4" />
                  </button>
                </fieldset>
              </Form>
            )}
          </Formik>
        </div>

        {/* Image Section */}
        <div>
          <Image
            className=""
            cloudName="dqtyrjpeh"
            publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1731255028/Flying-Envelope--Streamline-Ux.png_yfqmpw.png"
            loading="lazy"
            alt="Newsletter illustration"
          />
        </div>
      </div>

      {/* Custom Popup */}
      {showPopup && <SubscribePopup />}
    </section>
  );
};
