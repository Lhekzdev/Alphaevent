import { useState, useEffect, useRef } from "react";
import line from "/line.svg";
import { Link } from "react-router-dom";

const Herocontainer = () => {
  const [states, setStates] = useState([
    "Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue",
    "Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","Gombe",
    "Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos",
    "Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto",
    "Taraba","Yobe","Zamfara","FCT (Abuja)"
  ]);
  const [selectedState, setSelectedState] = useState("Select State");
  const [events, setEvents] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch states from backend if needed
  // Uncomment if you have an API endpoint
  /*
  useEffect(() => {
    fetch("/api/states")
      .then((res) => res.json())
      .then((data) => setStates(data))
      .catch((err) => console.error("Error fetching states:", err));
  }, []);
  */

  const searchEvents = () => {
    if (!selectedState) {
      alert("Please select a state!");
      return;
    }

    fetch(`/api/events?state=${selectedState}`)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error fetching events:", err));
  };

  return (
    <div className="px-5 md:px-[80px] pt-[30px] lg:pt-[60px] my-[60px]">
      <div
        loading="lazy"
        className="bg-cover bg-black opacity-[100%] bg-center h-screen rounded-[28px] w-full"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzyvwxh7n/image/upload/v1731364264/Hero_Section_ooujz0.png')",
        }}
      >
        <div className="flex flex-col text-[16px] gap-y-[71px] text-white items-center justify-center px-[10px] w-full py-[100px] lg:py-[184px]">
          
          {/* Hero Text */}
          <div className="font-Lato font-leading-[30px] max-w-[300px] md:max-w-[700px] lg:max-w-[858px] lg:h-[108px] text-[32px] md:text-[42px] lg:text-[52px] text-center md:leading-[54.08px] font-bold">
            <h1 className="hidden md:block font-Lato">
              Discover, Explore, and Enjoy Events Effortlessly!
            </h1>
            <h1 className="block md:hidden">
              Find, Explore, and Experience Events with a Single Click!
            </h1>
             
          </div>

          {/* Search / Location Dropdown */}
          <div className="md:flex text-center md:max-w-[500px] lg:max-w-[613px] text-[16px] h-auto md:h-[64px] mx-auto border-[2px] rounded-[10px] border-white px-[24px] flex-col md:flex-row items-center justify-center">
            
            {/* Location Dropdown */}
            <div className="relative w-full md:w-[223px]" ref={dropdownRef}>
              <button
                className="w-full flex items-center justify-between border-[#123499] text-white bg-transparent rounded-md p-3"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {/* Location Icon Left */}
                <img
                  src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1770910509/Icon_Pack_12_q9u0t2.png"
                  alt="location"
                  className="w-6 h-6"
                />

                {/* Selected State Center */}
                <span className="flex-1 text-center">{selectedState}</span>

                {/* Arrow Right */}
                <img
                  src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1770910991/icon_16_oykoyt.png"
                  alt="arrow"
                  className={`w-[11px] h-[7px] ml-2 transition-transform ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
                />
              </button>

              {/* Dropdown List */}
              {dropdownOpen && (
                <ul className="absolute z-10 mt-1 w-full max-h-60 overflow-auto bg-[#123499] border border-white rounded-md shadow-lg">
                  {states.map((state, index) => (
                    <li
                      key={index}
                      className="px-3 py-2 cursor-pointer hover:bg-white hover:text-black"
                      onClick={() => {
                        setSelectedState(state);
                        setDropdownOpen(false);
                      }}
                    >
                      {state}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Divider Line */}
            <div className="flex justify-center my-3 md:my-0">
              <img className="hidden md:flex" src={line} alt="line" />
            </div>

            {/* Search Button */}
            <div className="flex justify-center items-center w-full md:w-[254px]">
              <button
                className="flex items-center gap-4 text-white px-4 py-2 rounded-md"
                onClick={searchEvents}
              >
                <span>Search for an event</span>
                <img
                  src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1770910132/Search_2_xx41zt.png"
                  alt="search"
                  className="w-[35px] h-[35px] md:w-[40px] md:h-[40px]"
                />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Herocontainer;
