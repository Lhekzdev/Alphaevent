import React from "react";
import { useNavigate } from "react-router-dom";
import { BsBoxArrowInLeft } from "react-icons/bs";

const MyTicket = () => {

  let redir = useNavigate();
  return (
    <section className="bgCard bg-gray-500 min-h-screen flex items-center justify-center px-4 sm:px-8">
      <div className="card bg-white p-5 sm:p-6 rounded-lg w-full max-w-md shadow-lg">
        
        {/* Back Arrow */}
        <button
          onClick={()=>{redir('/') }}
          className="text-2xl font-bold text-gray-700 hover:text-blue-600 transition mb-3"
          aria-label="Back to home"
        >
          <BsBoxArrowInLeft />
        </button>

        <p className="text-lg sm:text-xl font-semibold mb-2">
          Find Ticket
        </p>

        <p className="text-sm text-gray-600 mb-6">
          Enter your ticket ID or the email you used when purchasing your ticket
          to view or download it.
        </p>

        <fieldset className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Ticket ID or Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Find Ticket
          </button>
        </fieldset>

      </div>
    </section>
  );
};

export default MyTicket;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            