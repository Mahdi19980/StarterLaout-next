"use client";

import NavbarMenu from "./navbarMenu";

// import SideBar from "./drawer";

const Navbar = () => {
  return (
    <>
      <div className=" -z-50 navbar shadow-lg shadow-cyan-500/5 ">
        <div className="flex-1">
          <NavbarMenu />
        </div>

        <div className="flex-none"></div>
      </div>
    </>
  );
};

export default Navbar;
