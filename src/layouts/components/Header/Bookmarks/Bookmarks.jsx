import { useContext, useMemo, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import JobApplicationContext from "@/store/jobapplication/jobapplication-context";
import Modal from "@/components/UI/Modal";
import JobDetails from "@/pages/Feed/components/JobDetails";
import PageHeader from "@/components/Global/PageHeader";
import { JobFeedItem } from "@/pages/Feed/components/JobPostingList";

const Bookmarks = ({ onClose }) => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [bookmarks, setBookmarks] = useLocalStorage("user-bookmark", []);
  const { addBookmark, removeBookmark } = useContext(JobApplicationContext);

  const hasBookMark = useMemo(() => {
    return (job) => bookmarks?.some((b) => b.id === job?.id) || false;
  }, [bookmarks]);

  const onView = (job) => {
    setSelectedJob(job);
  };

  const rmBookmark = (jobId) => {
    setBookmarks((prev) => prev.filter((job) => job.id !== jobId));
    removeBookmark(jobId);
  };

  return (
    <>
      {selectedJob && (
        <Modal
          higher={true}
          isJobModal={false}
          onClose={() => setSelectedJob(null)}
          isHidden={true}
        >
          <JobDetails
            loading={false}
            selectedJob={selectedJob}
            onSetJob={setSelectedJob}
          />
        </Modal>
      )}
      <Modal onClose={onClose}>
        <>
          <PageHeader title={`Saved Jobs (${bookmarks.length})`} />
          <div className="row mt-4">
            {bookmarks.length > 0 ? (
              bookmarks.map((job) => (
                <div className="col-sm-12 col-md-6 col-lg-6" key={job.id}>
                  <JobFeedItem
                    job={job}
                    selectedJob={selectedJob}
                    onView={onView}
                    hasBookMark={hasBookMark}
                    removeBookmark={rmBookmark}
                    addBookmark={addBookmark}
                  />
                </div>
              ))
            ) : (
              <div className="col-12">
                <div className="text-center text-custom fs-5 fw-semibold">
                  Looks like you haven't saved any jobs.
                </div>
              </div>
            )}
          </div>
        </>
      </Modal>
    </>
  );
};

export default Bookmarks;
