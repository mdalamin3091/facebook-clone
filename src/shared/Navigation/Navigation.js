import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsMessenger } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import { SiFacebookgaming } from "react-icons/si";
import { IoNotificationsSharp } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  const [selected, setSelected] = useState(1);
  const menus = [
    {
      id: 1,
      icon: <AiFillHome />,
    },
    {
      id: 2,
      icon: <TiHomeOutline />,
    },
    {
      id: 3,
      icon: <MdGroups />,
    },
    {
      id: 4,
      icon: <SiFacebookgaming />,
    },
  ];
  const rightMenus = [
    {
      id: 1,
      icon: <CgMenuGridR />,
    },
    {
      id: 2,
      icon: <BsMessenger />,
    },
    {
      id: 3,
      icon: <IoNotificationsSharp />,
    },
  ];
  return (
    <header className="bg-white shadow-md py-2 md:py-1 sticky top-0 z-50">
      <nav className="grid grid-cols-2 md:grid-cols-3 px-5">
        {/* 1 */}
        <div className="flex items-center justify-start gap-2">
          <Link to="/" className="text-primary text-4xl cursor-pointer">
            <BsFacebook />
          </Link>
          <div className="flex items-center justify-start bg-gray-100 rounded-full px-3 py-3 md:py-2">
            <span className="text-gray-600">
              <BiSearch />
            </span>
            <div>
              <input
                type="text"
                placeholder="Search Facebook"
                className="px-2 w-full focus:outline-none rounded-full bg-gray-100 hidden md:block"
              />
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="center-items hidden md:flex items-center justify-between gap-2">
          {menus.map((menu) => (
            <div
              className={`nav-icon ${
                menu.id === selected
                  ? "text-primary border-primary rounded-b-none"
                  : ""
              }`}
              onClick={() => setSelected(menu.id)}
              key={menu.id}
            >
              {menu.icon}
            </div>
          ))}
        </div>
        {/* 3 */}
        <div className="right-items flex items-center justify-end gap-3">
          {rightMenus.map((menu) => (
            <div
              className="p-3 bg-gray-300 text-gray-800 rounded-full text-xl cursor-pointer"
              key={menu.id}
            >
              {menu.icon}
            </div>
          ))}
          <img
            className="w-[45px] h-[45px] rounded-full cursor-pointer"
            src="https://i.ibb.co/HCQ2MLL/profile.jpg"
            alt="profile"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
