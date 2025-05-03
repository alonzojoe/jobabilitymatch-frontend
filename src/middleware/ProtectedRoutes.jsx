import { Outlet } from "react-router-dom";
import useAuthSetup from "@/hooks/useAuthSetup";
const ProtectedRoutes = () => {
  useAuthSetup();
  return <Outlet />;
};

export default ProtectedRoutes;
