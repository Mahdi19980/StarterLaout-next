"use client";

import { useState } from "react";
import Sidebar from "./sideBar/sideBar";
import React from "react";

const SideBar = ({ checked, setCheck }) => {
  const [toggle, setToggle] = useState(checked);

  const [activeItem, setActiveItem] = useState(false);

  const handleClick = (item) => {
    setActiveItem(!activeItem);
  };

  const handleChange = (e) => {
    setCheck(!checked);

    if (checked) {
      setTimeout(() => {
        setToggle(!toggle);
      }, 500);
    } else {
      setToggle(!toggle);
    }
  };

  return (
    <ul
      dir="rtl"
      className="  menu menu-lg p-4 pl-1 h-full plas shadow-md text-base-content  transition duration-500 ease-in-out"
    >
      {/* Sidebar content here */}

      <li className=" menu-title items-end text-justify mb-8   cursor-context-menu">
        <div className={!toggle ? "flex w-12 ml-2" : "flex "}>
          <div className={!toggle ? "hidden" : "flex"}>
            <p className="ui font-bold">UI</p>
            <p className="daisy font-bold">daisy</p>
          </div>
          <div className="mr-8">
            <label className=" swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                checked={checked}
                onChange={(e) => handleChange(e)}
                type="checkbox"
              />

              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
        </div>
      </li>

      {Sidebar.map((bar, index) => {
        return (
          <li
            onClick={handleClick}
            className={!toggle && "items-end pl-2"}
            key={bar.id}
          >
            <a className=" text-start text-base  li-item px-3 font-medium">
              {bar.icon}
              <p className={!toggle ? "hidden" : "flex"}>{bar.name}</p>
            </a>

            {bar.children && (
              <ul className="list-inside transition duration-500 ease-in-out">
                {bar.children.map((item, index) => {
                  if (activeItem === true) {
                    return (
                      <li key={item.id} className="" style={{ top: "10px" }}>
                        <a
                          className="font-medium text-start m-1 text-base"
                          href=""
                        >
                          {item.icon}
                          <p>{item.name}</p>
                        </a>
                      </li>
                    );
                  } else {
                    return null;
                  }
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default SideBar;
