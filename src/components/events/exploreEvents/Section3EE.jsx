import React, { useState, useEffect } from "react";
import heartRed from '../../../assets/heartRed.svg';
import calender from '../../../assets/calender.svg';
import location from '../../../assets/location.svg';
// import data from "../../../../data/db.json"; // Import the data
import { Link } from 'react-router-dom';
import {
  IoMdArrowRoundForward,
  IoMdArrowRoundBack
} from "react-icons/io";
// // const Section3EE = () => {


 

// //   const indexOfLastEvent =
// //   currentPage * eventsPerPage;

// // const indexOfFirstEvent =
// //   indexOfLastEvent - eventsPerPage;


// // const combinedEvents = [
// //   ...events,
// //   ...upcomingEvents
// // ];

// // const currentEvents =
// //   combinedEvents.slice(
// //     indexOfFirstEvent,
// //     indexOfLastEvent
// //   );


  


// //   if (loading) return <p className="text-center mt-10">Loading events...</p>;
// //   if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  
  
// //   const handlePageChange = (pageNumber) => {
// //     setCurrentPage(pageNumber);
// //   };

// //   // Show 6 pagination buttons even if there are fewer events
// //   const paginationButtons = Array.from({ length: 6 }, (_, index) => index + 1);

// // //   return (
// // //     <>
// // //       <section className="mt-[24px] pl-[100px] bg-[#F3F5FA]">
// // //         {error ? (
// // //           <p className="text-center text-red-500">{error}</p>
// // //         ) : (
// // //           <div className="w-full grid grid-cols-4 gap-6">
// // //             {currentEvents.length > 0 ? (
              
// // //               currentEvents.map((event) => (
// // // <Link
// // //   key={event.eventID}  to={`/eventsdetailshome/${event.eventID}`}
// // // >
// // // {/* shadow-lg rounded-lg */}
// // //                 <div key={event.eventID} className=" w-[302px] h-[406px]  overflow-hidden">
// // //                   <div className="relative">
// // //                     <button className="absolute w-[89px] h-[32px] top-[26px] left-[26px] bg-[#FFFFFF]  font-bold rounded-[12px] text-[#123499] text-[12px] z-10">
                     
// // //                         {event.eventTitle}
// // //                     </button>
// // //                     <div className="w-[302px] flex flex-col">
// // //                  <img src={event.eventImgURL} alt="" srcset="" />
// // //                     </div>
// // //                   </div>
// // //                   <div className="px-[12px] sm:px-[20px]">
// // //                     <div className="flex justify-between mt-[10px] sm:mt-[17px]">
// // //                       <p className="text-[18px] sm:text-[24px] font-bold text-[#333333]">
                     
// // //                        {event.eventTitle}
// // //                       </p>
// // //                       {/* <img src={heartRed} alt="heart icon" /> */}
// // //                     </div>
// // //                     <div>
// // //                       <p className="text-[12px] text-[#333333] font-light">{event.organizerName} </p>
// // //                     </div>
                    
// // //                       <div className="mt-[15px]">
// // //                         <p className="text-[12px] mt-[10px] sm:text-[14px]  font-medium">
// // //                   {event.eventSchedule?.date} • {event.eventSchedule?.time}
// // //                     </p>
// // //                   </div>
// // //                   <div className="mt-[15px] text-[14px] text-[#757575] font-medium">
// // //                     <p>{event.eventSchedule?.address?.address}</p>
// // //                   </div>
// // //                   <div className="mt-[15px]">

// // //                     <p className="text-[16px] font-bold text-[#123499]">
// // //                       ₦{event.tickets?.[0]?.ticketPrice}
// // //                     </p>
// // //                   </div>

                          

