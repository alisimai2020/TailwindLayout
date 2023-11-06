import React, { useState } from "react";
import { RiDashboard2Fill, RiDashboardFill, RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart,AiFillEnvironment } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import {FaBolt, FaChevronLeft, FaChevronRight, FaRegCalendarAlt, FaRegChartBar, FaRegSun, FaStickyNote, FaTachometerAlt, FaWrench} from "react-icons/fa"
import {BsArrowLeftShort, BsChevronDown} from "react-icons/bs"




const Sidebar = () => {

 const storedEmail = localStorage.getItem('email');
const storedRole = localStorage.getItem('role');
let Menus;
if (storedRole === 'USER') {

 Menus = [
    { title: "Dashboard" }
  ];
  
} else {
  
   Menus = [
    { title: "Dashboard" },
    { title: "Pages" },
    
    {
      title: "Projects",
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
        { title: "Submenu 4" },
      ],
    },
    { title: "Analytics" },
    { title: "Inbox" },
    { title: "Profile" },
    { title: "Logout" },
  ];
}
  const [Open, Setopen] = useState(true);

  return (
    <div className={`bg-[#000000] relative p-5 pt-8 duration-500 ${Open ? "w-72" : "w-20"}`}>
      <BsArrowLeftShort
        className={`bg-white text-dark text-3xl rounded-full absolute -right-3 border border-dark cursor-pointer ${
          !Open && "rotate-180"
        }`}
        onClick={() => Setopen(!Open)}
      />

      <div className="inline-flex">
        <AiFillEnvironment className="bg-amber-300 text-4xl rounded cursor-pointer block float-left" />
        <h1 className={`text-white origin-left font-medium duration-300 ${!Open && "scale-0"} text-2xl`}>
          Tailwind
        </h1>
      </div>
      {storedRole === 'USER' && (
        <>

        <ul className="pt-2">
        {Menus.map((menu, index) => (
          <li key={index} className={`text-white-300 text-sm flex items-center ${menu.spacing ? "mt-9" : "mt-2"} gap-x-4 cursor-pointer p-2 bg-light-white rounded-md mt-2 mb-11`}>
            <span className="text-2xl text-white block float-left">
              {menu.title === "Dashboard" && <RiDashboardFill  />}
             
            </span>
            <span className={`  text-white text-base font-medium flex-1 duration-300 ${!Open && "hidden"}`}>
              {menu.title}
            </span>

          
          </li>
        ))}
      </ul>

        
        
        </>)};



        {storedRole === 'ADMIN' && (
          <>
  
          <ul className="pt-2">
          {Menus.map((menu, index) => (
            <li key={index} className={`text-white-300 text-sm flex items-center ${menu.spacing ? "mt-9" : "mt-2"} gap-x-4 cursor-pointer p-2 bg-light-white rounded-md mt-2 mb-11`}>
              <span className="text-2xl text-white block float-left">
                {menu.title === "Dashboard" && <RiDashboardFill  />}
                {menu.title === "Pages" && <FaBolt />}
                {menu.title === "Projects" && <FaWrench />}
                {menu.title === "Analytics" && <FaRegCalendarAlt />}
                {menu.title === "Inbox" && <FiMessageSquare />}
                {menu.title === "Profile" && <AiOutlineUser />}
                {menu.title === "Logout" && <FaChevronRight />}
              </span>
              <span className={`  text-white text-base font-medium flex-1 duration-300 ${!Open && "hidden"}`}>
                {menu.title}
              </span>
  
            
            </li>
          ))}
        </ul>
  
          
          
          </>)};
      
        
    </div>
  );
};

export default Sidebar;

