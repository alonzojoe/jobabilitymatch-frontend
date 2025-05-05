import React, { useState } from "react";
import SearchInput from "@/pages/Feed/components/SearchInput";
import Modal from "@/components/UI/Modal";
import useFetch from "@/hooks/useFetch";
import JobPostingList from "@/pages/Feed/components/JobPostingList";
import JobDetails from "@/pages/Feed/components/JobDetails";
import JobPostingTab from "@/pages/Feed/components/JobPostingTab";

const initialParams = {
  searchQuery: "",
  page: 1,
  rand: 0,
  endpoint: "/posting",
};

const Feed = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [params, setParams] = useState(initialParams);

  const {
    data: jobPostings,
    loading,
    error,
  } = useFetch(params.endpoint, params, 2000);

  React.useEffect(() => {
    document.body.style.backgroundColor = "#F8F7FA";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const viewDetails = (job) => {
    setSelectedJob(job);
  };

  const handleSearch = (query) => {
    setParams((prev) => ({ ...prev, searchQuery: query }));
  };

  const handleSelect = (endpoint) => {
    setParams({
      ...initialParams,
      endpoint,
    });
  };

  const handleRefresh = () => {
    console.log("page refresh");
    setParams({ ...initialParams, rand: Math.floor(Math.random() * 100) });
  };

  return (
    <>
      {selectedJob && (
        <Modal isJobModal={true} onClose={() => setSelectedJob(null)}>
          <JobDetails
            loading={loading}
            selectedJob={selectedJob}
            onSetJob={setSelectedJob}
          />
        </Modal>
      )}
      <SearchInput onSearch={handleSearch} />
      <JobPostingTab onSelect={handleSelect} />
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
              error={error}
              loading={loading}
              selectedJob={selectedJob}
              jobPostings={jobPostings}
              onView={viewDetails}
              query={params.searchQuery}
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
            <JobDetails
              loading={loading}
              selectedJob={selectedJob}
              onSetJob={setSelectedJob}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