// // //                     {/* commented */}
// // //                     <div className="flex flex-col sm:flex-row gap-[10px] mt-[8px] sm:mt-[16px]">
// // //                       <div className="flex gap-[5px]">
// // //                         {/* <img src={calender} alt="calendar icon" /> */}
// // //                         <p className="text-[12px] sm:text-[14px] text-[#757575] font-light">
// // //                           {/* {event.date} */}
// // //                         </p>
// // //                       </div>
// // //                       {/* <div className="flex gap-[5px]">
// // //                         <img src={location} alt="location icon" />
// // //                         <p className="text-[12px] sm:text-[14px] text-[#757575] font-light">
// // //                           {event.location}
// // //                         </p>
// // //                       </div> */}
// // //                     </div>
// // //                   </div>
// // //                   <div className="px-[12px] sm:px-[20px] mt-[10px] sm:mt-[12px]">
// // //                     {/* <p className="text-left text-[#757575] font-light text-[12px] sm:text-[14px]">
// // //                       Organized by <span className="text-[#333333]">{event.by}</span>
// // //                     </p> */}
// // //                     <div className="flex justify-between items-center mt-[8px] sm:mt-[8.5px] mb-[20px] sm:mb-[25px]">
// // //                       {/* <div className="flex gap-[5px] text-[#FF6B6B]">
// // //                         <p>
// // //                           ₦ <span>{event.initialAmount}</span>
// // //                         </p>
// // //                       </div> */}
// // //                       {/* <button className="bg-[#3A7BD5] text-white px-[24px] sm:px-[32px] py-[10px] sm:py-[14px] rounded-[10px]">
// // //                         Get Ticket
// // //                       </button> */}
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //                  </Link>
// // //               ))
// // //             ) : (
// // //               <p className="text-center text-[#757575]">No events available for this page.</p>
// // //             )}
           
// // //           </div>
// // //         )}

// // //         {/* Pagination */}
// // //         <div className="w-[329px] flex items-center justify-center gap-[10px] mt-[60px] pb-[50px] mx-auto">
// // //           {paginationButtons.map((pageNumber) => (
// // //             <button
// // //               key={pageNumber}
// // //               onClick={() => handlePageChange(pageNumber)}
// // //               className={`w-[44px] px-[10px] py-[10px] rounded-[5px] border-[2px] border-[#2F3B4C] ${
// // //                 currentPage === pageNumber ? "bg-[#3A7BD5] text-white" : ""
// // //               }`}
// // //             >
// // //               {pageNumber}
// // //             </button>
// // //           ))}
// // //         </div>
// // //       </section>
// // //     </>
// // //   );

// // return (
// //     <section className="mt-[24px] px-[30px] md:px-[80px] bg-[#F3F5FA]">
// //       <div className="w-full  grid grid-cols-4 gap-6 bg-[#F3F5FA]">
// //     {combinedEvents.map((event) => (
      
// //               <Link  key={event.eventID}  to={`/eventsdetailshome/${event.eventID}`}>
// //            {/* <Link key={event.id} to={`/Eventsdetailshome/${event.id}`}> */}
// //             <div className=" overflow-hidden">
// //               <div className="relative">
// //                 <button className="absolute top-[20px] left-[26px] bg-[#F3F5FA] font-bold px-[8px] py-[6px] sm:py-[10px] rounded-[10px] text-[#123499] text-[9px] sm:text-[12px] z-10">
// //                Category
// //                 </button>
// //                 <div className="w-full flex flex-col">
// //                   <img
// //                      src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1770048441/featured_image_cyo3vz.png"
// //                     // src={event.eventImgURL}
// //                     loading="lazy"
// //                     alt="event background"
// //                     className="w-[413px] h-[260px]  object-cover"
// //                   />
// //                 </div>
// //               </div>
// //               <div className="px-[12px] sm:px-[20px] bg-[#F3F5FA]">
// //                 <div className="flex justify-between pt-[10px] sm:mt-[17px] ">
// //                   <p className="text-[18px] sm:text-[24px] font-bold text-[#333333]">
// //                     {event.eventTitle}
                  
