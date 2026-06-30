import React, { useState, useEffect } from 'react'
import { useEventForm } from "../../context/context";
import axios from "axios";

const EventWeek = () => {


  const [eventData, setEventData] = useState(null);
const { userID, userEmail } = useEventForm();
  const token = localStorage.getItem("authToken");
  const BASE_URL = "https://alphaeventappdevmode.onrender.com/api"

  


  useEffect(() => {


  const fetchEvent = async () => {
    try {
      const token = localStorage.getItem("authToken");

      const { data } = await axios.get(
        `${BASE_URL}/dashboardTicketsoldView/${userID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // 👇 Add these logs here
      console.log("API Response:", data);
      console.log("Event Data:", data.data);
setEventData(data.data);
      // or setEventData(data.data) depending on the response

    } catch (err) {
      console.log(err);
    }
  };

  if (userID) {
    fetchEvent();
  }
}, [userID]);


const sold = eventData?.ticketsSold || 0;
const total = eventData?.ticketQtyCount || 1;

const percentage = Math.min((sold / total) * 100, 100);

  return (
    <>
      <section>
        <div>
          <div className="eventContainer flex gap-[150px]">
            <div className="events">

              {/* Scrollable wrapper wrapping all rows */}
              <div className="mainContainer max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">



                <div className="mainContainer flex gap-[16px] border-b-[1px]  border-b-[#ABABAB] mb-[20px] pb-[14px] pr-[18px]">
                  {/* col1 */}


                <div className="flex justify-between items-center border-b border-gray-300 pb-4">

  {/* Left */}
  <div className="flex gap-4">
    <img
      src={eventData?.eventImgURL}
      alt={eventData?.eventTitle}
      className="w-[60px] h-[60px] rounded-full object-cover"
    />

    <div>
      <h3 className="text-lg font-semibold">
        {eventData?.eventTitle}
      </h3>

      <div className="flex gap-5 mt-2">

        <div className="flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_date_ujatiw.svg"
            className="w-5 h-5"
            alt=""
          />
          <span className="text-gray-500">
            {eventData?.eventDate}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_time_rm5459.svg"
            className="w-5 h-5"
            alt=""
          />
          <span className="text-gray-500">
            {eventData?.eventTime}
          </span>
        </div>

      </div>
    </div>
  </div>

  {/* Right */}
  <div className="w-[180px]">

    <div className="text-right font-semibold mb-2">
      {sold}/{total}
    </div>

    <div className="w-full h-[8px] bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-700"
        style={{
          width: `${percentage}%`,
          background:
            "linear-gradient(90deg,#22c55e 0%,#84cc16 50%,#f59e0b 75%,#ef4444 100%)",
        }}
      />
    </div>

  </div>

</div>

                  {/* col2 */}

                </div>




              </div> {/* End of scrollable mainContainer */}

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EventWeek;
