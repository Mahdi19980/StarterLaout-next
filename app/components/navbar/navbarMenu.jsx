"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faBell } from "@fortawesome/free-solid-svg-icons";
import Themechanger from "../mode/ThemeChanger";
import { useTheme } from "next-themes";

const NavbarMenu = () => {
  const { theme, setTheme } = useTheme();
  const light = theme === "light";
  const [check, setCheck] = useState(!light ? true : false);

  const handleChange = () => {
    if (light) {
      setTheme("night");
      setCheck(true);
    } else {
      setTheme("light");
      setCheck(false);
    }
  };

  return (
    <>
      <div className="px-4 avatar">
        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul className="menu menu-horizontal  rounded-box">
        <li>
          <a>
            <FontAwesomeIcon icon={faBell} size="lg" />
          </a>
        </li>
        <li onChange={handleChange}>
          <a>
            <Themechanger
              theme={theme}
              setTheme={setTheme}
              light={light}
              check={check}
              setCheck={setCheck}
            />
          </a>
        </li>
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavbarMenu;
