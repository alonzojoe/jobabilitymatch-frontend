import MainDashboard from "@/pages/Dashboard/components/MainDashboard";
import CompanyDashboard from "@/pages/Dashboard/components/CompanyDashboard";
import { getLocalStorage } from "@/libs/utils";
const Dashboard = () => {
  const authUser = getLocalStorage("auth-user");

  return authUser?.role_id == 1 ? <MainDashboard /> : <CompanyDashboard />;
};

export default Dashboard;
