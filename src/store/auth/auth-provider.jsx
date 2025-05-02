import AuthContext from "@/store/auth/auth-context";
import { useState } from "react";
const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  const storeAuthUser = (userData) => {
    if (JSON.stringify(authUser) !== JSON.stringify(userData)) {
      setAuthUser(userData);
    }
  };

  const authData = {
    authUser,
    storeAuthUser,
    clearAuthUser,
  };

  const clearAuthUser = () => {
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
