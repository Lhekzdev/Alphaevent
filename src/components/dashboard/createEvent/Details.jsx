
import React, { useState, useRef, useEffect} from "react";
import cloudIcon from "../../../assets/cloudIcon.svg"
// import Section1 from './Section1
import Onboardingleft from "../onboardingleft/Onboardingleft";
import ProfileSearchBar from "../../dashboard/OnBoarding/ProfileSearchBar"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import questionmark from "../../../assets/questionmark.svg"







const CreateEvent = () => {


// Fetch all countries

  useEffect(() => {
    fetch("http://localhost:5001/countries") // Fetch countries from your backend
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleCountryChange = (e) => {
    const countryId = e.target.value;
    console.log("Selected Country ID:", countryId); // Debugging log
    setSelectedCountry(countryId);

    fetch(`http://localhost:5001/states/${countryId}`)
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




    
    





//   // Ref to programmatically trigger the file input
//   const fileInputRef = useRef(null);




  
//     const [selectedCategory, setSelectedCategory] = useState("");
 
//     const handleCategoryChange = (event) => {
//       setSelectedCategory(event.target.value);
//     };


//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);


//   // Handle file upload
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       console.log("Selected file:", file.name); // Handle the uploaded file here
//       // Create a preview URL for the uploaded image
//       const previewURL = URL.createObjectURL(file);
//       setUploadedImage(previewURL);
//     }
//   };

//   // Programmatically click the hidden input
//   const handleUploadClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleToggle = () => {
//     setIsToggled(!isToggled);
//   }



//   const [eventType, setEventType] = useState('');

//   const handleEventTypeChange = (e) => {
//     setEventType(e.target.value);
//   };

  

// // Handle form submission
// const handleSubmit = async (event) => {
//   event.preventDefault();
//   console.log("Submitting form...");

//   const formData = new FormData();

//   formData.append("eventTitle", event.target.eventTitle?.value || "");
//   formData.append("description", event.target.description?.value || "");
//   formData.append("eventCategory", event.target.eventCategory?.value || "");
//   formData.append("eventFormat", event.target.eventFormat?.value || "");
//   if (startDate) {
//     formData.append("startDate", startDate.toISOString());
//   }

//   // Check if the endDate is set and append it to formData
//   if (endDate) {
//     formData.append("endDate", endDate.toISOString());
//   }
//   formData.append("isPrivate", isToggled);
//   formData.append("eventCapacity", event.target.eventCapacity?.value || "");
//   formData.append("maximumattedees", event.target.maximumattedees?.value || "");
//   formData.append("customTags", event.target.customTags?.value || "");
//   formData.append("accessibilityOption", event.target.accessibilityOption?.value || "");

//   if (uploadedImage) {
//     const imageFile = fileInputRef.current.files[0];
//     formData.append("image", imageFile);
//   }

//   try {
//     const response = await axios.post("http://localhost:5001/api/events", formData, {
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



  // Ref to programmatically trigger the file input
  const fileInputRef = useRef(null);



  
  




  const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
  




// Handle state change and fetch cities
const handleStateChange = (e) => {
    const stateId = e.target.value;
    console.log("Selected State ID:", stateId); // Debugging log
    setSelectedState(stateId);

    fetch(`http://localhost:5001/cities/${stateId}`)
        .then((response) => {
            if (!response.ok) throw new Error("Failed to fetch cities");
            return response.json();
        })
        .then((data) => {
            console.log("Fetched Cities:", data); // Debugging log
            setCities(data);
        })
        .catch((error) => console.error("Error fetching cities:", error));
};


  const handleUploadClick = () => {
    fileInputRef.current.click();
  };






  //  Handle file upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name); // Handle the uploaded file here
      // Create a preview URL for the uploaded image
      const previewURL = URL.createObjectURL(file);
      setUploadedImage(previewURL);
    }
  };

  

  const [uploadedImage, setUploadedImage] = useState(null);
  const [isToggled, setIsToggled] = useState(true);

    const [eventType, setEventType] = useState('');

const handleSubmit = async (event) => {


  // / Programmatically click the hidden input


  event.preventDefault();
  console.log("Submitting form...");

  const formData = new FormData();
// Basic event data
formData.append("eventTitle", event.target.eventTitle?.value || "");
formData.append("description", event.target.description?.value || "");
formData.append("eventCategory", event.target.eventCategory?.value || "");
formData.append("eventFormat", event.target.eventFormat?.value || "");
formData.append("eventType", event.target.eventType?.value || "");
formData.append("maximumAttendees", event.target.maximumattedees?.value || "");
formData.append("customTags", event.target.customTags?.value || "");
formData.append("accessibilityOption", event.target.accessibilityOption?.value || "");

// Event dates
if (startDate) {
  formData.append("startDate", startDate.toISOString());
}
if (endDate) {
  formData.append("endDate", endDate.toISOString());
}

// Venue information (for physical events)
formData.append("country", selectedCountry);
formData.append("state", selectedState);
formData.append("city", event.target.city?.value || "");
formData.append("address", event.target.address?.value || "");

// File upload (event banner image)
if (uploadedImage) {
  const imageFile = fileInputRef.current.files[0];
  formData.append("image", imageFile);
}

// Toggle for private event
formData.append("isPrivate", isToggled);

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

// /   const [eventType, setEventType] = useState('');

  const handleEventTypeChange = (e) => {
    setEventType(e.target.value);
  };

  
// Fetch all countries

const [countries, setCountries] = useState([]); // Store countries
const [states, setStates] = useState([]);       // Store states
const [cities, setCities] = useState([]);       // Store cities
const [selectedCountry, setSelectedCountry] = useState(""); // Selected country
const [selectedState, setSelectedState] = useState("");     // Se
  // Fetch countries on component load
 


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

              <div>
            <label htmlFor="eventcapacity"   className="block  font-medium mb-2">Event capacity</label>
           <input
              type="text" 
              id="maximumattedees" name="maximumattedees"
              placeholder="Maximum attedees"
              className="w-full   focus:ring-2 border-customLighterGray h-[52px] border rounded-[12px] px-[20px]  focus:outline-none  focus:ring-blue-500  placeholder:text-[16px] "
              rows="3"
            />
 </div>



{/* Event type section */}

<div className="mt-4 max-w-[325px] h-[78px]  ">
  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
  <select
    id="eventType"
    name="eventType"
    className="w-full border h-[52px] border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
    value={eventType}
    onChange={handleEventTypeChange}
  >
    <option  value="">Select Event Type</option>
    <option value="online">Online</option>
    <option value="physical">Physical</option>
  </select>
</div>

{eventType === 'online' && (
  <div className="mt-4">
    <label htmlFor="url" className="block text-sm  font-medium text-gray-700 mb-1">URL</label>
    <input
      type="url"
      id="url"
      name="url"
      
      placeholder="eg. https://meet.google.com/xyz"
      className="w-full border border-gray-300 h-[52px] pl-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
)}

{eventType === 'physical' && (
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
            <option key={country.id} value={country.id}> {/* Use country.id as unique key */}
              {country.name}
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
              <option key={state.id} value={state.id}> {/* Use state.id as unique key */}
                {state.name}
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
        >
          <option value="">Select City</option>
          {cities.length > 0 ? (
            cities.map((city) => (
              <option key={city.id} value={city.name}> {/* Use city.id if available */}
                {city.name}
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
          id="address"
          name="address"
          placeholder="address"
          className="w-full border h-[52px] pl-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
         
       />
        
       
      </div>
  </div>
)}

  










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

       <div class="">
  <h2 class="text-lg font-semibold mb-4">Event Time</h2>

      {/* <!-- Starts Section --> */}
  <div class="grid grid-cols-1 gap-2 lg:grid-cols-2 justify-between">

    {/* <div >
      <h3 class="text-sm font-medium mb-2">Starts</h3>
      <div className=" ">
      <div class="flex items-center gap-2 border bg-[#F4F4F4] rounded-md mt-9  shadow-sm">
        <div class="flex flex-col">
          <label class="text-xs font-medium text-gray-600" for="start-time">Time</label>
          <input
            id="start-time"
            type="text"
            placeholder="hh:mm"
            class="border rounded-md px-2 py-1 text-sm text-gray-800 w-20 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <div class="flex  flex-col">
          <label class="text-xs font-medium text-gray-600" for="start-clock">Clock</label>
          <select
            id="start-clock"
            class="border rounded-md px-2 py-1 text-sm text-gray-800 w-20 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            <option>AM</option>
            <option>PM</option>
          </select>
        </div>
        <div class="flex flex-col">
          <label class="text-xs font-medium text-gray-600" for="start-timezone">Timezone</label>
          <select
            id="start-timezone"
            class="border rounded-md px-2 py-1 text-sm text-gray-800 w-36 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            <option>Eastern time (ET)</option>
            <option>Central time (CT)</option>
            <option>Pacific time (PT)</option>
          </select>
        </div>
      </div>
      </div>
    </div> */}

<div >
      <h3 class="text-sm font-medium mb-2">Starts</h3>
      <div>
        <div className="pt-3 border rounded-md shadow-sm px-2 border-red-900 bg-[#F4F4F4]">
      <div class="flex items-center gap-2 place-items-center  h-[64px] ">
        
       
       
        <div class="flex h-[64px] w-[100px]  flex-col">
          <label class="text-xs font-medium  text-gray-600" for="start-time">Time</label>
          <input
            id="start-time"
           type="time"
            placeholder="hh:mm"
            class="border rounded-md  py-1 text-sm text-gray-800 w-20 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
      
      
      
        <div class="flex border-r-[1px]  gap-y-2 border-l-[1px]  border-t-0 border-b-0 border h-[64px] w-[100px] items-center   flex-col">
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
        </div>



        <div class="flex w-full flex-col">
          <label class="text-xs font-medium pl-2 text-gray-600" for="start-timezone">Timezone</label>
          <select
            id="start-timezone"
            class="border rounded-md px-2 py-1  lg:max-w-[9vw] text-sm text-gray-800 w-36 focus:outline-none focus:ring focus:ring-indigo-200"
     
         >
            <option>Eastern time (ET)</option>
            <option>Central time (CT)</option>
            <option>Pacific time (PT)</option>
          </select>
        </div>
      </div>
      </div>
      </div>
    </div>


    {/* <!-- Ends Section --> */}
    <div >
      <h3 class="text-sm font-medium mb-2">Ends</h3>
      <div>
        <div className="pt-3 border rounded-md shadow-sm px-2 box-content border-red-900 bg-[#F4F4F4]">
      <div class="flex items-center gap-2 place-items-center  h-[64px] ">
        
       
       
        <div class="flex h-[64px] w-[100px]  flex-col">
          <label class="text-xs font-medium  text-gray-600" for="end-time">Time</label>
          <input
            id="end-time"
            type="time"
            placeholder="hh:mm"
            class="border rounded-md  py-1 text-sm text-gray-800 w-20 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
      
      
      
        <div class="flex border-r-[1px]  gap-y-2 border-l-[1px]  border-t-0 border-b-0 border h-[64px] w-[100px] items-center   flex-col">
        <div className="flex place-content-center w-[100px] "> <ol> <label class="text-xs flex w-[56px]  font-medium text-gray-600" for="end-clock">
            
            Clock
          
       </label></ol> 
       <ol>   <img src={questionmark} alt="" /></ol></div>
          <select
            id="end-clock"
            class="border rounded-md px-2 py-1 text-sm text-gray-800 w-20 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            <option>AM</option>
            <option>PM</option>
          </select>
        </div>



        <div class="flex  flex-col">
          <label class="text-xs font-medium pl-2 text-gray-600" for="end-timezone">Timezone</label>
          <select
            id="end-timezone"
            class="border rounded-md mt-2 px-2 py-1 lg:max-w-[9vw] text-sm text-gray-800 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            <option>Eastern time (ET)</option>
            <option>Central time (CT)</option>
            <option>Pacific time (PT)</option>
          </select>
        </div>
      </div>
      </div>
      </div>
    </div>
  </div>
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