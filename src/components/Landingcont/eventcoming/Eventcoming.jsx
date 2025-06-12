import React from 'react';
import { Link } from 'react-router-dom';

const manwoman = "https://res.cloudinary.com/dzyvwxh7n/image/upload/v1731332783/manwoman_ffelhs.png";

const Eventcoming = () => {
  return (
    <div className="bg-[#FF7F50] w-full py-10 px-4 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between overflow-visible relative h-[230px] mt-[45px]">
      
      {/* Image Section with upward overflow */}
      <div className="flex justify-center md:justify-start w-full md:w-1/2 mb-6 md:mb-0 relative -mt-12 z-10">
        <img
          loading="lazy"
          src={manwoman}
          alt="man and woman"
          className="w-[90%] max-w-[500px]"
        />
      </div>

      {/* Text Section */}
      <div className="text-white w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right gap-6">
        <h2 className="text-[36px] font-bold">Have an Event Coming Up?</h2>
        <p className="text-[15px]  max-w-[370px]">
          Create awareness for your events with ease, fast track ticket sales by listing your event on Alvent.
        </p>
        <Link to="/signUp">
          <button className="bg-white text-[#FF7F50] font-medium py-3 px-6 rounded-[10px] hover:bg-[#ffe1d6] transition">
            Create Event
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Eventcoming;
