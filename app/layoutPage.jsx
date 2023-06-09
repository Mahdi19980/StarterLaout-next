"use client";
import { usePathname } from "next/navigation";
import Navbar from "./components/navbar";
import SideBar from "./components/drawer";

const LayoutProvider = ({ children }) => {
  const pathname = usePathname();

  if (pathname === "/about") {
    return <>{children}</>;
  }

  return (
    <>
      <div className="flex">
        <div className="main">
          <div>
            <Navbar />
          </div>
          <div>{children}</div>
        </div>
        <div className="sidebar md:hidden  lg:flex ">
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default LayoutProvider;
