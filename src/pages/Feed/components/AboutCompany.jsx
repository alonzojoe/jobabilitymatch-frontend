import { capitalized } from "@/libs/utils";
import { FaUserTie } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

const AboutCompany = ({ company, employer }) => {
  return (
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
        <span className="d-block d-flex align-items-center gap-1 fs-6 ml-3">
          <MdContactPhone />
          {`${company?.user?.phone} / ${company?.user.email}`}
        </span>
      </div>
    </div>
  );
};

export default AboutCompany;
