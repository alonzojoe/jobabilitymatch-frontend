import { useState } from "react";
import Panel from "@/components/UI/Panel";
import { FaSearch } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";

const initialState = {
  title: "",
  description: "",
  active: 0,
};

const SearchJobPosting = ({ onSearch, onRefresh }) => {
  const [params, setParams] = useState(initialState);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(params);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Panel title="Search">
      <form className="pd-2" onSubmit={handleSearch}>
        <div className="row mb-3">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">
                Job Title
              </label>
              <input
                type="text"
                name="title"
                className="form-control form-control-sm custom-font"
                value={params.title}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">
                Job Description
              </label>
              <input
                type="text"
                name="description"
                className="form-control form-control-sm custom-font"
                value={params.description}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">Status</label>
              <select
                name="active"
                className="form-control"
                value={params.active}
                onChange={handleChange}
              >
                <option value={0}>Please Select</option>
                <option value={1}>Open</option>
                <option value={2}>Close</option>
              </select>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
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
                  setParams(initialState);
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
    </Panel>
  );
};

export default SearchJobPosting;
