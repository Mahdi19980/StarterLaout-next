"use client";
import { useState, useEffect } from "react";
import { BsNodePlusFill } from "react-icons/bs";

const Drop = ({ bar, toggle }) => {
  const [activeItem, setActiveItem] = useState(false);
  const [dropToggle, setDropToggle] = useState();

  const handleClick = () => {
    setActiveItem(!activeItem);
  };

  useEffect(() => {
    const closeDropdowns = (event) => {
      if (!event.target.closest("#DropDown")) {
        setActiveItem(false);
      }
    };
    window.addEventListener("click", closeDropdowns);
    return () => {
      window.removeEventListener("click", closeDropdowns);
    };
  }, [activeItem]);

  return (
    <li
      id="DropDown"
      onClick={handleClick}
      className={!toggle && "items-end pl-2 relative "}
      key={bar.id}
    >
      <a className=" text-start text-base  li-item px-3 font-medium">
        {bar.icon}
        <p className={!toggle ? "hidden" : "flex"}>{bar.name}</p>
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
                  <a className="font-medium text-start m-1 text-base" href="">
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
};
export default Drop;
