import { useState } from "react";
import Card from "@/components/UI/Card";
import { FaSearch } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";

const initialParams = {
  lastname: "",
  firstname: "",
  middlename: "",
  email: "",
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
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                className="form-control form-control-sm custom-font"
                value={params.lastname}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                className="form-control form-control-sm custom-font"
                value={params.firstname}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">
                Middle Name
              </label>
              <input
                type="text"
                name="middlename"
                className="form-control form-control-sm custom-font"
                value={params.middlename}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">Email</label>
              <input
                type="text"
                name="email"
                className="form-control form-control-sm custom-font"
                value={params.email}
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
