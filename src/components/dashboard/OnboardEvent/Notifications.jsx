import React, { useRef, useEffect, useState } from "react";
import readicon from "../../../assets/readicon.svg";
import notificationCal from "../../../assets/notificationCal.svg";
import good from "../../../assets/good.svg";
import eventApproved from "../../../assets/eventApproved.svg";
import reminder from "../../../assets/reminder.svg";
import { motion } from "framer-motion";

// ✅ new calendar import
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Notifications = ({ onClose, redir }) => {
  const panelRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  // ✅ replace startDate with value
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState(""); // ✅ this line is required


  const toggleCalendar = () => {
    setCalendarOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        onClose();
        setDropdownOpen(false);
        setCalendarOpen(false); // close calendar if open
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleFilterSelect = (option) => {
    setFilter(option);
    setDropdownOpen(false);
    redir("/Landing");
  };
  return (
    <motion.section
    className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-30 flex justify-end items-start"
    initial={{ y: -150, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      type: "spring",
      stiffness: 120,
      damping: 12
    }}
  >
      <div
        ref={panelRef}
        className="bg-white w-[600px] h-[500px] mr-[200px] mt-[85px] rounded-[12px] shadow-lg  pr-[20px]"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
        
      >
        {/* Level One */}

        <div className="flex items-center mt-[24px] mr-[24px] ml-[24px] gap-[150px]">
          <p className="text-[20px] text-[#2D6CCF] font-bold">Notifications</p>
          <div className="flex items-center  gap-[20px]">
            {/* Dropdown Button */}
      <div className="relative ml-4 w-full">
        <button
          className="flex px-[13px] py-[13px] items-center border border-[#ABABAB] rounded-[8px] w-[100px] h-[40px] gap-[8px] bg-white"
          onClick={() => setDropdownOpen((prev) => !prev)}
        >
          <img src={readicon} alt="filter icon" className="w-[18px]" />
          <p className="text-[12px] font-semibold text-[#333333]">{filter}</p>
        </button>

        {dropdownOpen && (
          <div className="absolute top-[45px] left-0 w-[100px] bg-white border border-[#ABABAB] rounded-md shadow-md z-50">
            <ul className="text-[12px] font-semibold text-[#333333]">
              {["All", "Unread", "Activity", "System", "Reminder"].map((option) => (
                <li
                  key={option}
                  onClick={() => handleFilterSelect(option)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
            <div>
              <p className="text-[12px]  font-semibold text-[#333333]">
                {" "}
                Mark all as read
              </p>
            </div>
          </div>
        </div>

        {/* Level One ends here */}

        {/* Level Two */}
        <div className="mt-[20px] ml-[24px] flex  gap-[20px]">
          <div className="firstBox">
            <input
              type="text"
              placeholder="Search notifications..."
              className="w-[255px] h-[40px] p-[10px] border border-1 border-[#ABABAB] rounded-[8px] mb-4"
            />
          </div>

          <div className="secondBox flex" ref={panelRef}>
          <div className="relative w-[255px] h-[40px] flex items-center border border-[#ABABAB] rounded-[8px]">
  <input
    type="text"
    placeholder="mm/dd/yyyy"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    onClick={toggleCalendar}
    className="w-full h-[40px] pl-[10px] pr-[40px] bg-transparent text-black cursor-pointer"
  />
  <img
    src={notificationCal}
    onClick={toggleCalendar}
    alt="calendar icon"
    className="absolute right-3 w-[18px] cursor-pointer"
  />

  {calendarOpen && (
    <div className="absolute top-[45px] z-50 bg-white rounded-lg shadow-lg">
      <Calendar
        onChange={(date) => {
          setValue(date);
          setInputValue(date.toLocaleDateString("en-US"));
          setCalendarOpen(false);
        }}
        value={value}
      />
    </div>
  )}
</div>

    </div>
        </div>

        {/* Level Two ends Here */}
        {/* SCROLLABLE CONTAINER — wrap all inside this */}
        <div className="mainContainer max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
          {/* Notification 1 */}
          <div className="flex gap-[30px] ml-[24px] bg-[#d5d4d4] w-[530px] min-w-0 h-[94px] border border-[#ABABAB] rounded-[8px] py-[16px] px-[24px] mb-[25px]">
            {/* firstImage */}
            <div className="firstImage">
              <img
                src={good}
                onClick={() => redir("/Landing")}
                alt="calendar icon"
                className="w-[20px] cursor-pointer mt-[5px]"
              />
            </div>

            {/* newsLetter */}
            <div className="newsLetter flex justify-between items-start w-full">
              <div className="pr-4 w-[375px]">
                <p className="text-[16px] font-bold text-[#333333]">
                  New Ticket Sold
                </p>
                <p className="text-[14px] text-[#9e9e9e]">
                  John Doe bought two tickets for{" "}
                  <span className="text-[14px] text-[#9e9e9e]">Event Name</span>
                </p>
                <p className="text-[14px] text-[#6b6a6a] font-bold">
                  5 mins ago
                </p>
              </div>

              {/* status dot */}
              <div className="min-w-[10px] flex items-center">
                <div className="w-[10px] h-[10px] rounded-full border border-[#2D6CCF] bg-[#2D6CCF]"></div>
              </div>
            </div>
          </div>

          {/* Notification 2 */}
          <div className="flex gap-[30px] ml-[24px] w-[530px] min-w-0 h-[94px] border border-[#ABABAB] rounded-[8px] py-[16px] px-[24px] mb-[25px]">
            {/* firstImage */}
            <div className="firstImage">
              <img
                src={eventApproved}
                onClick={() => redir("/Landing")}
                alt="calendar icon"
                className="w-[20px] cursor-pointer mt-[5px]"
              />
            </div>

            {/* newsLetter */}
            <div className="newsLetter flex justify-between items-start w-full">
              <div className="pr-4 w-[375px]">
                <p className="text-[16px] font-bold text-[#333333]">
                  Event Approved
                </p>
                <p className="text-[14px] text-[#9e9e9e]">
                  Your event{" "}
                  <span className="text-[14px] text-[#9e9e9e]">
                    'Fashion Fest'
                  </span>
                  <span>is now live</span>
                </p>
                <p className="text-[14px] text-[#6b6a6a] font-bold">
                  Yesterday
                </p>
              </div>
            </div>
          </div>

          {/* Notification 3 */}
          <div className="flex gap-[30px] ml-[24px] bg-[#d5d4d4] w-[530px] min-w-0 h-[94px] border border-[#ABABAB] rounded-[8px] py-[16px] px-[24px] mb-[25px]">
            {/* firstImage */}
            <div className="firstImage">
              <img
                src={reminder}
                onClick={() => redir("/Landing")}
                alt="calendar icon"
                className="w-[20px] cursor-pointer mt-[5px]"
              />
            </div>

            {/* newsLetter */}
            <div className="newsLetter flex justify-between items-start w-full">
              <div className="pr-4 w-[375px]">
                <p className="text-[16px] font-bold text-[#333333]">Reminder</p>
                <p className="text-[14px] text-[#9e9e9e]">
                  'Gospel Fest' starts in{" "}
                  <span className="text-[14px] text-[#9e9e9e]">2 days</span>
                </p>
                <p className="text-[14px] text-[#6b6a6a] font-bold">
                  May 31, 2:00 PM
                </p>
              </div>

              {/* status dot */}
              <div className="min-w-[10px] flex items-center">
                <div className="w-[10px] h-[10px] rounded-full border border-[#2D6CCF] bg-[#2D6CCF]"></div>
              </div>
            </div>
          </div>

          {/* Notification 4 */}
          <div className="flex gap-[30px] ml-[24px] bg-[#d5d4d4] w-[530px] min-w-0 h-[94px] border border-[#ABABAB] rounded-[8px] py-[16px] px-[24px]">
            {/* firstImage */}
            <div className="firstImage">
              <img
                src={reminder}
                onClick={() => redir("/Landing")}
                alt="calendar icon"
                className="w-[20px] cursor-pointer mt-[5px]"
              />
            </div>

            {/* newsLetter */}
            <div className="newsLetter flex justify-between items-start w-full">
              <div className="pr-4 w-[375px]">
                <p className="text-[16px] font-bold text-[#333333]">Reminder</p>
                <p className="text-[14px] text-[#9e9e9e]">
                  'Gospel Fest' starts in{" "}
                  <span className="text-[14px] text-[#9e9e9e]">2 days</span>
                </p>
                <p className="text-[14px] text-[#6b6a6a] font-bold">
                  May 31, 2:00 PM
                </p>
              </div>

              {/* status dot */}
              <div className="min-w-[10px] flex items-center">
                <div className="w-[10px] h-[10px] rounded-full border border-[#2D6CCF] bg-[#2D6CCF]"></div>
              </div>
            </div>
          </div>
          {/* Notification 4 */}
          <div className="flex gap-[30px] ml-[24px] bg-[#d5d4d4] w-[530px] min-w-0 h-[94px] border border-[#ABABAB] rounded-[8px] py-[16px] px-[24px]">
            {/* firstImage */}
            <div className="firstImage">
              <img
                src={reminder}
                onClick={() => redir("/Landing")}
                alt="calendar icon"
                className="w-[20px] cursor-pointer mt-[5px]"
              />
            </div>

            {/* newsLetter */}
            <div className="newsLetter flex justify-between items-start w-full">
              <div className="pr-4 w-[375px]">
                <p className="text-[16px] font-bold text-[#333333]">Reminder</p>
                <p className="text-[14px] text-[#9e9e9e]">
                  'Gospel Fest' starts in{" "}
                  <span className="text-[14px] text-[#9e9e9e]">2 days</span>
                </p>
                <p className="text-[14px] text-[#6b6a6a] font-bold">
                  May 31, 2:00 PM
                </p>
              </div>

              {/* status dot */}
              <div className="min-w-[10px] flex items-center">
                <div className="w-[10px] h-[10px] rounded-full border border-[#2D6CCF] bg-[#2D6CCF]"></div>
              </div>
            </div>
          </div>
          {/* Notification 4 */}
          <div className="flex gap-[30px] ml-[24px] bg-[#d5d4d4] w-[530px] min-w-0 h-[94px] border border-[#ABABAB] rounded-[8px] py-[16px] px-[24px]">
            {/* firstImage */}
            <div className="firstImage">
              <img
                src={reminder}
                onClick={() => redir("/Landing")}
                alt="calendar icon"
                className="w-[20px] cursor-pointer mt-[5px]"
              />
            </div>

            {/* newsLetter */}
            <div className="newsLetter flex justify-between items-start w-full">
              <div className="pr-4 w-[375px]">
                <p className="text-[16px] font-bold text-[#333333]">Reminder</p>
                <p className="text-[14px] text-[#9e9e9e]">
                  'Gospel Fest' starts in{" "}
                  <span className="text-[14px] text-[#9e9e9e]">2 days</span>
                </p>
                <p className="text-[14px] text-[#6b6a6a] font-bold">
                  May 31, 2:00 PM
                </p>
              </div>

              {/* status dot */}
              <div className="min-w-[10px] flex items-center">
                <div className="w-[10px] h-[10px] rounded-full border border-[#2D6CCF] bg-[#2D6CCF]"></div>
              </div>
            </div>
          </div>
          {/* Notification 4 */}
          <div className="flex gap-[30px] ml-[24px] bg-[#d5d4d4] w-[530px] min-w-0 h-[94px] border border-[#ABABAB] rounded-[8px] py-[16px] px-[24px]">
            {/* firstImage */}
            <div className="firstImage">
              <img
                src={reminder}
                onClick={() => redir("/Landing")}
                alt="calendar icon"
                className="w-[20px] cursor-pointer mt-[5px]"
              />
            </div>

            {/* newsLetter */}
            <div className="newsLetter flex justify-between items-start w-full">
              <div className="pr-4 w-[375px]">
                <p className="text-[16px] font-bold text-[#333333]">Reminder</p>
                <p className="text-[14px] text-[#9e9e9e]">
                  'Gospel Fest' starts in{" "}
                  <span className="text-[14px] text-[#9e9e9e]">2 days</span>
                </p>
                <p className="text-[14px] text-[#6b6a6a] font-bold">
                  May 31, 2:00 PM
                </p>
              </div>

              {/* status dot */}
              <div className="min-w-[10px] flex items-center">
                <div className="w-[10px] h-[10px] rounded-full border border-[#2D6CCF] bg-[#2D6CCF]"></div>
              </div>
            </div>
          </div>
          {/* Notification 4 */}
          <div className="flex gap-[30px] ml-[24px] bg-[#d5d4d4] w-[530px] min-w-0 h-[94px] border border-[#ABABAB] rounded-[8px] py-[16px] px-[24px]">
            {/* firstImage */}
            <div className="firstImage">
              <img
                src={reminder}
                onClick={() => redir("/Landing")}
                alt="calendar icon"
                className="w-[20px] cursor-pointer mt-[5px]"
              />
            </div>

            {/* newsLetter */}
            <div className="newsLetter flex justify-between items-start w-full">
              <div className="pr-4 w-[375px]">
                <p className="text-[16px] font-bold text-[#333333]">Reminder</p>
                <p className="text-[14px] text-[#9e9e9e]">
                  'Gospel Fest' starts in{" "}
                  <span className="text-[14px] text-[#9e9e9e]">2 days</span>
                </p>
                <p className="text-[14px] text-[#6b6a6a] font-bold">
                  May 31, 2:00 PM
                </p>
              </div>

              {/* status dot */}
              <div className="min-w-[10px] flex items-center">
                <div className="w-[10px] h-[10px] rounded-full border border-[#2D6CCF] bg-[#2D6CCF]"></div>
              </div>
            </div>
          </div>
          {/* Notification 4 */}
          <div className="flex gap-[30px] ml-[24px] bg-[#d5d4d4] w-[530px] min-w-0 h-[94px] border border-[#ABABAB] rounded-[8px] py-[16px] px-[24px]">
            {/* firstImage */}
            <div className="firstImage">
              <img
                src={reminder}
                onClick={() => redir("/Landing")}
                alt="calendar icon"
                className="w-[20px] cursor-pointer mt-[5px]"
              />
            </div>

            {/* newsLetter */}
            <div className="newsLetter flex justify-between items-start w-full">
              <div className="pr-4 w-[375px]">
                <p className="text-[16px] font-bold text-[#333333]">Reminder</p>
                <p className="text-[14px] text-[#9e9e9e]">
                  'Gospel Fest' starts in{" "}
                  <span className="text-[14px] text-[#9e9e9e]">2 days</span>
                </p>
                <p className="text-[14px] text-[#6b6a6a] font-bold">
                  May 31, 2:00 PM
                </p>
              </div>

              {/* status dot */}
              <div className="min-w-[10px] flex items-center">
                <div className="w-[10px] h-[10px] rounded-full border border-[#2D6CCF] bg-[#2D6CCF]"></div>
              </div>
            </div>
          </div>
          {/* Notification 4 */}
          <div className="flex gap-[30px] ml-[24px] bg-[#d5d4d4] w-[530px] min-w-0 h-[94px] border border-[#ABABAB] rounded-[8px] py-[16px] px-[24px]">
            {/* firstImage */}
            <div className="firstImage">
              <img
                src={reminder}
                onClick={() => redir("/Landing")}
                alt="calendar icon"
                className="w-[20px] cursor-pointer mt-[5px]"
              />
            </div>

            {/* newsLetter */}
            <div className="newsLetter flex justify-between items-start w-full">
              <div className="pr-4 w-[375px]">
                <p className="text-[16px] font-bold text-[#333333]">Reminder</p>
                <p className="text-[14px] text-[#9e9e9e]">
                  'Gospel Fest' starts in{" "}
                  <span className="text-[14px] text-[#9e9e9e]">2 days</span>
                </p>
                <p className="text-[14px] text-[#6b6a6a] font-bold">
                  May 31, 2:00 PM
                </p>
              </div>

              {/* status dot */}
              <div className="min-w-[10px] flex items-center">
                <div className="w-[10px] h-[10px] rounded-full border border-[#2D6CCF] bg-[#2D6CCF]"></div>
              </div>
            </div>
          </div>
          {/* Notification 4 */}
          <div className="flex gap-[30px] ml-[24px] bg-[#d5d4d4] w-[530px] min-w-0 h-[94px] border border-[#ABABAB] rounded-[8px] py-[16px] px-[24px]">
            {/* firstImage */}
            <div className="firstImage">
              <img
                src={reminder}
                onClick={() => redir("/Landing")}
                alt="calendar icon"
                className="w-[20px] cursor-pointer mt-[5px]"
              />
            </div>

            {/* newsLetter */}
            <div className="newsLetter flex justify-between items-start w-full">
              <div className="pr-4 w-[375px]">
                <p className="text-[16px] font-bold text-[#333333]">Reminder</p>
                <p className="text-[14px] text-[#9e9e9e]">
                  'Gospel Fest' starts in{" "}
                  <span className="text-[14px] text-[#9e9e9e]">2 days</span>
                </p>
                <p className="text-[14px] text-[#6b6a6a] font-bold">
                  May 31, 2:00 PM
                </p>
              </div>

              {/* status dot */}
              <div className="min-w-[10px] flex items-center">
                <div className="w-[10px] h-[10px] rounded-full border border-[#2D6CCF] bg-[#2D6CCF]"></div>
              </div>
            </div>
          </div>
          {/* Notification 4 */}
          <div className="flex gap-[30px] ml-[24px] bg-[#d5d4d4] w-[530px] min-w-0 h-[94px] border border-[#ABABAB] rounded-[8px] py-[16px] px-[24px]">
            {/* firstImage */}
            <div className="firstImage">
              <img
                src={reminder}
                onClick={() => redir("/Landing")}
                alt="calendar icon"
                className="w-[20px] cursor-pointer mt-[5px]"
              />
            </div>

            {/* newsLetter */}
            <div className="newsLetter flex justify-between items-start w-full">
              <div className="pr-4 w-[375px]">
                <p className="text-[16px] font-bold text-[#333333]">Reminder</p>
                <p className="text-[14px] text-[#9e9e9e]">
                  'Gospel Fest' starts in{" "}
                  <span className="text-[14px] text-[#9e9e9e]">2 days</span>
                </p>
                <p className="text-[14px] text-[#6b6a6a] font-bold">
                  May 31, 2:00 PM
                </p>
              </div>

              {/* status dot */}
              <div className="min-w-[10px] flex items-center">
                <div className="w-[10px] h-[10px] rounded-full border border-[#2D6CCF] bg-[#2D6CCF]"></div>
              </div>
            </div>
          </div>
          {/* Notification 4 */}
          <div className="flex gap-[30px] ml-[24px] bg-[#d5d4d4] w-[530px] min-w-0 h-[94px] border border-[#ABABAB] rounded-[8px] py-[16px] px-[24px]">
            {/* firstImage */}
            <div className="firstImage">
              <img
                src={reminder}
                onClick={() => redir("/Landing")}
                alt="calendar icon"
                className="w-[20px] cursor-pointer mt-[5px]"
              />
            </div>

            {/* newsLetter */}
            <div className="newsLetter flex justify-between items-start w-full">
              <div className="pr-4 w-[375px]">
                <p className="text-[16px] font-bold text-[#333333]">Reminder</p>
                <p className="text-[14px] text-[#9e9e9e]">
                  'Gospel Fest' starts in{" "}
                  <span className="text-[14px] text-[#9e9e9e]">2 days</span>
                </p>
                <p className="text-[14px] text-[#6b6a6a] font-bold">
                  May 31, 2:00 PM
                </p>
              </div>

              {/* status dot */}
              <div className="min-w-[10px] flex items-center">
                <div className="w-[10px] h-[10px] rounded-full border border-[#2D6CCF] bg-[#2D6CCF]"></div>
              </div>
            </div>
          </div>
          {/* Notification 4 */}
          <div className="flex gap-[30px] ml-[24px] bg-[#d5d4d4] w-[530px] min-w-0 h-[94px] border border-[#ABABAB] rounded-[8px] py-[16px] px-[24px]">
            {/* firstImage */}
            <div className="firstImage">
              <img
                src={reminder}
                onClick={() => redir("/Landing")}
                alt="calendar icon"
                className="w-[20px] cursor-pointer mt-[5px]"
              />
            </div>

            {/* newsLetter */}
            <div className="newsLetter flex justify-between items-start w-full">
              <div className="pr-4 w-[375px]">
                <p className="text-[16px] font-bold text-[#333333]">Reminder</p>
                <p className="text-[14px] text-[#9e9e9e]">
                  'Gospel Fest' starts in{" "}
                  <span className="text-[14px] text-[#9e9e9e]">2 days</span>
                </p>
                <p className="text-[14px] text-[#6b6a6a] font-bold">
                  May 31, 2:00 PM
                </p>
              </div>

              {/* status dot */}
              <div className="min-w-[10px] flex items-center">
                <div className="w-[10px] h-[10px] rounded-full border border-[#2D6CCF] bg-[#2D6CCF]"></div>
              </div>
            </div>
          </div>
          {/* Notification 4 */}
          <div className="flex gap-[30px] ml-[24px] bg-[#d5d4d4] w-[530px] min-w-0 h-[94px] border border-[#ABABAB] rounded-[8px] py-[16px] px-[24px]">
            {/* firstImage */}
            <div className="firstImage">
              <img
                src={reminder}
                onClick={() => redir("/Landing")}
                alt="calendar icon"
                className="w-[20px] cursor-pointer mt-[5px]"
              />
            </div>

            {/* newsLetter */}
            <div className="newsLetter flex justify-between items-start w-full">
              <div className="pr-4 w-[375px]">
                <p className="text-[16px] font-bold text-[#333333]">Reminder</p>
                <p className="text-[14px] text-[#9e9e9e]">
                  'Gospel Fest' starts in{" "}
                  <span className="text-[14px] text-[#9e9e9e]">2 days</span>
                </p>
                <p className="text-[14px] text-[#6b6a6a] font-bold">
                  May 31, 2:00 PM
                </p>
              </div>

              {/* status dot */}
              <div className="min-w-[10px] flex items-center">
                <div className="w-[10px] h-[10px] rounded-full border border-[#2D6CCF] bg-[#2D6CCF]"></div>
              </div>
            </div>
          </div>
          {/* Notification 4 */}
          <div className="flex gap-[30px] ml-[24px] bg-[#d5d4d4] w-[530px] min-w-0 h-[94px] border border-[#ABABAB] rounded-[8px] py-[16px] px-[24px]">
            {/* firstImage */}
            <div className="firstImage">
              <img
                src={reminder}
                onClick={() => redir("/Landing")}
                alt="calendar icon"
                className="w-[20px] cursor-pointer mt-[5px]"
              />
            </div>

            {/* newsLetter */}
            <div className="newsLetter flex justify-between items-start w-full">
              <div className="pr-4 w-[375px]">
                <p className="text-[16px] font-bold text-[#333333]">Reminder</p>
                <p className="text-[14px] text-[#9e9e9e]">
                  'Gospel Fest' starts in{" "}
                  <span className="text-[14px] text-[#9e9e9e]">2 days</span>
                </p>
                <p className="text-[14px] text-[#6b6a6a] font-bold">
                  May 31, 2:00 PM
                </p>
              </div>

              {/* status dot */}
              <div className="min-w-[10px] flex items-center">
                <div className="w-[10px] h-[10px] rounded-full border border-[#2D6CCF] bg-[#2D6CCF]"></div>
              </div>
            </div>
          </div>
          {/* ends */}
        </div>
        {/* parent notification */}
      </div>
    </motion.section>
  );
};

export default Notifications;
