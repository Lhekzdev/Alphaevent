

import React, { useState } from 'react';
const img1 ="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1731611793/Ellipse23_mlj9er.png"

const EventTicket = () => {
  const [regularQuantity, setRegularQuantity] = useState(0);
  const [vipQuantity, setVipQuantity] = useState(0);


  function changeQuantity(type, delta) {
    if (type === 'regular') {
      setRegularQuantity((prev) => Math.max(0, prev + delta));
    } else if (type === 'vip') {
      setVipQuantity((prev) => Math.max(0, prev + delta));
    }
  }

  function purchaseTickets() {
    alert(`Regular Tickets: ${regularQuantity}\nVIP Tickets: ${vipQuantity}`);
    // Here you could send data to the server if needed.
    // fetch('/purchase', {
    //     method: 'POST',
    //     body: JSON.stringify({ regularQuantity, vipQuantity }),
    //     headers: { 'Content-Type': 'application/json' }
    // });
  }

  return (
    <div className='flex  flex-col items-center font-Lato mb-12 gap-[10px]'>
   
   {/* purchase ticket section */}
    <div className='rounded-[10px] px-[20px] py-[10px] bg-customlightpink mt-[30px] w-[344px] h-[276px] '>
      <div className='w-[304px] flex flex-col gap-y-[15px] h-[112px]'>
        <h4 className=''>Tickets</h4>
        <div className='flex justify-between'>

          <label className='h-[px]'>
            <ol className='text-customSkyblue text-[16px] font-bold'>REGULAR</ol>  <ol>NGN 3,000</ol></label>
          <label className='space-x-3'><button className='w-[24px] rounded-[3px] text-white bg-customlightgray h-[24px]' onClick={() => changeQuantity('regular', -1)}> - </button>
          <span className='font-bold'>{regularQuantity}</span>
          <button className='w-[24px] rounded-[3px] text-white  bg-customSkyblue h-[24px]' onClick={() => changeQuantity('regular', 1)}> + </button>
       </label> </div>

        <div className='flex justify-between '>
          <label className='h-[36px]'><ol className='font-bold text-customSkyblue'>VIP </ol> <ol>NGN 5,000</ol></label>
          <label className='space-x-3 '><button className="w-[24px] rounded-[3px] bg-customlightgray text-white h-[24px]" onClick={() => changeQuantity('vip', -1)}>-</button>
          <span className='font-bold'>{vipQuantity}</span>
          <button className='w-[24px] bg-customSkyblue h-[24px] rounded-[3px] text-white' onClick={() => changeQuantity('vip', 1)}>+</button>
        </label></div>
<div className='text-center  text-white h-[44px] mt-5 rounded-[10px] border px-[32px] py-[16px] bg-customSkyblue'><button  onClick={purchaseTickets}>Purchase Tickets</button></div>
        </div>
      
    </div>

{/* Add to calender section */}
    <div>
    <div class="w-[344px] h-[194px] p-4 bg-customlightpink  rounded-[10px]">
  <h2 class="text-[18px] leading-[27px] font-bold text-gray-800">Event Date & Time</h2>
  <p class="text-customlightgray mt-[7px]">Saturday, November 11 | <span class="font-bold">9:00 AM</span></p>
  
  <button class="mt-[25px] px-[20px] py-2 border border-blue-500 text-blue-500 rounded-[10px] hover:bg-blue-50 w-full">
    Add to Calendar
  </button>
</div>
    </div>


    <div class="w-[344px] h-[161px] px-[20px] py-[10px] bg-customlightpink  rounded-[10px]">
  <h5 class="text-[18px] leading-[27px] font-bold ">Event Organizers</h5>
  
  <div class="flex items-center justify-between mt-2">
    <div class="flex items-center">
      <img src={img1} alt="Organizer" class="w-10 h-10 rounded-full"/>
      <span class="ml-3 text-customlightgray font-normal">Liberty Life Centre</span>
    </div>
    <a href="#" class="text-customSkyblue text-sm font-medium hover:underline">+ Follow</a>
  </div>
  
  <button class="mt-4 px-4 py-2 border border-customSkyblue text-customSkyblue rounded-lg hover:bg-blue-50 w-full">
    Contact the organizer
  </button>
</div>
<div>
<div class="max-w-sm h-[78px] mx-auto p-4">
  <h2 class="text-lg font-semibold text-gray-800">Tags</h2>
  
  <div class="flex flex-wrap gap-[15px] justify-between text-customlightgray  mt-3">
    <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">CareerPath</span>
    <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Coaching</span>
    <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Abuja events</span>
    <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Growth</span>
    <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Networking</span>
    <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Innovative</span>
    <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">CareerEmpowerment</span>
  </div>
</div>
</div>
  

    </div>
  );
};



export default EventTicket