import React, { useState, useRef, useContext } from "react";
import axios from "axios";
import cloudIcon from "../../../assets/cloudIcon.svg";
import arrowOption from "../../../assets/arrowOption.svg";
import delectIcon from "../../../assets/delectIcon.svg";
import questionIcon from "../../../assets/questionIcon.svg";
import discountIcon from "../../../assets/discountIcon.svg";
import pencilBlue from "../../../assets/pencilBlue.svg";
import { useEventForm } from "../../context/context";
import { useNavigate } from "react-router-dom";

import TicketingForm from "./ticketing/ticketingForm";
import { Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup';



// Using Formik



const TicketConfiguration = () => {

    // const [selected, setSelected] = useState('free')

  const navigate = useNavigate()
  const fileInputRef = useRef(null);
  const ticketTypes1Ref = useRef(null);
  const ticketTypes2Ref = useRef(null);

  const {
    formData, setFormData,
  } = useEventForm();

const tickets = formData.tickets || [];
  // Define required fields
  const requiredFields = formData.eventType === 'online'
    ? ['eventType', 'eventTitle', 'startDate', 'endDate', 'url']
    : ['eventType', 'eventTitle', 'startDate', 'endDate', 'eventCountry', 'eventState', 'eventCity', 'eventVenue'];

  // Log the required fields for debugging
  console.log("Required Fields:", requiredFields);

  // ✅ Check if required fields are filled
  const isDataComplete = requiredFields.every(field => {
    const value = formData[field];
    console.log(`${field}: ${value}`); // Debugging: log each field value
    return value !== null &&
      value !== undefined &&
      value.toString().trim() !== '';
  });


// Update ticket input (select, input, etc.)
const handleChange = (index, e) => {
  const updatedTickets = [...formData.tickets];
  updatedTickets[index][e.target.name] = e.target.value;

  setFormData((prev) => ({
    ...prev,
    tickets: updatedTickets,
  }));
};

  const addTicket =()=>{
    setFormData((prev)=>({
...prev, 
tickets : [
  ...(prev.tickets || []),
  { ticketType: '', PriceType: '', ticketPrice: '', quantity: '' },

]
    })

    )
  }

// Remove a ticket
const removeTicket = (index) => {
  if (formData.tickets.length > 1) {
    const updatedTickets = [...formData.tickets];
    updatedTickets.splice(index, 1);
    setFormData({ ...formData, tickets: updatedTickets });
  } else {
    alert("At least one ticket must be present.");
  }
};

// Set selected price type (free/paid)
const setSelected = (index, value) => {
  const updatedTickets = [...formData.tickets];
  updatedTickets[index].PriceType = value;

  setFormData((prev) => ({
    ...prev,
    tickets: updatedTickets,
  }));
};



  const [showMessageBox1, setShowMessageBox1] = useState(false);
  const [showMessageBox2, setShowMessageBox2] = useState(false);




  // Clear inputs in ticketTypes1 container
  const clearTicketTypes1Inputs = () => {
    const inputs = ticketTypes1Ref.current.querySelectorAll("input");
    const select = ticketTypes1Ref.current.querySelector("select");

    // Clear all input fields
    inputs.forEach((input) => (input.value = ""));

    // Reset the select field to its default option
    if (select) {
      select.value = "selectEventType";
    }
  };

  // Clear inputs in ticketTypes2 container
  const clearTicketTypes2Inputs = () => {
    const inputs = ticketTypes2Ref.current.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
  };

  // Show and hide message box 1
  const handleAddTicketType = () => {
    setShowMessageBox1(true);
    setTimeout(() => {
      setShowMessageBox1(false);
    }, 3000);
  };

  // Show and hide message box 2
  const handleCreateEvent = () => {
    setShowMessageBox2(true);
    setTimeout(() => {
      setShowMessageBox2(false);
    }, 3000);
  };





  // handle number change
  const [value, setValue] = useState(0);
  const increase = () => setValue(prev => prev + 1);
  const decrease = () => setValue(prev => (prev > 0 ? prev - 1 : 0)); // prevent going below 0




  return (
    <section>
      {/* Ticket type container  */}
   
   {formData.tickets.map((ticket, index) => (
  <TicketingForm
    key={index}
    ticket={ticket}
    index={index}
    handleChange={handleChange}
    setSelected={setSelected}
    removeTicket={removeTicket}
    selected={ticket.PriceType}
 
  />
))}
   
   




 
      <div className="flex flex-col float-end gap-y-[40px] mt-[20px]">
        <button 
        type="button"
        onClick={addTicket}

        className="text-center bg-[#008000]  rounded-[8px] h-[48px] w-[147px]" >
          + Add Ticket
        </button>

        <button
          type="button"
          

          onClick={() => {
            // if (isDataComplete) {
              navigate("/reviewEvent");



            // } else {
            //   alert("Please complete all required fields before proceeding.");
            // }
          }}


          className="bg-[#3A7BD5] text-[#FFFFFF]     text-center rounded-[8px] w-[121px]  h-[48px]"
        >
          Preview 
        </button>


      </div>
    
   
</section>
  )
};

export default TicketConfiguration;


