import { useEffect, useContext, useState } from "react";
import { setupToken } from "@/services/api";
import AuthContext from "@/store/auth/auth-context";
import { getLocalStorage } from "@/libs/utils";

const useAuthSetup = () => {
  const { storeAuthUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authToken = getLocalStorage("auth-token");
    const authUser = getLocalStorage("auth-user");

    if (authToken && authUser) {
      storeAuthUser(authUser);
      setupToken(authToken);
    }

    setIsLoading(false);
  }, [storeAuthUser]);

  return { isLoading };
};

export default useAuthSetup;
