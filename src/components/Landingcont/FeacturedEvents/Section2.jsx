import React, { useState, useEffect } from 'react';

const Section2 = () => {
  // State to keep track of the active button
  const [activeButton, setActiveButton] = useState('All Categories');

  // Effect to set focus on page load (useful for accessibility and visual feedback)
  useEffect(() => {
    setActiveButton('All Categories');
  }, []);

  // Function to handle button click and set active state
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <section className='w-full mt-[42px] flex justify-center'> 
        <div className='grid grid-cols-2 gap-x-[20px] gap-y-[20px] text-[16px] font-"lato" md:grid-cols-3 lg:grid-cols-6 items-center justify-center max-w-[1000px]'>
          <button
            className={`border text-[14px] px-[28px] rounded-[10px] py-[14px] ${
              activeButton === 'All Categories' 
                ? 'bg-[#3A7BD5] text-white' 
                : 'border-[#3A7BD5] text-[#3A7BD5]'
            }`}
            onClick={() => handleButtonClick('All Categories')}
          >
            All Categories
          </button>
          <button
            className={`border px-[32px] rounded-[10px] py-[14px] ${
              activeButton === 'Conferences' 
                ? 'bg-[#3A7BD5] text-white' 
                : 'border-[#3A7BD5] text-[#3A7BD5]'
            }`}
            onClick={() => handleButtonClick('Conferences')}
          >
            Conferences
          </button>
          <button
            className={`border px-[32px] rounded-[10px] py-[14px] ${
              activeButton === 'Sport' 
                ? 'bg-[#3A7BD5] text-white' 
                : 'border-[#3A7BD5] text-[#3A7BD5]'
            }`}
            onClick={() => handleButtonClick('Sport')}
          >
            Sport
          </button>
          <button
            className={`border px-[32px] rounded-[10px] py-[14px] ${
              activeButton === 'Concerts' 
                ? 'bg-[#3A7BD5] text-white' 
                : 'border-[#3A7BD5] text-[#3A7BD5]'
            }`}
            onClick={() => handleButtonClick('Concerts')}
          >
            Concerts
          </button>
          <button
            className={`border px-[32px] rounded-[10px] py-[14px] ${
              activeButton === 'Button1' 
                ? 'bg-[#3A7BD5] text-white' 
                : 'border-[#3A7BD5] text-[#3A7BD5]'
            }`}
            onClick={() => handleButtonClick('Button1')}
          >
            Button1
          </button>
          <button
            className={`border px-[32px] rounded-[10px] py-[14px] ${
              activeButton === 'Button2' 
                ? 'bg-[#3A7BD5] text-white' 
                : 'border-[#3A7BD5] text-[#3A7BD5]'
            }`}
            onClick={() => handleButtonClick('Button2')}
          >
            Button2
          </button>
        </div>
      </section>
    </>
  );
};

export default Section2;
