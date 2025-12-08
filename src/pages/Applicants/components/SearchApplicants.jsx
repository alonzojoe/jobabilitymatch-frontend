import { useState } from "react";
import Card from "@/components/UI/Card";
import { FaSearch } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";

const initialParams = {
  query: "",
};

const SearchApplicants = ({ onSearch, onRefresh }) => {
  const [params, setParams] = useState(initialParams);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(params);
  };

  return (
    <Card>
      <form className="pd-0" onSubmit={handleSearch}>
        <div className="row mb-0">
          <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">
                Search Applicant:
              </label>
              <input
                type="text"
                name="query"
                className="form-control form-control-sm custom-font"
                value={params.query}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <div
              className="d-flex gap-2 align-items-center"
              style={{
                marginTop: "1.9rem",
              }}
            >
              <button
                className="btn btn-custom d-flex align-items-center gap-1"
                type="submit"
              >
                <FaSearch className="fs-6" /> Search
              </button>
              <button
                className="btn btn-pink"
                onClick={() => {
                  setParams(initialParams);
                  onRefresh();
                }}
                type="button"
              >
                <LuRefreshCcw className="fs-6" /> Refresh
              </button>
            </div>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default SearchApplicants;
