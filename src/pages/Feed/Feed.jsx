import React, { useState } from "react";
import SearchInput from "@/pages/Feed/components/SearchInput";
// import { jobPostings } from "@/constants";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Card from "@/components/UI/Card";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import Modal from "@/components/UI/Modal";
import useToggle from "@/hooks/useToggle";
import useFetch from "@/hooks/useFetch";

const initialParams = {
  searchQuery: "",
  page: 1,
  rand: 0,
};

const Feed = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [modal, toggleModal] = useToggle(false);
  const [params, setParams] = useState(initialParams);

  const { data: jobPostings, loading, error } = useFetch(`/posting`, params);

  React.useEffect(() => {
    document.body.style.backgroundColor = "#F8F7FA";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const viewDetails = (job) => {
    setSelectedJob(job);
    // toggleModal(true);
  };

  return (
    <>
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
            {!loading &&
              jobPostings?.data?.map((job) => (
                <Card
                  key={job.id}
                  title="Test"
                  active={job.id === selectedJob?.id}
                >
                  <div
                    className="cursor-pointer"
                    onClick={() => viewDetails(job)}
                  >
                    <div className="d-flex align-items-center justify-content-between">
                      <h3 className="fs-4 font-weight-bold text-dark text-capitalize">
                        {job.title}
                      </h3>
                      <span className="fs-3">
                        <FaRegBookmark />
                      </span>
                    </div>
                    <span className="d-block d-flex align-items-center gap-1 fs-6 text-capitalize">
                      <i className="ti ti-buildings"></i>
                      {job?.company?.name}
                    </span>
                    <span className="d-block d-flex align-items-center gap-1 fs-6 text-capitalize">
                      <i className="ti ti-map-pin"></i>
                      {job?.company?.address}
                    </span>
                    <h5 className="my-4">
                      <span className="label label-custom text-gr fs-6">
                        Vacant Position/s: {job.vacant_positions}
                      </span>
                    </h5>
                    <div className="d-flex flex-wrap gap-2 fs-6">
                      <span className="me-2">Applicable for:</span>
                      {job?.disability_types.map((disability) => (
                        <span
                          key={disability.id}
                          className="label label-secondary"
                        >
                          {disability.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
          </div>
          <div className="col-md-6 col-lg-6 d-none d-md-block">
            <Card title="Job Details">
              <div className="selected-job">
                {selectedJob ? (
                  <>
                    <div className="d-flex align-items-center justify-content-between">
                      <h3 className="fs-4 font-weight-bold text-dark">
                        {selectedJob.title}
                      </h3>
                      <span
                        className="fs-3 font-weight-bold cursor-pointer text-danger"
                        onClick={() => setSelectedJob(null)}
                      >
                        <i className="ti ti-x"></i>
                      </span>
                    </div>
                    <span className="d-block d-flex align-items-center gap-1 fs-6">
                      <i className="ti ti-buildings"></i>
                      {selectedJob?.company?.name}
                    </span>
                    <span className="d-block d-flex align-items-center gap-1 fs-6 text-capitalize">
                      <i className="ti ti-map-pin"></i>
                      {selectedJob?.company?.address}
                    </span>
                    <h5 className="my-4">
                      <span className="label label-custom text-gr fs-6">
                        Vacant Position/s: {selectedJob.vacant_positions}
                      </span>
                    </h5>
                    <div className="d-flex flex-wrap gap-2 fs-6">
                      <span className="me-2">Applicable for:</span>
                      {selectedJob?.disability_types.map((disability) => (
                        <span
                          key={disability.id}
                          className="label label-secondary"
                        >
                          {disability.name}
                        </span>
                      ))}
                      <div className="description mt-2">
                        <hr />
                        <strong>Job Description: </strong>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: selectedJob.description,
                          }}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="fw-bold h4 text-center mt-3">
                    Select a job to see details here.
                  </p>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
