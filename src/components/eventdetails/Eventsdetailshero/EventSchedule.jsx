// import React, { useEffect, useState } from 'react';
// import { useParams } from "react-router-dom";
// // import data from "../../../../../data/db4.json"
// function EventSchedule({ eventDetails }) {
//   // const [event, setEvent] = useState(null);

//   // const { eventID } = useParams(); // Extract eventId from the URL






//   // console.log("eventID:",eventID)

// // useEffect(() => {
// //   const fetchEventDetails = async () => {
// //     try {
// //       const response = await fetch(
// //         `https://setup-6689.onrender.com/api/eventDetails/${eventID}`
// //       );

// //       if (response.ok) {
// //         const data = await response.json();

// //         // overwrite mock data only if backend works
// //         setEvent(data);
// //       }
// //     } catch (error) {
// //       console.log("Backend unavailable, using mock data");
// //     }
// //   };

// //   if (eventID) {
// //     fetchEventDetails();
// //   }
// // }, [eventID]);




//   // useEffect(() => {
//   //   // Fetch event details using the eventId
//   //   const fetchEventDetails = async () => {
//   //     try {

//   //       // const response = await fetch(`https://alphaeventappdevmode.onrender.com/api/eventDetails/${eventID}`);
//   //       const response = await fetch(`https://setup-6689.onrender.com/api/eventDetails/${eventID}`);
//   //       console.log("details:",response)
//   //       if (response.ok) {
//   //         const data = await response.json();
//   //         console.log('Fetched event details:', data)
//   //         setEvent(data);
//   //       } else {
//   //         console.error('Failed to fetch event details:', response.statusText);
//   //       }
//   //     } catch (error) {
//   //       console.error('Error fetching event details:', error);
//   //     }
//   //   };    
//   //   if (eventID) {
//   //     fetchEventDetails();
//   //   }
//   // }, [eventID]);


//   if (!eventDetails) {
//     return <div>Loading event details...</div>; // Render a loading state while fetching event details
//   }

//    const { eventTitle, eventDesc,eventStart,eventSchedule } = eventDetails;
//   return (

//   <div className='lg:min-h-[648px] w-full flex flex-col gap-y-[45px] md:w-[30.38vw]' >




//       {/* Event schedule section */}


//     <div className='pt-[30px] '>
//      <h3 className='font-bold text-[24px]'>{eventDetails.eventTitle}</h3>
//         <div className='w-[247px] py-3 font-normal text-customlightgray text-[18px]  h-[80px] flex flex-col gap-y-[10px]'>

//           <ol className='flex gap-[10px] '>
//             {/* <li className='items-left'><img src={event.dateDetails.img} alt="" /></li> */}
//             <li>            <h2>{eventDetails.eventStart}</h2></li>
//           </ol>
//           {/* <ol className='flex gap-[10px]'>
//             <li><img src={event.timeDetails.img} alt="" /></li>
//             <li><h2>{event.timeDetails.time}</h2></li>
//           </ol> */}
//           <ol className='flex gap-[10px]'>
//             {/* <li><img src={event.location.img} alt="" /></li> */}
//             {/* <li><h2>{event.evnttd.eventLocation.eventVenue },{event.evnttd.eventLocation.eventCity },{ event.evnttd.eventLocation.eventCountry}.</h2></li> */}

//           </ol>
//         </div>

//         {/* about section */}
//         <div className='gap-[5px] my-12  flex flex-col  h-full md:max-w-[30.83vw]'>
//           {/* <h2 className='font-bold text-[24px]'>{event.aboutDetails.name}</h2> */}
//           <p className='w-full h-[]'>{eventDetails.eventSchedule.date}</p>
//         </div>

//           {/* Eventperks */}
//         {/* <div className='flex flex-col'>
//           <h3 className='font-bold pb-2  text-[24px]'>Event Perks </h3>
//           <div className=" flex gap-[16px] flex-col">

