import Card from "@/components/UI/Card";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";

const JobDetails = ({ selectedJob, onSetJob }) => {
  return (
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
                onClick={() => onSetJob(null)}
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
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex gap-2">
                  <button className="btn btn-custom btn-lg">Apply now</button>
                  <button className="btn btn-secondary btn-lg">
                    <span className="">
                      <FaRegBookmark />
                    </span>
                  </button>
                </div>

                <span className="label label-custom text-gr fs-6">
                  Vacant Position/s: {selectedJob.vacant_positions}
                </span>
              </div>
            </h5>
            <div className="d-flex flex-wrap gap-2 fs-6">
              <span className="me-2">Applicable for:</span>
              {selectedJob?.disability_types.map((disability) => (
                <span key={disability.id} className="label label-secondary">
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
          <p className="fw-bold fs-5 fw-semibold text-custom text-center mt-3">
            Select a job to see details here.
          </p>
        )}
      </div>
    </Card>
  );
};

export default JobDetails;
