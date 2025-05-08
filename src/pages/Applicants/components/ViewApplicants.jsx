import { useState } from "react";
import moment from "moment";
import { LoadingRow, ErrorRow, EmptyRow } from "@/components/Data/TableData";
import SearchApplicants from "@/pages/Applicants/components/SearchApplicants";
import Modal from "@/components/UI/Modal";
import Pagination from "@/components/UI/Pagination";
import { ToastMessage } from "@/libs/utils";
import useFetch from "@/hooks/useFetch";
import api from "@/services/api";

const initialParams = {
  lastname: "",
  firstname: "",
  middlename: "",
  email: "",
  page: 1,
  rand: 1,
};

const notify = new ToastMessage();

const ViewApplicants = ({ onClose, job }) => {
  const [params, setParams] = useState(initialParams);

  const {
    data: applicants,
    loading,
    error,
  } = useFetch(`/applicant/job-posting/${job.id}`, params);

  console.log("applicants", applicants?.data);

  const handlePageChange = (page) => {
    setParams((prev) => ({
      ...prev,
      page,
    }));
  };

  const handleSearch = (params) => {
    setParams((prev) => ({ ...prev, ...params }));
  };

  const handleRefresh = () => {
    setParams({ ...initialParams, rand: Math.floor(Math.random() * 100) });
  };

  const changeStatus = async (e) => {
    const { id, value } = e.target;
    console.log(id, value);
    try {
      await api.patch(`/applicant/update/${id}`, {
        status: value,
      });
      notify.notif("success", `Applicant status set to ${value}`);
      handleRefresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal onClose={onClose}>
      <>
        <div className="mb-3">
          <h2 className="text-custom">{`Applicants applying for ${job.title}`}</h2>
          {/* <PageHeader title={`Applicants applying for ${job.title}`} /> */}
        </div>
        <SearchApplicants onSearch={handleSearch} onRefresh={handleRefresh} />
        <div className="my-2"></div>
        <table className="table table-striped table-bordered table-td-valign-middle dataTable no-footer dtr-inline collapsed">
          <thead>
            <tr>
              <th className="text-center font-weight-bold fs-7">Full Name</th>
              <th className="text-center font-weight-bold fs-7">Email</th>
              <th className="text-center font-weight-bold fs-7">Contact No.</th>
              <th className="text-center font-weight-bold fs-7">
                Date Applied
              </th>
              <th className="text-center font-weight-bold fs-7">Status</th>
            </tr>
          </thead>
          <tbody>
            {loading && <LoadingRow colSpan={7} />}
            {error && <ErrorRow colSpan={7} />}
            {!loading && !error && applicants?.data?.length === 0 && (
              <EmptyRow colSpan={7} />
            )}
            {!loading &&
              !error &&
              applicants?.data?.length > 0 &&
              applicants?.data.map((d) => (
                <tr key={d.id}>
                  <td className="text-center font-weight-bold fs-7">
                    {`${d?.user?.lastname}, ${d?.user?.firstname} ${d?.user?.lastname}`}
                  </td>
                  <td className="text-center font-weight-bold fs-7">
                    {d?.user?.email}
                  </td>
                  <td className="text-center font-weight-bold fs-">
                    {d?.user?.phone}
                  </td>
                  <td className="text-center font-weight-bold fs-7">
                    {moment(d.created_at).format("lll")}
                  </td>
                  <td className="text-center font-weight-bold fs-7">
                    <select
                      className="form-control fs-7 font-weight-bold"
                      onChange={changeStatus}
                      id={d.id}
                      defaultValue={d.status}
                    >
                      <option value={`Pending`}>Pending</option>
                      <option value={`Hired`}>Hired</option>
                      <option value={`Rejected`}>Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {!loading && applicants?.data?.length > 0 && (
          <Pagination
            totalRecords={applicants.total_items}
            currentPage={params.page}
            totalPages={applicants.total_pages}
            onPageChange={handlePageChange}
          />
        )}
      </>
    </Modal>
  );
};

export default ViewApplicants;
