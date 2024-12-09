import React, { useState, useRef } from "react";
import cloudIcon from "../../../assets/cloudIcon.svg";
// import Section1 from './Section1
import Onboardingleft from "../onboardingleft/Onboardingleft";
import ProfileSearchBar from "../../dashboard/OnBoarding/ProfileSearchBar";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import arrowOption from "../../../assets/arrowOption.svg";
import delectIcon from "../../../assets/delectIcon.svg";
import questionIcon from "../../../assets/questionIcon.svg";
import discountIcon from "../../../assets/discountIcon.svg";
import pencilBlue from "../../../assets/pencilBlue.svg";
import DatePicker from "react-datepicker";
import { LocalizationProvider,DatePicker as MuiDatePicker} from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';

import { TextField } from "@mui/material";

const Ticketing = () => {
  // Ref to programmatically trigger the file input
  const fileInputRef = useRef(null);

  const [uploadedImage, setUploadedImage] = useState(null);
  const [isToggled, setIsToggled] = useState(true);



  // const [isEditable, setIsEditable] = useState(false);

  // const handleImageClick = () => {
  //   setIsEditable(true); // Enable editing on image click
  // }





  //for Valid date
  const [validStartDate, setValidStartDate] = useState(null);
  const [validEndDate, setValidEndDate] = useState(null);

//for sales date
const [salesStartDate, setSalesStartDate] = useState(null);
const [salesEndDate, setSalesEndDate] = useState(null);




  // Handle file upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name); // Handle the uploaded file here
      // Create a preview URL for the uploaded image
      const previewURL = URL.createObjectURL(file);
      setUploadedImage(previewURL);
    }
  };

  // Programmatically click the hidden input
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting form...");

    const formData = new FormData();

    formData.append("eventTitle", event.target.eventTitle?.value || "");
    formData.append("description", event.target.description?.value || "");
    formData.append("eventCategory", event.target.eventCategory?.value || "");
    formData.append("eventFormat", event.target.eventFormat?.value || "");
    if (selectedDate) formData.append("eventDate", selectedDate.toISOString());
    formData.append("isPrivate", isToggled);
    formData.append("eventCapacity", event.target.eventCapacity?.value || "");
    formData.append(
      "maximumattedees",
      event.target.maximumattedees?.value || ""
    );
    formData.append("customTags", event.target.customTags?.value || "");
    formData.append(
      "accessibilityOption",
      event.target.accessibilityOption?.value || ""
    );

    if (uploadedImage) {
      const imageFile = fileInputRef.current.files[0];
      formData.append("image", imageFile);
    }

    try {
      const response = await axios.post(
        "http://localhost:5001/api/events",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error.response || error.message);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
   <>
    
      

      {/* Ticket tpye container */}
           
           <div id="ticketType" className="max-w-[1144px]  min-h-[1017px]" >
           <form action="">
           <div  className="ticketTypes border-[1px] border- rounded-[12px] w-full lg:max-w-[1032px] mt-[28px] h-auto px-[40px] pt-[24px] pb-[48px]  py-[16px]">
              {/* Ticket tpye container */}
              <div className="ticketType ">
                <div>
                  <p className="text-[18px] font-bold">Ticket type</p>
                </div>
                <div className="flex relative justify-between  mt-[36px]">
                  <div className="inputOption flex border border-[#3A7BD5]  rounded-tl-[8px] rounded-tr-[8px]">
                    <select name="eventType" id="eventType" className="text-12px] content- font-normal">
                      <option value="selectEventType">Select Ticket Type</option>
                      <option value="earlyBird">Early Bird</option>
                      <option value="vip">VIP</option>
                      <option value="others">Regular</option>
                    </select>
                    {/* <img src={arrowOption} alt="" /> */}
                  </div>
                  <div>
                    <img src={delectIcon} alt="" />
                  </div>
                </div>
              </div>
  
              <div className="lg:flex w-full lg:flex-row flex-col gap-3 items-center lg:space-y-0 space-y-7 lg:h-[74px] justify-between mt-[30px]">
                <fieldset>
                  <label htmlFor="price" className="pl-[8px] text-[16px] font-bold block text-[#525252]">Price</label><br />
                  <input type="text" placeholder="0" className="border  border-[#BEBEBE] rounded-[12px] w-full h-[52px] pl-[20px] pr-[150px] py-[18px]" />
                 </fieldset>
                 <fieldset>
                  <label htmlFor="price" className="pr-[8px] text-[16px] block font-bold text-[#525252]">Quantity</label><br />
                  <input type="text" placeholder="0" className="border  border-[#BEBEBE] rounded-[12px] w-full h-[52px] p-[20px] pr-[150px]  py-[18px]" />
                 </fieldset>
              </div>
  
  {/* sales section */}
              <div className="mt-[30px] text-[#2F3B4C] text-[18px] font-bold">
                <p>Sales period</p>
              </div>
  
  {/* checked */}
              <div className="flex justify-between ">
             
               
              </div>
  
      {/* checked */}
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
  
       <div className="lg:flex space-y-4 lg:space-y-0 justify-between ">
     <div> <div className="items-center  text-[#2F3B4C] text-[16px] font-light">  <p>Starts</p></div>
      <div className="border flex flex-col border-b-[#8D8D8D] w-full lg:w-[270px] px-[16px] py-[13px] bg-[#d6d6d6]">
               
                  <div className="flex gap-3">
                  <p className="text-[12px] flex flex-col gap-y-0 font-light text-[#525252]">
                  Label (mm/dd/yyyy)</p>
                  <img src={questionIcon} alt="" /></div> 
                 <DatePicker
                selected={salesStartDate}
                onChange={(date) => setSalesStartDate(date)}
                dateFormat="MM/dd/yyyy"
                placeholderText="mm/dd/yyyy"
                className=" bg-gray-100 text-gray-700 text-sm border-none focus:outline-none"
              />
         
                  
                </div>
              
             
             </div>

<div>
             <div className="text-[#2F3B4C] text-[16px] font-light"><p>Ends</p></div>
              <div className="border flex flex-col border-b-[#8D8D8D] w-full lg:w-[270px] px-[16px] py-[13px] bg-[#d6d6d6]">
              
          
                 <div className="flex gap-3"><p className="text-[12px] font-light text-[#525252]">
                  Label (mm/dd/yyyy)   </p>

                  <img src={questionIcon} alt="" /> </div>
                  <DatePicker
                selected={salesEndDate}
                onChange={(date) => setSalesEndDate(date)}
                dateFormat="MM/dd/yyyy"
                placeholderText="mm/dd/yyyy"
                className="  bg-gray-100 text-gray-700 text-sm border-none focus:outline-none"
              />
             
                        
           
                
             
              </div>
      </div>
</div> 

{/* </LocalizationProvider> */}



<div className="bg-[#3A7BD5] text-[#FFFFFF] mt-[32px] rounded-[8px] max-w-full text-center py-[16px]">
        <button className=" ">
           Add ticket type
            </button>
      </div>

      </div>


      
             
       
           
{/* checked */}
          {/* next form */}
  
  <div className="ticketTypes border  rounded-[12px] w-full lg:max-w-[1032px] px-[40px] py-[16px] mt-[28px]">
  
  
  <div className="flex items-center justify-between w-full lg:max-w-[1032px]">
    <div>
      <p>Discount Codes</p>
    </div>
    <div className="bg-[#3A7BD5] w-[230px] flex justify-center items-center px-[20px] py-[10px] gap-[22px] rounded-[8px]">
      <img src={discountIcon} alt="" />
      <p>Add Discount Code</p>
    </div>
  </div>



  {/* checked */}
  <div className="flex flex-wrap  justify-between mt-[32px] w-full items-center">
  <fieldset className="w-full sm:w-[45%] mb-4">
    <label htmlFor="price" className="pl-[8px] block">Discount Code</label>
    <input
      type="text"
      placeholder="DISCOUNTCODE"
      className="border border-[#BEBEBE] rounded-[12px] w-full h-[52px] pl-[20px] py-[18px]"
    />
  </fieldset>
  <fieldset className="w-full sm:w-[45%] mb-4">
    <label htmlFor="percentage" className="pl-[8px] block">Percentage</label>
    <input
      type="text"
      placeholder="Discount Percentage"
      className="border border-[#BEBEBE] rounded-[12px] w-full h-[52px] pl-[20px] py-[18px]"
    />
  </fieldset>
  <div className="w-full sm:w-auto flex justify-center ">
    <img
      src={delectIcon}
      alt="Delete Icon"
      className="min-w-[30px]  max-w-[50px] h-auto"
    />
  </div>
</div>


           
     
        {/* Start Date Picker */}
        {/* <div>
          <h4 className="text-center mb-2 text-gray-500">Valid from</h4>
          <DatePicker
            label="Start Date"
            value={startDate}
            onChange={(newValue) => setStartDate(newValue)}
            
            renderInput={(params) => (
              <TextField {...params} fullWidth variant="outlined" 
              
              
              />

              
            )}
          />
        </div> */}

        {/* End Date Picker */}
        {/* <div>
          <h4 className="text-center mb-2 text-gray-500">Valid until</h4>
          <DatePicker
            label="End Date"
            value={endDate}
            onChange={(newValue) => setEndDate(newValue)}
            renderInput={(params) => (
              <TextField {...params} fullWidth variant="outlined" />
            )}
          />
        </div> */}

         <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="calenderContainer mt-[44px] text-black flex flex-col gap-y-7 lg:flex-row justify-between lg:gap-[160px]">
  <div className="calender1">
    <p>Valid from</p>
    
    <div className="flex ">
    <MuiDatePicker
            label="Start Date"
            value={validStartDate}
            onChange={(newValue) => setValidStartDate(newValue)}
            
            renderInput={(params) => (
              <TextField {...params} fullWidth variant="outlined" /> 
              
            )}
             />
      <img src={pencilBlue} alt="" />
    </div>
  </div>

  <div className="calender2">
    <p>Valid until</p>
    <div className="flex">
    <MuiDatePicker
            label="End Date"
            value={validEndDate}
            
            onChange={(newValue) => setValidEndDate(newValue)}
            renderInput={(params) => (
              <TextField {...params} fullWidth variant="outlined" 
              // disabled={!isEditable}
               />
              
            )}
          />
      <img src={pencilBlue} alt=""  />
    </div>
  </div> 
</div>


      
      
    
    </LocalizationProvider>
  
  {/* checked */}
              {/* <div className="calenderContainer mt-[44px] flex gap-[160px]">
                <div className="calender1">
                  <p>Valid from</p>
                  <div className="flex">
                    <input type="text" placeholder="Date" className="w-[245px]" />
                    <img src={pencilBlue} alt="" />
                  </div>
                </div>
  
                <div className="calender2">
                  <p>Valid until</p>
                  <div className="flex">
                    <input type="text" placeholder="Date" className="w-[245px]" />
                    <img src={pencilBlue} alt="" />
                  </div>
                </div>
              </div> */}






</div>
<div className="bg-[#3A7BD5] text-[#FFFFFF] mt-[32px]  w-full  py-[16px] text-center rounded-[8px]">
        <button className="">
            Create event
            </button>
      </div>

  
    </form>
      </div>
   
   
   </>
  );
};

export default Ticketing;
