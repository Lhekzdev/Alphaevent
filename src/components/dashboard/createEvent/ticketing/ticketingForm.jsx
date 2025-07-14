import React from "react"


const TicketingForm =({ ticket, index, handleChange, setSelected, removeTicket, selected })=>{

  return (
    <div id="tickeType" className="ticketTypes font-Lato h-auto rounded-[12px] border-[1.4px] border-red-600 px-[20px] py-[20px] w-full overflow-hidden mt-[28px]">

      <h4
        className="float-end text-[12px] cursor-pointer text-customRed"
        onClick={() => removeTicket(index)}
      >
        Remove
      </h4>

      <div className="ticketTypes1 text-[#ABABAB]  border flex flex-col mt-6 border-[#2b2929] gap-y-[20px] rounded-[12px] w-full lg:w-[738px] px-[16px] py-[16px] mr-[45px]">
       <div className="flex flex-col gap-y-[10px]  h-[78px]">
        <h4 className="text-[18px] font-bold">Ticket Category</h4>

  <div className="inputOption rounded-[8px] px-[14px] py-[16px] bg-[#FFFFFF] border-[#BEBEBE] border border-t-[1.4px]">
          <select
            name="ticketType"
            className="text-[12px] text-black font-normal w-full focus:outline-none"
            value={ticket.ticketType}
            onChange={(e) => handleChange(index, e)}
          >
            <option disabled value="selectEventType">Select Ticket Type</option>
            
             <option value="Early Bird">Early Bird</option>
             <option value="Regular">Regular</option>
            <option value="VIP">Vip</option>
           
          </select>
        </div>
        </div> 

      

        <div className="flex items-center text-center mt-[10px] w-full h-[48px] p-[4px] gap-x-[24px]">
          <h4>Price Type:</h4>

          <button
            onClick={() => {
              setSelected(index, 'Free');
              handleChange(index, {
                target: { name: 'PriceType', value: 'Free' }
              });
            }}
            className={`rounded-[68px]  w-[108px] h-[48px] ${ticket.PriceType === 'Free' ? 'bg-[#2D6CCF] text-white' : 'text-black bg-white'}`}
          >
            <span className="w-[44px] h-[16px] text-[16px] font-bold">Free</span>
          </button>

          <button
            onClick={() => {
              setSelected(index, 'Paid');
              handleChange(index, {
                target: { name: 'PriceType', value: 'Paid' }
              });
            }}
            className={`rounded-[68px] w-[108px] h-[48px] ${ticket.PriceType === 'Paid' ? 'bg-[#2D6CCF] text-white' : 'bg-white text-black'}`}
          >
            <span className="w-[44px] h-[16px] text-[16px] font-bold">Paid</span>
          </button>
        </div>

        <div className="flex h-auto flex-col lg:flex-row gap-y-4 gap-x-4">
          <div className="flex flex-col w-full lg:w-[217px]">
            <label htmlFor="ticketPrice" className="px-[8px] text-[16px] font-bold text-[#525252]">Price (₦)</label>
            <input
              id="ticketPrice"
              name="ticketPrice"
              type="number"
              placeholder="e.g 0000"
              className="border border-[#BEBEBE] rounded-[12px] h-[52px] px-[20px] py-[18px]"
              value={ticket.ticketPrice}
              onChange={(e) => handleChange(index, e)}
            />
          </div>

          <div className="flex flex-col w-full lg:w-[217px]">
            <label htmlFor="quantity" className="px-[8px] text-[16px] font-bold text-[#525252]">Maximum Quantity</label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              placeholder="e.g 100"
              className="border border-[#BEBEBE] rounded-[12px] h-[52px] px-[20px] py-[18px]"
              value={ticket.quantity}
              onChange={(e) => handleChange(index, e)}
              min={0}
              step={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketingForm;

