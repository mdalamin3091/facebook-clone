import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import { SiFacebookgaming } from "react-icons/si";
import { useState } from "react";
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
  return (
    <header className="bg-white shadow-lg py-1">
      <nav className="grid grid-cols-2 md:grid-cols-3 px-5">
        <div className="flex items-center justify-start gap-2">
          <span className="text-primary text-4xl cursor-pointer">
            <BsFacebook />
          </span>
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
        <div className="center-items flex items-center justify-between gap-2">
          {menus.map((menu) => (
            <div
              className={`nav-icon ${
                menu.id === selected ? "text-primary border-primary rounded-b-none" : ""
              }`}
              onClick={() => setSelected(menu.id)}
              key={menu.id}
            >
              {menu.icon}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
