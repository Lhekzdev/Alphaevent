import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEventForm } from '../../context/context'


const ReviewEvent = () => {


  const { formData, handleSubmit } = useEventForm()
  const navigate = useNavigate()



  return (

    <div className='text-center bg-cyan-600 flex flex-col gap-y-7'>
      <h2 className='font-bold text-[40px]  pt-5'>Review Your Event Information</h2>
      <div className='pl-10 grid  gap-y-3'> <p className='w-[200px] h-auto mx-auto items-center'> <img src={formData.eventImgURL} alt="" />Event Image</p>
       <div className='items-start flex flex-col' > 
        <p><strong>Event Title: </strong>{formData.eventTitle}</p>
        <p>    <strong>Event Description: </strong> {formData.eventDesc}</p>
        <p>  Event Type: {formData.eventType} </p>
        <p> Event Country: {formData.eventCountry} </p>
        <p>  Event State: {formData.eventState }  </p>
        <p>  Event City: {formData.eventCity }</p> 
        <p>  Event Venue: {formData.eventVenue}</p>
        <p>  Maximum Attendees: {formData.maximumAttendees} </p>
        </div>
       <div className='items-start flex flex-col'> 
       <p><strong>Start Date: </strong>{formData.startDate ? new Date(formData.startDate).toLocaleDateString() : 'N/A'}</p>
<p><strong>End Date: </strong>{formData.endDate ? new Date(formData.endDate).toLocaleDateString() : 'N/A'}</p>

        <p> Url: {formData.url}</p>
      
        <p>Event Address: {formData.eventVenue} </p>
        <p> TickeT Price:  {formData.ticketPrice}  </p>
        <p> Ticket Type: {formData.tickeType} </p>
        {/* <p>quantity:{formData.event} </p> */}
        <p>
  <strong>Start Time: </strong>
  {formData.startTime && new Date(`1970-01-01T${formData.startTime}`).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })}
</p>
<p>
  <strong>End Time: </strong>
  {formData.endTime && new Date(`1970-01-01T${formData.endTime}`).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })}
</p>
        
        </div></div>
     <div className=' pb-6 w-full flex  items-start place-content-center   gap-x-5  '>
       <button className='bg-slate-950 px-6 py-1 text-white rounded-md' onClick={() => navigate("/createEvent")}>Back</button>
      <button className='bg-slate-950 px-5 py-1 text-white rounded-md'  onClick={async (e) => {
        const result = await handleSubmit(e);
        if (result !== false) { // Only navigate if submission was successful
          navigate("/createEvent");
        }
      }}>
        Publish Event
      </button>
    </div></div>
  )


}
export default ReviewEvent;