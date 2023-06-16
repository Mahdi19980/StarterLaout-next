"use client";
import { useState } from "react";
import { BsNodePlusFill } from "react-icons/bs";

const Drop = ({ bar, toggle }) => {
  const [activeItem, setActiveItem] = useState(false);

  const handleClick = () => {
    setActiveItem(!activeItem);
  };

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
        <ul className={toggle ? "   list-inside" : "hidden"}>
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
