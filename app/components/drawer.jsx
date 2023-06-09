import Sidebar from "./sideBar/sideBar";



const SideBar = () => {
  return (
    <>
      <ul
        dir="rtl"
        className="  menu menu-lg p-4 w-80 h-full bg-base-200 text-base-content"
      >
        {/* Sidebar content here */}

        <li className="menu-title text-justify mb-8 shadow-md">
          <div className="flex  items-center">
            <p className="daisy font-bold">daisy</p>
            <p className="ui font-bold">UI</p>
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
