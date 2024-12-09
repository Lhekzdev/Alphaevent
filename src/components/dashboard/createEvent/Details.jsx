
import React, { useState, useRef } from "react";
import cloudIcon from "../../../assets/cloudIcon.svg"
// import Section1 from './Section1
import Onboardingleft from "../onboardingleft/Onboardingleft";
import ProfileSearchBar from "../../dashboard/OnBoarding/ProfileSearchBar"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";







const CreateEvent = () => {
  // Ref to programmatically trigger the file input
  const fileInputRef = useRef(null);

  const [uploadedImage, setUploadedImage] = useState(null);
  const [isToggled, setIsToggled] = useState(true);


  
    const [selectedCategory, setSelectedCategory] = useState("");
 
    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
    };


  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);


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
  }



  

// Handle form submission
const handleSubmit = async (event) => {
  event.preventDefault();
  console.log("Submitting form...");

  const formData = new FormData();

  formData.append("eventTitle", event.target.eventTitle?.value || "");
  formData.append("description", event.target.description?.value || "");
  formData.append("eventCategory", event.target.eventCategory?.value || "");
  formData.append("eventFormat", event.target.eventFormat?.value || "");
  if (startDate) {
    formData.append("startDate", startDate.toISOString());
  }

  // Check if the endDate is set and append it to formData
  if (endDate) {
    formData.append("endDate", endDate.toISOString());
  }
  formData.append("isPrivate", isToggled);
  formData.append("eventCapacity", event.target.eventCapacity?.value || "");
  formData.append("maximumattedees", event.target.maximumattedees?.value || "");
  formData.append("customTags", event.target.customTags?.value || "");
  formData.append("accessibilityOption", event.target.accessibilityOption?.value || "");

  if (uploadedImage) {
    const imageFile = fileInputRef.current.files[0];
    formData.append("image", imageFile);
  }

  try {
    const response = await axios.post("http://localhost:5001/api/events", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data);
    alert("Form submitted successfully!");
  } catch (error) {
    console.error("Error submitting form:", error.response || error.message);
    alert("Failed to submit form. Please try again.");
  }
};




  return (
 
<div className="max-w-[1140px] pt-[48px]   h-auto">

{/* first section */}


{/* second section */}

<div className='max-w-[1032px] mt-[32px] rounded-[12px] border-customLighterGray pt-[52px] pb-[40px] px-[40px] h-[335px] roubded-[12px] border-[0.8px]'>
            <div><h4 className='font-bold  text-[18px] mb-[16px] '>
              Event Banner
            </h4></div>

            {/* select image section */}
            <div className=' items-center  text-center max-w-[952px] h-[200px] rounded-[12px] border-[0.8px] '>
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




          {/* Third section */}
          <div className="max-w-[1032px] mt-[24px] min-h-[750px]  border-[0.8px] rounded-[12px] px-[40px] py-[40px]">
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
              <div className="grid grid-cols-2 gap-5 lg:gap-10 justify-between">
                <div >
                  {/* <label htmlFor="eventCategory" className="block font-medium mb-2"></label> */}
                  <select
                    id="eventCategory" name="eventCategory"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedCategory}
        onChange={handleCategoryChange}
                  >
                 
                 <option value="" disabled >
          Event Category
        </option>
                    <option value="entertainment">Entertainment and Performing Arts</option>
          <option value="workshop">Politics </option>
          <option value="education">Education and training</option>
          <option value="technology">Technology and innovation</option>
          <option value="cultural">Cultural and Community</option>
          <option value="sports">Sports and Fitness</option>
                  </select>

{/* Additional Input Fields
{selectedCategory && (
        <div className="mt-4">
          <label
            htmlFor="additionalInfo"
            className="block font-medium mb-2 text-gray-700"
          >
            Provide Details for {selectedCategory}
          </label>
          <input
            type="text"
            id="additionalInfo"
            name="additionalInfo"
            placeholder={`Enter details for ${selectedCategory}`}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )} */}

                </div>



                <div>
                  {/* <label htmlFor="eventFormat" className="block font-medium mb-2">Event Format</label> */}
                  <select
                    id="eventFormat" name ="eventFormat"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >

                    <option value=""  disabled >Event Format</option>
                    <option value="online">Online</option>
                    <option value="in-person">In-Person</option>
                  </select>
                </div>
              </div>
            
        {/* Event date section */}
        <div>
<div className="flex  justify-between">
            <h2 className="font-medium text-gray-800 text-[16px] mb-2">Starts</h2>
            <h2 className="font-medium text-gray-800 text-[16px] mb-2">Ends</h2>
            </div>



       <div className="flex  w-full  h-[145px] justify-between">
        <div className="max-w-[288px] h-[64px]">
          {/* first date */}
          <div className="bg-gray-100 border  border-gray-300 rounded-md p-4 flex items-center">
            <div className="">
              <label
                htmlFor="startDate" name="startDate"
                className="block text-gray-500 text-sm mb-1"
              >
               Label (mm/dd/yyyy)
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MM/dd/yyyy"
                placeholderText="mm/dd/yyyy"
                className="w-full bg-gray-100 text-gray-700 text-sm border-none focus:outline-none"
              />
            </div>
          

          </div>
        </div>


{/* second date */}
        <div className="max-w-[288px] h-[64px]">
          
          <div className="bg-gray-100 border  border-gray-300 rounded-md p-4 flex items-center">
            <div className="">
              <label
                htmlFor="endDate" name="endDate"
                className="block text-gray-500 text-sm mb-1"
              >
               Label (mm/dd/yyyy)
              </label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="MM/dd/yyyy"
                placeholderText="mm/dd/yyyy"
                className="w-full bg-gray-100 text-gray-700 text-sm border-none focus:outline-none"
              />
            </div>
          
          </div>
        </div>
        </div>
       </div>



         {/* Advanced options  */}

        <div className="max-w-[1032px]  mt-[32px]  rounded-[12px] border-[0.8px] p-[40px]  gap-[20px]">

          <div className="font-bold leading-[27px] text-[18px]"><h5 >Advanced Options</h5></div>
          <div className=" justify-between flex w-full mt-10">
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
  </div>

  )
}

export default CreateEvent