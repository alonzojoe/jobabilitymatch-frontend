import React, { useState } from "react";
import SearchInput from "@/pages/Feed/components/SearchInput";
import { jobPostings } from "@/constants";
import Card from "@/components/UI/Card";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import Modal from "@/components/UI/Modal";
import MiniModal from "@/components/UI/ModalSm";
import MainLogo from "@/assets/images/logo-main.png";
import MainText from "@/assets/images/logo-text.png";

const Feed = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [modal, toggleModal] = useState(false);

  React.useEffect(() => {
    document.body.style.backgroundColor = "#F8F7FA";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const viewDetails = (job) => {
    setSelectedJob(job);
    toggleModal(true);
  };

  return (
    <>
      <MiniModal>
        <>
          <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
            {/* <img src={MainLogo} width="36" height="30" alt="app-logo" /> */}
            <img
              src={MainText}
              alt="app-text"
              style={{
                height: "auto",
                width: "160px",
              }}
            />
          </div>
          <h3 class="mb-2 font-weight-bold">
            Welcome! Sign in to get started.
          </h3>
          <p class="mb-2 text-secondary fs-6">
            Please sign-in to your account.
          </p>
          <form className="mb-3">
            <div className="mb-3 fv-plugins-icon-container">
              <label htmlFor="email" className="form-label fs-6">
                Email
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="email"
                data-has-listeners="true"
              />
              <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
            </div>

            <div className="mb-3 fv-plugins-icon-container">
              <label htmlFor="password" className="form-label fs-6">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="password"
                data-has-listeners="true"
              />
              <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
            </div>

            <div className="mb-4"></div>

            <button
              type="submit"
              className="btn btn-custom d-grid w-100 waves-effect waves-light"
            >
              Sign in
            </button>

            <input type="hidden" data-has-listeners="true" />
          </form>
          <div className="text-center">
            <span className="fs-6 text-secondary">New on our platform?</span>
            <div className="cursor-pointer text-primary fs-6">
              <span>Create an account</span>
            </div>
          </div>
        </>
      </MiniModal>
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
            {jobPostings.map((job) => (
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
                    <h3 className="fs-4 font-weight-bold text-dark">
                      {job.title}
                    </h3>
                    <span className="fs-3">
                      <FaRegBookmark />
                    </span>
                  </div>
                  <span className="d-block d-flex align-items-center gap-1 fs-6">
                    <i className="ti ti-buildings"></i>
                    {job.company}
                  </span>
                  <span className="d-block d-flex align-items-center gap-1 fs-6">
                    <i className="ti ti-map-pin"></i>
                    {job.location}
                  </span>
                  <h5 className="my-4">
                    <span className="label label-custom text-gr fs-6">
                      Vacant Position/s: {job.vacantPositions}
                    </span>
                  </h5>
                  <div className="d-flex flex-wrap gap-2 fs-6">
                    <span className="me-2">Applicable for:</span>
                    {job.applicableFor.map((disability, idx) => (
                      <span key={idx} className="label label-secondary">
                        {disability}
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
                        <i class="ti ti-x"></i>
                      </span>
                    </div>
                    <span className="d-block d-flex align-items-center gap-1 fs-6">
                      <i className="ti ti-buildings"></i>
                      {selectedJob.company}
                    </span>
                    <span className="d-block d-flex align-items-center gap-1 fs-6">
                      <i className="ti ti-map-pin"></i>
                      {selectedJob.location}
                    </span>
                    <h5 className="my-4">
                      <span className="label label-custom text-gr fs-6">
                        Vacant Position/s: {selectedJob.vacantPositions}
                      </span>
                    </h5>
                    <div className="d-flex flex-wrap gap-2 fs-6">
                      <span className="me-2">Applicable for:</span>
                      {selectedJob.applicableFor.map((disability, idx) => (
                        <span key={idx} className="label label-secondary">
                          {disability}
                        </span>
                      ))}
                      <div className="description mt-2">
                        <hr />
                        <strong>Job Description: </strong>
                        {selectedJob.description}
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
