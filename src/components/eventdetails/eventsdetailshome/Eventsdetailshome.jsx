import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Eventsdetailshero from '../Eventsdetailshero/Eventsdetailshero'
import EventSchedule from '../Eventsdetailshero/EventSchedule.jsx'
import Eventicket from '../eventticket/Eventticket.jsx'
import Section3 from "../../Landingcont/FeacturedEvents/Section3.jsx"

const Eventsdetailshome = () => {

  
  const { eventID } = useParams(); // Extract eventId from the URL




  const [eventDetails, setEventDetails] = useState(null);
  console.log("eventID:",eventID)

  useEffect(() => {
    // Fetch event details using the eventId
    const fetchEventDetails = async () => {
      try {
        
        const response = await fetch(`https://alphaeventappdevmode.onrender.com/api/eventDetails/${eventID}`);
      
        console.log("details:",response)
;

// console.log("API DATA:", data);

        if (response.ok) {
          const data = await response.json();
          console.log('Fetched event details:', data)
          setEventDetails(data.evnttd);
          // setEventDetails(data);
        } else {
          console.error('Failed to fetch event details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    if (eventID) {
      fetchEventDetails();
    }
  }, [eventID]);
  return (
    
    <div className="bg-[#F3F5FA]">
      <Eventsdetailshero  eventDetails={eventDetails} />
      <div ><Section3 /></div>
    </div>

  )
}

export default Eventsdetailshome