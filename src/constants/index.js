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
    icon: AiFillDashboard,
    type: "admin",
  },
  {
    id: 2,
    name: "Users",
    path: "/users",
    icon: FaUsers,
    type: "admin",
  },
  {
    id: 3,
    name: "Companies",
    path: "/companies",
    icon: PiBuildingsFill,
    type: "admin",
  },
  {
    id: 4,
    name: "Roles",
    path: "/roles",
    icon: FaCogs,
    type: "admin",
  },
  {
    id: 5,
    name: "Disability Types",
    path: "/",
    icon: FaPersonWalkingWithCane,
    type: "admin",
  },
  {
    id: 6,
    name: "Disability Types",
    path: "/",
    icon: FaPersonWalkingWithCane,
    type: "admin",
  },
  {
    id: 7,
    name: "Dashboard",
    path: "/company-dashboard",
    icon: AiFillDashboard,
    type: "company",
  },
  {
    id: 8,
    name: "Job Postings",
    path: "/job-postings",
    icon: MdOutlinePostAdd,
    type: "company",
  },
  {
    id: 9,
    name: "Applicants",
    path: "/applicants",
    icon: FaUsersLine,
    type: "company",
  },
];
