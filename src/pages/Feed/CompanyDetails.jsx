import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import { capitalized } from "@/libs/utils";
import { MdSend } from "react-icons/md";
import Card from "@/components/UI/Card";
import DetailsHeader from "./components/DetailsHeader";
import AboutCompany from "./components/AboutCompany";
import Modal from "@/components/UI/Modal";
import JobDetails from "@/pages/Feed/components/JobDetails";
import CompanyDetailsLoader from "@/pages/Feed/components/CompanyDetailsLoader";
const CompanyDetails = () => {
  const { id: company_id } = useParams();
  const [selectedJob, setSelectedJob] = useState(null);
  const {
    data: details,
    loading,
    error,
  } = useFetch(`/company/${company_id}`, null, 2000);

  const company = details?.data;

  const employer = `${company?.user?.lastname}, ${company?.user.firstname} ${company?.user.middlename}`;

  const jobPostings = company?.job_postings ?? [];

  const viewDetails = (job) => {
    console.log("job", job);
    setSelectedJob(job);
  };

  return (
    <>
      {selectedJob && (
        <Modal isHidden={true} onClose={() => setSelectedJob(null)}>
          <JobDetails
            loading={loading}
            selectedJob={selectedJob}
            onSetJob={setSelectedJob}
          />
        </Modal>
      )}
      {loading ? (
        <CompanyDetailsLoader />
      ) : (
        <div className="cmp-container">
          <DetailsHeader company={company} />
          <AboutCompany company={company} employer={employer} />
          <div className="mt-4">
            <h2 className="text-dark mt-5">
              Job postings ({company?.job_postings_count})
            </h2>
            <div className="row mt-3">
              <div className="col-md-12">
                <div className="company-job-container">
                  {jobPostings.length > 0 ? (
                    jobPostings.map((job) => (
                      <JobItem
                        job={job}
                        company={company}
                        onView={viewDetails}
                        key={job.id}
                      />
                    ))
                  ) : (
                    <div className="text-center text-custom fs-5 fw-500">
                      No job postings yet.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const JobItem = ({ job, company, selectedJob, onView }) => {
  return (
    <Card key={1} title="Test" active={job.id === selectedJob?.id} cardW={true}>
      <div className="cursor-pointer" onClick={() => onView(job)}>
        <div className="d-flex align-items-center justify-content-between">
          <h3 className="fs-4 font-weight-bold text-dark fw-500">
            {job?.title}
          </h3>
        </div>
        <span className="d-block d-flex align-items-center gap-1 fs-6 text-capitalize">
          <i className="ti ti-buildings"></i>
          {capitalized(company?.name)}
        </span>
        <span className="d-block d-flex align-items-center gap-1 fs-6 text-capitalize">
          <i className="ti ti-map-pin"></i>
          {capitalized(company?.address)}
        </span>
        <h5 className="my-4">
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
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-custom btn d-flex align-items-center gap-1"
            disabled=""
          >
            <MdSend className="fs-6" /> View details
          </button>
        </div>
      </div>
    </Card>
  );
};

export default CompanyDetails;
