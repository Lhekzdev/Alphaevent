import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

const Section2EE = () => {
  // State to track the active button
  const [activeButton, setActiveButton] = useState('All');

  // Function to handle button click
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <section className="bg-[#F3F5FA]">
        <div className="ml-[100px] lg:w-[578px] flex flex-wrap gap-[25px] text-[18px] font-bold text-[#757575]">
          {/* All Button */}
          <button
            onClick={() => handleButtonClick('All')}
            style={{
              color: activeButton === 'All' ? '#123499' : '#757575', // Active color or default
            }}
          >
            All
          </button>

          {/* Your Picks Button */}
          <button
            onClick={() => handleButtonClick('Your Picks')}
            style={{
              color: activeButton === 'Your Picks' ? '#123499' : '#757575',
            }}
          >
            Free
          </button>


          {/* Categories Button with Icon */}
          <div>
  <button
    onClick={() => handleButtonClick('Categories')}
    className="flex items-center justify-center"
    style={{
      color: activeButton === 'Categories' ? '#123499' : '#757575'
    }}
  >
    <p>Categories</p>
    <MdKeyboardArrowDown />
  </button>
</div>
            

          
          {/* Today Button */}
          {/* <button
            onClick={() => handleButtonClick('Today')}
            style={{
              color: activeButton === 'Today' ? '#123499' : '#000000',
            }}
          >
            Today
          </button> */}

          {/* This Week Button */}
          <button
            onClick={() => handleButtonClick('This week')}
            style={{
              color: activeButton === 'This week' ? '#123499' : '#757575',
            }}
          >
            This week
          </button>

        </div>
      </section>
    </>
  );
};

export default Section2EE;
