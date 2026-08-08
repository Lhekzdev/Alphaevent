import { useState } from "react";
import NotificationBar from "../OnBoarding/NotificationBar.jsx";
import Onboardingleft from "../onboardingleft/Onboardingleft.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../../../features/settingsSlice.js";
import ProfileSummary from "./ProfileSummary.jsx";
import ProfileEditModal from "./ProfileEditModal.jsx";
import NotificationSettings from "./Notification.jsx";
import SecurityTab from "./SecurityTab.jsx";
import AccountInfo from "./AccountInfo.jsx";
import { IoSettingsOutline } from "react-icons/io5";

const SettingsPage = () => {
    const [refreshProfile, setRefreshProfile] = useState(false);
    const [editing, setEditing] = useState(false);

    const dispatch = useDispatch();
    const activeTab = useSelector((state) => state.settings.activeTab);

    const tabs = [
        "My Profile",
        "Notifications",
        "Security",
        "Account Info",
    ];

    try {
        return (
            <div className="addOnBoardLeft flex flex-col lg:flex-row min-h-screen">

                {/* Sidebar */}
                <Onboardingleft />

                {/* Main Content */}
                <div       className="
 bg-[#F8F9FC]
 flex
 flex-col
 gap-y-[24px]
 flex-1
 w-full
 overflow-hidden
 pt-16
 md:pt-0
  ">

                    {/* Header */}
                    <div className="w-full max-w-[1056px] flex items-center justify-between gap-4">

                        {/* Settings Title */}
                        <div className="flex items-center gap-2 sm:gap-3 text-[#123499] text-lg sm:text-xl ml-[18px]">
                            <IoSettingsOutline className="shrink-0" />

                            <h4 className="font-extrabold whitespace-nowrap">
                                Settings
                            </h4>
                        </div>

                        {/* Notification */}
                        <div className="shrink-0">
                            <NotificationBar />
                        </div>
                    </div>


                    {/* Tabs */}
                    <div
                        className="
                            w-full
                            max-w-[1056px]
                            min-h-[48px]
                            rounded-[8px]
                            p-1
                            bg-[#EFF1F3]
                            flex
                            items-center
                            gap-1
                            sm:gap-2
                            overflow-x-auto
                            scrollbar-hide
                        "
                    >
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => dispatch(setActiveTab(tab))}
                                className={`
                                    shrink-0
                                    min-w-[110px]
                                    sm:min-w-[122px]
                                    h-[40px]
                                    rounded-[8px]
                                    border
                                    text-center
                                    px-3
                                    sm:px-4
                                    py-2
                                    text-sm
                                    sm:text-[16px]
                                    whitespace-nowrap
                                    transition-all
                                    duration-200
                                    ${
                                        activeTab === tab
                                            ? "bg-white text-[#123499] font-bold border-white"
                                            : "bg-gray-100 text-gray-600 border-transparent hover:bg-white"
                                    }
                                `}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>


                    {/* Tab Content */}
                  <div className="w-full max-w-[1056px] bg-gray-100 rounded-lg overflow-hidden grid grid-cols-2 gap-2">

                        {/* My Profile */}
                        {activeTab === "My Profile" && (
                            <div className="w-full p-4 sm:p-5 md:p-6">

                                <ProfileSummary
                                    refreshProfile={refreshProfile}
                                    onEdit={() => setEditing(true)}
                                />

                                <ProfileEditModal
                                    isOpen={editing}
                                    onClose={() => setEditing(false)}
                                    onProfileUpdated={() =>
                                        setRefreshProfile((prev) => !prev)
                                    }
                                />

                            </div>
                        )}


                        {/* Notifications */}
                        {activeTab === "Notifications" && (
                            <div className="w-full overflow-x-auto">
                                <NotificationSettings />
                            </div>
                        )}


                        {/* Security */}
                        {activeTab === "Security" && (
                            <div className="w-full overflow-x-auto">
                                <SecurityTab />
                            </div>
                        )}


                        {/* Account Info */}
                        {activeTab === "Account Info" && (
                            <div className="w-full overflow-x-auto">
                                <AccountInfo />
                            </div>
                        )}

                    </div>

                </div>
            </div>
        );

    } catch (error) {
        console.log(error.message);
    }
};

export default SettingsPage;
