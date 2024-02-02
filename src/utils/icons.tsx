//sidebar Icons\
import { RiShoppingBag3Line, RiPulseFill } from "react-icons/ri";
import { MdAccessTime, MdOutlineTaskAlt } from "react-icons/md";
import {
  FiRefreshCw,
  FiTruck,
  FiDollarSign,
  FiCreditCard,
  FiCalendar,
  FiBarChart2,
} from "react-icons/fi";
import { IoMdArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { CiPause1 } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { SlUserFollowing } from "react-icons/sl";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LiaSaveSolid } from "react-icons/lia";
import { FiPlus } from "react-icons/fi";
import {
  ColorBlue,
  ColorGray,
  ColorGreen,
  ColorGreen2,
  ColorLightBlue,
  ColorLightGreen,
  ColorLightGreen2,
  ColorLightOrange,
  ColorLightOrange2,
  ColorOrange,
  ColorOrange2,
} from "../assets/styles/color";

const IconColor = "#637381";
const currentUrl = window.location.href;
console.log("IIII", currentUrl);

export const viewIcon = <MdOutlineRemoveRedEye />;
export const editIcon = <FiEdit3 />;
export const deleteIcon = <RiDeleteBin5Line />;
export const saveIcon = <LiaSaveSolid />;
export const plusIcon = <FiPlus />;
export const DashBoardIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={IconColor}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-pie-chart"
  >
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
    <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
  </svg>
);
export const productIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={IconColor}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-shopping-bag"
  >
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);
export const PosIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={IconColor}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-table"
  >
    <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>
  </svg>
);
export const OrdersIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={IconColor}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-shopping-cart"
  >
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);
export const StocksIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={IconColor}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-database"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);
export const RefundsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={IconColor}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-corner-up-left"
  >
    <polyline points="9 14 4 9 9 4"></polyline>
    <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
  </svg>
);
export const Reaward_WalletIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={IconColor}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-award"
  >
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);
export const CustomersIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={IconColor}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-users"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);
export const StaffsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={IconColor}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-user-check"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="8.5" cy="7" r="4"></circle>
    <polyline points="17 11 19 13 23 9"></polyline>
  </svg>
);
export const DeliveryMenIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={IconColor}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-send"
  >
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

export const OrdersCardIcon = [
  {
    label: "Total Orders",
    icon: <RiShoppingBag3Line color={ColorGreen} />,
    iconBackground: ColorLightGreen,
  },
  {
    label: "Order Processing",
    icon: <MdAccessTime color={ColorBlue} />,
    iconBackground: ColorLightBlue,
  },
  {
    label: "Order Pending",
    icon: <FiRefreshCw color={ColorOrange} />,
    iconBackground: ColorLightOrange,
  },
  {
    label: "Total Delivered",
    icon: <MdOutlineTaskAlt color={ColorGreen2} />,
    iconBackground: ColorLightGreen2,
  },
  {
    label: "Picked Up Orders",
    icon: <IoMdArrowDown color={ColorBlue} />,
    iconBackground: ColorLightBlue,
  },
  {
    label: "Cancelled Orders",
    icon: <IoClose color={ColorOrange2} />,
    iconBackground: ColorLightOrange2,
  },
  {
    label: "Out Of Delivery",
    icon: <FiTruck color={ColorOrange} />,
    iconBackground: ColorLightOrange,
  },
  {
    label: "Paid Orders",
    icon: <FiDollarSign color={ColorGreen2} />,
    iconBackground: ColorLightGreen2,
  },
  {
    label: "Unpaid Orders",
    icon: <FiCreditCard color={ColorBlue} />,
    iconBackground: ColorLightBlue,
  },
  {
    label: "Today's Earnings",
    icon: <FiCalendar color={ColorOrange2} />,
    iconBackground: ColorLightOrange2,
  },
  {
    label: "Today's Pending Earnings",
    icon: <CiPause1 color={ColorOrange} />,
    iconBackground: ColorLightOrange,
  },
  {
    label: "This Year Earning",
    icon: <FiBarChart2 color={ColorGreen2} />,
    iconBackground: ColorLightGreen2,
  },
  {
    label: "Total Earnings",
    icon: <FiDollarSign color={ColorBlue} />,
    iconBackground: ColorLightBlue,
  },
  {
    label: "Total Product Sale",
    icon: <LuShoppingCart color={ColorOrange2} />,
    iconBackground: ColorLightOrange2,
  },
  {
    label: "Today's Product Sale",
    icon: <FiCalendar color={ColorOrange} />,
    iconBackground: ColorLightOrange,
  },
  {
    label: "This Month's Product Sale",
    icon: <MdOutlineTaskAlt color={ColorGreen2} />,
    iconBackground: ColorLightGreen2,
  },
  {
    label: "This Year's Product Sale",
    icon: <RiPulseFill color={ColorBlue} />,
    iconBackground: ColorLightBlue,
  },
  {
    label: "Total Customers",
    icon: <HiOutlineUserGroup color={ColorOrange2} />,
    iconBackground: ColorLightOrange2,
  },
  {
    label: "Total Subscribers",
    icon: <SlUserFollowing color={ColorOrange} />,
    iconBackground: ColorLightOrange,
  },
];
