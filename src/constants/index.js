import { AiFillDashboard } from "react-icons/ai";
import { FaUsers } from "react-icons/fa6";
import { PiBuildingsFill } from "react-icons/pi";
import { FaCogs } from "react-icons/fa";
import { FaPersonWalkingWithCane } from "react-icons/fa6";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaUsersLine } from "react-icons/fa6";

export const MENUS = [
  {
    id: 1,
    name: "Dashboard",
    path: "/home",
    // icon: AiFillDashboard,
    icon: "ion-ios-speedometer",
    color: "bg-danger",
    type: 1,
  },
  {
    id: 2,
    name: "Users",
    path: "/home/users",
    // icon: FaUsers,
    icon: "ion-ios-person-add",
    color: "bg-primary",
    type: 1,
  },
  {
    id: 3,
    name: "Companies",
    path: "/home/companies",
    // icon: PiBuildingsFill,
    icon: "ion-ios-business",
    color: "bg-success",
    type: 1,
  },
  {
    id: 4,
    name: "Roles",
    path: "/home/roles",
    // icon: FaCogs,
    icon: "ion-ios-settings",
    color: "bg-info",
    type: 1,
  },
  {
    id: 5,
    name: "Disability Types",
    path: "/home/disability-types",
    // icon: FaPersonWalkingWithCane,
    color: "bg-dark",
    icon: "ion-ios-cog",
    type: 1,
  },
  {
    id: 6,
    name: "Dashboard",
    path: "/home",
    // icon: AiFillDashboard,
    icon: "ion-ios-speedometer",
    color: "bg-danger",
    type: 3,
  },
  {
    id: 7,
    name: "Job Postings",
    path: "/home/job-postings",
    // icon: MdOutlinePostAdd,
    icon: "ion-ios-create",
    color: "bg-primary",
    type: 3,
  },
  {
    id: 8,
    name: "Applicants",
    path: "/home/applicants",
    // icon: FaUsersLine,
    icon: "ion-ios-walk",
    color: "bg-secondary",
    type: 3,
  },
];
