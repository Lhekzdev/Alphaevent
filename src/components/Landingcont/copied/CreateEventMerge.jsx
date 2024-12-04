import React, { useState, useRef } from "react";
import cloudIcon from "../../../assets/cloudIcon.svg";
// import Section1 from './Section1
import Onboardingleft from "../onboardingleft/Onboardingleft";
import ProfileSearchBar from "../../dashboard/OnBoarding/ProfileSearchBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import arrowOption from "../../../assets/arrowOption.svg";
import delectIcon from "../../../assets/delectIcon.svg";
import questionIcon from "../../../assets/questionIcon.svg";
import discountIcon from "../../../assets/discountIcon.svg";
import pencilBlue from "../../../assets/pencilBlue.svg";

const CreateEvent = () => {
  // Ref to programmatically trigger the file input
  const fileInputRef = useRef(null);

  const [uploadedImage, setUploadedImage] = useState(null);
  const [isToggled, setIsToggled] = useState(true);

  const [selectedDate, setSelectedDate] = useState(null);

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
    <section className="flex w-[100%]  overflow-hidden">
      <div className="max-w-[50%]">
        <Onboardingleft />
      </div>

      <div className="pl-8 pr-6  overflow-auto">
        <ProfileSearchBar />
        <div className="font-Lato  pt-[10px] bg-white  h-auto">
          <div className="  pb-[8px]  items-center justify-between flex h-[38px] max-w-[1032px]">
            <h2 className="font-bold text-[32px] leading-[38.4px] ">
              Create an event
            </h2>
            <h2 className="font-light font-leading-[16px]">
              All changes saved
            </h2>
          </div>
          <div className="max-w-[1032px]  h-[5px] rounded-[8px] border border-customLighterGray">
            <ol className="rounded-[8px] w-[285px] h-[5px] bg-black"></ol>
          </div>

          <div className="max-w-[1032px]   flex  h-[56px] mt-[8px]  p-[8px] rounded-[12px] border-[1px] justify-between  border-customLighterGray">
            <div className="w-[508px]  h-[40px] place-items-center rounded-[8px]  hover:bg-customSkyblue ">
              <button className="pt-[4px] text-center  font-bold w-[51px] h-[16px] ">
                Details
              </button>
            </div>
            <div className="w-[508px] h-[40px]  place-items-center rounded-[8px]  hover:bg-customSkyblue ">
              <button className="pt-[4px]  font-bold w-[51px] h-[16px] ">
                Ticketing
              </button>
            </div>
          </div>


{/* Details start */}
<div id="details" className='max-w-[1032px] mt-[32px] border-customLighterGray pt-[52px] pb-[40px] px-[40px] h-[335px] roubded-[12px] border-[0.8px]'>
            <div><h4 className='font-bold  text-[18px] mb-[16px] '>
              Event Banner
            </h4></div>

            {/* select image section */}
            <div className=' items-center text-center max-w-[952px] h-[200px] rounded-[12px] border-[0.8px] '>
              <div className='w-[284px] mx-auto py-[46.5px]  flex flex-col gap-y-[24px] h-[107px]' onClick={handleUploadClick}
              >
                {uploadedImage ? (
                  // Uploaded image preview
                  <img
                    src={uploadedImage}
                    alt="Uploaded Preview"
                    className="w-full object-fill h-32  rounded-[12px]"
                  />
                ) : (<div>
                  <ol className='mx-auto flex  flex-col'><img className='mx-auto ' src={cloudIcon} alt="cloudIcon" /></ol>
                  <ol className=''>
                    <li>Click to upload or drag and drop</li>
                    <li>PNG, JPG or GIF (MAX. 800x400px)</li>
                  </ol></div>)}
              </div>

              {/* Hidden file input */}
              <input
                type="file"
                accept="image/png, image/jpeg, image/gif"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />

            </div>

          </div>

          {/* Form input */}

          <div className="max-w-[1032px] mt-[24px] h-[493px] border-[0.8px] rounded-[12px] px-[40px] py-[40px]">
            <h2 className="font-semibold text-lg mb-4">Basic Information</h2>
            
            
            
            <form className="space-y-4 " onSubmit={handleSubmit}>
              <div>
                <label htmlFor="eventTitle" className="block font-medium mb-2">Event Title</label>
                <input
                name="eventTitle"
                  type="text"
                  id="eventTitle"
                  placeholder="Enter event title"
                  className="w-full border h-[52px] border-customLighterGray rounded-[12px] px-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block font-medium mb-2">Description</label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Enter event description"
                  className="w-full  border-customLighterGray border rounded-[12px] px-[20px]  focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                ></textarea>
              </div>

              {/* Dropdowns for Event Category and Format */}
              <div className="grid grid-cols-2 gap-[84px]">
                <div>
                  {/* <label htmlFor="eventCategory" className="block font-medium mb-2">Event Category</label> */}
                  <select
                    id="eventCategory" name="eventCategory"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Event Category</option>
                    <option value="conference">Conference</option>
          <option value="workshop">Workshop</option>
          <option value="seminar">Seminar</option>
                  </select>
                </div>
                <div>
                  {/* <label htmlFor="eventFormat" className="block font-medium mb-2">Event Format</label> */}
                  <select
                    id="eventFormat" name ="eventFormat"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >

                    <option value="">Event Format</option>
                    <option value="online">Online</option>
                    <option value="in-person">In-Person</option>
                  </select>
                </div>
              </div>
            
        {/* Event date section */}

        <div className="max-w-[400px]">
          <h2 className="font-medium text-gray-800 text-lg mb-2">Event Dates</h2>
          <div className="bg-gray-100 border border-gray-300 rounded-md p-4 flex items-center">
            <div className="flex-1">
              <label
                htmlFor="eventDate" name="eventDate"
                className="block text-gray-500 text-sm mb-1"
              >
                Event Date
              </label>
              <DatePicker
                selected={selectedDate} 
                onChange={(date) => setSelectedDate(date)}
                dateFormat="MM/dd/yyyy"
                placeholderText="mm/dd/yyyy"
                className="w-full bg-gray-100 text-gray-700 text-sm border-none focus:outline-none"
              />
            </div>
            <button
              type="button"
              className="ml-2 text-gray-400 hover:text-gray-600"
              aria-label="Help"
            >
              ?
            </button>
          </div>
        </div>
        <div className="max-w-[1032px] h-[385px] rounded-[12px] border-[0.8px] p-[40px] flex flex-col gap-[20px]">

          <div className="font-bold leading-[27px] text-[18px]"><h5 >Advanced Options</h5></div>
          <div className=" w-full flex h-[28px] justify-between">
            <ol>Make event private</ol>

            <ol>
              <div
                className={`relative w-[48px] h-[28px] flex items-center bg-customSkyblue rounded-[100px] cursor-pointer 
          ${isToggled ? "bg-customSkyblue" : "bg-customlightgray"}`}
                onClick={handleToggle}
              >
                <div
                  className={`absolute left-0 w-[24px] h-[24px] bg-white rounded-[100px] shadow-md transform transition-transform duration-300 
            ${isToggled ? "translate-x-4" : ""}`}
                ></div></div>
            </ol>
          </div>

          {/* Event capacity*/}
          <div>
            <label htmlFor="eventcapacity"   className="block  font-medium mb-2">Event capacity</label>
            <div className="flex flex-col gap-y-[16px] "> <input
              type="text" 
              id="maximumattedees" name="maximumattedees"
              placeholder="Maximum attedees"
              className="w-full   focus:ring-2 border-customLighterGray h-[52px] border rounded-[12px] px-[20px]  focus:outline-none  focus:ring-blue-500  placeholder:text-[16px] "
              rows="3"
            />
              <input
                type="text"
                id="customTags" 
                placeholder="Custom Tags (comma-seperated)" name="customTags"
                className="w-full   focus:ring-2 border-customLighterGray h-[52px] border rounded-[12px] px-[20px]  focus:outline-none  focus:ring-blue-500  placeholder:text-[16px]"
                rows="3"
              />
              <input
                type="text"
                id="accessibilityOption"
                placeholder="Accessibilty option" name="accessibilityOption"
                className="w-full   focus:ring-2 border-customLighterGray h-[52px] border rounded-[12px] px-[20px]  focus:outline-none  focus:ring-blue-500  placeholder:text-[16px]"
                rows="3"
              />
            </div>

          </div>

        </div>

        <button
                type="submit"
                className="w-full h-[56px] py-3 mt-4 bg-customSkyblue text-white font-semibold rounded-[8px]"
              >
                Proceed</button>
        
        {/* <div className="max-w-full mt-[32px] mb-[60px] mx-[10px] text-center rounded-[8px] px-[32px] py-[16px] text-white text-[20px] items-center  bg-customSkyblue"><button className="">Proceed</button></div> */}
     
      </form>
       </div>



{/* details stop */}

    {/* Ticket tpye container */}
         
         <div id="ticketType" className="ticketTypes border border-[#757575] rounded-[12px] w-full lg:w-[950px] px-[16px] py-[16px]">
         <form action="">
            {/* Ticket tpye container */}
            <div className="ticketType">
              <div>
                <p>Ticket type</p>
              </div>
              <div className="flex gap-[540px]">
                <div className="inputOption flex">
                  <select name="eventType" id="eventType">
                    <option value="selectEventType">Select Event Type</option>
                    <option value="earlyBird">Early Bird</option>
                    <option value="vip">VIP</option>
                    <option value="others">Others</option>
                  </select>
                  {/* <img src={arrowOption} alt="" /> */}
                </div>
                <div>
                  <img src={delectIcon} alt="" />
                </div>
              </div>
            </div>

            <div className="flex gap-[10px]">
               <fieldset>
                <label htmlFor="price" className="px-[8px]">Price</label><br />
                <input type="text" placeholder="0" className="border  border-[#BEBEBE] rounded-[12px] w-[370px] h-[52px] px-[20px] py-[18px]" />
               </fieldset>
               <fieldset>
                <label htmlFor="price" className="px-[8px]">Quantity</label><br />
                <input type="text" placeholder="0" className="border  border-[#BEBEBE] rounded-[12px] w-[370px] h-[52px] px-[20px] py-[18px]" />
               </fieldset>
            </div>

            <div>
              <p>Sales period</p>
            </div>

            <div className="flex gap-[650px] items-center">
            <div>  <p>Starts</p></div>
              <div><p>Ends</p></div>
            </div>

    
    <div className="flex gap-[300px]">
    <div className="border border-b-[#8D8D8D] w-full lg:w-[270px] px-[16px] py-[13px] bg-[#d6d6d6]">
              <div className="flex gap-[8px]">
                <p>
                Label (mm/dd/yyyy)
                </p>
                <img src={questionIcon} alt="" />
              </div>
              <div>
                <input type="text" placeholder="mm/dd/yyyy" className="bg-transparent"/>
              </div>
            </div>
            <div className="border border-b-[#8D8D8D] w-full lg:w-[270px] px-[16px] py-[13px] bg-[#d6d6d6]">
              <div className="flex gap-[8px]">
                <p>
                Label (mm/dd/yyyy)
                </p>
                <img src={questionIcon} alt="" />
              </div>
              <div>
                <input type="text" placeholder="mm/dd/yyyy" className="bg-transparent"/>
              </div>
            </div>
    </div>
    <div>
      <button className="bg-[#3A7BD5] text-[#FFFFFF] mt-[32px]  lg:w-[750px] px-[250px] py-[16px] text-center rounded-[8px]">Add ticket type</button>
    </div>
           
          </form>
         </div>
        
        {/* next form */}

<div className="ticketTypes border border-[#757575] rounded-[12px] w-full lg:w-[950px] px-[16px] py-[16px] mt-[28px]">
<form action="">

<div className="flex items-center gap-[400px] w-full lg:w-[940px]">
  <div>
    <p>Discount Codes</p>
  </div>
  <div className="bg-[#3A7BD5] w-full lg:w-[230px] flex justify-center items-center px-[20px] py-[10px] gap-[22px] rounded-[8px]">
    <img src={discountIcon} alt="" />
    <p>Add Discount Code</p>
  </div>
</div>

<div className="flex gap-[10px] mt-[32px] items-center">
               <fieldset>
                <label htmlFor="price" className="px-[8px]">Discount code</label><br />
                <input type="text" placeholder="DISCOUNTCODE" className="border  border-[#BEBEBE] rounded-[12px] w-[348px] h-[52px] px-[20px] py-[18px]" />
               </fieldset>
               <fieldset>
                <label htmlFor="price" className="px-[8px]">Percentage</label><br />
                <input type="text" placeholder="Discount Percentage" className="border  border-[#BEBEBE] rounded-[12px] w-[348px] h-[52px] px-[20px] py-[18px]" />
               </fieldset>
               <div><img src={delectIcon} alt="" className="mt-[25px]"/></div>
            </div>

            <div className="calenderContainer mt-[44px] flex gap-[160px]">
              <div className="calender1">
                <p>Valid from</p>
                <div className="flex">
                  <input type="text" placeholder="Date" className="w-[245px]" />
                  <img src={pencilBlue} alt="" />
                </div>
              </div>

              <div className="calender1">
                <p>Valid until</p>
                <div className="flex">
                  <input type="text" placeholder="Date" className="w-[245px]" />
                  <img src={pencilBlue} alt="" />
                </div>
              </div>
            </div>

        {/* calender display here */}
        {/* row 1  month year arrow down to select years  arrow left and rifght to naviagte to past and next year

        row 2 S M T W T F S 
        row 3 - row 5 the day

        row 6 clear cancel ok */}




  </form>
  </div>
        
         {/* End of Ticket Type */}
        </div>
      </div>
    </section>
  );
};

export default CreateEvent;
