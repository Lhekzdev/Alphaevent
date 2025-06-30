import React from 'react'

const UpcomingEvent = () => {
  return (
    <>
      <section>
        <div>
          {/* Upcoming Event */}
          <div className="bg-white w-[498px] h-[392px] rounded-[12px] px-[28px] py-[28px] shadow-sm">
            {/* up container */}

            <div className="flex gap-[250px] mb-[34px] border-b-[1px] border-b-[#ABABAB]">
              <p className="text-[20px] text-[#000000] mb-[8px]">Upcoming Event</p>
             <button>
             <img
                src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747835248/Menu_Vertical_k3jkky.png"
                className="w-[40px] h-[40px] mb-[8px]"
                alt="Menu Icon"
              />
             </button>
            </div>

            <div className="eventContainer flex gap-[85px] ">
              <div className="events w-[450px] ">
                {/* Scrollable wrapper wrapping all rows */}
                <div className="mainContainer max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                  {/* Row 1 */}
                  <div className="flex gap-[16px] mb-[20px] border-b-[1px] border-b-[#ABABAB] pb-[14px]">
                    <img
                      src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747835934/dashboard_upcoming_image_1_mbwnzc.png"
                      alt=""
                    />
                    <div>
                      <div className="mb-[10px]">
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
                        <div className="flex gap-[12px] items-center">
                          <img
                            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_location_ayfnzy.svg"
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="text-[#ABABAB] text-[16px]">Location</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="flex gap-[16px] mb-[20px] border-b-[1px] border-b-[#ABABAB] pb-[14px]">
                    <img
                      src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747835933/dashboard_upcoming_image_2_mv5qfr.png"
                      alt=""
                    />
                    <div>
                      <div className="mb-[10px]">
                        <p>
                          Digital Marketing Conference<span>-</span>
                          <span>2023</span>
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
                        <div className="flex gap-[12px] items-center">
                          <img
                            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_location_ayfnzy.svg"
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="text-[#ABABAB] text-[16px]">Location</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="flex gap-[16px] mb-[20px] border-b-[1px] border-b-[#ABABAB] pb-[14px]">
                    <img
                      src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747835933/dashboard_upcoming_image_3_ktqa8j.png"
                      alt=""
                    />
                    <div>
                      <div className="mb-[10px]">
                        <p>
                          Tech Innovation Summit<span>-</span>
                          <span>2024</span>
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
                        <div className="flex gap-[12px] items-center">
                          <img
                            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_location_ayfnzy.svg"
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="text-[#ABABAB] text-[16px]">Location</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div className="flex gap-[16px] mb-[20px] border-b-[1px] border-b-[#ABABAB] pb-[14px]">
                    <img
                      src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747835935/dashboard_upcoming_image_4_ybnzyr.png"
                      alt=""
                    />
                    <div>
                      <div className="mb-[10px]">
                        <p>
                          Startup Meetup<span>-</span>
                          <span>2025</span>
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
                        <div className="flex gap-[12px] items-center">
                          <img
                            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_location_ayfnzy.svg"
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="text-[#ABABAB] text-[16px]">Location</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex gap-[16px] mb-[20px] border-b-[1px] border-b-[#ABABAB] pb-[14px]">
                    <img
                      src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747835935/dashboard_upcoming_image_4_ybnzyr.png"
                      alt=""
                    />
                    <div>
                      <div className="mb-[10px]">
                        <p>
                          Startup Meetup<span>-</span>
                          <span>2025</span>
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
                        <div className="flex gap-[12px] items-center">
                          <img
                            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_location_ayfnzy.svg"
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="text-[#ABABAB] text-[16px]">Location</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex gap-[16px] mb-[20px] border-b-[1px] border-b-[#ABABAB] pb-[14px]">
                    <img
                      src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747835935/dashboard_upcoming_image_4_ybnzyr.png"
                      alt=""
                    />
                    <div>
                      <div className="mb-[10px]">
                        <p>
                          Startup Meetup<span>-</span>
                          <span>2025</span>
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
                        <div className="flex gap-[12px] items-center">
                          <img
                            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_location_ayfnzy.svg"
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="text-[#ABABAB] text-[16px]">Location</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex gap-[16px] mb-[20px] border-b-[1px] border-b-[#ABABAB] pb-[14px]">
                    <img
                      src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747835935/dashboard_upcoming_image_4_ybnzyr.png"
                      alt=""
                    />
                    <div>
                      <div className="mb-[10px]">
                        <p>
                          Startup Meetup<span>-</span>
                          <span>2025</span>
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
                        <div className="flex gap-[12px] items-center">
                          <img
                            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_location_ayfnzy.svg"
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="text-[#ABABAB] text-[16px]">Location</p>
                        </div>
                      </div>
                    </div>
                  </div>

                 

                  {/* Row 5 */}
                  <div className="flex gap-[16px] mb-[20px]">
                    <img
                      src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747835936/dashboard_upcoming_image_5_vlvkwn.png"
                      alt=""
                    />
                    <div>
                      <div className="mb-[10px]">
                        <p>
                          Annual Tech Gala<span>-</span>
                          <span>2026</span>
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
                        <div className="flex gap-[12px] items-center">
                          <img
                            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_location_ayfnzy.svg"
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="text-[#ABABAB] text-[16px]">Location</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UpcomingEvent
