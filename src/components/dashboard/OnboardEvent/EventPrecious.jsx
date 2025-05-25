import React from 'react'

const EventPrecious = () => {
  return (
    <>
    <section>
        <div>
        <div className="eventContainer flex gap-[130px]">
              <div className="events">
                {/* firist Row */}
          <div className="mainContainer">
            <div className="flex gap-[16px] mb-[20px] border-b-[1px] border-b-[#ABABAB] pb-[14px]">
              <img
                src={
                  "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747835934/dashboard_upcoming_image_1_mbwnzc.png"
                }
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
                      src={
                        "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_date_ujatiw.svg"
                      }
                      className="w-[20px] h-[20px]"
                      alt=""
                    />
                    <p className="text-[#f73838] text-[16px]">Date</p>
                  </div>
                  <div className="flex gap-[12px] items-center">
                    <img
                      src={
                        "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_time_rm5459.svg"
                      }
                      className="w-[20px] h-[20px]"
                      alt=""
                    />
                    <p className="text-[#ABABAB] text-[16px]">Time</p>
                  </div>
        
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div>
            <div className="flex gap-[16px] mb-[20px] border-b-[1px] border-b-[#ABABAB] pb-[14px]">
              <img
                src={
                  "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747835933/dashboard_upcoming_image_2_mv5qfr.png"
                }
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
                      src={
                        "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_date_ujatiw.svg"
                      }
                      className="w-[20px] h-[20px]"
                      alt=""
                    />
                    <p className="text-[#ABABAB] text-[16px]">Date</p>
                  </div>
                  <div className="flex gap-[12px] items-center">
                    <img
                      src={
                        "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_time_rm5459.svg"
                      }
                      className="w-[20px] h-[20px]"
                      alt=""
                    />
                    <p className="text-[#ABABAB] text-[16px]">Time</p>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>

          {/* Third Row */}
          <div>
            <div className="flex gap-[16px] mb-[20px]">
              <img
                src={
                  "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747835933/dashboard_upcoming_image_3_ktqa8j.png"
                }
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
                      src={
                        "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_date_ujatiw.svg"
                      }
                      className="w-[20px] h-[20px]"
                      alt=""
                    />
                    <p className="text-[#ABABAB] text-[16px]">Date</p>
                  </div>
                  <div className="flex gap-[12px] items-center">
                    <img
                      src={
                        "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_time_rm5459.svg"
                      }
                      className="w-[20px] h-[20px]"
                      alt=""
                    />
                    <p className="text-[#ABABAB] text-[16px]">Time</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>       
          <img src={"https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747839932/Slider_c6mexo.png"} alt="" />
          </div>
        </div>
    </section>
    </>
  )
}

export default EventPrecious