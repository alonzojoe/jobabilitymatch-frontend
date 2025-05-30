import React, { useState, useRef } from "react";
import SearchInput from "@/pages/Feed/components/SearchInput";
import Modal from "@/components/UI/Modal";
import useFetch from "@/hooks/useFetch";
import JobPostingList from "@/pages/Feed/components/JobPostingList";
import JobDetails from "@/pages/Feed/components/JobDetails";
import JobPostingTab from "@/pages/Feed/components/JobPostingTab";
import Pagination from "@/components/UI/Pagination";
import { getLocalStorage, isPWD } from "@/libs/utils";

const authUser = getLocalStorage("auth-user");

const initialParams = {
  searchQuery: "",
  page: 1,
  rand: 0,
  endpoint: isPWD() ? `/posting/recommended/${authUser.id}` : "/posting",
};

console.log("getLcalStrage", authUser);
const Feed = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [params, setParams] = useState(initialParams);
  const jobDetailsTabRef = useRef();
  const searchRef = useRef(null);

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
    setParams({
      ...initialParams,
      rand: Math.floor(Math.random() * 100),
      endpoint:
        jobDetailsTabRef.current?.getCurrentTab() === 2
          ? `/posting/recommended/${authUser.id}`
          : "/posting",
    });
    setSelectedJob(null);
    searchRef.current?.clearQuery();
  };

  const handlePageChange = (page) => {
    setParams((prev) => ({
      ...prev,
      page,
    }));
  };

  return (
    <>
      {selectedJob && (
        <Modal
          isJobModal={true}
          onClose={() => setSelectedJob(null)}
          isHidden={true}
        >
          <JobDetails
            loading={loading}
            selectedJob={selectedJob}
            onSetJob={setSelectedJob}
          />
        </Modal>
      )}

      <SearchInput
        ref={searchRef}
        onSearch={handleSearch}
        onReset={setSelectedJob}
      />
      <JobPostingTab
        ref={jobDetailsTabRef}
        authUser={authUser}
        onSelect={handleSelect}
        onRefresh={handleRefresh}
        setSelected={setSelectedJob}
      />
      <div className="mt-2">
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
        <div className="mt-2">
          {!loading && jobPostings?.data?.length > 0 && (
            <Pagination
              showInfo={false}
              totalRecords={jobPostings.total_items}
              currentPage={params.page}
              totalPages={jobPostings.total_pages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Feed;
