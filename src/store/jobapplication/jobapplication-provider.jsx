import { useState, useEffect } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import api from "@/services/api";
import { getLocalStorage, ToastMessage } from "@/libs/utils";
import JobApplicationContext from "@/store/jobapplication/jobapplication-context";

const notify = new ToastMessage();

const JobApplicationProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);
  const [authUser, setAuthUser] = useState(getLocalStorage("auth-user"));
  const [bookmarks, setBookMarks] = useLocalStorage("user-bookmark", []);
  const getApplications = async () => {
    if (!authUser?.id) return;
    try {
      const res = await api(`/applicant/user/${authUser.id}`);
      setApplications(res.data.data);
    } catch (e) {
      notify.notif("error", "Something went wrong.");
    }
  };

  useEffect(() => {
    getApplications();
  }, [authUser]);

  const refresh = async () => {
    await getApplications();
  };

  const addBookmark = (jobDetails) => {
    setBookMarks((current) =>
      current.some((job) => job.id === jobDetails.id)
        ? current
        : [...current, jobDetails]
    );
    notify.notif("success", "Job posting bookmarked.");
  };

  const removeBookmark = (jobId) => {
    setBookMarks((current) => current.filter((job) => job.id !== jobId));
    notify.notif("success", "Job posting bookmark removed.");
  };

  const appData = {
    applications,
    refresh,
    bookmarks,
    addBookmark,
    removeBookmark,
  };

  return (
    <JobApplicationContext.Provider value={appData}>
      {children}
    </JobApplicationContext.Provider>
  );
};

export default JobApplicationProvider;
