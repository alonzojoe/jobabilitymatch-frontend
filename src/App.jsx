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
import Unauthorized from "@/pages/Unauthorized/Unauthorized";
import NotFound from "@/pages/NotFound/NotFound";
import Applicants from "@/pages/Applicants/Applicants";
import Companies from "@/pages/Companies/Companies";
import CompanyDetails from "@/pages/Feed/CompanyDetails";

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
          <Route path="/" element={<FeedLayout />}>
            <Route
              path=""
              element={
                <JobApplicationProvider>
                  <Feed />
                </JobApplicationProvider>
              }
            />
            <Route
              path="company/:name/:id"
              element={
                <JobApplicationProvider>
                  <CompanyDetails />
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
              <Route path="applicants" element={<Applicants />} />
              <Route path="companies" element={<Companies />} />
            </Route>
          </Route>
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
