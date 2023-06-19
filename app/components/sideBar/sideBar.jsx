import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMagnifyingGlass,
  faHouse,
  faReact,
  faTableLayout,
  faCalendarDays,
  faShop,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
const Sidebar = [
  {
    id: 1,
    name: "Vue.js",
    icon: <FontAwesomeIcon icon={faHouse} size="lg" />,
    children: [
      {
        id: 1,
        name: "ali",
        icon: 1,
      },
      { id: 2, name: "hosein" },
    ],
  },
  {
    id: 2,
    name: "React.js",
    icon: <FontAwesomeIcon icon={faShop} size="lg" />,
    children: [
      {
        id: 1,
        name: "ali",
      },
      { id: 2, name: "hosein" },
    ],
  },
  {
    id: 3,
    name: "Laravel",
    icon: <FontAwesomeIcon icon={faCloud} size="lg" />,
    children: [
      {
        id: 1,
        name: "ali",
      },
      { id: 2, name: "hosein" },
    ],
  },
  {
    id: 4,
    name: "flutter.js",
    icon: <FontAwesomeIcon icon={faCalendarDays} size="lg" />,
    children: [
      {
        id: 1,
        name: "ali",
      },
      { id: 2, name: "hosein" },
    ],
  },
];

export default Sidebar;
