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
    type: "employer",
  },
  {
    id: 7,
    name: "Job Postings",
    path: "/job-postings",
    // icon: MdOutlinePostAdd,
    icon: "ion-ios-create",
    color: "bg-primary",
    type: "employer",
  },
  {
    id: 8,
    name: "Applicants",
    path: "/applicants",
    // icon: FaUsersLine,
    icon: "ion-ios-walk",
    color: "bg-secondary",
    type: "employer",
  },
];

export const jobPostings = [
  {
    id: 1,
    title: "Food Crew",
    company: "Jollibee Food Corporation",
    location: "Dolores, City of San Fernando Pampanga",
    vacantPositions: 3,
    applicableFor: ["Hearing Disability", "Physical Disability"],
    description:
      "Prepare food items following company standards and ensure they meet quality and safety requirements. Engage with customers courteously and provide assistance with their needs. Maintain cleanliness in food preparation areas and adhere strictly to Jollibee's hygiene protocols. Handle cash transactions and support team members as needed. Applicants may walk in to Jollibee Food Corporation, Dolores, City of San Fernando Pampanga, and bring the following requirements: Resume, PWD ID, and other supporting documents. Note that applicants may bring 1 person to assist them during the application process.",
  },
  {
    id: 2,
    title: "Cashier",
    company: "McDonald's Philippines",
    location: "Sindalan, City of San Fernando Pampanga",
    vacantPositions: 2,
    applicableFor: ["Visual Disability", "Psychosocial Disability"],
    description:
      "Operate cash registers efficiently and manage financial transactions accurately. Provide prompt and friendly customer service by addressing inquiries and resolving minor issues. Ensure compliance with McDonald's billing and payment policies. Assist in maintaining cleanliness in customer areas during downtime. Applicants may walk in to McDonald's Philippines, Sindalan, City of San Fernando Pampanga, and bring the following requirements: Resume, PWD ID, and other supporting documents. Note that applicants may bring 1 person to assist them during the application process.",
  },
  {
    id: 3,
    title: "Service Crew",
    company: "Chowking",
    location: "San Agustin, City of San Fernando Pampanga",
    vacantPositions: 4,
    applicableFor: ["Learning Disability", "Mental Disability"],
    description:
      "Greet customers warmly and assist them with their orders. Serve food and beverages promptly while ensuring quality service. Help maintain cleanliness and organization in the dining area. Perform basic kitchen tasks such as food prep and cleanup when required. Applicants may walk in to Chowking, San Agustin, City of San Fernando Pampanga, and bring the following requirements: Resume, PWD ID, and other supporting documents. Note that applicants may bring 1 person to assist them during the application process.",
  },
  {
    id: 4,
    title: "Store Assistant",
    company: "Mang Inasal",
    location: "Telabastagan, City of San Fernando Pampanga",
    vacantPositions: 1,
    applicableFor: ["Orthopedic Disability", "Communication Disability"],
    description:
      "Support day-to-day operations by assisting with inventory management and organizing supplies. Provide excellent customer service and ensure guests' needs are met promptly. Help maintain store cleanliness and uphold Mang Inasal's operational standards. Assist in coordinating tasks with other team members. Applicants may walk in to Mang Inasal, Telabastagan, City of San Fernando Pampanga, and bring the following requirements: Resume, PWD ID, and other supporting documents. Note that applicants may bring 1 person to assist them during the application process.",
  },
  {
    id: 5,
    title: "Delivery Rider",
    company: "Pizza Hut",
    location: "Baliti, City of San Fernando Pampanga",
    vacantPositions: 2,
    applicableFor: ["Hearing Disability", "Chronic Illness"],
    description:
      "Deliver food orders safely and promptly to customers' locations while ensuring the correct order is delivered. Maintain delivery vehicles and equipment in top condition. Interact courteously with customers during delivery and handle any minor issues effectively. Assist in organizing delivery routes to improve efficiency. Applicants may walk in to Pizza Hut, Baliti, City of San Fernando Pampanga, and bring the following requirements: Resume, PWD ID, and other supporting documents. Note that applicants may bring 1 person to assist them during the application process.",
  },
];
