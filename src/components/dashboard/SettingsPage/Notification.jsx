








import React, { useEffect, useState } from "react";
import axios from "axios";
import { useEventForm } from "../../context/context";


export default function NotificationSettings() {
    const { userID } = useEventForm();
  const BASE_URL = "https://alphaeventappdevmode.onrender.com/api";
const [settings, setSettings] = useState({
  email_update: false,
  security_alert: false,
  marketing_email: false,
  email_notification: false,
  sms_notification: false,
});

useEffect(() => {
  const getProfile = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/orgProfile/${userID}`);

      setSettings(res.data.data.notification_settings);
    } catch (error) {
      console.log(error);
    }
  };

  if (userID) {
    getProfile();
  }
}, [userID]);


  const toggle = async (key) => {
  const updatedSettings = {
    ...settings,
    [key]: !settings[key],
  };

  // Update UI immediately
  setSettings(updatedSettings);

  try {
    
        await axios.patch(`${BASE_URL}/orgProfileUpdate/${userID}`, {
      notification_settings: updatedSettings,
    });
  } catch (error) {
    console.error(error);

    // Restore previous state if request fails
    setSettings(settings);
  }
};
  return (
    <div className="w-full mx-auto px-[10px]  p-6 rounded-md shadow-md space-y-6 pt-5 pb-5">
      {[
  {
    key: "email_update",
    label: "Event Updates",
    desc: "Notify me about ticket sales & reminder",
  },
  {
    key: "security_alert",
    label: "Security Alerts",
    desc: "Get notified for suspicious login attempts",
  },
  {
    key: "marketing_email",
    label: "Marketing Emails",
    desc: "Receive event promotion insights",
  },
  {
    key: "email_notification",
    label: "Email Notification",
  },
  {
    key: "sms_notification",
    label: "SMS Notification",
  },
].map(({ key, label, desc }) => (
        <div key={key} className="flex max-w-[832px] justify-between gap-[20px] font-Lato    items-center px-[20px] ">
          <div>
            <h4 className="font-bold ">{label}</h4>
            {desc && <p className="text-sm text-[#ABABAB]">{desc}</p>}
          </div>


       <div
  onClick={() => toggle(key)}
  className={`w-[48px] h-[28px] rounded-[20px] p-[4px] relative cursor-pointer transition-colors duration-300 ${
    settings[key] ? 'bg-[#E5E5E5]' : 'bg-[#E5E5E5]'
  }`}
>
  <div
  
    className={`w-[20px] h-[20px] rounded-full absolute top-1 transition-all duration-300 ${
      settings[key] ? 'right-1 bg-[#123499]'  : 'left-1 bg-white'
    }`}
  ></div>
</div>


        </div>
      ))}
    </div>
  );
}





