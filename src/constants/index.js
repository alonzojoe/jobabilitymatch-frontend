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
    path: "/",
    // icon: AiFillDashboard,
    icon: "ion-ios-speedometer",
    color: "bg-danger",
    type: "admin",
  },
  {
    id: 2,
    name: "Users",
    path: "/users",
    // icon: FaUsers,
    icon: "ion-ios-person-add",
    color: "bg-primary",
    type: "admin",
  },
  {
    id: 3,
    name: "Companies",
    path: "/companies",
    // icon: PiBuildingsFill,
    icon: "ion-ios-business",
    color: "bg-success",
    type: "admin",
  },
  {
    id: 4,
    name: "Roles",
    path: "/roles",
    // icon: FaCogs,
    icon: "ion-ios-settings",
    color: "bg-info",
    type: "admin",
  },
  {
    id: 5,
    name: "Disability Types",
    path: "/disability-types",
    // icon: FaPersonWalkingWithCane,
    color: "bg-dark",
    icon: "ion-ios-cog",
    type: "admin",
  },
  {
    id: 6,
    name: "Dashboard",
    path: "/company-dashboard",
    // icon: AiFillDashboard,
    icon: "ion-ios-speedometer",
    color: "bg-danger",
    type: "company",
  },
  {
    id: 7,
    name: "Job Postings",
    path: "/job-postings",
    // icon: MdOutlinePostAdd,
    icon: "ion-ios-create",
    color: "bg-primary",
    type: "company",
  },
  {
    id: 8,
    name: "Applicants",
    path: "/applicants",
    // icon: FaUsersLine,
    icon: "ion-ios-walk",
    color: "bg-secondary",
    type: "company",
  },
];
