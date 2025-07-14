import { createContext, useContext, useState, useRef ,useEffect} from "react";
import axios from "axios";
import { LogIn } from "../LogIn/LogIn";

const EventFormContext = createContext();


export const EventFormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    eventTitle: "",
    eventDesc: "",

    eventTags: [],    
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
    startTime: "",
    endTime: "",
    facebook: "",
    instagram: "",
    startClock: null,
    startTimezone: null,
    endClock: null,
    endTimezone: null,
    eventCategory: null,

    tickets: [{ ticketType: 'selectEventType', PriceType: '', ticketPrice: '', quantity: '' }]
  });

  const [eventTags, setEventTagsInput] = useState("");

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [userID, setUserID] = useState("");
  const [fileInputRef] = useState(useRef(null)); // for file input reset

const [isUserIDReady, setIsUserIDReady] = useState(false);

  
useEffect(() => {
  const storedEmail = localStorage.getItem('userEmail');
  console.log("Stored Email:", storedEmail); // ✅ check this
  
  if (storedEmail) {
    fetchUserID(storedEmail);
  }
  else {
    console.warn("No email found in localStorage");
  }
}, []);

const fetchUserID = async (userEmail) => {
  try {
    const response = await fetch(`https://alphaeventappdevmode.onrender.com/userNamFetch/${userEmail}`);
    const data = await response.json();
    console.log("Response data from fetchUserID:", data); // ✅ log this

    if (response.ok && data.data?.userID) {
      setUserID(data.data.userID);
      setIsUserIDReady(true);
    } else {
      console.error('Invalid or missing userID in response');
    }
  } catch (error) {
    console.error('Error fetching user ID:', error);
  }
};



  
  // Handle form submission
  const handleSubmit = async (event) => {
    event?.preventDefault(); // optional chaining, will only call if event exists



//     if (!values.ticketIDs) {
//   values.ticketIDs = `ticket_${Date.now()}`;
// }

    if (!isUserIDReady) {
  alert("User ID not ready yet. Please try again in a moment.");
  return;
}

    const tagsArray = Array.isArray(formData.eventTags)
      ? formData.eventTags
      : [];


    // Ensure image upload is completed before submitting the form
    if (!uploadedImage) {
      alert("Please upload an image before submitting.");
      return;
    }



// Clean ticket data
const cleanedTickets = formData.tickets.map(ticket => ({
  ...ticket,
  quantity: parseInt(ticket.quantity || 0, 10),
  ticketPrice: ticket.PriceType === "Free" ? 0 : parseInt(ticket.ticketPrice || 0, 10),
}));

cleanedTickets.forEach(t => {
  if (typeof t.quantity !== 'number' || isNaN(t.quantity)) {
    console.error('Invalid ticket quantity:', t);
  }
});
// Correct total quantity
const totalTicketQuantity = cleanedTickets.reduce(
  (total, ticket) => total + ticket.quantity,
  0
);



// Convert both values to integers
const maxAttendees = parseInt(formData.maximumAttendees, 10);

// Compare user-provided maximumAttendees vs total ticket quantity
if (maxAttendees !== totalTicketQuantity) {
  alert(`Maximum attendees (${maxAttendees}) must equal the total number of ticket quantities (${totalTicketQuantity}).`);
  return;
}


// Force-set in formData in case backend uses it
formData.maximumAttendees = totalTicketQuantity;

console.log("== FINAL VALUES ==");
console.log("maximumAttendees (type):", totalTicketQuantity, typeof totalTicketQuantity);
console.log("cleanedTickets:", cleanedTickets);
    const SubmitFormData = new FormData();
// Force-set in formData in case backend uses it

 
    SubmitFormData.append("eventImgURL", formData.eventImgURL || "");
    SubmitFormData.append("eventTitle", formData.eventTitle || "");
    SubmitFormData.append("instagram", formData.instagram || "");
    SubmitFormData.append("facebook", formData.facebook || "");
    SubmitFormData.append("startClock", formData.startClock || "");
    SubmitFormData.append("startTimezone", formData.startTimezone || "");
    SubmitFormData.append("endClock", formData.endClock || "");
    SubmitFormData.append("endTimezone", formData.endTimezone || "");



    // console.log("Raw eventTags value:", formData.eventTags, typeof formData.eventTags);




    if (Array.isArray(formData.eventTags)) {
      formData.eventTags.forEach(tag => {
        SubmitFormData.append("eventTags[]", tag);
      });
    }






    SubmitFormData.append("eventType", formData.eventType || "");
    SubmitFormData.append("eventCategory", formData.eventCategory || "");
    SubmitFormData.append("eventDesc", formData.eventDesc || "");
    // SubmitFormData.append("tickeType", formData.tickeType || "");
SubmitFormData.append("maximumAttendees", totalTicketQuantity.toString());

SubmitFormData.append("tickets", JSON.stringify(cleanedTickets));
    SubmitFormData.append("eventVenue", formData.eventVenue || "");
    // SubmitFormData.append("quantity", formData.quantity || "");
    SubmitFormData.append("url", formData.url || "");
    SubmitFormData.append("endTime", formData.endTime || "");
    SubmitFormData.append("startTime", formData.startTime || "");
    // SubmitFormData.append("ticketPrice", formData.ticketPrice || "");
   
    // ✅ Correctly format event dates as ISO strings
    if (formData.startDate) {
      SubmitFormData.append("eventStart", formData.startDate.toISOString());
    }
    if (formData.endDate) {
      SubmitFormData.append("eventEnd", formData.endDate.toISOString());
    }
    SubmitFormData.append("eventCountry", selectedCountry);
    SubmitFormData.append("eventState", selectedState);
    SubmitFormData.append("eventCity", selectedCity || "");

   


    for (let [key, value] of SubmitFormData.entries()) {
      console.log(`${key}: ${value}`);
    }
    // console.log("Submitting Data:", Object.fromEntries(SubmitFormData.entries())); // Debugging

    try {
      console.log("About to submit with userID:", userID);

      const response = await axios.post(
        `https://alphaeventappdevmode.onrender.com/api/createVnt/${userID}`,
        SubmitFormData,
        // {
        //   headers: { "Content-Type": "application/json" },
        // }
      );
      console.log("formData Response:", response);
      alert("Event created successfully!");LogIn


      //  CLEAR FORM 
      setFormData({
        eventTitle: "",
        eventDesc: "",
        eventTags: [],
        eventType: "",
        eventCategory: "",
        facebook: "",
        instagram: "",
        eventCountry: "",
        eventState: "",
        eventCity: "",
        eventVenue: "",
        maximumAttendees: "",
        startDate: null,
        endDate: null,
        eventImgURL: "",
        url: "",
        startTime: null,
        startClock: null,
        startTimezone: null,
        endTime: null,
        endClock: null,
        endTimezone: null,
     
        tickets: [{ ticketType: 'selectEventType', PriceType: '', ticketPrice: '', quantity: '' }]
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
        setUserID,
        eventTags,
        setEventTagsInput,


        handleSubmit
      }}
    >
      
      {children}
    </EventFormContext.Provider>
  );
};



export const useEventForm = () => useContext(EventFormContext);
