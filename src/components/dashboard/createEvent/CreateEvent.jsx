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
import Details from '../../../components/dashboard/createEvent/Details';
import Ticketing from '../../../components/dashboard/createEvent/Ticketing';

const CreateEvent = () => {
  const fileInputRef = useRef(null);

  const [uploadedImage, setUploadedImage] = useState(null);
  const [isToggled, setIsToggled] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeTab, setActiveTab] = useState("details"); // Track active tab

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setUploadedImage(previewURL);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
      alert("Form submitted successfully!");
    } catch (error) {
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <section className="flex w-[100%] overflow-hidden">
      <div className="max-w-[50%]">
        <Onboardingleft />
      </div>

      <div className="pl-8 pr-6 overflow-auto">
        <ProfileSearchBar />
        <div className="font-Lato pt-[10px] bg-white h-auto">
          <div className="pb-[8px] items-center justify-between flex h-[38px] max-w-[1032px]">
            <h2 className="font-bold text-[32px] leading-[38.4px]">Create an event</h2>
            <h2 className="font-light font-leading-[16px]">All changes saved</h2>
          </div>
          <div className="max-w-[1032px] h-[5px] rounded-[8px] border border-customLighterGray">
            <ol className="rounded-[8px] w-[285px] h-[5px] bg-black"></ol>
          </div>

          <div className="max-w-[1032px] flex h-[56px] mt-[8px] p-[8px] rounded-[12px] border-[1px] justify-between border-[#757575] text-black">
            <div
              id="details"
              onClick={() => setActiveTab("details")}
              className={`w-[508px] h-[40px] place-items-center rounded-[8px]  cursor-pointer ${
                activeTab === "details" ? "bg-customSkyblue text-white"  : ""
              }`}
            >
              <h6 className="pt-[4px] text-center font-bold w-[51px] h-[16px]">Details</h6>
            </div>
            <div
              id="ticketing"
              onClick={() => setActiveTab("ticketing")}
              className={`w-[508px] h-[40px] place-items-center rounded-[8px]  cursor-pointer ${
                activeTab === "ticketing" ? "bg-customSkyblue text-white" : ""
              }`}
            >
              <h6 className="pt-[4px] font-bold w-[51px] h-[16px]">Ticketing</h6>
            </div>
          </div>
        </div>

        {/* hover:bg-customSkyblue hover:text-white */}

        {/* Render the active tab's content */}
        {activeTab === "details" && <Details />}
        {activeTab === "ticketing" && <Ticketing />}
      </div>
    </section>
  );
};

export default CreateEvent;
