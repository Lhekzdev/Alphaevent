import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { useEventForm } from "../../context/context";


const Section2 = () => {
const { state } = useLocation();
  const { userID } = useEventForm();
  const [purchaseItems, setPurchaseItems] = useState([]);
  
  const userEmail = state?.email || "";
  const BASE_URL = "https://alphaeventappdevmode.onrender.com/api";
  useEffect(() => {
    const getPurchaseList = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/purchaseItems/${userID}`
        );

        setPurchaseItems(res.data.purchaseItems);
      } catch (error) {
        console.log(error);
      }
    };

    if (userID) {
      getPurchaseList();
    }
  }, [userID]);

  return (
    <section className="font-lato px-4 py-3">
      <div className="bg-white rounded-[12px] shadow-sm w-full max-w-full">
        <div className="flex gap-[740px] border-b-[1px] border-b-[#ABABAB] px-[32px] py-[18px]">
          <p className="text-[20px] text-[#000000]">
            Recent Registrations
          </p>

          <button>
            <img
              src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747835248/Menu_Vertical_k3jkky.png"
              className="w-[40px] h-[40px]"
              alt="Menu Icon"
            />
          </button>
        </div>

        <div className="overflow-x-auto px-[32px] py-[20px]">
          <table className="min-w-full text-left">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Event</th>
                <th className="py-2 px-4 border-b">Ticket Type</th>
                <th className="py-2 px-4 border-b">Purchase Date</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>

            <tbody>
              {purchaseItems.length > 0 ? (
                purchaseItems.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 text-[14px] text-[#ABABAB]"
                  >
                    <td className="py-2 px-4 border-b">
                      {item.user_Name}
                    </td>

                    <td className="py-2 px-4 border-b">
                      {item.eventName}
                    </td>

                    <td className="py-2 px-4 border-b">
                      {item.ticketType}
                    </td>

                    <td className="py-2 px-4 border-b">
                      {item.purchaseDate}
                    </td>

                    <td
                      className={`py-2 px-4 border-b font-bold ${item.paymentStatus.toLowerCase() === "completed"
                          ? "text-[#2A8212]"
                          : item.paymentStatus.toLowerCase() === "pending"
                            ? "text-[#FFB35C]"
                            : "text-[#ff3e3e]"
                        }`}
                    >
                      {item.paymentStatus.toLowerCase() === "completed"
                        ? "Successful"
                        : item.paymentStatus}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="py-6 text-center text-[#ABABAB]"
                  >
                    No recent registrations found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Section2;