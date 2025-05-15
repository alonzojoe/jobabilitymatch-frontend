import { useContext } from "react";
import AuthContext from "@/store/auth/auth-context";
import JobApplicationContext from "@/store/jobapplication/jobapplication-context";
import Card from "@/components/UI/Card";
import SkeletonCard from "@/components/Loaders/SkeletonCard";
import { ConfirmDialog, ToastMessage, capitalized } from "@/libs/utils";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { MdSend, MdOutlineCheck } from "react-icons/md";
import api from "@/services/api";

const dialog = new ConfirmDialog();
const notify = new ToastMessage();
const JobDetails = ({ loading, selectedJob, onSetJob }) => {
  const { authUser } = useContext(AuthContext);
  const { applications, refresh, bookmarks, addBookmark, removeBookmark } =
    useContext(JobApplicationContext);

  const hasApplied =
    applications?.some((a) => a.job_posting_id === selectedJob?.id) || false;

  const hasBookMark = bookmarks?.some((b) => b.id === selectedJob?.id) || false;

  const isAppliable =
    selectedJob?.active === 1 && authUser && authUser.role_id == 2;

  const handleApply = (job) => {
    const data = { user_id: authUser.id, job_posting_id: job.id };

    dialog
      .confirm(
        "question",
        "Confirmation",
        "Are you sure you want to apply? Your profile will be sent to the employer."
      )
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            await api.post(`/applicant/create`, data);
            notify.notif("success", "Application sent successfully!");
            refresh();
          } catch (error) {
            notify.notif("error", `Something went wrong: ${error?.message}`);
          }
        }
      });
  };

  if (loading) return <SkeletonCard height="112px" />;
  return (
    <Card title="Job Details">
      <div className="selected-job position-relative">
        {selectedJob ? (
          <>
            {/* {JSON.stringify(applications)} */}
            <span
              onClick={() => onSetJob(null)}
              className="position-absolute"
              style={{
                fontSize: "20px",
                top: "-20px",
                right: "-18px",
                zIndex: "1000",
                fontWeight: "bold",
              }}
            >
              <IoIosCloseCircle className="fw-bolder text-pink cst-close fs-2" />
            </span>
            <div className="d-flex align-items-center justify-content-between">
              <h3 className="fs-4 font-weight-bold text-dark">
                {capitalized(selectedJob.title)}
              </h3>
            </div>
            <span className="d-block d-flex align-items-center gap-1 fs-6">
              <i className="ti ti-buildings"></i>
              {capitalized(selectedJob?.company?.name)}
            </span>
            <span className="d-block d-flex align-items-center gap-1 fs-6 text-capitalize">
              <i className="ti ti-map-pin"></i>
              {capitalized(selectedJob?.company?.address)}
            </span>
            <h5 className="my-4">
              <div className="d-flex align-items-center justify-content-between">
                {selectedJob.active === 2 && (
                  <span className="label label-blood text-bl fs-6">
                    No longer accepting applicants
                  </span>
                )}
                {isAppliable && (
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-custom btn-lg d-flex align-items-center gap-1"
                      onClick={() => handleApply(selectedJob)}
                      disabled={hasApplied}
                    >
                      {hasApplied ? (
                        <MdOutlineCheck className="fs-6" />
                      ) : (
                        <MdSend className="fs-6" />
                      )}
                      {hasApplied ? "Applied" : "Apply now"}
                    </button>
                    <button
                      className="btn btn-secondary btn-lg"
                      onClick={() =>
                        hasBookMark
                          ? removeBookmark(selectedJob?.id)
                          : addBookmark(selectedJob)
                      }
                    >
                      <span className="">
                        {hasBookMark ? <FaBookmark /> : <FaRegBookmark />}
                      </span>
                    </button>
                  </div>
                )}
                {selectedJob.active === 1 && (
                  <span className="label label-custom text-gr fs-6">
                    Vacant Position/s: {selectedJob.vacant_positions}
                  </span>
                )}
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
