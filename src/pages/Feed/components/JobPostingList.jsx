import SkeletonCard from "@/components/Loaders/SkeletonCard";
import Card from "@/components/UI/Card";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";

const JobPostingList = ({ loading, jobPostings, onView, selectedJob }) => {
  if (loading) return <SkeletonCard count={10} />;
  if (!loading && jobPostings?.data?.length === 0)
    return (
      <div className="text-center text-custom fs-5 fw-semibold">
        No job postings yet. Please try again later.
      </div>
    );
  return (
    <>
      {jobPostings?.data?.map((job) => (
        <Card key={job.id} title="Test" active={job.id === selectedJob?.id}>
          <div className="cursor-pointer" onClick={() => onView(job)}>
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
                <span key={disability.id} className="label label-secondary">
                  {disability.name}
                </span>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default JobPostingList;
