import { useState, useEffect } from "react";
import api from "@/services/api";
import JobApplicationContext from "@/store/jobapplication/jobapplication-context";
import { getLocalStorage } from "@/libs/utils";

const JobApplicationProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);
  const [authUser, setAuthUser] = useState(getLocalStorage("auth-user"));

  const getApplications = async () => {
    if (!authUser?.id) return;
    try {
      const res = await api(`/applicant/user/${authUser.id}`);
      setApplications(res.data.data);
    } catch (e) {
      console.log("Something went wrong", e);
    }
  };

  useEffect(() => {
    getApplications();
  }, [authUser]);

  const refresh = async () => {
    await getApplications();
  };

  const appData = {
    applications,
    refresh,
  };

  return (
    <JobApplicationContext.Provider value={appData}>
      {children}
    </JobApplicationContext.Provider>
  );
};

export default JobApplicationProvider;
