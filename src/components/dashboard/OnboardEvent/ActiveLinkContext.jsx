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
    iconGray: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1750162746/icon_15_egxmwz.png",
    iconWhite: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1750162745/Icon_Pack_8_mfqvpy.png",
    iconBlue: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1750162745/icon_14_gwygha.png"
  },
  {
    name: "Setting",
    route: "/Setting",
    iconGray: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1750181985/Icon_Pack_11_qrj2sw.png",
    iconWhite: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1750181983/Icon_Pack_9_v8nsdz.png",
     iconBlue: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1750181984/Icon_Pack_10_qc1ues.png"
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
