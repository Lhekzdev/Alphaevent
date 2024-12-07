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

const Ticketing = () => {
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
   <>
    <section className="flex w-full overflow-hidden   mt-[28px]">
      

      {/* Ticket tpye container */}
           
           <div id="ticketType" className="ticketTypes w-full">
           <form action="">
           <div  className="ticketTypes border border-[#757575] rounded-[12px] w-full lg:w-[738px] px-[16px] py-[16px] mr-[45px]">
              {/* Ticket tpye container */}
              <div className="ticketType">
                <div>
                  <p className="text-[18px] font-bold">Ticket type</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-[10px] mt-[36px] w-full">
                <div className="inputOption flex border border-[#3A7BD5] px-[10px] rounded-tl-[8px] rounded-tr-[8px] w-full lg:w-[680px]">
  <select
    name="eventType"
    id="eventType"
    className="text-[12px] font-normal w-full lg:w-[680px] focus:outline-none"
  >
    <option value="selectEventType">Select Ticket Type</option>
    <option value="earlyBird">Early Bird</option>
    <option value="vip">VIP</option>
    <option value="others">Regular</option>
  </select>
  {/* <img src={arrowOption} alt="" /> */}
</div>

                  <div>
  <img src={delectIcon} alt="Delete Icon" className="" />
</div>

                </div>
              </div>
  
              <div className="flex flex-col lg:flex-row gap-[40px] mt-[120px]">
                 <fieldset>
                  <label htmlFor="price" className="px-[8px] text-[16px] font-bold text-[#525252]">Price</label><br />
                  <input type="text" placeholder="0" className="border  border-[#BEBEBE] rounded-[12px] w-full lg:w-[330px] h-[52px] px-[20px] py-[18px]" />
                 </fieldset>
                 <fieldset>
                  <label htmlFor="price" className="px-[8px] text-[16px] font-bold text-[#525252]">Quantity</label><br />
                  <input type="text" placeholder="0" className="border  border-[#BEBEBE] rounded-[12px] w-full lg:w-[330px] h-[52px] px-[20px] py-[18px]" />
                 </fieldset>
              </div>
  
              <div className="mt-[30px] text-[#2F3B4C] text-[18px] font-bold">
                <p>Sales period</p>
              </div>
  
  {/* checked */}
              {/* <div className="flex gap-[630px] items-center mt-[20px] text-[#2F3B4C] text-[16px] font-light">
              <div>  <p>Starts</p></div>
                <div><p>Ends</p></div>
              </div> */}
  
      {/* checked */}
      <div className="flex flex-col gap-[80px] lg:flex-row lg:gap-[160px]">
    <div>
    <div>  <p>Starts</p></div>
    <div className="border border-b-[#180b0b] w-full lg:w-[270px] px-[16px] py-[13px] bg-[#d6d6d6]">
                <div className="flex gap-[8px]">
                  <p className="text-[12px] font-light text-[#525252]">
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
              <div className="w-full lg:w-[270px] flex "><p className="">Ends</p></div>
              <div className="border border-b-[#8D8D8D] w-full lg:w-[270px] px-[16px] py-[13px] bg-[#d6d6d6]">
                <div className="flex gap-[8px]">
                  <p className="text-[12px] font-light text-[#525252]">
                  Label (mm/dd/yyyy)
                  </p>
                  <img src={questionIcon} alt="" />
                </div>
                <div>
                  <input type="text" placeholder="mm/dd/yyyy" className="bg-transparent"/>
                </div>
              </div>
              </div>
      </div>
      <div>
        <button className="bg-[#3A7BD5] text-[#FFFFFF] mt-[32px] w-full lg:w-[700px] px-[16px] py-[16px] text-center rounded-[8px]">
            Add ticket type
            </button>
      </div>
      </div>


  
             
       
           
{/* checked */}
          {/* next form */}
  
  <div className="ticketTypes border border-[#757575] rounded-[12px] w-full lg:w-[738px] px-[40px] py-[30px] mt-[28px]">
  
  
  <div className="flex flex-col lg:flex-row items-center gap-[70px] lg:gap-[300px] w-full lg:w-[940px]">
    <div className="w-full lg:w-[145px]">
      <p className="w-full lg:w-[140px]">Discount Codes</p>
    </div>
    <div className="bg-[#3A7BD5] w-full lg:w-[230px] flex justify-center items-center px-[20px] py-[10px] gap-[22px] rounded-[8px] text-white">
      <img src={discountIcon} alt="" />
      <p>Add Discount Code</p>
    </div>
  </div>



  {/* checked */}
  <div className="flex flex-col lg:flex-row justify-center gap-[10px] mt-[32px] ">
                 <fieldset>
                  <label htmlFor="price" className="px-[8px]">Discount code</label><br />
                  <input type="text" placeholder="DISCOUNTCODE" className="border  border-[#BEBEBE] text-[16px] rounded-[12px] w-full lg:w-[312px] h-[52px] px-[20px] py-[18px]" />
                 </fieldset>
                 <fieldset>
                  <label htmlFor="price" className="px-[8px]">Percentage</label><br />
                  <input type="text" placeholder="Discount Percentage" className="border  border-[#BEBEBE] text-[16px] rounded-[12px] w-full lg:w-[312px] h-[52px] px-[20px] py-[18px]" />
                 </fieldset>
                 <div className="flex items-center">
                <img src={delectIcon} alt="" className="mt-[25px]"/>
                </div>
              </div>
  
  {/* checked */}
  <div className="calenderContainer mt-[44px] flex flex-col lg:flex-row gap-[80px] lg:gap-[160px]">
  <div className="calender1">
    <p>Valid from</p>
    <div className="flex">
      <input
        type="text"
        placeholder="Date"
        className="w-[245px] border-none border-b-2 border-[#CAC4D0] shadow-[0_4px_4px_0_#CAC4D0] focus:shadow-[0_6px_6px_0_#CAC4D0] focus:border-b-[#928D9A] transition duration-300 outline-none"
      />
      <img src={pencilBlue} alt="" />
    </div>
  </div>

  <div className="calender2">
    <p>Valid until</p>
    <div className="flex">
      <input
        type="text"
        placeholder="Date"
        className="w-[245px] border-none border-b-2 border-[#CAC4D0] shadow-[0_4px_4px_0_#CAC4D0] focus:shadow-[0_6px_6px_0_#CAC4D0] focus:border-b-[#928D9A] transition duration-300 outline-none"
      />
      <img src={pencilBlue} alt="" />
    </div>
  </div> 
</div>

</div>

<div>
        <button className="bg-[#3A7BD5] text-[#FFFFFF] mt-[32px] w-full lg:w-[700px] px-[16px] py-[16px] text-center rounded-[8px]">
        Create event
            </button>
      </div>
  
    </form>
      </div>
      </section>
   
   </>
  );
};

export default Ticketing;
