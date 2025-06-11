// components/Notifications.js
import React, { useEffect, useRef } from "react";
import readicon from "../../../assets/readicon.svg";

const Notifications = ({ onClose }) => {
  const panelRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <section className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-30 flex justify-end">
      <div
        ref={panelRef}
        className="bg-white w-[600px] h-[500px] mr-[200px] mt-[85px] p-4 rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.4)] relative"
      >
        {/* <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✕
        </button> */}

        {/* Level One */}

        <div className="flex items-center mt-[24px] mr-[24px] ml-[24px] gap-[210px]">
          <p className="text-[20px] text-[#2D6CCF] font-bold">Notifications</p>
          <div className="flex items-center  gap-[20px]">
            <div className="flex px-[13px] py-[13px] items-center border border-1 border-[#ABABAB] rounded-[8px] w-[79px] h-[40px] gap-[11px]">
              <img
                src={readicon}
                onClick={() => redir("/Landing")}
                alt="arrowBack"
                className="w-[18px]"
              />
              <p className="text-[12px] font-semibold text-[#333333]">All</p>
            </div>
            <div>
              <p className="text-[12px] font-semibold text-[#333333]">
                {" "}
                Mark all as read
              </p>
            </div>
          </div>
        </div>
 
      {/* Level One ends here */}

      {/* Level two */}
      <div>
        <div>
          <input
            type="text"
            placeholder="Search notifications..."
            className="w-[236px] h-[40px] p-[10px] border border-1 border-[#ABABAB] rounded-[8px] mb-4"
          />
        </div>
      </div>

      </div>
    </section>
  );
};

export default Notifications;
