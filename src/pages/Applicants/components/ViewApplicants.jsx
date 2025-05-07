import { useState } from "react";
import moment from "moment";
import { LoadingRow, ErrorRow, EmptyRow } from "@/components/Data/TableData";
import { FaWalking } from "react-icons/fa";
import Modal from "@/components/UI/Modal";
import PageHeader from "@/components/Global/PageHeader";
import api from "@/services/api";
import { ToastMessage } from "@/libs/utils";
import useFetch from "@/hooks/useFetch";
import Card from "@/components/UI/Card";
import { FaSearch } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";

const initialParams = {
  title: "",
  description: "",
  active: 0,
};
const ViewApplicants = ({ onClose, job, onSearch, onRefresh }) => {
  const [params, setParams] = useState(initialParams);

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

  const {
    data: applicants,
    loading,
    error,
  } = useFetch(`/applicant/job-posting/${job.id}}`);

  return (
    <Modal onClose={onClose}>
      <>
        <PageHeader title="Applicants" />
        <Card>
          <form className="pd-1" onSubmit={handleSearch}>
            <div className="row mb-0">
              <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
                <div>
                  <label className="form-label fs-6 mb-2 fw-semibold">
                    Last Name
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
              <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
                <div>
                  <label className="form-label fs-6 mb-2 fw-semibold">
                    First Name
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
              <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
                <div>
                  <label className="form-label fs-6 mb-2 fw-semibold">
                    Middle Name
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
              <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
                <div>
                  <label className="form-label fs-6 mb-2 fw-semibold">
                    Email
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
        <div className="my-2"></div>
        <table className="table table-striped table-bordered table-td-valign-middle dataTable no-footer dtr-inline collapsed">
          <thead>
            <tr>
              <th className="text-center font-weight-bold fs-7">ID</th>
              <th className="text-center font-weight-bold fs-7">Full Name</th>
              <th className="text-center font-weight-bold fs-7">Email</th>
              <th className="text-center font-weight-bold fs-7">Contact No.</th>
              <th className="text-center font-weight-bold fs-7">
                Date Applied
              </th>
              <th className="text-center font-weight-bold fs-7">Status</th>
            </tr>
          </thead>
        </table>
      </>
    </Modal>
  );
};

export default ViewApplicants;
