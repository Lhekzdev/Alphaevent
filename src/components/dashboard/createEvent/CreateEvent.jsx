import React, { useState, useRef } from "react";
import cloudIcon from "../../../assets/cloudIcon.svg";
// import Section1 from './Section1
import Onboardingleft from "../onboardingleft/Onboardingleft";
import ProfileSearchBar from "../OnBoarding/ProfileSearchBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import arrowOption from "../../../assets/arrowOption.svg";
import delectIcon from "../../../assets/delectIcon.svg";
import questionIcon from "../../../assets/questionIcon.svg";
import discountIcon from "../../../assets/discountIcon.svg";
import pencilBlue from "../../../assets/pencilBlue.svg";
import Details from "./Details";
import TicketConfiguration from "./Ticketing";

const CreateEvent = () => {
    const [activeTab, setActiveTab] = useState("details");

    return (
        <section className="flex flex-col lg:flex-row w-full min-h-screen overflow-hidden">

            {/* Sidebar */}
            <Onboardingleft />

            {/* Main Content */}
            <div
                className="
                    flex-1
                    min-w-0
                    w-full
                    bg-[#F8F9FC]
                    overflow-x-hidden
                    overflow-y-auto
                    px-4
                    sm:px-6
                    md:px-8
                    lg:pl-8
                    lg:pr-6
                    pt-16
                    md:pt-0
                "
            >

                <ProfileSearchBar />

                {/* Event Creation Header */}
                <div className="font-Lato pt-[10px] bg-white h-auto w-full">

                    {/* Title + Saved Status */}
                    <div
                        className="
                            pb-[8px]
                            items-start
                            sm:items-center
                            justify-between
                            flex
                            flex-col
                            sm:flex-row
                            gap-2
                            w-full
                            max-w-[1032px]
                        "
                    >
                        <h2 className="font-bold text-[25px] md:text-[32px] leading-[38.4px]">
                            Create an event
                        </h2>

                        <h2 className="font-light text-sm sm:text-base">
                            All changes saved
                        </h2>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full max-w-[1032px] h-[5px] rounded-[8px] border border-customLighterGray">
                        <ol className="rounded-[8px] w-[28%] sm:w-[285px] max-w-full h-[5px] bg-black"></ol>
                    </div>

                    {/* Tabs */}
                    <div
                        className="
                            w-full
                            max-w-[1032px]
                            min-h-[56px]
                            h-auto
                            mt-[8px]
                            p-[8px]
                            rounded-[12px]
                            border-[1px]
                            border-[#757575]
                            text-black
                            flex
                            gap-2
                            sm:gap-0
                        "
                    >

                        {/* Details */}
                        <div
                            id="details"
                            onClick={() => setActiveTab("details")}
                            className={`
                                flex-1
                                min-w-0
                                h-[40px]
                                flex
                                items-center
                                justify-center
                                rounded-[8px]
                                cursor-pointer
                                transition-all
                                duration-200
                                ${
                                    activeTab === "details"
                                        ? "bg-customSkyblue text-white"
                                        : ""
                                }
                            `}
                        >
                            <h6 className="text-center font-bold text-sm sm:text-base w-full">
                                Details
                            </h6>
                        </div>

                        {/* Ticket Configuration */}
                        <div
                            id="ticketConfiguration"
                            onClick={() => setActiveTab("ticketConfiguration")}
                            className={`
                                flex-1
                                min-w-0
                                h-[40px]
                                flex
                                items-center
                                justify-center
                                rounded-[8px]
                                cursor-pointer
                                transition-all
                                duration-200
                                ${
                                    activeTab === "ticketConfiguration"
                                        ? "bg-customSkyblue text-white"
                                        : ""
                                }
                            `}
                        >
                            <h6 className="text-center font-bold text-sm sm:text-base w-full">
                                Ticket configuration
                            </h6>
                        </div>

                    </div>
                </div>


                {/* Render the active tab's content */}
                <div className="w-full max-w-[1032px]">

                    {activeTab === "details" && (
                        <Details setActiveTab={setActiveTab} />
                    )}

                    {activeTab === "ticketConfiguration" && (
                        <TicketConfiguration />
                    )}

                </div>

            </div>
        </section>
    );
};

export default CreateEvent;