//             {event.perks.map((perk, index) => (
//               <ol className='' key={index}>
//                 <p>{perk.title}{perk.description}</p>

//               </ol>
//             ))}
//           </div>
//         </div> */}
// </div>


// </div>


//   );
// }

// export default EventSchedule;


import { useState } from "react";
import React from "react";
import { CalendarDays, Clock, MapPin, BadgeCheck } from 'lucide-react';


function EventSchedule({ eventDetails }) {
  const [readMore, setReadMore] = useState(false);
  if (!eventDetails) {
    return <div>Loading event details...</div>;
  }


  const tickets = eventDetails?.tickets || [];

const total = tickets.reduce(
  (sum, ticket) => sum + Number(ticket.quantity || 0),
  0
);

const sold = tickets.reduce(
  (sum, ticket) => sum + Number(ticket.sold || 0),
  0
);

const spotsLeft = total - sold;

const soldPercentage =
  total > 0 ? (sold / total) * 100 : 0;


  const {
    eventTitle,
    eventDesc,
    eventSchedule,
    eventPerks,
    organizerName,
    eventTags
  } = eventDetails;


  // To calculate percentage dynamically:





  return (
    <div className="lg:min-h-[648px] w-full flex flex-col gap-y-[24px] md:w-[387px]">

      <div className="flex flex-col md:flex-row items-center gap-[16px] mt-4 w-full">

        {/* ATTENDING */}
        <div className="h-[39px] px-[16px] w-full md:w-auto md:flex-1 rounded-[43px] border border-[#4CAF50] bg-[#E8F5E9] flex items-center justify-center">

          <p className="text-[#008000] font-['Lato'] font-medium text-[16px] leading-[100%] tracking-[0%] whitespace-nowrap">
          <p>
  • {sold.toLocaleString()} PEOPLE ATTENDING
</p>
          </p>
        </div>

        {/* SPOTS LEFT */}
        <div className="h-[39px] px-[16px] w-full md:w-auto md:flex-1 rounded-[43px] border border-[#FF4D4F] bg-[#FFF1F0] flex items-center justify-center">

          <p className="text-[#FF0000] font-['Lato'] font-medium text-[16px] leading-[100%] tracking-[0%] whitespace-nowrap">
        • ONLY {spotsLeft.toLocaleString()} SPOTS LEFT
          </p>
        </div>

      </div>

      <div className="w-full mt-2 max-w-[380px] h-[56px] rounded-[10px] border border-[#D9D9D9] bg-white px-[16px] py-[12px]">



        {/* TOP TEXT */}
        <div className="flex  items-center justify-between mb-[10px]">

          <p className="text-[12px] text-[#8C8C8C] font-normal">
            Ticket availability
          </p>

          <p className="text-[12px] text-[#FF4D4F] font-semibold">
           {spotsLeft.toLocaleString()} of {total.toLocaleString()} remaining
          </p>
        </div>
        {/* PROGRESS BAR */}
        <div className="w-full h-[6px] bg-[#E5E5E5] rounded-full overflow-hidden">

          <div
            className="h-full rounded-full bg-gradient-to-r from-[#52C41A] via-[#FAAD14] to-[#FF4D4F]"
            style={{ width: `${soldPercentage}%` }}
          />
        </div>


      </div>





      {/* EVENT TITLE */}
      <div className=" pt-[30px]">
        <h3 className="font-bold text-[24px]">{eventTitle}</h3>

        {/* EVENT SCHEDULE */}
        <div className="py-3 font-normal text-[#333333] text-[18px] flex flex-col gap-y-[10px]">

          {/* DATE */}
          <ol className="flex  gap-[10px]">
            <li> <CalendarDays /></li>
            <li>
              <h2>{eventSchedule?.date}</h2>
            </li>
          </ol>

          {/* TIME */}
          <ol className="flex gap-[10px] items-center">
            <li><Clock /></li>
            <li>
              <h2>{eventSchedule?.time}</h2>
            </li>
          </ol>

          {/* LOCATION */}
          <ol className="flex gap-[10px] ">
            <li><MapPin /></li>
            <li>
              <h2>
                {eventSchedule?.address?.address}
              </h2>
            </li>
          </ol>
        </div>

        {/* ABOUT EVENT */}
        <div>
          {/* ABOUT EVENT */}
          <div className="gap-[5px] my-12 flex flex-col">
            <h2 className="font-['Roboto'] font-semibold text-[18px] leading-[26px] tracking-[0%] text-[#757575] uppercase">
              About Event
            </h2>

            <p className="w-full font-['Roboto'] font-normal text-[16px] leading-[24px] tracking-[0%] text-[#333333]">
              {readMore
                ? eventDesc
                : `${eventDesc.slice(0, 120)}...`}
            </p>

            <button
              onClick={() => setReadMore(!readMore)}
              className="text-[#123499] font-semibold w-fit"
            >
              {readMore ? "READ LESS" : "READ MORE"}
            </button>
          </div>
        </div>

        {/* EVENT PERKS */}
        <div className="flex flex-col gap-y-[16px]">
          <h2 className="font-['Roboto'] font-semibold text-[18px] leading-[26px] tracking-[0%] text-[#757575] uppercase">
            Event Perks
          </h2>

          <div className="flex flex-col gap-y-[16px]">
            <div>
              <p>
                <span className="font-bold">
                  Career Coaching Sessions:
                </span>{" "}
                Receive personalized guidance from experienced
                career coaches to help you navigate and advance
                your career path.
              </p>
            </div>

            <div>
              <p>
                <span className="font-bold">
                  Exclusive Resource Materials:
                </span>{" "}
                Take home valuable guides, templates, and
                toolkits to support your career development
                long after the conference ends.
              </p>
            </div>

            <div>
              <p>
                <span className="font-bold">
                  Professional Headshots:
                </span>{" "}
                Get a complimentary, high-quality headshot to
                enhance your online presence and professional
                profile.
              </p>
            </div>
          </div>
        </div>

        {/* ORGANIZER */}
        <div className="mt-[40px]  flex flex-col gap-y-[16px]">
          <h2 className="font-['Roboto'] font-semibold text-[18px] leading-[26px] tracking-[0%] text-[#757575] uppercase">
            Event Organizer
          </h2>

          <div className="border border-[#2D5BFF] h-[118px] rounded-[16px] px-[24px] flex items-center gap-[16px]">
            <img
              src={eventDetails.eventImgURL}
              alt="organizer"
              className="w-[60px] h-[60px] rounded-[12px] object-cover"
            />

            <div className="flex flex-col">
              <h2 className="font-Roboto font-semibold text-[18px] leading-[26px] text-[#333333] tracking-[0%]">
                {organizerName}
              </h2>

              <p className="font-Roboto font-light text-[12px] leading-[16px] tracking-[0%] text-[#333333]">
                42 events hosted · 12,400 attendees
              </p>
              <div className="flex gap-2 pt-1">

                <span className="text-[#008000]">< BadgeCheck /></span>
                <p className="text-[#008000] font-['Roboto'] font-medium text-[14px] leading-[20px] tracking-[0.5%]">
                  Verified Organizer
                </p></div>
            </div>



          </div>



        </div>




        {/* Tags */}
        <div>






          <div className="max-w-sm h-auto pt-6 ">

            <h2 className="font-['Roboto'] font-semibold text-[18px] leading-[26px] tracking-[0%] text-[#757575] uppercase">
              event tags
            </h2>

            <div className="flex flex-wrap gap-[15px] mt-3">

              {eventTags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#DFE7FF] text-[#333333] rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}

            </div>
          </div>


        </div>



      </div>
    </div>
  );
}

export default EventSchedule;