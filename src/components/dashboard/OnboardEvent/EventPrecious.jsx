import React from 'react'

const EventPrecious = () => {

  const ticketSold = 75;
  const ticketMaximum = 120;
  const percentage = (ticketSold / ticketMaximum) * 100;

  return (
    <>
      <section>
        <div>
          <div className="eventContainer flex gap-[150px]">
            <div className="events">

              {/* Scrollable wrapper wrapping all rows */}
              <div className="mainContainer max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">

                {/* First Row */}
                <div className="mainContainer flex gap-[16px] border-b-[1px] border-b-[#ABABAB] mb-[20px] pb-[14px] pr-[18px]">
                  {/* col1 */}
                  <div className="flex gap-[16px]">
                    <img
                      src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747835933/dashboard_upcoming_image_2_mv5qfr.png"
                      alt=""
                      className="w-[60px] h-[60px]"
                    />
                    <div>
                      <div className="mb-[10px] text-[16px] whitespace-nowrap">
                        <p>
                          Digital Business Submit<span>-</span>
                          <span>2022</span>
                        </p>
                      </div>
                      <div className="flex gap-[16px]">
                        <div className="flex gap-[12px] items-center">
                          <img
                            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_date_ujatiw.svg"
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="text-[#71f0ea] text-[16px]">Date</p>
                        </div>
                        <div className="flex gap-[12px] items-center">
                          <img
                            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_time_rm5459.svg"
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="text-[#ABABAB] text-[16px]">Time</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* col2 */}
                  <div className="pl-[50px] mt-[10px] flex flex-col items-end text-[14px]">
                    <div className="flex items-center gap-1 mb-2">
                      <p className="ticketSold font-semibold">{ticketSold}</p>
                      <span>/</span>
                      <p className="ticketMaximum text-[#aaa]">{ticketMaximum}</p>
                    </div>
                    <div className="w-[100px] h-[8px] bg-gray-300 rounded-full overflow-hidden">
                      <div
                        className="h-full transition-all duration-300 rounded-full"
                        style={{
                          width: `${percentage}%`,
                          background: "linear-gradient(to right, #2D6CCF, #2DACCF)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Second Row */}
                <div className="mainContainer flex gap-[16px] border-b-[1px] border-b-[#ABABAB] mb-[20px] pb-[14px] pr-[18px]">
                  {/* col1 */}
                  <div className="flex gap-[16px]">
                    <img
                      src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747835933/dashboard_upcoming_image_2_mv5qfr.png"
                      alt=""
                      className="w-[60px] h-[60px]"
                    />
                    <div>
                      <div className="mb-[10px] text-[16px] whitespace-nowrap">
                        <p>
                          Digital Business Submit<span>-</span>
                          <span>2022</span>
                        </p>
                      </div>
                      <div className="flex gap-[16px]">
                        <div className="flex gap-[12px] items-center">
                          <img
                            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_date_ujatiw.svg"
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="text-[#ABABAB] text-[16px]">Date</p>
                        </div>
                        <div className="flex gap-[12px] items-center">
                          <img
                            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_time_rm5459.svg"
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="text-[#ABABAB] text-[16px]">Time</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* col2 */}
                  <div className="pl-[50px] mt-[10px] flex flex-col items-end text-[14px]">
                    <div className="flex items-center gap-1 mb-2">
                      <p className="ticketSold font-semibold">{ticketSold}</p>
                      <span>/</span>
                      <p className="ticketMaximum text-[#aaa]">{ticketMaximum}</p>
                    </div>
                    <div className="w-[100px] h-[8px] bg-gray-300 rounded-full overflow-hidden">
                      <div
                        className="h-full transition-all duration-300 rounded-full"
                        style={{
                          width: `${percentage}%`,
                          background: "linear-gradient(to right, #2D6CCF, #2DACCF)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Third Row */}
                <div className="mainContainer flex gap-[16px] border-b-[1px] border-b-[#ABABAB] mb-[20px] pb-[14px] pr-[18px]">
                  {/* col1 */}
                  <div className="flex gap-[16px]">
                    <img
                      src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747835933/dashboard_upcoming_image_2_mv5qfr.png"
                      alt=""
                      className="w-[60px] h-[60px]"
                    />
                    <div>
                      <div className="mb-[10px] text-[16px] whitespace-nowrap">
                        <p>
                          Digital Business Submit<span>-</span>
                          <span>2022</span>
                        </p>
                      </div>
                      <div className="flex gap-[16px]">
                        <div className="flex gap-[12px] items-center">
                          <img
                            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_date_ujatiw.svg"
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="text-[#ABABAB] text-[16px]">Date</p>
                        </div>
                        <div className="flex gap-[12px] items-center">
                          <img
                            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_time_rm5459.svg"
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="text-[#ABABAB] text-[16px]">Time</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* col2 */}
                  <div className="pl-[50px] mt-[10px] flex flex-col items-end text-[14px]">
                    <div className="flex items-center gap-1 mb-2">
                      <p className="ticketSold font-semibold">{ticketSold}</p>
                      <span>/</span>
                      <p className="ticketMaximum text-[#aaa]">{ticketMaximum}</p>
                    </div>
                    <div className="w-[100px] h-[8px] bg-gray-300 rounded-full overflow-hidden">
                      <div
                        className="h-full transition-all duration-300 rounded-full"
                        style={{
                          width: `${percentage}%`,
                          background: "linear-gradient(to right, #2D6CCF, #2DACCF)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                {/* Third Row */}
                <div className="mainContainer flex gap-[16px] border-b-[1px] border-b-[#ABABAB] mb-[20px] pb-[14px] pr-[18px]">
                  {/* col1 */}
                  <div className="flex gap-[16px]">
                    <img
                      src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747835933/dashboard_upcoming_image_2_mv5qfr.png"
                      alt=""
                      className="w-[60px] h-[60px]"
                    />
                    <div>
                      <div className="mb-[10px] text-[16px] whitespace-nowrap">
                        <p>
                          Digital Business Submit<span>-</span>
                          <span>2022</span>
                        </p>
                      </div>
                      <div className="flex gap-[16px]">
                        <div className="flex gap-[12px] items-center">
                          <img
                            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_date_ujatiw.svg"
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="text-[#ABABAB] text-[16px]">Date</p>
                        </div>
                        <div className="flex gap-[12px] items-center">
                          <img
                            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_time_rm5459.svg"
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="text-[#ABABAB] text-[16px]">Time</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* col2 */}
                  <div className="pl-[50px] mt-[10px] flex flex-col items-end text-[14px]">
                    <div className="flex items-center gap-1 mb-2">
                      <p className="ticketSold font-semibold">{ticketSold}</p>
                      <span>/</span>
                      <p className="ticketMaximum text-[#aaa]">{ticketMaximum}</p>
                    </div>
                    <div className="w-[100px] h-[8px] bg-gray-300 rounded-full overflow-hidden">
                      <div
                        className="h-full transition-all duration-300 rounded-full"
                        style={{
                          width: `${percentage}%`,
                          background: "linear-gradient(to right, #2D6CCF, #2DACCF)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                {/* Third Row */}
                <div className="mainContainer flex gap-[16px] border-b-[1px] border-b-[#ABABAB] mb-[20px] pb-[14px] pr-[18px]">
                  {/* col1 */}
                  <div className="flex gap-[16px]">
                    <img
                      src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747835933/dashboard_upcoming_image_2_mv5qfr.png"
                      alt=""
                      className="w-[60px] h-[60px]"
                    />
                    <div>
                      <div className="mb-[10px] text-[16px] whitespace-nowrap">
                        <p>
                          Digital Business Submit<span>-</span>
                          <span>2022</span>
                        </p>
                      </div>
                      <div className="flex gap-[16px]">
                        <div className="flex gap-[12px] items-center">
                          <img
                            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_date_ujatiw.svg"
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="text-[#ABABAB] text-[16px]">Date</p>
                        </div>
                        <div className="flex gap-[12px] items-center">
                          <img
                            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_time_rm5459.svg"
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="text-[#ABABAB] text-[16px]">Time</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* col2 */}
                  <div className="pl-[50px] mt-[10px] flex flex-col items-end text-[14px]">
                    <div className="flex items-center gap-1 mb-2">
                      <p className="ticketSold font-semibold">{ticketSold}</p>
                      <span>/</span>
                      <p className="ticketMaximum text-[#aaa]">{ticketMaximum}</p>
                    </div>
                    <div className="w-[100px] h-[8px] bg-gray-300 rounded-full overflow-hidden">
                      <div
                        className="h-full transition-all duration-300 rounded-full"
                        style={{
                          width: `${percentage}%`,
                          background: "linear-gradient(to right, #2D6CCF, #2DACCF)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                {/* Third Row */}
                <div className="mainContainer flex gap-[16px] border-b-[1px] border-b-[#ABABAB] mb-[20px] pb-[14px] pr-[18px]">
                  {/* col1 */}
                  <div className="flex gap-[16px]">
                    <img
                      src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747835933/dashboard_upcoming_image_2_mv5qfr.png"
                      alt=""
                      className="w-[60px] h-[60px]"
                    />
                    <div>
                      <div className="mb-[10px] text-[16px] whitespace-nowrap">
                        <p>
                          Digital Business Submit<span>-</span>
                          <span>2022</span>
                        </p>
                      </div>
                      <div className="flex gap-[16px]">
                        <div className="flex gap-[12px] items-center">
                          <img
                            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_date_ujatiw.svg"
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="text-[#ABABAB] text-[16px]">Date</p>
                        </div>
                        <div className="flex gap-[12px] items-center">
                          <img
                            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_time_rm5459.svg"
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="text-[#ABABAB] text-[16px]">Time</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* col2 */}
                  <div className="pl-[50px] mt-[10px] flex flex-col items-end text-[14px]">
                    <div className="flex items-center gap-1 mb-2">
                      <p className="ticketSold font-semibold">{ticketSold}</p>
                      <span>/</span>
                      <p className="ticketMaximum text-[#aaa]">{ticketMaximum}</p>
                    </div>
                    <div className="w-[100px] h-[8px] bg-gray-300 rounded-full overflow-hidden">
                      <div
                        className="h-full transition-all duration-300 rounded-full"
                        style={{
                          width: `${percentage}%`,
                          background: "linear-gradient(to right, #2D6CCF, #2DACCF)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                {/* Third Row */}
                <div className="mainContainer flex gap-[16px] border-b-[1px] border-b-[#ABABAB] mb-[20px] pb-[14px] pr-[18px]">
                  {/* col1 */}
                  <div className="flex gap-[16px]">
                    <img
                      src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747835933/dashboard_upcoming_image_2_mv5qfr.png"
                      alt=""
                      className="w-[60px] h-[60px]"
                    />
                    <div>
                      <div className="mb-[10px] text-[16px] whitespace-nowrap">
                        <p>
                          Digital Business Submit<span>-</span>
                          <span>2022</span>
                        </p>
                      </div>
                      <div className="flex gap-[16px]">
                        <div className="flex gap-[12px] items-center">
                          <img
                            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_date_ujatiw.svg"
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="text-[#ABABAB] text-[16px]">Date</p>
                        </div>
                        <div className="flex gap-[12px] items-center">
                          <img
                            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_time_rm5459.svg"
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="text-[#ABABAB] text-[16px]">Time</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* col2 */}
                  <div className="pl-[50px] mt-[10px] flex flex-col items-end text-[14px]">
                    <div className="flex items-center gap-1 mb-2">
                      <p className="ticketSold font-semibold">{ticketSold}</p>
                      <span>/</span>
                      <p className="ticketMaximum text-[#aaa]">{ticketMaximum}</p>
                    </div>
                    <div className="w-[100px] h-[8px] bg-gray-300 rounded-full overflow-hidden">
                      <div
                        className="h-full transition-all duration-300 rounded-full"
                        style={{
                          width: `${percentage}%`,
                          background: "linear-gradient(to right, #2D6CCF, #2DACCF)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                {/* Third Row */}
                <div className="mainContainer flex gap-[16px] border-b-[1px] border-b-[#ABABAB] mb-[20px] pb-[14px] pr-[18px]">
                  {/* col1 */}
                  <div className="flex gap-[16px]">
                    <img
                      src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747835933/dashboard_upcoming_image_2_mv5qfr.png"
                      alt=""
                      className="w-[60px] h-[60px]"
                    />
                    <div>
                      <div className="mb-[10px] text-[16px] whitespace-nowrap">
                        <p>
                          Digital Business Submit<span>-</span>
                          <span>2022</span>
                        </p>
                      </div>
                      <div className="flex gap-[16px]">
                        <div className="flex gap-[12px] items-center">
                          <img
                            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_date_ujatiw.svg"
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="text-[#ABABAB] text-[16px]">Date</p>
                        </div>
                        <div className="flex gap-[12px] items-center">
                          <img
                            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_time_rm5459.svg"
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="text-[#ABABAB] text-[16px]">Time</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* col2 */}
                  <div className="pl-[50px] mt-[10px] flex flex-col items-end text-[14px]">
                    <div className="flex items-center gap-1 mb-2">
                      <p className="ticketSold font-semibold">{ticketSold}</p>
                      <span>/</span>
                      <p className="ticketMaximum text-[#aaa]">{ticketMaximum}</p>
                    </div>
                    <div className="w-[100px] h-[8px] bg-gray-300 rounded-full overflow-hidden">
                      <div
                        className="h-full transition-all duration-300 rounded-full"
                        style={{
                          width: `${percentage}%`,
                          background: "linear-gradient(to right, #2D6CCF, #2DACCF)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                

              </div> {/* End of scrollable mainContainer */}

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EventPrecious;
