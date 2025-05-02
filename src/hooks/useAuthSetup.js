import { useEffect, useContext } from "react";
import { setupToken } from "@/services/api";
import AuthContext from "@/store/auth/auth-context";

const useAuthSetup = (authUser, authToken) => {
  const { storeAuthUser } = useContext(AuthContext);

  useEffect(() => {
    if (authToken && authUser) {
      storeAuthUser(authUser);
      setupToken(authToken);
    }
  }, [authUser, authToken, storeAuthUser]);
};

export default useAuthSetup;
