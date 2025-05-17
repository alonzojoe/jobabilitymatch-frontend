import { capitalized } from "@/libs/utils";

const DetailsHeader = ({ company }) => {
  return (
    <>
      <h2 className="d-flex align-items-center gap-2">
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
          Overview
        </h4>
      </div>
    </>
  );
};

export default DetailsHeader;
