import React, { useEffect, useState } from 'react';
// import data from "../../../../../data/db4.json"
function EventSchedule() {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5004/eventSchedule/1')
      .then((response) => response.json())
      .then((data) => setEvent(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!event) return <div>Loading...</div>;

  return (
 
  <div className='lg:min-h-[648px] w-full flex flex-col gap-y-[45px] md:w-[30.38vw]' >




      {/* Event schedule section */}
    
    
    <div className='pt-[30px] '>
     <h3 className='font-bold text-[24px]'>{event.title}</h3>
        <div className='w-[247px] py-3 font-normal text-customlightgray text-[18px]  h-[80px] flex flex-col gap-y-[10px]'>
       
          <ol className='flex gap-[10px] '>
            <li className='items-left'><img src={event.dateDetails.img} alt="" /></li>
            <li><h2>{event.dateDetails.date}</h2></li>
          </ol>
          <ol className='flex gap-[10px]'>
            <li><img src={event.timeDetails.img} alt="" /></li>
            <li><h2>{event.timeDetails.time}</h2></li>
          </ol>
          <ol className='flex gap-[10px]'>
            <li><img src={event.location.img} alt="" /></li>
            <li><h2>{event.location.name}</h2></li>
          </ol>
        </div>

        {/* about section */}
        <div className='gap-[5px] my-12  flex flex-col  h-full md:max-w-[30.83vw]'>
          <h2 className='font-bold text-[24px]'>{event.aboutDetails.name}</h2>
          <p className='w-full h-[]'>{event.aboutDetails.about}</p>
        </div>

{/* Eventperks */}
  <div className='flex flex-col'>
 <h3 className='font-bold pb-2  text-[24px]'>Event Perks </h3>
          <div className=" flex gap-[16px] flex-col">
         
            {event.perks.map((perk, index) => (
              <ol className='' key={index}>
                <p>{perk.title}{perk.description}</p>
           
              </ol>
            ))}
          </div></div>
</div>
  

  



</div>



   
  );
}

export default EventSchedule;
