import {React,useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useEventForm } from '../../context/context'
import axios from "axios";
import { toast } from 'react-toastify';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



const ReviewEvent = () => {



  
 const { formData,setFormData, handleSubmit } = useEventForm()
  const navigate = useNavigate()

 // 🚨 Enforce “paid tickets must have a price”

  useEffect(() => {
    let changed = false

    const tickets = formData.tickets.map(tk => {
      // if it’s paid but has no price…
      if (tk.PriceType === 'paid' && !tk.ticketPrice) {
       toast.warning('⚠ Paid tickets require a price — this ticket has been switched to Free.', {
  className: 'custom-toast',
  icon: '⚠️', // or a custom component
});
        changed = true
        return { ...tk, PriceType: 'free' }
      }
      return tk
    })

    if (changed) {
      setFormData(f => ({
        ...f,
        tickets: tickets
      }))
    }
  }, [] )


const myKey = import.meta.env.VITE_KEY;






const eventTypeOne = () => {
  return formData.tickets
    .filter(tk => ["Vip", "Regular", "Early Bird"].includes(tk.ticketType))
    .map((ticket, i) => {
      const isPaidValid =
        ticket.PriceType?.toLowerCase() === "paid" &&
        Number(ticket.ticketPrice) > 0;

      const maxTickets = ticket.ticketType === "Vip" ? 200 : 100;

      return (
        <ul
          key={i}
          className="flex justify-between pl-[16px] items-center w-full mb-2"
        >
          <li>
            <h6 className="font-bold text-[16px]">{ticket.ticketType}</h6>
            <h6 className="text-[10px] text-[#ABABAB]">
              {isPaidValid ? `₦ ${ticket.ticketPrice}` : "Free Ticket"}
            </h6>
            <h6 className="text-[10px] text-[#ABABAB]">
              Max: {maxTickets} ticket(s)
            </h6>
          </li>
          <li
            className={`w-[60px] h-[28px] text-center text-white rounded-[68px] ${
              isPaidValid ? "bg-[#FF0000]" : "bg-[#008000]"
            }`}
          >
            {isPaidValid ? "Paid" : "Free"}
          </li>
        </ul>
      );
    });
};




const eventTypeTwo =()=>
{
  return formData.tickets.filter(tk=> ["Vip", "Regular", "Early Bird"].includes(tk.ticketType) &&
      tk.PriceType === "free")
  .map((ticket,index) =>
   
   
(
     <ul key={index} className='flex justify-between pl-[16px]  items-center w-full'>
  <li>
    <h6 className='font-bold text-[16px] '>{ticket.ticketType}</h6>
    <h6 className='text-[10px] text-[#ABABAB] '>{ticket.PriceType === "free" ? "Free Ticket": null}</h6>
    <h6 className='text-[10px] text-[#ABABAB]'>Max: 200 ticket(s)</h6>
  </li>
  <li className='w-[60px] h-[28px] text-center text-white rounded-[68px] bg-[#008000]'>{ticket.PriceType === "free" ? "free" : "paid"}</li>

</ul>

)
 


  )}


// const eventTypeTwo =()=>
// {
//   return formData.tickets.filter(ticket => ticket.ticketType === "Regular")
//    .map((ticket,index) =>{
   
   
//    { return(
    
//     <ul key={index} className='flex justify-between pl-[16px]  items-center w-full'>
//   <li>
//     <h6 className='font-bold text-[16px] '>{ticket.ticketType}</h6>
//     <h6 className='text-[10px] text-[#ABABAB] '>{ticket.PriceType === "free" ? "Free Ticket": null}</h6>
//     <h6 className='text-[10px] text-[#ABABAB]'>Max: 100 ticket(s)</h6>
//   </li>
//   <li className='w-[60px] h-[28px] text-center text-white rounded-[68px] bg-[#008000]'>{(() => {
//   if (ticket.PriceType === "free" && ticket.ticketPrice <= 0) {
//     return "Free";
//   } else if (ticket.PriceType === "free" && ticket.ticketPrice > 0) {
//     alert("Regular Tickets are not paid for");
//     return "Error";
//   } else {
//     return "Paid";
//   }
// })()}</li>

// </ul>

// )}

// }

//   )}



const eventTypeThree = () => {
  return formData.tickets
    .filter(ticket => ticket.ticketType === "Regular" && ticket.ticketType === "Vip")
    .map((ticket, index) => {
      const isPaid = ticket.PriceType === "paid" && Number(ticket.ticketPrice) > 0;
      const maxTickets = ticket.ticketType === "Vip" ? 200 : 100;

      return (
        <div key={index} className="w-full">
          <ul className="flex justify-between pl-[16px] items-center w-full">
            <li>
              <h6 className="font-bold text-[16px]">{ticket.ticketType}</h6>
              <h6 className="text-[10px] text-[#ABABAB]">
                {ticket.ticketPrice ? `₦ ${ticket.ticketPrice}` : 'Free Ticket'}
              </h6>
              <h6 className="text-[10px] text-[#ABABAB]">
                Max: {maxTickets} ticket(s)
              </h6>
            </li>
            <li
              className={`w-[60px] h-[28px] text-center flex items-center justify-center rounded-[68px] text-white ${
                isPaid ? "bg-[#FF0000]" : "bg-[#008000]"
              }`}
            >
              {isPaid ? "Paid" : "free"}
            </li>
          </ul>
        </div>
      );
    });
};





 


  const [coords, setCoords] = useState(null);

  const handleLocate = async () => {
    const query = `${formData.eventCity}, ${formData.eventState}, ${formData.eventCountry}`;
    const response = await axios.get("https://api.opencagedata.com/geocode/v1/json", {
      params: {
        q: query,
        key:myKey,
      },
    });
    const { lat, lng } = response.data.results[0].geometry;
    setCoords([lat, lng]);
  };

  useEffect(() => {
    if (formData.eventCountry || formData.eventState || formData.eventCity) {
      handleLocate();
    }
  }, [formData.eventCountry , formData.eventState, formData.eventCity]);

  return (
<section className=' pt-12 mx-auto md:w-[929px] font-Lato h-auto bg-[#F8F9FC] p-[40px] flex flex-col gap-y-[20px]'>


<div className='font-bold text-[20px] items-center' >
  <h4>PREVIEW EVENTS</h4></div>
  {/* Display Details */}
<div className='flex items-center  gap-[32px] border-b-[1px] border-y-[#ABABAB]'>
<ul className='' ><img className='rounded-[112px] w-[100px] h-[100px]' src={formData.eventImgURL} alt="event Img" /></ul>
<ul  className=' flex gap-[8px]'>
  <li className='w-[215px] h-[28px] text-[38.4px ] font-bold'>{formData.eventTitle}</li>
  <li className='text-[16px] text-[#ABABAB] w-[215px] h-[26px] ' >{formData.eventCategory}</li>
  </ul>
</div>

{/* Content */}
<div className=' flex flex-col w-full h[99px] gap-y-[16px]'>
  <ul className='flex w-[254px] items-center gap-[8px]'>
    <li><img className='w-[12px] h-[12px]' src="/calender.svg" alt="Calendar" /></li>
    <li>{`${formData.startDate ? new Date(formData.startDate).toLocaleDateString() : 'N/A'} - `}</li>
    <li>{`${formData.endDate ? new Date(formData.endDate).toLocaleDateString() : 'N/A'}  `}</li>
    
    </ul>
  <ul className='gap-[8px] flex items-center'>
    <li><img className='w-[12px] h-[12px]' src="/clock.svg" alt="Clock" /></li>
    <li>{`${formData.startTime}  ${formData.startClock} ${formData.startTimezone } `} - {`${formData.endTime}  ${formData.endClock} ${formData.endTimezone } `}</li>
  </ul>


  
  <ul className='flex items-center'>
    <li><img className='w-[12px] h-[12px]' src="/quantity.svg" alt="quantity" /></li>
    {formData.tickets.map(
      (ticket,index)=>(
<li key ={index}>
{ticket.quantity}
</li>



      )
    )}
  </ul>

</div>

{/* Description */}
<div className='w-full  h-auto flex flex-col border-b-[1px] border-red-800 border-y-[#ABABAB] gap-y-[20px]'>
<h3 className="text-[24px] font-bold">Description</h3>
<p className='text-[16px] break-words md:w-[840px]  text-[#ABABAB] ' >{formData.eventDesc} </p>
</div>

{/* Tags */}
<div className='h-[79px] flex-wrap flex flex-col gap-y-[20px]'>
<h5>Tags</h5>
<ul className='flex h-[32px] gap-[16px] w-[88px]  border-b-[1px] border-y-[#F1F1F1]'>
  {formData.eventTags?.map((tag, index)=>(
 <li key={index} className='text-[18px]  font-bold place-content-center  text-center px-[10px] h-[32px]   bg-[#F1F1F1] rounded-[10px] shadow text-[#333333]'>{tag}</li>
  ))}
  
  
  </ul>



</div>

  <ul className='flex gap-[8px]'>
    <li><img className='w-[12px] h-[12px]' src="/location.svg" alt="Icon / map" />
    </li>
  <li className=' w-[840px]  border-white border-2'>
<ul className='flex bg-slate-300 justify-between px-4 py-1'>
  <li >Country: {formData.eventCountry}</li>
      <li>State: {formData.eventState}</li>
      <li>City: {formData.eventCity}</li></ul> 
   {coords && (
        <MapContainer center={coords} zoom={13} style={{ height: "400px", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={coords}>
            <Popup>{`${formData.eventCity}, ${formData.eventState}, ${formData.eventCountry}`}</Popup>
          </Marker>
        </MapContainer>
      )}</li>
  </ul>

<div className='h-[276px] bg-[#FFFFFF] px-[20px] py-[10px] rounded-[10px] flex flex-col gap-y-[30px]'>
<div className='h-[216px] flex flex-col gap-y-[20px] w-[800px] '>
  <h4 className='font-bold text-[20px]'>Tickets Summary</h4>
<div>{eventTypeOne ()}</div>
 {/* <div>{eventTypeTwo  ()}</div> */}
{/* <div>{eventTypeThree  ()}</div>  */}


{/* <ul className='flex pl-[16px] justify-between items-center w-full'>
    <li>
    <h6 className='font-bold text-[16px] '>{formData.tickets.tickeType}</h6>
    <h6 className='text-[10px] text-[#ABABAB]'>....</h6>
    <h6 className='text-[10px] text-[#ABABAB]'>Max: 100 ticket(s)</h6>
  </li>
  <li className='w-[60px] h-[28px] rounded-[68px] bg-[#FF0000]'></li>
</ul> */}
</div>

</div>

{/* edit and create  */}
<div className='w-full h-[52px] flex  gap-[10px] place-content-end '>
<button type='button' onClick={() => navigate("/createEvent")} className='flex rounded-[8px] justify-center items-center gap-[20px]  text-[20px] text-center text-[#2D6CCF] w-[188px] border-[#2D6CCF] border-[1px]' >
  <h4>Edit Event</h4> 
  <img src="/editevent.svg" alt="edit event" />
</button>

<button type='submit' onClick={async (e) => {
        const result = await handleSubmit(e);
        if (result !== false) {
         // Only navigate if submission was successful
          navigate("/createEvent");
        } }}
       className='text-[20px] rounded-[8px] w-[163px] h-[48px] bg-[#2D6CCF] text-[#FFFFFF] font-bold'>
<h4>Create Event</h4>
</button>
</div>

</section>

  )


}
export default ReviewEvent;


//     <div className='text-center bg-cyan-600 flex flex-col gap-y-7'>
//       <h2 className='font-bold text-[40px]  pt-5'>Review Your Event Information</h2>
//       <div className='pl-10 grid  gap-y-3'> <p className='w-[200px] h-auto mx-auto items-center'> <img src={formData.eventImgURL} alt="" />Event Image</p>
//        <div className='items-start flex flex-col' > 
//         <p><strong>Event Title: </strong>{formData.eventTitle}</p>
//         <p>    <strong>Event Description: </strong> {formData.eventDesc}</p>
//         <p>  Event Type: {formData.eventType} </p>
//         <p> Event Country: {formData.eventCountry} </p>
//         <p>  Event State: {formData.eventState }  </p>
//         <p>  Event City: {formData.eventCity }</p> 
//         <p>  Event Venue: {formData.eventVenue}</p>
//         <p>  Maximum Attendees: {formData.maximumAttendees} </p>
//         </div>
//        <div className='items-start flex flex-col'> 
//        <p><strong>Start Date: </strong>{formData.startDate ? new Date(formData.startDate).toLocaleDateString() : 'N/A'}</p>
// <p><strong>End Date: </strong>{formData.endDate ? new Date(formData.endDate).toLocaleDateString() : 'N/A'}</p>

//         <p> Url: {formData.url}</p>
      
//         <p>Event Address: {formData.eventVenue} </p>
//         <p> TickeT Price:  {formData.ticketPrice}  </p>
//         <p> Ticket Type: {formData.tickeType} </p>
//         {/* <p>quantity:{formData.event} </p> */}
//         <p>
//   <strong>Start Time: </strong>
//   {formData.startTime && new Date(`1970-01-01T${formData.startTime}`).toLocaleTimeString('en-US', {
//     hour: 'numeric',
//     minute: 'numeric',
//     hour12: true,
//   })}
// </p>
// <p>
//   <strong>End Time: </strong>
//   {formData.endTime && new Date(`1970-01-01T${formData.endTime}`).toLocaleTimeString('en-US', {
//     hour: 'numeric',
//     minute: 'numeric',
//     hour12: true,
//   })}
// </p>
        
//         </div></div>
    
    
//      <div className=' pb-6 w-full flex  items-start place-content-center   gap-x-5  '>
//        <button className='bg-slate-950 px-6 py-1 text-white rounded-md' onClick={() => navigate("/createEvent")}>Back</button>
//       <button className='bg-slate-950 px-5 py-1 text-white rounded-md'  onClick={async (e) => {
//         const result = await handleSubmit(e);
//         if (result !== false) { // Only navigate if submission was successful
//           navigate("/createEvent");
//         } }}>
     
//         Publish Event
//       </button>
//     </div></div>