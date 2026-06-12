







import React, { useState } from 'react';

export default function NotificationSettings() {
  const [settings, setSettings] = useState({
    eventUpdates: false,
    securityAlerts: false,
    marketingEmails: true,
    emailNotification: true,
    smsNotification: true
  });



  const toggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    console.log(`${key}: ${!settings[key]}`);
  };

  return (
    <div className="w-full mx-auto px-[10px]  p-6 rounded-md shadow-md space-y-6 pt-5 pb-5">
      {[
        { key: 'eventUpdates', label: 'Event Updates', desc: 'Notify me about ticket sales & reminder' },
        { key: 'securityAlerts', label: 'Security Alerts', desc: 'Get notified for suspicious login attempts' },
        { key: 'marketingEmails', label: 'Marketing Emails', desc: 'Receive event promotion insights' },
        { key: 'emailNotification', label: 'Email Notification' },
        { key: 'smsNotification', label: 'SMS Notification' }
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





