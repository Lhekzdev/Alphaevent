import React, { useEffect } from "react";
import { motion } from "framer-motion";
import popUPP from "../../../assets/assets/popUPP.gif";
import popUPPPP from "../../../assets/assets/popUPPPP.gif";

const PasswordSuccessPopup = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, 6000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* 🔄 Echo Box */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{
          delay: 0,
          type: "spring",
          stiffness: 800,
          damping: 70,
        }}
        className="absolute bg-white rounded-[14px] w-[268px] h-[200px] shadow-lg z-0 flex items-center justify-center overflow-hidden"
      >
        <img
          src={popUPP}
          alt="Echo Animation"
          className="w-[260px] h-[190px]"
        />
      </motion.div>

      {/* ✅ Main Popup */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 2.0,
          type: "spring",
          stiffness: 10810,
          damping: 120,
        }}
        className="relative z-10 bg-white rounded-[12px] w-[600px] h-[400px] flex flex-col items-center justify-center"
      >
        <motion.img
  src={popUPPPP}
          alt="Main Animation"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 2.2,
            type: "spring",
            stiffness: 600,
            damping: 20,
          }}
          className="w-[268px] h-[200px] mb-2"
        />
        <h2 className="text-lg font-semibold">Password Reset Successful</h2>
        <p className="text-sm text-gray-500">You can now log in.</p>
      </motion.div>
    </div>
  );
};

export default PasswordSuccessPopup;
