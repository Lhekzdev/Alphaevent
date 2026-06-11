// // app/connecting/page.jsx
// // OR
// // pages/connecting.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom";



// export default function ConnectingPage() {
// const navigate = useNavigate();


//     const { eventID } = useParams();

//   const handlePaymentResult = (success) => {
  
//     if (success) {
  
//       // SUCCESS ROUTE
//       navigate(`/ticketSuccessPage/${eventID}`);
  
//     } else {
  
//       // FAILED ROUTE
//       navigate(`/paymentFailedPage/${eventID}`);
  
//     }
//   };
  
//   return (
//     <div className="min-h-screen bg-[#d9d9dd] flex items-center justify-center">
//       <div className="bg-[#F3F5FA] w-full max-w-[420px] rounded-md py-20 px-8 text-center shadow-sm">
        
//         {/* Dots */}
//         <div className="flex justify-center items-center gap-1 mb-5">
//           <span className="w-2.5 h-2.5 rounded-full bg-[#E7470D] animate-bounce"></span>

//           <span className="w-2.5 h-2.5 rounded-full bg-[#123499] animate-bounce [animation-delay:0.15s]"></span>

//           <span className="w-2.5 h-2.5 rounded-full bg-[#123499] animate-bounce [animation-delay:0.3s]"></span>
//         </div>

//         {/* Heading */}
//         <h1 className="font-lato text-[#000000] text-[32px] leading-[40px] font-bold tracking-normal">
//           Connecting to Paystack
//         </h1>

//         {/* Sub text */}
//         <p className="font-roboto text-[14px] leading-[20px] font-normal tracking-normal text-center text-[#757575] mt-2">
//           Getting things ready for a safe checkout.
//         </p>

//         {/* Progress */}
//         <div className="w-[270px] h-[8.64px] bg-gray-300 rounded-full mx-auto mt-8 overflow-hidden">
//           <div className="h-full w-[8.639999389648438px] bg-[#123499] rounded-full animate-pulse"></div>
//         </div>

//         {/* Footer */}
//         <p className="font-roboto text-[12px] text-[#757575] leading-[16px] font-light tracking-normal text-center mt-3">
//           Taking longer than usual? Check your internet connection.
//         </p>
//       </div>
//     </div>
//   );
// }



import React, { useEffect } from "react";


import {
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";




export default function ConnectingPage() {




  const navigate = useNavigate();
  const { state } = useLocation();

  const { eventID } = useParams();

  useEffect(() => {
  const timer = setTimeout(() => {
    navigate(`/ticketSuccessPage/${eventID}`, {
      state,
    });
  }, 5000);

  return () => clearTimeout(timer);
}, [navigate, eventID, state]);


  // AUTO SUCCESS AFTER 10 SECONDS
  useEffect(() => {

    const timer = setTimeout(() => {

      navigate(
        `/ticketSuccessPage/${eventID}`
      );

    }, 5000);

    return () => clearTimeout(timer);

  }, [navigate, eventID]);

  // FAILED PAYMENT
  const handleFailedPayment = () => {

navigate(`/paymentFailedPage/${eventID}`, {
  state,
});}

  return (
    <div className="min-h-screen bg-[#d9d9dd] flex items-center justify-center">

      {/* CLICK ANYWHERE TO FAIL */}
      <div
        onClick={handleFailedPayment}
        className="bg-[#F3F5FA] w-full max-w-[420px] rounded-md py-20 px-8 text-center shadow-sm cursor-pointer"
      >

        {/* Dots */}
        <div className="flex justify-center items-center gap-1 mb-5">

          <span className="w-2.5 h-2.5 rounded-full bg-[#E7470D] animate-bounce"></span>

          <span className="w-2.5 h-2.5 rounded-full bg-[#123499] animate-bounce [animation-delay:0.15s]"></span>

          <span className="w-2.5 h-2.5 rounded-full bg-[#123499] animate-bounce [animation-delay:0.3s]"></span>

        </div>

        {/* Heading */}
        <h1 className="font-lato text-[#000000] text-[32px] leading-[40px] font-bold">
          Connecting to Paystack
        </h1>

        {/* Sub text */}
        <p className="font-roboto text-[14px] leading-[20px] text-[#757575] mt-2">
          Getting things ready for a safe checkout.
        </p>

        {/* Progress */}
        <div className="w-[270px] h-[8px] bg-gray-300 rounded-full mx-auto mt-8 overflow-hidden">

          <div className="h-full w-full bg-[#123499] animate-pulse rounded-full"></div>

        </div>

        {/* Footer */}
        <p className="font-roboto text-[12px] text-[#757575] leading-[16px] mt-3">
          Do not click screen while connecting...
        </p>

      </div>
    </div>
  );
}