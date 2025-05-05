import React, { useState, useContext } from "react";
import AuthContext from "@/store/auth/auth-context";
import SearchInput from "@/pages/Feed/components/SearchInput";
import Modal from "@/components/UI/Modal";
import useFetch from "@/hooks/useFetch";
import JobPostingList from "@/pages/Feed/components/JobPostingList";
import JobDetails from "@/pages/Feed/components/JobDetails";
import JobPostingTab from "@/pages/Feed/components/JobPostingTab";
import Pagination from "@/components/UI/Pagination";

const initialParams = {
  searchQuery: "",
  page: 1,
  rand: 0,
  endpoint: "/posting",
};

const Feed = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const { authUser } = useContext(AuthContext);
  console.log("feed", authUser);

  const [params, setParams] = useState(initialParams);

  // useEffect(() => {
  //   if (authUser) {
  //     setParams(() => ({
  //       ...initialParams,
  //       endpoint: authUser.id
  //         ? `/posting/recommended/${authUser.id}`
  //         : "/posting",
  //     }));
  //   }
  // }, [authUser]);

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
      endpoint: authUser.id
        ? `/posting/recommended/${authUser.id}`
        : "/posting",
    });
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
        <Modal isJobModal={true} onClose={() => setSelectedJob(null)}>
          <JobDetails
            loading={loading}
            selectedJob={selectedJob}
            onSetJob={setSelectedJob}
          />
        </Modal>
      )}
      <SearchInput onSearch={handleSearch} />
      <JobPostingTab
        authUser={authUser}
        onSelect={handleSelect}
        onRefresh={handleRefresh}
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
