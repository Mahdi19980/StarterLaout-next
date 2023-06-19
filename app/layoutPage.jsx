"use client";
import { usePathname } from "next/navigation";
import Navbar from "./components/navbar/navbar";
import SideBar from "./components/sideBar/drawer";
import { useState } from "react";

const LayoutProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  const pathname = usePathname();

  if (pathname === "/about") {
    return <>{children}</>;
  }

  return (
    <>
      <div className="flex">
        <div className={toggle ? "main inactive" : "main active"}>
          <div>
            <Navbar />
          </div>
          <div>{children}</div>
        </div>
        <div
          className={
            toggle
              ? "md:hidden  lg:flex sidebar active transition duration-500 ease-in-out"
              : "md:hidden  lg:flex sidebar inactive transition duration-500 ease-in-out"
          }
        >
          <SideBar checked={toggle} setCheck={setToggle} />
        </div>
      </div>
    </>
  );
};

export default LayoutProvider;
