import React, { useState, useRef, useEffect } from "react";
import cloudIcon from "../../../assets/cloudIcon.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import questionmark from "../../../assets/questionmark.svg";
import { useEventForm } from "../../context/context";

const Details = ({ onNext, setActiveTab }) => {
  const handleProceed = () => {
    setActiveTab("ticketConfiguration");
  };

  const {
    formData,
    setFormData,
    selectedCountry,
    setSelectedCountry,
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
    imagePreview,
    setImagePreview,
    uploadedImage,
    setUploadedImage,
  } = useEventForm();

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef(null);

  // =========================
  // DATE HANDLERS
  // =========================

  const handleStartDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      startDate: date,
    }));
  };

  const handleEndDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      endDate: date,
    }));
  };

  // =========================
  // FETCH COUNTRIES
  // =========================

  useEffect(() => {
    fetch("https://alphaeventappdevmode.onrender.com/countries")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }

        return response.json();
      })
      .then((data) => {
        console.log("Fetched countries data:", data);
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  // =========================
  // HANDLE INPUT CHANGES
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // =========================
  // EVENT TAGS
  // =========================

  const handleEventTagChange = (e) => {
    const raw = e.target.value;

    const parsed = raw
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    setFormData((prev) => ({
      ...prev,
      eventTagsRaw: raw,
      eventTags: parsed,
    }));
  };

  // =========================
  // COUNTRY
  // =========================

  const handleCountryChange = (e) => {
    const countryId = e.target.value;

    const countryName =
      e.target.options[e.target.selectedIndex].text;

    setSelectedCountry(countryId);

    setSelectedState("");
    setSelectedCity("");

    setFormData((prevData) => ({
      ...prevData,
      eventCountry: countryName,
      eventState: "",
      eventCity: "",
    }));

    setStates([]);
    setCities([]);

    fetch(
      `https://alphaeventappdevmode.onrender.com/states/${countryId}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch states");
        }

        return response.json();
      })
      .then((data) => {
        console.log("Fetched States:", data);
        setStates(data);
      })
      .catch((error) => {
        console.error("Error fetching states:", error);
      });
  };

  // =========================
  // STATE
  // =========================

  const handleStateChange = (e) => {
    const stateId = e.target.value;

    const stateName =
      e.target.options[e.target.selectedIndex].text;

    setSelectedState(stateId);
    setSelectedCity("");

    setFormData((prevData) => ({
      ...prevData,
      eventState: stateName,
      eventCity: "",
    }));

    setCities([]);

    fetch(
      `https://alphaeventappdevmode.onrender.com/cities/${stateId}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch cities");
        }

        return response.json();
      })
      .then((data) => {
        console.log("Fetched Cities:", data);
        setCities(data);
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
      });
  };

  // =========================
  // CITY
  // =========================

  const handleCityChange = (e) => {
    const cityId = e.target.value;

    const cityName =
      e.target.options[e.target.selectedIndex].text;

    setSelectedCity(cityId);

    setFormData((prevData) => ({
      ...prevData,
      eventCity: cityName,
    }));
  };

  // =========================
  // FILE UPLOAD
  // =========================

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) return;

    const validTypes = [
      "image/png",
      "image/jpeg",
      "image/gif",
    ];

    if (!validTypes.includes(selectedFile.type)) {
      alert(
        "Please upload a valid image file (PNG, JPG or GIF)."
      );
      return;
    }

    const maxSize = 2 * 1024 * 1024;

    if (selectedFile.size > maxSize) {
      alert("File size exceeds the 2MB limit.");
      return;
    }

    const previewURL =
      URL.createObjectURL(selectedFile);

    setImagePreview(previewURL);
    setIsLoading(true);

    try {
      const uploadFormData = new FormData();

      uploadFormData.append(
        "file",
        selectedFile
      );

      uploadFormData.append(
        "upload_preset",
        "ALVENT_PRESET"
      );

      uploadFormData.append(
        "cloud_name",
        "dgeedhozf"
      );

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dgeedhozf/image/upload",
        {
          method: "POST",
          body: uploadFormData,
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to upload image. Please try again."
        );
      }

      const data = await response.json();

      console.log(
        "Uploaded Image URL:",
        data.secure_url
      );

      setUploadedImage(data.secure_url);

      setFormData((prevFormData) => ({
        ...prevFormData,
        eventImgURL: data.secure_url,
      }));

      setIsLoading(false);
    } catch (error) {
      console.error(
        "Image upload failed:",
        error.message
      );

      alert(
        "Image upload failed. Please try again."
      );

      setIsLoading(false);
    }
  };

  // =========================
  // DRAG & DROP
  // =========================

  const handleDrop = (event) => {
    event.preventDefault();

    const selectedFile =
      event.dataTransfer.files[0];

    if (selectedFile) {
      handleFileChange({
        target: {
          files: [selectedFile],
        },
      });
    }
  };

  return (
    <div className="w-full min-w-0 overflow-x-hidden">

      {/* =========================
          BANNER SECTION
      ========================== */}

      <div
        className="
          w-full
          max-w-[1032px]
          mt-6
          sm:mt-8
          rounded-[12px]
          border
          border-customLighterGray
          pt-6
          sm:pt-[52px]
          pb-6
          sm:pb-[40px]
          px-4
          sm:px-6
          md:px-[40px]
          min-h-[335px]
          h-auto
        "
      >
        <h4 className="font-bold text-[18px] mb-4">
          Banner{" "}
          <span className="text-customRed">
            *
          </span>
        </h4>

        <div
          className="
            w-full
            max-w-[952px]
            h-[200px]
            rounded-[12px]
            border-[0.8px]
            mx-auto
            flex
            items-center
            justify-center
            px-3
            overflow-hidden
          "
          onDragOver={(event) =>
            event.preventDefault()
          }
          onDrop={handleDrop}
        >
          <div
            className="
              w-full
              max-w-[284px]
              h-[107px]
              relative
              flex
              items-center
              justify-center
              cursor-pointer
            "
            onClick={() =>
              fileInputRef.current?.click()
            }
          >
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="
                  w-full
                  h-full
                  object-cover
                  rounded-[12px]
                "
              />
            ) : (
              <div className="flex flex-col items-center text-center gap-y-1">
                <img
                  className="mx-auto max-h-[40px]"
                  src={cloudIcon}
                  alt="cloudIcon"
                />

                <p className="text-xs leading-tight break-words">
                  Click to upload or drag and drop
                </p>

                <p className="text-xs leading-tight break-words">
                  PNG, JPG or GIF (MAX. 800x400px)
                </p>
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

        {isLoading && (
          <p className="text-sm text-center mt-3 text-gray-500">
            Uploading image...
          </p>
        )}
      </div>


      {/* =========================
          BASIC INFORMATION
      ========================== */}

      <div
        className="
          w-full
          max-w-[1032px]
          mt-6
          min-h-[750px]
          h-auto
          border-[0.8px]
          rounded-[12px]
          px-4
          sm:px-6
          md:px-[40px]
          py-6
          sm:py-8
          md:py-[40px]
        "
      >

        <h2 className="font-semibold text-lg mb-4">
          Basic Information
          <span className="text-customRed">
            *
          </span>
        </h2>


        {/* =========================
            EVENT NAME
        ========================== */}

        <div>
          <label
            htmlFor="eventTitle"
            className="block font-medium mb-2"
          >
            Event Name
          </label>

          <input
            name="eventTitle"
            type="text"
            id="eventTitle"
            placeholder="Enter event title"
            className="
              w-full
              border
              h-[52px]
              border-customLighterGray
              rounded-[12px]
              px-5
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
            onChange={handleChange}
            value={formData.eventTitle || ""}
          />
        </div>


        {/* =========================
            DESCRIPTION
        ========================== */}

        <div className="mt-4">
          <label
            htmlFor="eventDesc"
            className="block font-medium mb-2"
          >
            Description
          </label>

          <textarea
            id="eventDesc"
            name="eventDesc"
            placeholder="Enter event description"
            className="
              w-full
              border
              border-customLighterGray
              rounded-[12px]
              px-5
              py-3
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
            rows="3"
            value={formData.eventDesc || ""}
            onChange={handleChange}
          />
        </div>


        {/* =========================
            EVENT CAPACITY
        ========================== */}

        <div className="mt-4">
          <label
            htmlFor="maximumAttendees"
            className="block font-medium mb-2"
          >
            Event capacity
          </label>

          <input
            type="number"
            id="maximumAttendees"
            name="maximumAttendees"
            placeholder="e.g, 2000"
            className="
              w-full
              border
              border-customLighterGray
              h-[52px]
              rounded-[12px]
              px-5
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
            value={formData.maximumAttendees || ""}
            onChange={handleChange}
          />
        </div>


        {/* =========================
            EVENT TAGS
        ========================== */}

        <div className="mt-4">
          <label
            htmlFor="eventTags"
            className="block font-medium mb-2"
          >
            Event Tags
          </label>

          <input
            type="text"
            name="eventTags"
            id="eventTags"
            placeholder="e.g., Innovative, growth"
            className="
              w-full
              border
              border-customLighterGray
              h-[52px]
              rounded-[12px]
              px-5
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
            value={formData.eventTagsRaw || ""}
            onChange={handleEventTagChange}
          />
        </div>


        {/* =========================
            EVENT TYPE + CATEGORY
        ========================== */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            md:gap-x-4
            mt-4
            w-full
          "
        >

          {/* EVENT TYPE */}

          <div className="w-full">

            <label
              htmlFor="eventType"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Event Type
            </label>

            <select
              id="eventType"
              name="eventType"
              className="
                w-full
                border
                h-[52px]
                border-gray-300
                rounded-md
                shadow-sm
                focus:ring-blue-500
                focus:border-blue-500
              "
              value={formData.eventType || ""}
              onChange={handleChange}
            >
              <option disabled value="">
                Select Event Type
              </option>

              <option value="Virtual">
                Virtual
              </option>

              <option value="Physical">
                Physical
              </option>
            </select>


            {/* VIRTUAL URL */}

            {formData.eventType === "Virtual" && (
              <div className="mt-4">

                <label
                  htmlFor="url"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  URL
                </label>

                <input
                  type="url"
                  id="url"
                  name="url"
                  value={formData.url || ""}
                  onChange={handleChange}
                  placeholder="eg. https://meet.google.com/xyz"
                  className="
                    w-full
                    border
                    border-gray-300
                    h-[52px]
                    px-2
                    rounded-md
                    shadow-sm
                    focus:ring-blue-500
                    focus:border-blue-500
                  "
                />
              </div>
            )}


            {/* PHYSICAL VENUE */}

            {formData.eventType === "Physical" && (
              <div
                className="
                  w-full
                  mt-6
                  rounded-[12px]
                  border-[0.8px]
                  p-4
                  sm:p-6
                  md:p-[40px]
                "
              >
                <h5 className="font-bold text-[18px]">
                  Venue Information
                </h5>

                <div
                  className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-4
                    mt-4
                  "
                >

                  {/* Country */}

                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Country
                    </label>

                    <select
                      id="country"
                      name="country"
                      className="
                        w-full
                        border
                        h-[52px]
                        border-gray-300
                        rounded-md
                        shadow-sm
                        focus:ring-blue-500
                        focus:border-blue-500
                      "
                      value={selectedCountry}
                      onChange={handleCountryChange}
                    >
                      <option value="">
                        Select Country
                      </option>

                      {countries.map((country) => (
                        <option
                          key={country.geonameId}
                          value={country.geonameId}
                        >
                          {country.countryName}
                        </option>
                      ))}
                    </select>
                  </div>


                  {/* State */}

                  <div>
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      State
                    </label>

                    <select
                      id="state"
                      name="state"
                      className="
                        w-full
                        border
                        h-[52px]
                        border-gray-300
                        rounded-md
                        shadow-sm
                        focus:ring-blue-500
                        focus:border-blue-500
                      "
                      value={selectedState}
                      onChange={handleStateChange}
                      disabled={states.length === 0}
                    >
                      <option value="">
                        Select State
                      </option>

                      {states.map((state) => (
                        <option
                          key={state.geonameId}
                          value={state.geonameId}
                        >
                          {state.stateName}
                        </option>
                      ))}
                    </select>
                  </div>


                  {/* City */}

                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      City
                    </label>

                    <select
                      id="city"
                      name="city"
                      className="
                        w-full
                        border
                        h-[52px]
                        border-gray-300
                        rounded-md
                        shadow-sm
                        focus:ring-blue-500
                        focus:border-blue-500
                      "
                      disabled={cities.length === 0}
                      value={selectedCity}
                      onChange={handleCityChange}
                    >
                      <option value="">
                        Select City
                      </option>

                      {cities.map((city) => (
                        <option
                          key={city.geonameId}
                          value={city.geonameId}
                        >
                          {city.cityName}
                        </option>
                      ))}
                    </select>
                  </div>

                </div>


                {/* ADDRESS */}

                <div className="mt-4">
                  <label
                    htmlFor="eventVenue"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Address
                  </label>

                  <input
                    type="text"
                    id="eventVenue"
                    name="eventVenue"
                    placeholder="Address"
                    className="
                      w-full
                      border
                      h-[52px]
                      px-2
                      border-gray-300
                      rounded-md
                      shadow-sm
                      focus:ring-blue-500
                      focus:border-blue-500
                    "
                    value={formData.eventVenue || ""}
                    onChange={handleChange}
                  />
                </div>

              </div>
            )}
          </div>


          {/* EVENT CATEGORY */}

          <div className="w-full mt-4 md:mt-0">

            <label
              htmlFor="eventCategory"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Event Category
            </label>

            <select
              id="eventCategory"
              name="eventCategory"
              className="
                w-full
                border
                h-[52px]
                border-gray-300
                rounded-md
                shadow-sm
                focus:ring-blue-500
                focus:border-blue-500
              "
              value={formData.eventCategory || ""}
              onChange={handleChange}
            >
              <option disabled value="">
                Select Category
              </option>

              <option value="Premium">
                Premium
              </option>

              <option value="Education">
                Education
              </option>

              <option value="Attractions">
                Attractions
              </option>

              <option value="Entertainment">
                Entertainment
              </option>

              <option value="Sports">
                Sports
              </option>
            </select>
          </div>

        </div>


        {/* =========================
            EVENT DATE
        ========================== */}

        <div className="mt-6 w-full">

          <h2 className="font-medium text-gray-800 text-[16px] mb-2">
            Event Date
          </h2>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-4
              sm:gap-6
              w-full
            "
          >

            {/* START DATE */}

            <div className="w-full">

              <h3 className="font-medium text-gray-800 text-sm mb-2">
                Starts
              </h3>

              <div
                className="
                  bg-gray-100
                  border
                  border-gray-300
                  rounded-md
                  p-4
                  w-full
                "
              >
                <label
                  htmlFor="startDate"
                  className="block text-gray-500 text-sm mb-1"
                >
                  Date (mm/dd/yyyy)
                </label>

                <DatePicker
                  selected={formData.startDate}
                  onChange={handleStartDateChange}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="mm/dd/yyyy"
                  className="
                    w-full
                    bg-gray-100
                    text-gray-700
                    text-sm
                    border-none
                    focus:outline-none
                  "
                />
              </div>
            </div>


            {/* END DATE */}

            <div className="w-full">

              <h3 className="font-medium text-gray-800 text-sm mb-2">
                Ends
              </h3>

              <div
                className="
                  bg-gray-100
                  border
                  border-gray-300
                  rounded-md
                  p-4
                  w-full
                "
              >
                <label
                  htmlFor="endDate"
                  className="block text-gray-500 text-sm mb-1"
                >
                  Date (mm/dd/yyyy)
                </label>

                <DatePicker
                  selected={formData.endDate}
                  onChange={handleEndDateChange}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="mm/dd/yyyy"
                  className="
                    w-full
                    bg-gray-100
                    text-gray-700
                    text-sm
                    border-none
                    focus:outline-none
                  "
                />
              </div>
            </div>

          </div>
        </div>



{/* =========================
    EVENT TIME
========================== */}

<div className="mt-6 w-full">

  <h2 className="text-lg font-semibold mb-4">
    Event Time
  </h2>

  {/* START / END TIME SECTIONS */}
  <div
    className="
      grid
      grid-cols-1
      lg:grid-cols-2
      gap-6
      w-full
    "
  >

    {/* =========================
        START TIME
    ========================== */}

    <div className="w-full min-w-0">

      {/* Starts Label */}
      <h3 className="text-sm font-medium text-gray-700 mb-2">
        Starts
      </h3>

      {/* Start Time Box */}
      <div
        className="
          w-full
          min-w-0
          border
          rounded-md
          shadow-sm
          px-2
          sm:px-3
          bg-[#F4F4F4]
          flex
          flex-col
          sm:flex-row
          sm:items-center
          gap-3
          py-3
          sm:py-2
          min-h-[64px]
        "
      >

        {/* TIME */}

        <div className="flex flex-col w-full sm:w-[90px] shrink-0">

          <label
            className="text-xs font-medium text-gray-600 mb-1"
            htmlFor="startTime"
          >
            Time
          </label>

          <input
            name="startTime"
            id="startTime"
            type="time"
            value={formData.startTime || ""}
            onChange={handleChange}
            className="
              border
              rounded-md
              px-2
              py-1
              text-sm
              text-gray-800
              w-full
              h-[32px]
              focus:outline-none
              focus:ring
              focus:ring-indigo-200
            "
          />

        </div>


        {/* CLOCK */}

        <div className="flex flex-col w-full sm:w-[90px] shrink-0">

          <div className="flex items-center gap-1 mb-1">

            <label
              className="text-xs font-medium text-gray-600"
              htmlFor="startClock"
            >
              Clock
            </label>

            <img
              src={questionmark}
              alt="Clock information"
              className="w-3 h-3"
            />

          </div>

          <select
            name="startClock"
            id="startClock"
            value={formData.startClock || "AM"}
            onChange={handleChange}
            className="
              border
              rounded-md
              px-2
              py-1
              text-sm
              text-gray-800
              w-full
              h-[32px]
              focus:outline-none
              focus:ring
              focus:ring-indigo-200
            "
          >
            <option value="AM">
              AM
            </option>

            <option value="PM">
              PM
            </option>
          </select>

        </div>


        {/* TIMEZONE */}

        <div className="flex flex-col flex-1 min-w-0 w-full">

          <label
            className="text-xs font-medium text-gray-600 mb-1"
            htmlFor="startTimezone"
          >
            Timezone
          </label>

          <select
            name="startTimezone"
            id="startTimezone"
            value={
              formData.startTimezone ||
              "West African time (WAT)"
            }
            onChange={handleChange}
            className="
              border
              rounded-md
              px-2
              py-1
              text-sm
              text-gray-800
              w-full
              h-[32px]
              focus:outline-none
              focus:ring
              focus:ring-indigo-200
            "
          >
            <option>
              Eastern time (ET)
            </option>

            <option>
              Central time (CT)
            </option>

            <option>
              Pacific time (PT)
            </option>

            <option>
              West African time (WAT)
            </option>
          </select>

        </div>

      </div>
    </div>


    {/* =========================
        END TIME
    ========================== */}

    <div className="w-full min-w-0">

      {/* Ends Label */}
      <h3 className="text-sm font-medium text-gray-700 mb-2">
        Ends
      </h3>

      {/* End Time Box */}
      <div
        className="
          w-full
          min-w-0
          border
          rounded-md
          shadow-sm
          px-2
          sm:px-3
          bg-[#F4F4F4]
          flex
          flex-col
          sm:flex-row
          sm:items-center
          gap-3
          py-3
          sm:py-2
          min-h-[64px]
        "
      >

        {/* TIME */}

        <div className="flex flex-col w-full sm:w-[90px] shrink-0">

          <label
            className="text-xs font-medium text-gray-600 mb-1"
            htmlFor="endTime"
          >
            Time
          </label>

          <input
            name="endTime"
            id="endTime"
            type="time"
            value={formData.endTime || ""}
            onChange={handleChange}
            className="
              border
              rounded-md
              px-2
              py-1
              text-sm
              text-gray-800
              w-full
              h-[32px]
              focus:outline-none
              focus:ring
              focus:ring-indigo-200
            "
          />

        </div>


        {/* CLOCK */}

        <div
          className="
            flex
            flex-col
            w-full
            sm:w-[90px]
            shrink-0
          "
        >

          <div className="flex items-center gap-1 mb-1">

            <label
              className="text-xs font-medium text-gray-600"
              htmlFor="endClock"
            >
              Clock
            </label>

            <img
              src={questionmark}
              alt="Clock information"
              className="w-3 h-3"
            />

          </div>

          <select
            id="endClock"
            name="endClock"
            value={formData.endClock || "AM"}
            onChange={handleChange}
            className="
              border
              rounded-md
              px-2
              py-1
              text-sm
              text-gray-800
              w-full
              h-[32px]
              focus:outline-none
              focus:ring
              focus:ring-indigo-200
            "
          >
            <option value="AM">
              AM
            </option>

            <option value="PM">
              PM
            </option>
          </select>

        </div>


        {/* TIMEZONE */}

        <div className="flex flex-col flex-1 min-w-0 w-full">

          <label
            className="text-xs font-medium text-gray-600 mb-1"
            htmlFor="endTimezone"
          >
            Timezone
          </label>

          <select
            name="endTimezone"
            id="endTimezone"
            value={
              formData.endTimezone ||
              "West African time (WAT)"
            }
            onChange={handleChange}
            className="
              border
              rounded-md
              px-2
              py-1
              text-sm
              text-gray-800
              w-full
              h-[32px]
              focus:outline-none
              focus:ring
              focus:ring-indigo-200
            "
          >
            <option>
              Eastern time (ET)
            </option>

            <option>
              Central time (CT)
            </option>

            <option>
              Pacific time (PT)
            </option>

            <option>
              West African time (WAT)
            </option>
          </select>

        </div>

      </div>
    </div>

  </div>

</div>



        {/* =========================
            SOCIAL DETAILS
        ========================== */}

        <div
          className="
            w-full
            min-h-[197px]
            h-auto
            rounded-[12px]
            mt-6
            border
            border-[#75757580]
            py-6
            sm:py-9
            px-4
            sm:px-6
            md:px-10
            font-Lato
            leading-[150%]
          "
        >

          <div className="flex flex-col gap-6">

            <h5 className="w-full font-bold text-[18px]">
              Social Details
            </h5>

            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-3
              "
            >

              {/* FACEBOOK */}

              <div className="w-full">

                <label
                  htmlFor="facebook"
                  className="block w-full px-2 mb-1"
                >
                  Facebook
                </label>

                <input
                  type="text"
                  id="facebook"
                  name="facebook"
                  placeholder="Facebook"
                  className="
                    w-full
                    border
                    h-[52px]
                    pl-2
                    border-[#BEBEBE]
                    rounded-md
                    shadow-sm
                    focus:ring-blue-500
                    focus:border-blue-500
                  "
                  value={formData.facebook || ""}
                  onChange={handleChange}
                />

              </div>


              {/* INSTAGRAM */}

              <div className="w-full">

                <label
                  htmlFor="instagram"
                  className="block w-full px-2 mb-1"
                >
                  Instagram
                </label>

                <input
                  type="text"
                  id="instagram"
                  name="instagram"
                  placeholder="Instagram"
                  className="
                    w-full
                    border
                    h-[52px]
                    pl-2
                    border-[#BEBEBE]
                    rounded-md
                    shadow-sm
                    focus:ring-blue-500
                    focus:border-blue-500
                  "
                  value={formData.instagram || ""}
                  onChange={handleChange}
                />

              </div>

            </div>

          </div>

        </div>


        {/* =========================
            NEXT BUTTON
        ========================== */}

        <div
          className="
            flex
            justify-end
            w-full
            mt-4
          "
        >
          <button
            type="button"
            className="
              shrink-0
              transition-all
              ease-out
              duration-300
              hover:scale-105
              w-[92px]
              h-[48px]
              bg-customSkyblue
              text-white
              font-semibold
              rounded-[8px]
            "
            onClick={handleProceed}
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
};

export default Details;
