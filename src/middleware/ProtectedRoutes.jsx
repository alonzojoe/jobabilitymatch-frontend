import { Outlet, Navigate } from "react-router-dom";
import useAuthSetup from "@/hooks/useAuthSetup";
import { getLocalStorage } from "@/libs/utils";

const ProtectedRoutes = () => {
  const { isLoading } = useAuthSetup();
  const authUser = getLocalStorage("auth-user");

  if (isLoading) {
    return <div className="flicker-screen"></div>;
  }

  

  if (!authUser) {
    return (window.location.href = "/");
  }

  if (authUser.role_id === 2) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
