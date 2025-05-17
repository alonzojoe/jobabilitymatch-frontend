import { useParams } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import { capitalized } from "@/libs/utils";
import { FaUserTie } from "react-icons/fa";
import { MdContactPhone, MdSend } from "react-icons/md";
import Card from "@/components/UI/Card";
const CompanyDetails = () => {
  const { id: company_id } = useParams();

  const {
    data: details,
    loading,
    error,
  } = useFetch(`/company/${company_id}`, null);

  const company = details?.data;

  const employer = `${company?.user?.lastname}, ${company?.user.firstname} ${company?.user.middlename}`;

  const jobPostings = company?.job_postings ?? [];
  return (
    <>
      <div className="cmp-container">
        <h2 className="d-flex align-items-center">
          <i className="ti ti-buildings" style={{ fontSize: "5rem" }}></i>
          <div>
            <span className="d-block mb-0">{capitalized(company?.name)}</span>
            <span className="fs-5 fw-500 text-muted color-custom">
              {capitalized(company?.address)}
            </span>
          </div>
        </h2>

        <div className="d-flex gap-3 mt-3">
          <h4 className="fw-bold mb-0 pb-2 text-center rec-text cursor-pointer active">
            Job Postings ({company?.job_postings_count})
          </h4>
        </div>
        <div className="mt-4">
          <div className="cmp-details-container mt-5">
            <div>
              <h2 className="text-dark">About the company:</h2>

              <span className="d-block d-flex align-items-center gap-1 fs-6 ml-3">
                <i className="ti ti-buildings"></i>
                {capitalized(company?.name)}
              </span>
              <span className="d-block d-flex align-items-center gap-1 fs-6 text-capitalize ml-3">
                <i className="ti ti-map-pin"></i>
                {capitalized(company?.address)}
              </span>
            </div>

            <div>
              <h2 className="text-dark">Employer details:</h2>

              <span className="d-block d-flex align-items-center gap-1 fs-6 ml-3">
                <FaUserTie />
                {capitalized(employer)}
              </span>
              <span className="d-block d-flex align-items-center gap-1 fs-6 text-capitalize ml-3">
                <MdContactPhone />
                {`${company?.user?.phone} / ${company?.user.email}`}
              </span>
            </div>
          </div>

          <h2 className="text-dark mt-5">Jobs</h2>
          <div className="row mt-3">
            <div className="col-md-12">
              <div className="company-job-container">
                {jobPostings.length > 0 ? (
                  jobPostings.map((job) => (
                    <JobItem job={job} company={company} key={job.id} />
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
    </>
  );
};

const JobItem = ({ job, company }) => {
  return (
    <Card key={1} title="Test" active={true} cardW={true}>
      <div className="cursor-pointer" onClick={() => {}}>
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
            class="btn btn-custom btn d-flex align-items-center gap-1"
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
