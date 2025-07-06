import React from 'react';
// import logoSU from '../../assets/logoSU.svg';
import { useNavigate } from 'react-router-dom';

const messages = {
  success: {
    title: "You’re Subscribed",
    message: "Thanks for subscribing to our newsletter. 🎉",
    subtext: "Stay tuned for updates on events, ticket offers, and exclusive news.",
  },
  duplicate: {
    title: "Already Subscribed",
    message: "This email is already subscribed.",
    subtext: "You’re already receiving our latest updates.",
  },
  error: {
    title: "Error, Something Went Wrong",
    message: "Unable to subscribe right now.",
    subtext: "Please check your Email and try again.",
  },
};

const SubscribePopUp = ({ popupType = "You’re Subscribed", onClose }) => {
  const navigate = useNavigate();
  const content = messages[popupType] || messages["error"];

  const handleNavigate = () => {
    if (onClose) onClose();
    navigate("/");
  };

  return (
    <section className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-[12px] shadow-sm w-[1020px] h-[628px] p-[20px] flex flex-col justify-between">
      <img
              src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747615311/ALVENT_1_omcg0v.png"
              alt="Alvent Logo"
              className="pt-3 w-[120px] px-6 h-[24px] cursor-pointer"
              onClick={() => navigate("/")}
            />
        <div className='self-center'>
          <h3 className="text-[40px] font-bold text-[#000000] mb-2 text-center">{content.title}</h3>
          <p className="mb-1 text-[24px] text-[#000000] font-normal text-center">{content.message}</p>
          <p className="text-[#000000] text-[24px] font-normal text-center w-[622px]">{content.subtext}</p>
        </div>
        <button
          onClick={handleNavigate}
          className="w-[306px] h-[56px] border border-[#2D6CCF] text-[#FFFFFF] text-[20px] rounded-[10px] font-bold bg-[#2D6CCF] self-center mb-[55px]"
        >
          Back to Homepage
        </button>
      </div>
    </section>
  );
};

export default SubscribePopUp;
