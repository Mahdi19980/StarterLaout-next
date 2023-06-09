"use client";

// import SideBar from "./drawer";

const Navbar = () => {
  return (
    <>
      <div className="navbar shadow-md ">
        <div className="flex-1">
          <h1 className="daisy font-bold">daisy</h1>
          <h1 className="ui font-bold">UI</h1>
        </div>

        <div className="flex-none">
          {/* <ThemeChanger /> */}

          {/* <ul className="menu menu-horizontal px-1 font-bold align-middle">
            <li>
            </li>
            <li> */}
          {/* <details>
                <summary>Parent</summary>

                <ul className="p-2 bg-base-100 font-bold">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details> */}
          {/* </li>
          </ul> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