// //                   </p>
// //                   {/* <img src={heartRed} alt="heart icon" /> */}
// //                 </div>
// //                 <div>
// //                    <p className="text-left text-[#757575] font-light text-[10px] sm:text-[12px]">
// //                   Organized by <span className="text-[#333333]">{event.organizerName}</span>
// //                 </p>
// //                 </div>
// //                 <div className="flex flex-col  gap-[10px] mt-[8px] sm:mt-[16px]">
// //                   <div className="flex gap-[5px]">
// //                     {/* <img src={calender} alt="calendar icon" /> */}
// //                     <p className="text-[12px] sm:text-[14px] text-[#333333] font-semibold">
// //                       {event.eventDate}
// //                       {/* DD-MM-YYYY • 00:00 GMT+1 */}
// //                     </p>
// //                   </div>
// //                   <div className="flex gap-[5px]">
// //                     {/* <img src={location} alt="location icon" /> */}
// //                     <p className="text-[12px] sm:text-[14px] text-[#757575] font-semibold">
// //                      {/* Location */}
// //                       {event.venueInformation}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="px-[12px] sm:px-[20px] mt-[10px] sm:mt-[12px]">
// //                 {/* <p className="text-left text-[#757575] font-light text-[12px] sm:text-[14px]">
// //                   Organized by <span className="text-[#333333]">{event.organizerName}</span>
// //                 </p> */}

                
// //                 <div className="flex justify-between items-center mt-[8px] sm:mt-[8.5px] mb-[20px] sm:mb-[25px]">
// //                  <div className="flex gap-[5px] text-[#123499]">
// //                   <p>
                       
// //                          <span>{event.ticketpriceMIN}</span>
// //                         </p>
// //                         {/* <p>-</p>
// //                         <p>
// //                         ₦<span>{event.ticketpriceMAX}</span>
// //                         </p> */}
// //                   </div>
// //                   {/* <button className="bg-[#3A7BD5] text-white px-[24px] sm:px-[32px] py-[10px] sm:py-[14px] rounded-[10px]">
// //                     Get Ticket
// //                   </button> */}
// //                 </div>
// //               </div>
// //                 </div>






// //           </Link>
// //         ))}
// //       </div>

// //       <div className="flex justify-end mt-[30px] sm:mt-[42px] gap-[8px] sm:gap-[10px]">
// //         {/* <p className="text-[#123499] text-[12px] sm:text-[14px]">
// //           <Link to="/ExploreEvents">SEE MORE EVENTS</Link>
// //         </p> 
// //         */}
// // <IoMdArrowRoundForward className="text-[#123499] mt-[3px] font-semibold"/>
        
// //       </div>
// //     </section>
// //   );

// // };


// const Section3EE = ({ combinedEvents }) => {
//     // const [currentPage, setCurrentPage] = useState(1);
//   const [error, setError] = useState(null); // State to store errors
//   // const [upcomingEvents, setUpcomingEvents] = useState([]);
//   // const eventsPerPage = 12; // Number of events per page
//    const [loading, setLoading] = useState(true);

//   useEffect(() => {

//   const fetchEvents = async () => {

//     try {

//       // FIRST API
//       const featuredResponse = await fetch(
//         "https://alphaeventappdevmode.onrender.com/api/allFeaturedEvents"
//       );

//       // SECOND API
//       const upcomingResponse = await fetch(
//         "https://alphaeventappdevmode.onrender.com/api/trndeventAllGet"
//       );

//       if (!featuredResponse.ok) {
//         throw new Error("Failed to fetch featured events");
//       }

//       if (!upcomingResponse.ok) {
//         throw new Error("Failed to fetch upcoming events");
//       }

//       // CONVERT TO JSON
//       const featuredData =
//         await featuredResponse.json();

//       const upcomingData =
//         await upcomingResponse.json();

//       console.log(
//         "Featured:",
//         featuredData
//       );

//       console.log(
//         "Upcoming:",
//         upcomingData
//       );

//       // SAVE TO STATE
//       setEvents(featuredData.data);

//       setUpcomingEvents(
//         upcomingData.data
//       );

//     } catch (err) {

//       setError(
//         err.message ||
//         "Something went wrong"
//       );

//     } finally {

//       setLoading(false);

//     }
//   };

//   fetchEvents();

// }, []);
  
//  const [events, setEvents] = useState([]);  
//   // PAGINATION
//   const [currentPage, setCurrentPage] = useState(1);

//  // Show 6 pagination buttons even if there are fewer events
// //   const paginationButtons = Array.from({ length: 6 }, (_, index) => index + 1);

//   const eventsPerPage = 8;
  

//   // GET CURRENT EVENTS
//   const indexOfLastEvent =
//     currentPage * eventsPerPage;

// const indexOfFirstEvent =
//     indexOfLastEvent - eventsPerPage;

// const currentEvents =
//   (combinedEvents || []).slice(
//     indexOfFirstEvent,
//     indexOfLastEvent
//   );


