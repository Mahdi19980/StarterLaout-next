import Sidebar from "./sideBar/sideBar";

const SideBar = () => {
  return (
    <>
      <ul
        dir="rtl"
        className="  menu menu-lg p-4  h-full bg-base-200 text-base-content"
      >
        {/* Sidebar content here */}

        <li className=" menu-title justify-between pl-0 text-justify mb-8 shadow-md">
          <div className="flex items-start ">
            <div className="flex  items-center">
              <p className="ui font-bold">UI</p>
              <p className="daisy font-bold">daisy</p>
            </div>
            <div className="mr-8">
              <label className=" swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

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
            <li key={index}>
              <a className=" text-start">
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                {bar.name}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SideBar;
