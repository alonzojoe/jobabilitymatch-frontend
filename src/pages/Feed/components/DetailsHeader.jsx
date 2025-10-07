import { capitalized } from "@/libs/utils";
import { ImArrowLeft } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const DetailsHeader = ({ company }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex align-items-center justify-content-end">
        <button
          className="btn btn-custom btn-lg d-flex align-items-center gap-2"
          onClick={() => navigate(-1)}
        >
          <ImArrowLeft />
          Back to Job Postings
        </button>
      </div>
      <h2 className="d-flex align-items-center gap-2">
        <div className="d-flex align-items-center gap-2">
          <i className="ti ti-buildings" style={{ fontSize: "5rem" }}></i>
          <div>
            <span className="d-block mb-0">{capitalized(company?.name)}</span>
            <span className="fs-5 fw-500 text-muted color-custom">
              {capitalized(company?.address)}
            </span>
          </div>
        </div>
      </h2>

      <div className="d-flex gap-3 mt-3">
        <h4 className="fw-bold mb-0 pb-2 text-center rec-text cursor-pointer active">
          Overview
        </h4>
      </div>
    </>
  );
};

export default DetailsHeader;
