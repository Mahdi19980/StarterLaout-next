import { FaVuejs } from "react-icons/fa";
import { CiDatabase, CiBullhorn } from "react-icons/ci";
const Sidebar = [
  {
    id: 1,
    name: "Vue.js",
    icon: <FaVuejs size={"1.5rem"} />,
    children: [
      {
        name: "ali",
        icon: <CiBullhorn size={"1.5rem"} />,
      },
      { name: "hosein", icon: <CiDatabase size={"1.5rem"} /> },
    ],
  },
  {
    id: 2,
    name: "Vue.js",
    icon: <FaVuejs size={"1.5rem"} />,
    children: [
      {
        name: "ali",
        icon: <CiBullhorn size={"1.5rem"} />,
      },
      { name: "hosein", icon: <CiDatabase size={"1.5rem"} /> },
    ],
  },
];

export default Sidebar;
