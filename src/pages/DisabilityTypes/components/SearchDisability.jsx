import { useState } from "react";
import Panel from "@/components/UI/Panel";
import { FaSearch } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
const SearchDisability = ({ onSearch, onRefresh }) => {
  const [name, setName] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(name);
  };

  return (
    <Panel title="Search">
      <form className="pd-2" onSubmit={handleSearch}>
        <div className="row mb-3">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">
                Disability Type
              </label>
              <input
                type="text"
                className="form-control form-control-sm custom-font"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
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
                  setName("");
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

export default SearchDisability;
