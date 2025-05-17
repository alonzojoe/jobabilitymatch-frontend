import { useParams } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import { capitalized } from "@/libs/utils";
import { FaUserTie } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
const CompanyDetails = () => {
  const { id: company_id } = useParams();

  const {
    data: details,
    loading,
    error,
  } = useFetch(`/company/${company_id}`, null);

  const company = details?.data;

  const employer = `${company?.user?.lastname}, ${company?.user.firstname} ${company?.user.middlename}`;

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
              <h3 className="text-dark">About the company:</h3>

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
              <h3 className="text-dark">Employer details:</h3>

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

          <h3 className="text-dark mt-5">Jobs</h3>
          <div className="row">
            <div className="col-md-12"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;
