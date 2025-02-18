import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa";


const menuItems = [
  { name: "Home", link: "/" },
  { name: "My Resume", link: "/resume" },
  { name: "LinkedIN Optimisation", link: "/linkedin", hasSubmenu: true },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Applications", link: "/applications", hasSubmenu: true },
];

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-md">
      {/* Header */}
      <div className="flex items-center flex-col justify-center">
      <Image
      src={'/Sidebar/Ellipse 9.png'}  
      alt="bg"
      width={500}
      height={100}
      className="w-full h-full"
      />
      <Image
       src={'/Sidebar/logo.png'}  
       alt="bg"
       width={100}
       height={100}
       className="w-18 top-4 absolute"
       />
      </div>
      
      <div className=" text-[#346DE0] p-4 flex items-center space-x-2 border-b-2 bg-white">
        <Image
          src="/Sidebar/user.png" 
          alt="User"
          className="w-8 h-8 rounded-full"
          width={100}
          height={100}
        />
        <span className="font-medium text-lg">Tanya Fernandez</span>
      </div>

      {/* Menu Items */}
      <nav className="mt-6 px-4">
        <ul className="space-y-6 text-[#808080]  text-base font-medium">
          {menuItems.map((item, index) => (
            <li key={index} className="flex justify-between items-center cursor-pointer hover:text-black">
              <a href={item.link}>{item.name}</a>
              {item.hasSubmenu && <FaAngleRight className="text-gray-400" />}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
