import React, { useState } from "react";
import SearchInput from "@/pages/Feed/components/SearchInput";
import Modal from "@/components/UI/Modal";
import useFetch from "@/hooks/useFetch";
import JobPostingList from "@/pages/Feed/components/JobPostingList";
import JobDetails from "./components/JobDetails";

const initialParams = {
  searchQuery: "",
  page: 1,
  rand: 0,
};

const Feed = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [params, setParams] = useState(initialParams);

  const {
    data: jobPostings,
    loading,
    error,
  } = useFetch(`/posting`, params, 2000);

  React.useEffect(() => {
    document.body.style.backgroundColor = "#F8F7FA";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const viewDetails = (job) => {
    setSelectedJob(job);
  };

  return (
    <>
      {selectedJob && (
        <Modal isJobModal={true} onClose={() => setSelectedJob(null)}>
          <JobDetails selectedJob={selectedJob} onSetJob={setSelectedJob} />
        </Modal>
      )}
      <SearchInput />
      <div className="d-flex align-items-center gap-3 justify-content-center rec-container">
        <h3 className="fw-bold mb-0 pb-2 rec-text cursor-pointer">
          Recent Jobs Postings
        </h3>
        <h3 className="fw-bold mb-0 pb-2 rec-text cursor-pointer">
          Job Recommendations
        </h3>
      </div>
      <div className="mt-5">
        <div className="row">
          <div
            className="col-md-6 col-sm-12"
            style={{
              maxHeight: "80vh",
              overflowY: "auto",
              paddingRight: "1rem",
            }}
          >
            <JobPostingList
              loading={loading}
              selectedJob={selectedJob}
              jobPostings={jobPostings}
              onView={viewDetails}
            />
          </div>
          <div
            className="col-md-6 col-lg-6 d-none d-md-block"
            style={{
              maxHeight: "80vh",
              overflowY: "auto",
              paddingRight: "1rem",
            }}
          >
            <JobDetails selectedJob={selectedJob} onSetJob={setSelectedJob} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
