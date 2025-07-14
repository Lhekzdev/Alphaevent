import { useState,React } from "react";
import { Link, redirect } from "react-router-dom";
import NotificationBar from "../OnBoarding/NotificationBar.jsx";
import Onboardingleft from "../onboardingleft/Onboardingleft.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../../../features/settingsSlice.js";
import ProfileSummary from "./ProfileSummary.jsx";
import ProfileEditModal from "./ProfileEditModal.jsx";

import NotificationSettings from "./Notification.jsx";
import SecurityTab from "./SecurityTab.jsx";
import AccountInfo from "./AccountInfo.jsx";

const SettingsPage = () => {
    const dispatch = useDispatch();
    const activeTab = useSelector((state) => state.settings.activeTab)
    const tabs = ['My Profile', 'Notifications', 'Security', 'Account Info'];

// for pop up
     const [editing, setEditing] = useState(false);
   
     // To dim
  
    





try { 
  return   (

        // my profile
        <div className="addOnBoardLeft flex   ">
            <Onboardingleft />
            <div className="w-full font-Lato px-[40px] py-[40px] bg-[#BEBEBE]  flex flex-col gap-y-[20px] h-auto ">
                <div className="md:max-w-[1056px] flex justify-between">
                    <ol className="w-[118px] flex h-[28px] gap-[12px]">
                        <li>    <img className="w-[28px] h-[28px] " src="/settingIcon.svg" alt="settins-icon" /></li>
                        <li>   <h4 className="w-[78px] h-[20px] text-[#2D6CCF] text-[20px] font-extrabold">Settings</h4> </li>
                    </ol>
                    <ol><NotificationBar /></ol>
                </div>

                <div className="flex   h-[48px] rounded-[8px]  p-[4px] gap-[40px] bg-[#EFF1F3]">
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


 <div className=" bg-gray-100 w-full  p-6">
      <ProfileSummary  onEdit={() => setEditing(true)} />
      <ProfileEditModal isOpen={editing}  onClose={() => setEditing(false)} />
    </div>


                }



                {activeTab === 'Notifications' && <div className=" bg-gray-100"><NotificationSettings/></div> }
                {activeTab === 'Security' && <div className=" bg-gray-100"><SecurityTab/></div> }
                {activeTab === 'Account Info' && <div className=" bg-gray-100"><AccountInfo/></div> }




            </div>
        </div>


    )
    
} catch (error) {
    console.log(error.message);
    
}}
export default SettingsPage;