import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "@/middleware/ProtectedRoutes";
import AppLayout from "@/layouts/AppLayout";
import Dashboard from "@/pages/Dashboard/Dashboard";
import FeedLayout from "@/layouts/FeedLayout";
import Feed from "@/pages/Feed/Feed";
import DisabilityTypes from "@/pages/DisabilityTypes/DisabilityTypes";
import Users from "@/pages/Users/Users";
import Roles from "@/pages/Roles/Roles";
import JobPostings from "@/pages/JobPostings/JobPostings";
import JobApplicationProvider from "@/store/jobapplication/jobapplication-provider";
import { Toaster } from "react-hot-toast";
function App() {
  useEffect(() => {
    document.body.classList.remove("pace-done");

    document.body.removeAttribute("data-new-gr-c-s-check-loaded");
    document.body.removeAttribute("data-gr-ext-installed");

    const paceElements = document.querySelectorAll(".pace");
    paceElements.forEach((el) => el.remove());
  }, []);

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<FeedLayout />}>
            <Route
              path=""
              element={
                <JobApplicationProvider>
                  <Feed />{" "}
                </JobApplicationProvider>
              }
            />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="home" element={<AppLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="roles" element={<Roles />} />
              <Route path="disability-types" element={<DisabilityTypes />} />
              <Route path="job-postings" element={<JobPostings />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
