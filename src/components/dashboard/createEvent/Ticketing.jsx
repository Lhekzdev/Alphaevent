
import React, { useState, useRef } from "react";
import { useEventForm } from "../../context/context";
import { useNavigate } from "react-router-dom";
import TicketingForm from "./ticketing/ticketingForm";

const TicketConfiguration = () => {
  const navigate = useNavigate();

  // =========================
  // REFS
  // =========================

  const fileInputRef = useRef(null);
  const ticketTypes1Ref = useRef(null);
  const ticketTypes2Ref = useRef(null);

  // =========================
  // EVENT FORM CONTEXT
  // =========================

  const { formData, setFormData } = useEventForm();

  const tickets = formData.tickets || [];

  // =========================
  // REQUIRED FIELDS
  // =========================

  const requiredFields =
    formData.eventType === "online"
      ? [
          "eventType",
          "eventTitle",
          "startDate",
          "endDate",
          "url",
        ]
      : [
          "eventType",
          "eventTitle",
          "startDate",
          "endDate",
          "eventCountry",
          "eventState",
          "eventCity",
          "eventVenue",
        ];

  console.log("Required Fields:", requiredFields);

  // =========================
  // CHECK REQUIRED DATA
  // =========================

  const isDataComplete = requiredFields.every((field) => {
    const value = formData[field];

    console.log(`${field}: ${value}`);

    return (
      value !== null &&
      value !== undefined &&
      value.toString().trim() !== ""
    );
  });

  // =========================
  // HANDLE TICKET CHANGE
  // =========================

  const handleChange = (index, e) => {
    const { name, value } = e.target;

    const updatedTickets = [...(formData.tickets || [])];

    updatedTickets[index] = {
      ...updatedTickets[index],
      [name]: value,
    };

    setFormData((prev) => ({
      ...prev,
      tickets: updatedTickets,
    }));
  };

  // =========================
  // ADD TICKET
  // =========================

  const addTicket = () => {
    setFormData((prev) => ({
      ...prev,
      tickets: [
        ...(prev.tickets || []),
        {
          ticketType: "",
          PriceType: "",
          ticketPrice: "",
          quantity: "",
        },
      ],
    }));
  };

  // =========================
  // REMOVE TICKET
  // =========================

  const removeTicket = (index) => {
    if (formData.tickets.length > 1) {
      const updatedTickets = [...formData.tickets];

      updatedTickets.splice(index, 1);

      setFormData((prev) => ({
        ...prev,
        tickets: updatedTickets,
      }));
    } else {
      alert("At least one ticket must be present.");
    }
  };

  // =========================
  // SET PRICE TYPE
  // =========================

  const setSelected = (index, value) => {
    const updatedTickets = [...(formData.tickets || [])];

    updatedTickets[index] = {
      ...updatedTickets[index],
      PriceType: value,
    };

    setFormData((prev) => ({
      ...prev,
      tickets: updatedTickets,
    }));
  };

  // =========================
  // MESSAGE BOX STATES
  // =========================

  const [showMessageBox1, setShowMessageBox1] =
    useState(false);

  const [showMessageBox2, setShowMessageBox2] =
    useState(false);

  // =========================
  // CLEAR TICKET TYPE 1
  // =========================

  const clearTicketTypes1Inputs = () => {
    if (!ticketTypes1Ref.current) return;

    const inputs =
      ticketTypes1Ref.current.querySelectorAll("input");

    const select =
      ticketTypes1Ref.current.querySelector("select");

    inputs.forEach((input) => {
      input.value = "";
    });

    if (select) {
      select.value = "selectEventType";
    }
  };

  // =========================
  // CLEAR TICKET TYPE 2
  // =========================

  const clearTicketTypes2Inputs = () => {
    if (!ticketTypes2Ref.current) return;

    const inputs =
      ticketTypes2Ref.current.querySelectorAll("input");

    inputs.forEach((input) => {
      input.value = "";
    });
  };

  // =========================
  // ADD TICKET MESSAGE
  // =========================

  const handleAddTicketType = () => {
    setShowMessageBox1(true);

    setTimeout(() => {
      setShowMessageBox1(false);
    }, 3000);
  };

  // =========================
  // CREATE EVENT MESSAGE
  // =========================

  const handleCreateEvent = () => {
    setShowMessageBox2(true);

    setTimeout(() => {
      setShowMessageBox2(false);
    }, 3000);
  };

  // =========================
  // NUMBER HANDLER
  // =========================

  const [value, setValue] = useState(0);

  const increase = () => {
    setValue((prev) => prev + 1);
  };

  const decrease = () => {
    setValue((prev) => (prev > 0 ? prev - 1 : 0));
  };

  // =========================
  // RENDER
  // =========================

  return (
    <div
      className="
        w-full
        min-w-0
        overflow-x-hidden
        px-4
        sm:px-6
        md:px-8
        lg:px-10
        pb-8
      "
    >

      {/* =========================
          TICKET FORMS
      ========================== */}

      <div
        className="
          w-full
          max-w-[1032px]
          mx-auto
          min-w-0
          space-y-6
        "
      >
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className="
              w-full
              min-w-0
              overflow-hidden
            "
          >
            <TicketingForm
              ticket={ticket}
              index={index}
              handleChange={handleChange}
              setSelected={setSelected}
              removeTicket={removeTicket}
              selected={ticket.PriceType}
            />
          </div>
        ))}
      </div>

      {/* =========================
          BUTTON SECTION
      ========================== */}

      <div
        className="
          w-full
          max-w-[1032px]
          mx-auto
          mt-6
          flex
          flex-col
          sm:flex-row
          sm:justify-end
          items-stretch
          sm:items-center
          gap-3
          sm:gap-4
        "
      >

        {/* =========================
            ADD TICKET BUTTON
        ========================== */}

        <button
          type="button"
          onClick={addTicket}
          className="
            w-full
            sm:w-[147px]
            min-h-[48px]
            px-4
            bg-[#008000]
            text-white
            rounded-[8px]
            text-center
            font-medium
            transition-all
            duration-300
            hover:opacity-90
            hover:scale-[1.02]
            active:scale-[0.98]
            whitespace-nowrap
          "
        >
          + Add Ticket
        </button>

        {/* =========================
            PREVIEW BUTTON
        ========================== */}

        <button
          type="button"
          onClick={() => {
            navigate("/reviewEvent");
          }}
          className="
            w-full
            sm:w-[121px]
            min-h-[48px]
            px-4
            bg-[#3A7BD5]
            text-white
            text-center
            rounded-[8px]
            font-medium
            transition-all
            duration-300
            hover:opacity-90
            hover:scale-[1.02]
            active:scale-[0.98]
            whitespace-nowrap
          "
        >
          Preview
        </button>

      </div>
    </div>
  );
};

export default TicketConfiguration;
