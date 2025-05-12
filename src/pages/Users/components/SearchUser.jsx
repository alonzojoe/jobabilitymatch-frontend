import { useState } from "react";
import Panel from "@/components/UI/Panel";
import { FaSearch } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";

const initialState = {
  email: "",
  lastname: "",
  firstname: "",
  middlename: "",
  role_id: 0,
};
const SearchUser = ({ onSearch, onRefresh }) => {
  const [data, setData] = useState(initialState);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Panel title="Search">
      <form className="pd-2" onSubmit={handleSearch}>
        <div className="row mb-3">
          <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                className="form-control form-control-sm custom-font"
                value={data.lastname}
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
                value={data.firstname}
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
                value={data.middlename}
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
                value={data.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">Role</label>
              <select
                name="role_id"
                className="form-control form-control-sm custom-font"
                value={data.role_id}
                onChange={handleChange}
              >
                <option value={0}>Please select</option>
                <option value={1}>Administrator</option>
                <option value={2}>PWD</option>
                <option value={3}>Employer</option>
              </select>
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
                  setData(initialState);
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

export default SearchUser;
