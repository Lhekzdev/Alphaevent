import React, { useState, useEffect, useRef } from "react";
import cloudIcon from "../../../assets/cloudIcon.svg"
// import Section1 from './Section1
import Onboardingleft from "../onboardingleft/Onboardingleft";
import ProfileSearchBar from "../OnBoarding/ProfileSearchBar"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Form } from "react-router-dom";

import { useEventForm } from "../../context/context";


const Detailsold = () => {

    const {
      formData, setFormData,
      selectedCountry, setSelectedCountry,
      selectedState, setSelectedState,
      selectedCity, setSelectedCity,
      file, setFile,
      imagePreview, setImagePreview,
      uploadedImage, setUploadedImage,
      userID, setUserID
    } = useEventForm();
  
  


 const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  // const [selectedCountry, setSelectedCountry] = useState("");
  // const [selectedState, setSelectedState] = useState("");
  // const [selectedCity, setSelectedCity] = useState("");
  // const [file, setFile] = useState(null);
  // const [imagePreview, setImagePreview] = useState("");
  // const [imageUrl, setImageUrl] = useState("");

  const [showMessageBox1, setShowMessageBox1] = useState(false);
  const [showMessageBox2, setShowMessageBox2] = useState(false);

  // const [uploadedImage, setUploadedImage] = useState(null);
  // const [userID, setUserID] = useState("");


  const [isLoading, setIsLoading] = useState(false)

  // handleDate
  const handleStartDateChange = (date) => {
    setFormData((prev) => ({ ...prev, startDate: date }));
  };

  const handleEndDateChange = (date) => {
    setFormData((prev) => ({ ...prev, endDate: date }));
  };


  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const ticketTypes1Ref = useRef(null);
  // const ticketTypes2Ref = useRef(null);
  // Handle input changes

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

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserID(storedEmail);
      fetchUserID(storedEmail);
    }
  }, []);
  const fetchUserID = async (userEmail) => {
    try {
      const response = await fetch(`https://alphaeventappdevmode.onrender.com/userNamFetch/${userEmail}`);
      //console.log("NEW:",response)
      if (response.ok) {
        const data = await response.json();
        let useID = data.data.userID
        console.log('Fetched ID:', useID);
        setUserID(useID);
      } else {
        console.error('Failed to fetch total revenue:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching total revenue:', error);
    }
  };


  // Fetch all countries

  useEffect(() => {
    fetch("https://alphaeventappdevmode.onrender.com/countries") // Fetch countries from your backend
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched countries data:", data);
        setCountries(data);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



const [eventTags, setEventTagsInput] = useState(""); // stores typed string

const handleEventTagChange = (e) => {
  setEventTagsInput(e.target.value); // just update input string
}

  const handleCountryChange = (e) => {
    const countryId = e.target.value;
    const countryName = e.target.options[e.target.selectedIndex].text;
    console.log("Selected Country ID:", countryId); // Debugging log
    setSelectedCountry(countryId);

    setFormData((prevData) => ({
      ...prevData,
      eventCountry: countryName,
    }))



    fetch(`https://alphaeventappdevmode.onrender.com/states/${countryId}`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch states");
        return response.json();
      })
      .then((data) => {
        console.log("Fetched States:", data); // Debugging log
        setStates(data);
        setCities([]); // Clear cities when a new country is selected
      })
      .catch((error) => console.error("Error fetching states:", error));
  };


  const handleStateChange = (e) => {
    const stateId = e.target.value;
    const stateName = e.target.options[e.target.selectedIndex].text;
    console.log("Selected State ID:", stateId); // Debugging log
    setSelectedState(stateId);

    setFormData((prevData) => ({
      ...prevData,
      eventState: stateName,
    }))


    fetch(`https://alphaeventappdevmode.onrender.com/cities/${stateId}`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch cities");
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Cities (API Response):", data); // Debugging log
        setCities(data);
      })
      .catch((error) => console.error("Error fetching cities:", error));
  }

  //   fetch(`https://alphaeventappdevmode.onrender.com/cities/${stateId}`)
  //     .then((response) => {
  //       if (!response.ok) throw new Error("Failed to fetch cities");
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("Fetched Cities:", data); // Debugging log
  //       setCities(data);
  //     })
  //     .catch((error) => console.error("Error fetching cities:", error));
  // };


  const handleCityChange = (e) => {
    const cityId = e.target.value;
    const cityName = e.target.options[e.target.selectedIndex].text;
    console.log("Selected State ID:", cityId); // Debugging log
    setSelectedCity(cityId);


    setFormData((prevData) => ({
      ...prevData,
      eventCity: cityName,
    }))

  }


    

//  Handle file upload
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ["image/png", "image/jpeg", "image/gif"];
      if (!validTypes.includes(file.type)) {
        alert("Please upload a valid image file (PNG, JPG, or GIF).");
        return;
      }

     
        // Set local preview before uploading
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);

      setIsLoading(true);

      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "ALVENT_PRESET");
        formData.append("cloud_name", "dgeedhozf");

        const response = await fetch("https://api.cloudinary.com/v1_1/dgeedhozf/image/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Failed to upload image. Please try again.");
        }

        const data = await response.json();
        console.log("Uploaded Image URL:", data.secure_url);

        // Update state with Cloudinary URL after upload
        setUploadedImage(data.secure_url);
        setFormData((prevFormData) => ({
          ...prevFormData,
          eventImgURL: data.secure_url,
        }));

        setIsLoading(false);
      } catch (error) {
        console.error("Image upload failed:", error.message);
        alert("Image upload failed. Please try again.");
        setIsLoading(false);
      }
    
    }}

  // Ref to programmatically trigger the file input
  const fileInputRef = useRef(null);
  

  
  // const handleEventTagChange = (e) => {
  //   const raw = e.target.value;

  //   setFormData({
  //     ...formData,
  //     eventTagsRaw: raw, // store the original string for display
  //     eventTags: raw.split(',').map(tag => tag.trim()).filter(Boolean) // convert to array
  //   });
  // }

  const [isToggled, setIsToggled] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

 



  
