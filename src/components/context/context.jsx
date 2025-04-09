import { createContext, useContext, useState,useRef } from "react";
import axios from "axios";
const EventFormContext = createContext();


export const EventFormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    eventTitle: "",
    eventDesc: "",
    eventType: "",
    eventCountry: "",
    eventState: "",
    eventCity: "",
    eventVenue: "",
    maximumAttendees: "",
    startDate: null,
    endDate: null,
    eventImgURL: "",
    url: "",
    country: "",
    state: "",
    city: "",
    address: "",
    tickeType: "",     // e.g., VIP, Regular
    ticketPrice: "",   // e.g., 5000
    quantity: "",
    startTime:"",
    endTime:"",                   // Optional: if you're collecting quantity
  });

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [userID, setUserID] = useState("");
  const [fileInputRef] = useState(useRef(null)); // for file input reset

// Handle form submission
const handleSubmit = async (event) => {
  event?.preventDefault(); // optional chaining, will only call if event exists


    // Ensure image upload is completed before submitting the form
if (!uploadedImage) {
  alert("Please upload an image before submitting.");
  return;
}

  const SubmitFormData = new FormData();

  SubmitFormData.append("eventImgURL", formData.eventImgURL || "");
  SubmitFormData.append("eventTitle", formData.eventTitle || "");
  SubmitFormData.append("eventType", formData.eventType || "");
  SubmitFormData.append("eventDesc", formData.eventDesc || "");
  SubmitFormData.append("tickeType", formData.tickeType || "");
  SubmitFormData.append("maximumAttendees", formData.maximumAttendees || "");
  SubmitFormData.append("eventVenue", formData.eventVenue || "");
  SubmitFormData.append("url", formData.url || "");
  SubmitFormData.append("endTime", formData.endTime || "");
  SubmitFormData.append("startTime", formData.startTime || "");
  // ✅ Correctly format event dates as ISO strings
if (formData.startDate) {
SubmitFormData.append("eventStart", formData.startDate.toISOString());
}
if (formData.endDate) {
SubmitFormData.append("eventEnd", formData.endDate.toISOString());
}
  SubmitFormData.append("eventCountry", selectedCountry);
  SubmitFormData.append("eventState", selectedState);
  SubmitFormData.append("eventCity", selectedCity|| "");




  console.log("Submitting Data:", Object.fromEntries(SubmitFormData.entries())); // Debugging

  try {
    const response = await axios.post(
        `https://alphaeventappdevmode.onrender.com/createVnt/${userID}`,
      SubmitFormData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log("formData Response:", response);
    alert("Event created successfully!");


    //  CLEAR FORM 
    setFormData({
      eventTitle: "",
      eventDesc: "",
      eventType: "",
      tickeType: "",
      eventCountry: "",
      eventState: "",
      eventCity: "",
      eventVenue: "",
      maximumAttendees: "",
      startDate: null,
      endDate: null,
      eventImgURL: "",
      url: "",
      country: "",
      state: "",
      city: "",
      address: "",
    });

    setSelectedCountry("");
    setSelectedState("");
    setSelectedCity("");
    setFile(null);
    setImagePreview("");
    setUploadedImage(null);

    // ✅ Reset the file input value
if (fileInputRef.current) {
fileInputRef.current.value = null;
}




  } catch (error) {
    console.error("Error creating event:", error?.response?.data || error);
    alert("Failed to create event.");
  }
};


  return (
    <EventFormContext.Provider
      value={{
        formData,
        setFormData,
        selectedCountry,
        setSelectedCountry,
        selectedState,
        setSelectedState,
        selectedCity,
        setSelectedCity,
        file,
        setFile,
        imagePreview,
        setImagePreview,
        uploadedImage,
        setUploadedImage,
        userID,
        setUserID,handleSubmit 
            }}
    >
      {children}
    </EventFormContext.Provider>
  );
};

 

export const useEventForm = () => useContext(EventFormContext);
