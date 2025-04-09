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




const Ticketing = () => {
const navigate = useNavigate()
  const fileInputRef = useRef(null);
  const ticketTypes1Ref = useRef(null);
  const ticketTypes2Ref = useRef(null);

  const {
    formData, setFormData,
  
    uploadedImage, userID ,// ✅ include uploadedImage here
    selectedCountry,setSelectedCountry,
    setSelectedState, selectedState,
    selectedCity,setSelectedCity,file, setFile,imagePreview, setImagePreview, setUploadedImage, setUserID


  } = useEventForm();


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




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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

 

  return (

    <section className="flex w-full overflow-hidden mt-[28px]">
{/* Ticket type container */}
<div id="tickeType" className="ticketTypes w-full">

  {/* Ticket Types 1 */}
  <div
    ref={ticketTypes1Ref}
    className="ticketTypes1 border border-[#757575] rounded-[12px] w-full lg:w-[738px] px-[16px] py-[16px] mr-[45px]"
  >
    <div className="tickeType">
      <p className="text-[18px] font-bold">Ticket type</p>
      <div className="flex flex-col lg:flex-row gap-[10px] mt-[36px] w-full">
        <div className="inputOption flex border border-[#3A7BD5] px-[10px] rounded-tl-[8px] rounded-tr-[8px] w-full lg:w-[352px]">
          <select
            name="tickeType"
            id="tickeType"
            className="text-[12px] font-normal w-full lg:w-[352px] focus:outline-none"
            value={formData.tickeType}
            onChange={handleChange}
          >
            <option value="selectEventType">
              Select Ticket Type
            </option>
            {/* <option value="earlyBird">Early Bird</option> */}
            <option value="vip">Vip</option>
            <option value="others">Regular</option>
          </select>
        </div>
        <div>
          <img
            src={delectIcon}
            alt="Delete Icon"
            className="deleteIcon1 cursor-pointer"
            onClick={clearTicketTypes1Inputs}
          />
        </div>
      </div>
    </div>

    <div className="flex flex-col lg:flex-row gap-[40px] mt-[120px]">
      <fieldset>
        <label
          htmlFor="ticketPrice"
          className="px-[8px] text-[16px] font-bold text-[#525252]"
        >
          Ticket Price
        </label>
        {/* <br /> */}
        <input
        id="ticketPrice"
        name="ticketPrice"
          type="text"
          placeholder="0"
          className="border border-[#BEBEBE] rounded-[12px] w-full lg:w-[217px] h-[52px] px-[20px] py-[18px]"
          value={formData.ticketPrice}
          onChange={handleChange}
        
      />
      </fieldset>
      {/* <fieldset>
           <label
             htmlFor="quantity"
             className="px-[8px] text-[16px] font-bold text-[#525252]"
           >
             Quantity
           </label>
           <br />
           <input
             type="text"
             placeholder="0"
             className="border border-[#BEBEBE] rounded-[12px] w-full lg:w-[217px] h-[52px] px-[20px] py-[18px]"
           />
         </fieldset> */}
    </div>


    {/* Message Box 1 */}
    {showMessageBox1 && (
      <div className="messageBox1 bg-green-500 text-white p-4 rounded mt-4">
        Ticket Type Added Successfully
      </div>
    )}

    {/* <button
       type="button"
       onClick={handleAddTicketType}
       className="bg-[#3A7BD5] text-[#FFFFFF] mt-[32px] w-full lg:w-[201px] px-[16px] py-[16px] text-center rounded-[8px]"
     >
       Add ticket type
     </button> */}

  </div>



  {/* Message Box 2 */}
  {showMessageBox2 && (
    <div className="messageBox2 bg-green-500 text-white p-4 rounded mt-4">
      You have Successfully Publish an Event
    </div>
  )}

   <button
       type="button"
     
       onClick={() => {
        if (isDataComplete) {
          navigate("/reviewEvent");
       
          
        } else {
          alert("Please complete all required fields before proceeding.");
        }
      }}
      
      
    
       className="bg-[#3A7BD5] text-[#FFFFFF] mt-[32px] w-full lg:w-[700px] px-[16px] py-[16px] text-center rounded-[8px]"
     >
    Review Event
     </button> 
  {/* <button
    type="submit"
    className="w-full h-[56px] py-3 mt-4 bg-customSkyblue text-white font-semibold rounded-[8px]"
    onClick={handleSubmit}
  >
    Proceed</button> */}

</div>
</section>

  )
};

export default Ticketing;


