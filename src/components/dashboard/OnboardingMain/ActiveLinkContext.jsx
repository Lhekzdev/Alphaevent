import React, { createContext, useState } from "react";

// Sidebar link data (you define all links here)
const sidebarLinks = [
  {
    name: "Dashboard",
    route: "/OnboardEvent",
    iconGray: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1749415312/Icon_Pack_6_yh7k9h.png",
    iconWhite: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1749415313/icon_11_cvrxe1.png",
    iconBlue: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1749415312/Icon_Pack_4_ubv43t.png"
  },
  {
    name: "Events",
    route: "/MyEvent",
    iconGray: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1749415313/Vector_47_rz7aju.png",
    iconWhite: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1749415312/Icon_Pack_5_kpmpys.png",
    iconBlue: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1749417185/Icon_Pack_7_knhlfw.png"
  },
  {
    name: "Finance",
    route: "/Finance",
    iconGray: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1749415313/icon_12_l0jrmw.png",
    iconWhite: "https://res.cloudinary.com/youriconpath/financeWhite.svg",
  },
  {
    name: "Settings",
    route: "/SettingsPage",
    iconGray: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1749415312/Group_8_cejcwq.png",
    iconWhite: "https://res.cloudinary.com/youriconpath/settingsWhite.svg",
  },
];

const ActiveLinkContext = createContext();

const ActiveLinkProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState({
    name: sidebarLinks[0].name,
    icon: sidebarLinks[0].iconWhite,
    iconBlue: sidebarLinks[0].iconBlue
  });

  return (
    <ActiveLinkContext.Provider value={{ activeLink, setActiveLink, sidebarLinks }}>
      {children}
    </ActiveLinkContext.Provider>
  );
};

// ✅ Exporting at the bottom
export { ActiveLinkContext, ActiveLinkProvider };
