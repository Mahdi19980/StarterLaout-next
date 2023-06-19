"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop,
  faPlay,
  faChevronLeft,
  faAngleLeft,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { BsNodePlusFill } from "react-icons/bs";

const Drop = ({ bar, toggle }) => {
  const [activeItem, setActiveItem] = useState(false);
  const [dropToggle, setDropToggle] = useState();

  const handleClick = () => {
    setActiveItem(!activeItem);
  };

  useEffect(() => {
    setActiveItem(false);
  }, [toggle]);

  if (toggle) {
    return (
      <li
        id="DropDown"
        onClick={handleClick}
        className={!toggle && "items-end pl-2 relative "}
        key={bar.id}
      >
        <a className=" text-start text-base  li-item px-3 font-semibold">
          {bar.icon}
          <p className={!toggle ? "hidden" : "flex"}>{bar.name}</p>
          <FontAwesomeIcon
            icon={!activeItem ? faAngleLeft : faAngleDown}
            size="2xs"
          />
        </a>

        {bar.children && (
          <ul
            tabIndex={0}
            className={
              !toggle &&
              (!activeItem
                ? "hidden"
                : "absolute  right-28 bg-drop rounded-md pb-4 ")
            }
          >
            {bar.children.map((item, index) => {
              if (activeItem === true) {
                return (
                  <li key={item.id} className="" style={{ top: "10px" }}>
                    <a
                      className="font-normal text-start m-1 text-base pr-4"
                      href=""
                    >
                      <FontAwesomeIcon icon={faPlay} rotation={180} size="xs" />
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
  } else {
    return (
      <li className="items-end">
        <div className="dropdown dropdown-left p-0">
          <label tabIndex={0} className="btn btn-ghost btn-md items-center m-1">
            {bar.icon}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow-lg shadow-cyan-500/20 bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </li>
    );
  }
};
export default Drop;