//   // TOTAL PAGES
// const totalPages = Math.ceil(
//   (combinedEvents || []).length / eventsPerPage
// );

//   return (
//     <section className="mt-[24px] px-[30px] md:px-[80px] bg-[#F3F5FA]">

//       {/* EVENTS GRID */}
//       <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#F3F5FA]">

//         {currentEvents.map((event) => (

//           <Link
//             key={event.eventID}
//             to={`/eventsdetailshome/${event.eventID}`}
//           >

//             <div className="overflow-hidden">

//               <div className="relative">

//                 <button className="absolute top-[20px] left-[26px] bg-[#F3F5FA] font-bold px-[8px] py-[6px] sm:py-[10px] rounded-[10px] text-[#123499] text-[9px] sm:text-[12px] z-10">
//                   Category
//                 </button>

//                 <div className="w-full flex flex-col">

//                   <img
//                     src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1770048441/featured_image_cyo3vz.png"
//                     // src={event.eventImgURL}
//                     loading="lazy"
//                     alt="event background"
//                     className="w-full h-[260px] object-cover rounded-[12px]"
//                   />

//                 </div>
//               </div>

//               <div className="px-[12px] sm:px-[20px] bg-[#F3F5FA]">

//                 <div className="flex justify-between pt-[10px] sm:mt-[17px]">

//                   <p className="text-[18px] sm:text-[24px] font-bold text-[#333333]">
//                     {event.eventTitle}
//                   </p>

//                 </div>

//                 <div>
//                   <p className="text-left text-[#757575] font-light text-[10px] sm:text-[12px]">
//                     Organized by{" "}
//                     <span className="text-[#333333]">
//                       {event.organizerName}
//                     </span>
//                   </p>
//                 </div>

//                 <div className="flex flex-col gap-[10px] mt-[8px] sm:mt-[16px]">

//                   <div className="flex gap-[5px]">

//                     <p className="text-[12px] sm:text-[14px] text-[#333333] font-semibold">
//                       {event.eventDate}
//                     </p>

//                   </div>

//                   <div className="flex gap-[5px]">

//                     <p className="text-[12px] sm:text-[14px] text-[#757575] font-semibold">
//                       {event.venueInformation}
//                     </p>

//                   </div>

//                 </div>

//               </div>

//               <div className="px-[12px] sm:px-[20px] mt-[10px] sm:mt-[12px]">

//                 <div className="flex justify-between items-center mt-[8px] sm:mt-[8.5px] mb-[20px] sm:mb-[25px]">

//                   <div className="flex gap-[5px] text-[#123499]">

//                     <p>
//                       <span>{event.ticketpriceMIN}</span>
//                     </p>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </Link>

//         ))}

//       </div>

//       {/* PAGINATION */}
//       <div className="flex justify-center items-center gap-[10px] mt-[50px] pb-[40px]">

//         {/* PREVIOUS */}
//         <button
//           onClick={() =>
//             setCurrentPage((prev) =>
//               prev > 1 ? prev - 1 : prev
//             )
//           }
//           className="text-[#123499]"
//         >
//           <IoMdArrowRoundBack size={20} />
//         </button>

//         {/* PAGE NUMBERS */}
//         {Array.from(
//           { length: totalPages },
//           (_, index) => index + 1
//         ).map((page) => (

//           <button
//             key={page}
//             onClick={() => setCurrentPage(page)}
//             className={`w-[32px] h-[32px] rounded-[4px] border text-[14px]
              
//               ${
//                 currentPage === page
//                   ? "bg-[#123499] text-white border-[#123499]"
//                   : "bg-transparent text-[#757575] border-[#CFCFCF]"
//               }
//             `}
//           >
//             {page}
//           </button>

//         ))}

//         {/* NEXT */}
//         <button
//           onClick={() =>
//             setCurrentPage((prev) =>
//               prev < totalPages
//                 ? prev + 1
//                 : prev
//             )
//           }
//           className="text-[#123499]"
//         >
//           <IoMdArrowRoundForward size={20} />
//         </button>

//       </div>

//     </section>
//   );
// };

