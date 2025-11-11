import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import JobApplicationContext from "@/store/jobapplication/jobapplication-context";
import SkeletonCard from "@/components/Loaders/SkeletonCard";
import Card from "@/components/UI/Card";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { capitalized } from "@/libs/utils";
import { hiringDateFormatter } from "@/libs/utils";

const JobPostingList = ({
  error,
  loading,
  jobPostings,
  onView,
  selectedJob,
  query,
}) => {
  const { bookmarks, addBookmark, removeBookmark } = useContext(
    JobApplicationContext
  );

  console.log("receive", jobPostings);

  const hasBookMark = useMemo(() => {
    return (job) => bookmarks?.some((b) => b.id === job?.id) || false;
  }, [bookmarks]);

  if (loading) return <SkeletonCard count={10} />;
  if (!loading && error)
    return (
      <div className="text-center text-danger fs-5 fw-semibold">
        Something went wrong.
      </div>
    );
  if (!loading && jobPostings?.data?.length === 0)
    return (
      <div className="text-center text-custom fs-5 fw-semibold">
        {query
          ? "No job postings found. Try searching by job title, keyword, or company."
          : "No job postings yet. Please try again later."}
      </div>
    );
  return (
    <>
      {jobPostings?.data?.map((job) => (
        <JobFeedItem
          job={job}
          selectedJob={selectedJob}
          onView={onView}
          hasBookMark={hasBookMark}
          removeBookmark={removeBookmark}
          addBookmark={addBookmark}
          key={job.id}
        />
      ))}
    </>
  );
};

export const JobFeedItem = ({
  job,
  selectedJob,
  onView,
  hasBookMark,
  removeBookmark,
  addBookmark,
}) => {
  return (
    <Card key={job.id} title="Test" active={job.id === selectedJob?.id}>
      <div className="">
        <div className="d-flex align-items-center justify-content-between">
          <h3
            className="fs-4 font-weight-bold text-dark text-underline text-capitalize cursor-pointer"
            onClick={() => onView(job)}
          >
            {capitalized(job.title)}
          </h3>
          <span
            className="fs-3 cursor-pointer"
            onClick={() =>
              hasBookMark(job) ? removeBookmark(job.id) : addBookmark(job)
            }
          >
            {hasBookMark(job) ? <FaBookmark /> : <FaRegBookmark />}
          </span>
        </div>
        <span
          className="d-block d-flex align-items-center gap-1 fs-6 text-capitalize cursor-pointer"
          onClick={() => onView(job)}
        >
          <i className="ti ti-buildings"></i>

          {capitalized(job?.company?.name)}
          <Link to={`/company/${job?.company?.name}/${job?.company?.id}`}>
            <LuSquareArrowOutUpRight />
          </Link>
        </span>
        <span
          className="d-block d-flex align-items-center gap-1 fs-6 text-capitalize cursor-pointer"
          onClick={() => onView(job)}
        >
          <i className="ti ti-map-pin"></i>
          {capitalized(job?.company?.address)}
        </span>
        <span
          className="d-block d-flex align-items-center gap-1 fs-6 text-capitalize cursor-pointer"
          onClick={() => onView(job)}
        >
          <i className="ti ti-calendar"></i>
          Hiring:{" "}
          {`${hiringDateFormatter(job?.hiring_from)} - ${hiringDateFormatter(
            job?.hiring_to
          )}`}
        </span>
        <h5 className="my-4 cursor-pointer" onClick={() => onView(job)}>
          {job?.active === 2 ? (
            <span className="label label-blood text-bl fs-6">
              No longer accepting applicants
            </span>
          ) : (
            <span className="label label-custom text-gr fs-6">
              Vacant Position/s: {job.vacant_positions}
            </span>
          )}
        </h5>
        <div
          className="d-flex flex-wrap gap-2 fs-6 cursor-pointer"
          onClick={() => onView(job)}
        >
          <span className="me-2">Applicable for:</span>
          {job?.disability_types.map((disability) => (
            <span
              key={disability.id}
              className="label label-secondary cursor-pointer"
            >
              {disability.name}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default JobPostingList;
