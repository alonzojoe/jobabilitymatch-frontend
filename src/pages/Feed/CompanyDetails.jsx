import { useParams } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import { capitalized } from "@/libs/utils";
const CompanyDetails = () => {
  const { id: company_id } = useParams();

  const {
    data: details,
    loading,
    error,
  } = useFetch(`/company/${company_id}`, null);

  const company = details?.data;

  return (
    <>
      <div className="mt-3  ">
        <h2 className="d-flex gap-2">
          <i className="ti ti-buildings"></i>
          {capitalized(company?.name)}
        </h2>
      </div>
      <div className="rec-container">
        <h3 className="fw-bold mb-0 pb-2 text-center rec-text cursor-pointer"></h3>
      </div>
    </>
  );
};

export default CompanyDetails;