// export default Section3EE;
const Section3EE = () => {

  const [events, setEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);

  const eventsPerPage = 8;

  // FETCH EVENTS
  useEffect(() => {

    const fetchEvents = async () => {

      try {

        const featuredResponse = await fetch(
          "https://alphaeventappdevmode.onrender.com/api/allFeaturedEvents"
        );

        const upcomingResponse = await fetch(
          "https://alphaeventappdevmode.onrender.com/api/trndeventAllGet"
        );

        if (!featuredResponse.ok) {
          throw new Error("Failed to fetch featured events");
        }

        if (!upcomingResponse.ok) {
          throw new Error("Failed to fetch upcoming events");
        }

        const featuredData =
          await featuredResponse.json();

        const upcomingData =
          await upcomingResponse.json();

        setEvents(featuredData.data || []);

        setUpcomingEvents(
          upcomingData.data || []
        );

      } catch (err) {

        setError(
          err.message || "Something went wrong"
        );

      } finally {

        setLoading(false);

      }
    };

    fetchEvents();

  }, []);

  // COMBINE BOTH APIS
  const combinedEvents = [
    ...events,
    ...upcomingEvents
  ];

  // PAGINATION
  const indexOfLastEvent =
    currentPage * eventsPerPage;

  const indexOfFirstEvent =
    indexOfLastEvent - eventsPerPage;

  const currentEvents =
    combinedEvents.slice(
      indexOfFirstEvent,
      indexOfLastEvent
    );

  // TOTAL PAGES
  const totalPages = Math.ceil(
    combinedEvents.length / eventsPerPage
  );

  if (loading) {
    return (
      <p className="text-center mt-10">
        Loading events...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center mt-10 text-red-500">
        {error}
      </p>
    );
  }

  return (

    <section className="mt-[24px] px-[30px] md:px-[80px] bg-[#F3F5FA]">

      {/* EVENTS GRID */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {currentEvents.map((event) => (

          <Link
            key={event.eventID}
            to={`/eventsdetailshome/${event.eventID}`}
          >

            <div className="overflow-hidden">

                 <div className="relative">
                <button className="absolute top-[20px] left-[26px] bg-[#F3F5FA] font-bold px-[8px] py-[6px] sm:py-[10px] rounded-[10px] text-[#123499] text-[9px] sm:text-[12px] z-10">
               Category
                </button>
                <div className="w-full flex flex-col">
                  <img
                    //  src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1770048441/featured_image_cyo3vz.png"
                    src={event.eventImgURL}
                    loading="lazy"
                    alt="event background"
                    className="w-[413px] h-[260px]  object-cover"
                  />
                </div>
              </div>

              <div className="pt-3">

                <p className="text-[20px] font-bold">
                  {event.eventTitle}
                </p>

                <p className="text-[12px] text-[#757575]">
                  Organized by {event.organizerName}
                </p>

                <p className="mt-2 text-[14px]">
                  {event.eventDate}
                </p>

                <p className="text-[14px] text-[#757575]">
                  {event.venueInformation}
                </p>

                <p className="mt-3 text-[#123499] font-bold">
                  ₦
                  {event.ticketpriceMIN}
                </p>

              </div>

            </div>

          </Link>

        ))}

      </div>

      {/* PAGINATION */}
      <div className="flex justify-center gap-3 mt-10">

        {/* PREVIOUS */}
       {/* PREVIOUS */}
<button
  onClick={() =>
    setCurrentPage((prev) =>
      prev > 1 ? prev - 1 : prev
    )
  }
  className="text-[#123499]"
>
  <IoMdArrowRoundBack size={18} />
</button>

        {/* PAGE NUMBERS */}
        {Array.from(
          { length: totalPages },
          (_, index) => index + 1
        ).map((page) => (

          <button
            key={page}
            onClick={() =>
              setCurrentPage(page)
            }
            className={`px-3 py-1 border rounded ${
              currentPage === page
                ? "bg-[#123499] text-white"
                : ""
            }`}
          >
            {page}
          </button>

        ))}

    
       {/* NEXT */}
<button
  onClick={() =>
    setCurrentPage((prev) =>
      prev < totalPages
        ? prev + 1
        : prev
    )
  }
  className="text-[#123499]"
>
  <IoMdArrowRoundForward size={18} />
</button>
      </div>

    </section>
  );
};

 export default Section3EE;

