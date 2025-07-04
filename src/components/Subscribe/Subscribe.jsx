import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Image } from "cloudinary-react";
import envelopeFooter from "../../assets/envelopeFooter.svg";
import arrowwhiteright from "../../assets/arrowwhiteright.svg";
import SubscribePopUp from './SubscribePopUp'

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState("success"); // "success" or "duplicate"

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setPopupType("invalid");
      setShowPopup(true);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setPopupType("invalid");
      setShowPopup(true);
      return;
    }

    try {
      const response = await fetch(
        "https://alphaeventappdevmode.onrender.com/api/userSubscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setPopupType("success");

        setShowPopup(true);
        setEmail("");
      } else if (response.status === 409) {
        setPopupType("duplicate");
        setShowPopup(true);
      } else {
        setPopupType("error");
        setShowPopup(true);
      }
    } catch (error) {
      setPopupType("error");
      setShowPopup(true);
      console.error("Fetch Error:", error);
    }
  };

  return (
    <section className="w-full px-4 lg:px-0 font-Lato">
      <div className="max-w-[1280px] bg-[#FFFFFF] flex flex-wrap gap-[270px] rounded-[30px] px-[40px] overflow-hidden shadow-md">
        {/* Text and Form Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
          <p className="text-[18px] font-light text-[#333333]">
            Don’t miss out on future updates!
          </p>
          <p className="text-[#3A7BD5] font-bold text-[24px] mb-[40px]">
            Subscribe to our newsletter today!
          </p>

          <form onSubmit={handleSubmit} className="w-full">
            <fieldset className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Email Input */}
              <div className="w-full relative">
                <img
                  src={envelopeFooter}
                  alt="Envelope Icon"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 opacity-50"
                />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-2 border border-[#757575] rounded-[12px] focus:outline-none"
                  placeholder="Enter email address"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-6 py-2 bg-[#FF7F50] text-white rounded-[10px] hover:bg-[#2F3B4C] transition flex items-center justify-center gap-2"
              >
                Subscribe
                <img
                  src={arrowwhiteright}
                  alt="Arrow Right"
                  className="w-4 h-4"
                />
              </button>
            </fieldset>
          </form>
        </div>

        {/* Image Section */}
        <div>
          <Image
            cloudName="dqtyrjpeh"
            publicId="Flying-Envelope--Streamline-Ux.png_yfqmpw"
            loading="lazy"
            alt="Newsletter illustration"
          />
        </div>
      </div>

      {showPopup && (
        <SubscribePopUp
          popupType={popupType}
          onClose={() => setShowPopup(false)}
        />
      )}
    </section>
  );
};
export default Subscribe;