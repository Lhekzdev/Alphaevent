import React from "react";

const Section2 = () => {
  return (
    <section className="font-lato px-4 py-3">
      <div className="bg-white rounded-[12px]  shadow-sm w-full max-w-full">
      <div className="flex gap-[740px]  border-b-[1px] border-b-[#ABABAB] px-[32px] py-[18px]">
      <p className="text-[20px] text-[#000000] ">RecentRegistrations </p>
            <button>
            <img
              src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747835248/Menu_Vertical_k3jkky.png"
              className="w-[40px] h-[40px] "
              alt="Menu Icon"
            />
            </button>
</div>


        <div className="overflow-x-auto px-[32px] py-[20px] ">
          <table className="min-w-full  text-left">
            <thead className="">
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Event</th>
                <th className="py-2 px-4 border-b">Ticket Type</th>
                <th className="py-2 px-4 border-b">Purchase Date</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 text-[14px] text-[#ABABAB]">
              <td className="py-2 px-4 border-b">John Reinhard</td>
                <td className="py-2 px-4 border-b">Event Name</td>
                <td className="py-2 px-4 border-b">VIP Pass</td>
                <td className="py-2 px-4 border-b">February 25</td>
                <td className="py-2 px-4 border-b text-[#2A8212] font-bold">Successful</td>
              </tr>
              <tr className="hover:bg-gray-50 text-[14px] text-[#ABABAB]">
              <td className="py-2 px-4 border-b">Mich Scofield</td>
                <td className="py-2 px-4 border-b">Event Name</td>
                <td className="py-2 px-4 border-b">REGULAR  Pass</td>
                <td className="py-2 px-4 border-b">February 12</td>
                <td className="py-2 px-4 border-b text-[#FFB35C] font-bold">Pending</td>
              </tr>
              <tr className="hover:bg-gray-50 text-[14px] text-[#ABABAB]">
              <td className="py-2 px-4 border-b">Annabelle  </td>
                <td className="py-2 px-4 border-b">Event Name</td>
                <td className="py-2 px-4 border-b">EARLY BIRD  Pass</td>
                <td className="py-2 px-4 border-b">January 25</td>
                <td className="py-2 px-4 border-b text-[#ff3e3e] font-bold">failed</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Section2;