// Handle form submission
// const handleSubmit = async (event) => {
//   event.preventDefault();
//   console.log("Submitting form...");

//   const formData = new FormData();
//   formData.append("eventTitle", event.target.eventTitle?.value || "");
//   formData.append("description", event.target.description?.value || "");
//   formData.append("eventCategory", event.target.eventCategory?.value || "");
//   formData.append("eventFormat", event.target.eventFormat?.value || "");
//   if (startDate) formData.append("startDate", startDate.toISOString());
//   if (endDate) formData.append("endDate", endDate.toISOString());
//   formData.append("isPrivate", isToggled);
//   formData.append("maximumattendees", event.target.maximumattendees?.value || "");
//   formData.append("customTags", event.target.customTags?.value || "");
//   formData.append("accessibilityOption", event.target.accessibilityOption?.value || "");

//   // if (uploadedImage) {
//   //   const imageFile = fileInputRef.current.files[0];
//   //   formData.append("image", imageFile);
//   // }
//   if (uploadedImage) {
//     const imageFile = fileInputRef.current.files[0];
//     formData.eventImgURL = imageFile; // Add to formData
//   }

//   try {
//     const response = await axios.post(`https://alphaeventappdevmode.onrender.com/createVnt/${userID}`, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     console.log(response.data);
//     alert("Form submitted successfully!");
//   } catch (error) {
//     console.error("Error submitting form:", error.response || error.message);
//     alert("Failed to submit form. Please try again.");
//   }
// };




  return (
     <form className="space-y-4 "   >
       <div className="max-w-[1140px] pt-[48px]   h-auto">
 
         {/* first section */}
 
 
         {/* second section */}
 
         {/* <div className="max-w-[1140px] pt-[48px] h-auto"> */}
         <div className='max-w-[1032px] mt-[32px] rounded-[12px] border-customLighterGray pt-[52px] pb-[40px] px-[40px] h-[335px]'>
           <h4 className='font-bold text-[18px] mb-[16px]'>Banner <span className="text-customRed">*</span> </h4>
           <div className='items-center text-center max-w-[952px] h-[200px] rounded-[12px] border-[0.8px] mx-auto flex justify-center'>
             <div
               className='w-[284px] h-[107px] relative flex items-center justify-center cursor-pointer'
               onClick={() => fileInputRef.current.click()}
             >
               {imagePreview ? (
                 <img
                   src={imagePreview}
                   alt="Preview"
                   className="w-full h-full object-cover rounded-[12px]"
                 />
               ) : (
                 <div className="flex flex-col items-center text-center gap-y-1 overflow-hidden">
                   <img className="mx-auto max-h-[40px]" src={cloudIcon} alt="cloudIcon" />
                   <p className="text-xs leading-tight break-words">Click to upload or drag and drop</p>
                   <p className="text-xs leading-tight break-words">PNG, JPG or GIF (MAX. 800x400px)</p>
                 </div>
               )}
             </div>
 
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
           <h2 className="font-semibold text-lg mb-4">Basic Information<span className="text-customRed">*</span></h2>
 
 
 
 
 
 
 
           <div>
             <label htmlFor="eventTitle" className="block font-medium mb-2">Event Name</label>
             <input
               name="eventTitle"
               type="text"
               id="eventTitle"
               placeholder="Enter event title"
               className="w-full border h-[52px] border-customLighterGray rounded-[12px] px-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500"
               onChange={handleChange}
               value={formData.eventTitle}
             />
           </div>
 
           {/* Description */}
           <div>
             <label htmlFor="description" className="block font-medium mb-2">Description</label>
             <textarea
               id="eventDesc"
               name="eventDesc"
               placeholder="Enter event description"
               className="w-full  border-customLighterGray border rounded-[12px] px-[20px]  focus:outline-none focus:ring-2 focus:ring-blue-500"
               rows="3"
               value={formData.eventDesc}
               onChange={handleChange}
             ></textarea>
           </div>
 
           <div>
             <label htmlFor="maximumattedees" className="block  font-medium mb-2">Event capacity</label>
             <input
               type="number"
               id="maximumAttendees" name="maximumAttendees"
               placeholder="e.g, 2000"
               className="w-full   focus:ring-2 border-customLighterGray h-[52px] border rounded-[12px] px-[20px]  focus:outline-none  focus:ring-blue-500  placeholder:text-[16px] "
               rows="3"
               value={formData.maximumAttendees}
               onChange={handleChange}
             />
           </div>
 
           <div>
             <label htmlFor="eventTags" className="block  font-medium mb-2">Event Tags</label>
 <input
      type="text"
      name="eventTags"
      placeholder="e.g. gaming, fishing"
      value={formData.eventTagsRaw || ""}
      onChange={(e) => {
        const raw = e.target.value;
        const parsed = raw.split(',').map(tag => tag.trim()).filter(Boolean);

        console.log("Raw eventTags string:", raw);
        console.log("Parsed eventTags array:", parsed);

        setFormData({
          ...formData,
          eventTagsRaw: raw,
          eventTags: parsed,
        });
      }}
    />


           </div>
 
 
           <div className="flex-none  md:flex md:gap-x-[16px] justify-between  mt-4  w-full h-auto">
 
             {/* Event type section */}
             <div className="w-full h-auto">
               <div className="h-[78px] ">
                 <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                 <select
                   id="eventType"
                   name="eventType"
                   className="w-full border h-[52px] border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                   value={formData.eventType}
                   onChange={handleChange}
                 >
                   <option disabled value="">Select Event Type</option>
                   <option value="online">Online</option>
                   <option value="physical">Physical</option>
                 </select>
               </div>
 
 
 
 
 
               {formData.eventType === 'online' && (
                 <div className="mt-4">
                   <label htmlFor="url" className="block text-sm  font-medium text-gray-700 mb-1">URL</label>
                   <input
                     type="url"
                     id="url"
                     name="url"
                     value={formData.url}
                     onChange={handleChange}
                     placeholder="eg. https://meet.google.com/xyz"
                     className="w-full border border-gray-300 h-[52px] pl-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                   />
                 </div>
               )}
 
               {formData.eventType === 'physical' && (
                 <div className="max-w-[1032px] mt-[32px] rounded-[12px] border-[0.8px] p-[40px] gap-[20px]">
                   <div className="font-bold leading-[27px] text-[18px]">
                     <h5>Venue Information</h5>
                   </div>
 
                   <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
                     {/* Country Dropdown */}
                     <div>
                       <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                         Country
                       </label>
                       <select
                         id="country"
                         name="country"
                         className="w-full border h-[52px] border-gray-300 rounded-md  shadow-sm focus:ring-blue-500 focus:border-blue-500"
                         value={selectedCountry}
                         onChange={handleCountryChange}
                       >
                         <option className="" value="">Select Country</option>
                         {countries.map((country) => (
                           <option key={country.geonameId} value={country.geonameId}> {/* Use country.id as unique key */}
                             {country.countryName}
                           </option>
                         ))}
                       </select>
                     </div>
 
                     {/* State Dropdown */}
                     <div>
                       <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                         State
                       </label>
                       <select
                         id="state"
                         name="state"
                         className="w-full border h-[52px] border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                         value={selectedState}
                         onChange={handleStateChange}
                         disabled={states.length === 0} // Disable if no states available
                       >
                         <option value="">Select State</option>
                         {states.length > 0 ? (
                           states.map((state) => (
                             <option key={state.geonameId} value={state.geonameId}> {/* Use state.id as unique key */}
                               {state.stateName}
                             </option>
                           ))
                         ) : (
                           <option>No states available</option>
                         )}
                       </select>
                     </div>
 
                     {/* City Dropdown */}
                     <div>
                       <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                         City
                       </label>
                       <select
                         id="city"
                         name="city"
                         className="w-full border h-[52px] border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                         disabled={cities.length === 0} // Disable if no cities available
                         value={selectedCity}
                         onChange={handleCityChange}
                       >
                         <option value="">Select City</option>
                         {cities.length > 0 ? (
                           cities.map((city) => (
                             <option key={city.geonameId} value={city.geonameId}> {/* Use city.id if available */}
                               {city.cityName}
                             </option>
                           ))
                         ) : (
                           <option>No cities available</option>
                         )}
                       </select>
                     </div>
 
 
                   </div>
 
 
                   {/* Address Dropdown */}
                   <div className="mt-3">
                     <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                       Address
                     </label>
                     <input type="text"
                       id="eventVenue"
                       name="eventVenue"
                       placeholder="address"
                       className="w-full border h-[52px] pl-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                       value={formData.eventVenue}
                       onChange={handleChange}
                     />
 
 
                   </div>
                 </div>
               )}
             </div>
 
             {/* Event Category section */}
 
             <div className=" w-full   ">
               <label htmlFor="eventCategory" className="block text-sm font-medium text-gray-700 mb-1">Event Category</label>
               <select
                 id="eventCategory"
                 placeholder=""
                 name="eventCategory"
                 className="w-full border h-[52px] border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                 value={formData.eventCategory}
                 onChange={handleChange}
               >
                 <option disabled value="">Select Category</option>
                 <option value="Premium">Premium</option>
                 <option value="Education">Education</option>
                 <option value="Attractions">Attractions</option>
                 <option value="Entertainment">Entertainment</option>
                 <option value="Sports">Sports</option>
               </select>
             </div>
 
 
 
           </div>
 
 
 
 
 
 
 
 
           {/* <input
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
               /> */}
 
 
 
 
 
           {/* Dropdowns for Event Category and Format */}
 
 
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
                       selected={formData.startDate}
                       onChange={handleStartDateChange}
                       dateFormat="MM/dd/yyyy"
                       placeholderText="mm/dd/yyyy"
                       className="w-full bg-gray-100 text-gray-700 text-sm border-none focus:outline-none"
                     />
                   </div>
 
 
                 </div>
               </div>
 
 
               {/* second date */}
               <div className="max-w-[288px]  h-[64px]">
 
                 <div className="bg-gray-100 border  border-gray-300 rounded-md p-4 flex items-center">
                   <div className="">
                     <label
                       htmlFor="endDate" name="endDate"
                       className="block text-gray-500 text-sm mb-1"
                     >
                       Label (mm/dd/yyyy)
                     </label>
                     <DatePicker
                       selected={formData.endDate}
                       onChange={handleEndDateChange}
                       dateFormat="MM/dd/yyyy"
                       placeholderText="mm/dd/yyyy"
                       className="w-full bg-gray-100 text-gray-700 text-sm border-none focus:outline-none"
                     />
                   </div>
 
                 </div>
               </div>
             </div>
           </div>
 
           <div class="">
 
             <h2 class="text-lg font-semibold mb-4">Event Time</h2>
 
             {/* <!-- Starts Section --> */}
             <div className="text-sm font-medium w-full flex justify-between mb-2">
               <h3 >Starts</h3>
               <h3 >End</h3>
             </div>
             <div class="grid items-center grid-cols-1 gap-6 lg:grid-cols-2 border-red-950 justify-between">
 
 
 
               {/* <div className="w-full justify-between flex gap-x-[176px] min-h-[74px] "> */}
               <div class="flex  w-full border rounded-md shadow-sm px-2 box-content border-900 bg-[#F4F4F4] gap-2 place-items-center  h-[64px] ">
                 <div class="flex  flex-col">
                   <label class="text-xs text- font-medium text-gray-600" for="startTime">Time</label>
                   <input
                   name="startTime"
                     id="startTime"
                     type="time"
                     placeholder="hh:mm"
                     class="border  rounded-md px-2 py-1 text-sm text-gray-800  focus:outline-none focus:ring focus:ring-indigo-200"
                     value={formData.startTime}
                     onChange={handleChange}
                   />
                 </div>
 
 
                 <div class="flex  flex-col">
                   <ul className="flex gap-4 items-center">
                     <ol><label class="text-xs font-medium text-gray-600" for="start-clock">Clock</label></ol>
                     <ol><img src={questionmark} alt="" /></ol>
                   </ul>
 
                   <select
                     name="startClock"
                     id="startClock"
                     class="border rounded-md   lg:max-w-[9vw] text-sm text-gray-800 focus:outline-none focus:ring focus:ring-indigo-200"
                     value={formData.startClock}
                     onChange={handleChange}
                   >
                     <option>AM</option>
                     <option>PM</option>
                   </select>
                 </div>
                 <div class="flex flex-col">
                   <label class="text-xs font-medium text-gray-600" for="start-timezone">Timezone</label>
                   <select
                   name="startTimezone"
                     id="startTimezone"
                     class="border rounded-md px-2 py-1 text-sm text-gray-800 w-36 focus:outline-none focus:ring focus:ring-indigo-200"
                    value={formData.startTimezone}
                     onChange={handleChange}
                   >
                     <option>Eastern time (ET)</option>
                     <option>Central time (CT)</option>
                     <option>Pacific time (PT)</option>
                     <option>West African time (WAT)</option>
                   </select>
                 </div>
               </div>
               {/* </div> */}
 
 
               
 
 
               {/* <div >
                 <h3 class="text-sm font-medium mb-2">Starts</h3>
                 <div>
                   <div className="pt-3 border rounded-md shadow-sm px-2 border-900 bg-[#F4F4F4]">
                     <div class="flex items-center gap-2 place-items-center  h-[64px] ">
 
 
 
                       <div class="flex h-[64px] w-[100px]  flex-col">
                         <label class="text-xs font-medium  text-gray-600" for="start-time">Time</label>
                         <input
                           name="startTime"
                           id="startTime"
                           type="time"
                           placeholder="hh:mm"
 
                           value={formData.startTime}
                           onChange={handleChange}
                           class="border rounded-md  py-1 text-sm text-gray-800 w-20 focus:outline-none focus:ring focus:ring-indigo-200"
 
 
                         />
                       </div> */}
 
 
 
               {/* <div class="flex border-r-[1px]  gap-y-2 border-l-[1px]  border-t-0 border-b-0 border h-[64px] w-[100px] items-center   flex-col">
         <div className="flex place-content-center w-[100px] "> <ol> <label class="text-xs flex w-[56px]  font-medium text-gray-600" for="start-clock">
             
             Clock
           
        </label></ol> 
        <ol>   <img src={questionmark} alt="" /></ol></div>
           <select
             id="start-clock"
             class="border rounded-md px-2 py-1 text-sm text-gray-800 w-20 focus:outline-none focus:ring focus:ring-indigo-200"
           >
             <option>AM</option>
             <option>PM</option>
           </select>
         </div> */}
 
 
 
               {/* <div class="flex w-full flex-col">
           <label class="text-xs font-medium pl-2 text-gray-600" for="start-timezone">Timezone</label>
           <select
             id="start-timezone"
             class="border rounded-md px-2 py-1  lg:max-w-[9vw] text-sm text-gray-800 w-36 focus:outline-none focus:ring focus:ring-indigo-200"
      
          >
             <option>Eastern time (ET)</option>
             <option>Central time (CT)</option>
             <option>Pacific time (PT)</option>
           </select>
         </div> */}
               {/* </div>
                   </div>
                 </div>
               </div> */}
 
 
               {/* <!-- Ends Section --> */}
 
 
 
               {/* <div className="pt-3 w-full border rounded-md shadow-sm px-2 box-content border-900 bg-[#F4F4F4]"> */}
               <div class="flex  w-full border rounded-md shadow-sm px-2 box-content border-900 bg-[#F4F4F4]          items-center gap-2 place-items-center  h-[64px] ">
 
 
 
                 <div class="flex h-[64px] w-[100px]  flex-col">
                   <label class="text-xs font-medium  text-gray-600" for="end-time">Time</label>
                   <input
                     name="endTime"
                     id="endTime"
                     type="time"
                     placeholder="hh:mm"
                     value={formData.endTime}
                     onChange={handleChange}
                     class="border rounded-md  py-1 text-sm text-gray-800 w-20 focus:outline-none focus:ring focus:ring-indigo-200"
                   />
                 </div>
 
 
 
                 <div class="flex border-r-[1px]  gap-y-2 border-l-[1px]  border-t-0 border-b-0 border h-[64px] w-[100px] items-center   flex-col">
                   <div className="flex place-content-center w-[100px] ">
                     <ol> <label class="text-xs flex w-[56px]  font-medium text-gray-600" for="end-clock">
 
                       Clock
 
                     </label></ol>
                     <ol>   <img src={questionmark} alt="" /></ol></div>
                   <select
                     id="endClock"
                     class="border rounded-md px-2 py-1 text-sm text-gray-800 w-20 focus:outline-none focus:ring focus:ring-indigo-200"
               name="endClock"
             value={formData.endClock}
             onChange={handleChange}
 
 
                  >
                     <option>AM</option>
                     <option>PM</option>
                   </select>
                 </div>
 
 
 
                 <div class="flex  flex-col">
                   <label class="text-xs font-medium pl-2 text-gray-600" for="end-timezone">Timezone</label>
                   <select
                   name="endTimezone"
                     id="endTimezone"
                     class="border rounded-md mt-2 px-2 py-1 lg:max-w-[9vw] text-sm text-gray-800 focus:outline-none focus:ring focus:ring-indigo-200"
                   value={formData.endTimezone}
                     onChange={handleChange}
                  >
                     <option>Eastern time (ET)</option>
                     <option>Central time (CT)</option>
                     <option>Pacific time (PT)</option>
                      <option>West African time (WAT)</option>
                   </select>
                 </div>
               </div>
             </div>
 
 
             {/* </div> */}
           </div>
 
 
           {/* 
             Removed code */}
           {/* <ol>Make event private</ol>
 
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
             </ol> */}
 
 
           {/* Event capacity*/}
 
 
           {/* </div> */}
 
           {/* <button
                 type="submit"
                 className="w-full h-[56px] py-3 mt-4 bg-customSkyblue text-white font-semibold rounded-[8px]"
                 onClick={handleSubmit}
               >
                 Proceed</button> */}
 
           {/* <div className="max-w-full mt-[32px] mb-[60px] mx-[10px] text-center rounded-[8px] px-[32px] py-[16px] text-white text-[20px] items-center  bg-customSkyblue"><button className="">Proceed</button></div> */}
 
           {/* Ticket type container */}
 
 
           <div className="w-full h-[197px] rounded-[12px] mt-[24px] border-[1px] border-[#75757580] pt-[36px] pr-[40px] pl-[40px] pb-[36px] font-Lato leading-[150%">
             <div className=" flex flex-col gap-[24px]">
               <h5 className="w-[976px] font-[700px] text-[18px] ">Social Details</h5>
               <div className="flex gap-[12px]">
                 <div className="w-full" >
 
 
                   <label htmlFor="facebook" className="w-[482px] h-[16px] pr-[8px] pl-[8px]">
                     Facebook
                   </label>
                   <input type="text"
                     id="facebook"
                     name="facebook"
                     placeholder="Facebook"
                     className="w-full border h-[52px] pl-2 border-[#BEBEBE] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                     value={formData.facebook}
                     onChange={handleChange}
                   />
 
                 </div>
                 <div className="w-full">
                   <label htmlFor="instagram" className="w-[482px] h-[16px] pr-[8px] pl-[8px]">
                     Instagram
                   </label>
                   <input type="text"
                     id="instagram"
                     name="instagram"
                     placeholder="Instagram"
                     className="w-full border h-[52px] pl-2 border-[#BEBEBE] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                     value={formData.instagram}
                     onChange={handleChange}
                   />
                 </div>
 
               </div>
             </div>
 
           </div>
 
 
 
 
 
           <div id="tickeType" className="flex  ticketTypes   items-end w-full">
 
             <button
               type="button"
               className="ml-auto transition-all ease-out duration-300 hover:scale-105 w-[92px] right-0 h-[48px] py-3 mt-4 bg-customSkyblue text-white font-semibold rounded-[8px]"
               onClick={handleProceed}
             >
               Next</button>
 
           </div>
 
 
 
 
 
 
 
 
 
         </div>
 
 
 
 
 
       </div>
 
     </form>
   )
}

export default Detailsold
