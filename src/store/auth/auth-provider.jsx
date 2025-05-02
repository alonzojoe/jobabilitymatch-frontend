import AuthContext from "@/store/auth/auth-context";
import { useState } from "react";

const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  const storeAuthUser = (userData) => {
    if (JSON.stringify(authUser) !== JSON.stringify(userData)) {
      setAuthUser(userData);
    }
  };

  const clearAuthUser = () => {
    setAuthUser(null);
  };

  const authData = {
    authUser,
    storeAuthUser,
    clearAuthUser,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
