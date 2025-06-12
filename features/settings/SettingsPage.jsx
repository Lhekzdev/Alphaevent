import React from "react";
import { Link, redirect } from "react-router-dom";
import NotificationBar from "../../src/components/dashboard/OnBoarding/NotificationBar";
import Onboardingleft from "../../src/components/dashboard/onboardingleft/Onboardingleft";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../settingsSlice";

const SettingsPage = () => {
    const dispatch = useDispatch();
    const activeTab = useSelector((state) => state.settings.activeTab)
    const tabs = ['My Profile', 'Notifications', 'Security', 'Account Info'];


    return (

        // my profile
        <div className="addOnBoardLeft flex ">
            <Onboardingleft />
            <div className="w-full font-Lato  bg-[#F8F9FC] px-[40px] py-[40px] flex flex-col gap-y-[20px] h-auto ">
                <div className="md:max-w-[1056px]  flex justify-between">
                    <ol className="w-[118px] flex h-[28px] gap-[12px]">
                        <li>    <img className="w-[28px] h-[28px] " src="/settingIcon.svg" alt="settins-icon" /></li>
                        <li>   <h4 className="w-[78px] h-[20px] text-[#2D6CCF] text-[20px] font-extrabold">Settings</h4> </li>
                    </ol>
                    <ol><NotificationBar /></ol>
                </div>

                <div className="flex w-[683px] h-[48px] rounded-[8px]  p-[4px] gap-[40px] bg-[#EFF1F3]">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => dispatch(setActiveTab(tab))}
                            className={`min-w-[122px] h-[40px] rounded-[8px] border-[1px] text-center px-[24px] py-[12px]text-[16px] box-border ${activeTab === tab ? 'bg-white text-[#2D6CCF] font-bold' : 'bg-gray-100'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}



                </div>

                {/* Example: conditionally render content based on activeTab */}

                {activeTab === 'My Profile' &&
                    <div className="flex flex-col  gap-y-[20px]">
                        <div className="w-[432px] pb-[20px] border-b-[1px] items-center flex  h-[60px] gap-[120px]">

                            <ol className="w-[252px]  md:h-[60px] flex flex-col gap-y-[8px]">
                                <li><h4>Photo <span className="text-[#FF0000]">*</span></h4></li>
                                <li className="text-[#ABABAB] "><p>This will be displayed on your profile</p></li>

                            </ol>
                            <ol><img src="" alt="profile-img" /></ol>
                        </div>
                        <div className="w-[518px] pb-[20px] border-b-[1px] items-center flex  h-[60px] gap-[120px]">

                            <ol className="w-[252px]  md:h-[60px] flex flex-col gap-y-[8px]">
                                <li><h4>Full Name <span className="text-[#FF0000]">*</span></h4></li>
                                <li className="text-[#ABABAB] font-normal"><p>This will be displayed on your profile</p></li>

                            </ol>
                            <ol className="w-[146px] text-[#ABABAB] h-[16px]"><h4>Cameron Williamson</h4></ol>
                        </div>
                        <div className="w-[718px] pb-[20px] border-b-[1px] items-center flex  h-[60px] gap-[120px]">

                            <ol className="w-[252px]  md:h-[60px] flex flex-col gap-y-[8px]">
                                <li><h4>Contact Info <span className="text-[#FF0000]">*</span></h4></li>
                                <li className="text-[#ABABAB] font-normal"><p>This will be displayed on your profile</p></li>

                            </ol>
                            <ol className="w-[436px] text-[#ABABAB]  text-[16px] h-[56px] flex flex-col gap-y-[8px]">
                                <li className="flex items-center gap-[20px]"><h4>Email Address</h4>
                                    <h4>Cameron.graham@example.com</h4>
                                </li>
                                <li className="flex items-center gap-[20px]"><h4>Phone Number</h4>
                                    <h4>+XXX XXX XXX  XXXX</h4>
                                </li>

                            </ol>
                        </div>

<div className="pb-[20px] w-[518px]  grid grid-cols-2  gap-[10px] border-b-[1px]">
 
    <h4 className="max-w-9 box-border   block h-[60px] text-[18px]">Bio</h4>


    <h4 className="w-[400px] h-[60px]   text-[#ABABAB]">Organizer Description</h4>
  
</div>
</div>



             
                }



                {activeTab === 'Notifications' && <p>🔔 Notification settings here...</p>}
                {activeTab === 'Security' && <p>🔐 Security settings here...</p>}
                {activeTab === 'Account Info' && <p>📄 Account information here...</p>}




            </div>
        </div>


    )

}

export default SettingsPage;