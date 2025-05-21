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

const basename = "";

export const adminRoutes = MENUS.filter(
  (menu) => menu.type === 1 && menu.path !== "/home"
).map((menu) => `${basename}${menu.path}`);

export const employerRoutes = MENUS.filter(
  (menu) => menu.type === 3 && menu.path !== "/home"
).map((menu) => `${basename}${menu.path}`);

console.log("route admin", adminRoutes);
console.log("route employer", employerRoutes);

export const dummyNotifs = [
  {
    id: 9,
    user_id: 2,
    job_posting_id: 2,
    status: "Hired",
    active: 0,
    created_at: "2025-05-19T02:29:02.000000Z",
    updated_at: "2025-05-19T05:14:45.000000Z",
    job_posting: {
      id: 2,
      title: "Food Crew",
    },
  },
  {
    id: 10,
    user_id: 2,
    job_posting_id: 3,
    status: "Pending",
    active: 1,
    created_at: "2025-05-18T14:15:32.000000Z",
    updated_at: "2025-05-18T14:15:32.000000Z",
    job_posting: {
      id: 3,
      title: "Cashier",
    },
  },
  {
    id: 11,
    user_id: 2,
    job_posting_id: 4,
    status: "For Interview",
    active: 1,
    created_at: "2025-05-17T08:30:45.000000Z",
    updated_at: "2025-05-18T10:00:00.000000Z",
    job_posting: {
      id: 4,
      title: "Sales Associate",
    },
  },
  {
    id: 12,
    user_id: 2,
    job_posting_id: 5,
    status: "Rejected",
    active: 0,
    created_at: "2025-05-16T11:45:23.000000Z",
    updated_at: "2025-05-19T03:20:11.000000Z",
    job_posting: {
      id: 5,
      title: "Customer Support",
    },
  },
];
