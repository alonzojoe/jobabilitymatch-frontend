import { useState } from "react";
import moment from "moment";
import { LoadingRow, ErrorRow, EmptyRow } from "@/components/Data/TableData";
import { FaTrashAlt, FaEdit, FaEye } from "react-icons/fa";
import Modal from "@/components/UI/Modal";
import PageHeader from "@/components/Global/PageHeader";
import api from "@/services/api";
import { ToastMessage } from "@/libs/utils";

const notify = new ToastMessage();

const JobPostingList = ({
  loading,
  error,
  jobPostings,
  onUpdate,
  onDelete,
  onRefresh,
}) => {
  const [viewData, setViewData] = useState(null);

  const handleClose = () => {
    setViewData(null);
  };

  const changeStatus = async (e) => {
    const { id, value } = e.target;
    console.log(id, value);
    try {
      await api.patch(`/posting/status/${id}`, {
        active: value,
      });
      const msg = value == 1 ? "active" : "inactive";
      notify.notif("success", `Job posting set to ${msg}`);
      onRefresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {viewData && (
        <Modal onClose={handleClose}>
          <>
            <PageHeader title="Job Description" />
            <div dangerouslySetInnerHTML={{ __html: viewData }} />
          </>
        </Modal>
      )}

      <table className="table table-striped table-bordered table-td-valign-middle dataTable no-footer dtr-inline collapsed">
        <thead>
          <tr>
            <th className="text-center font-weight-bold fs-7">ID</th>
            <th className="text-center font-weight-bold fs-7">Job Title</th>
            <th className="text-center font-weight-bold fs-7">
              Job Description
            </th>
            <th className="text-center font-weight-bold fs-7">
              Vacant Position/s
            </th>
            <th className="text-center font-weight-bold fs-7">Status</th>
            <th className="text-center font-weight-bold fs-7">Date Posted</th>
            <th className="text-center font-weight-bold fs-7">Action</th>
          </tr>
        </thead>
        <tbody>
          {loading && <LoadingRow colSpan={7} />}
          {error && <ErrorRow colSpan={7} />}
          {!loading && !error && jobPostings?.data?.length === 0 && (
            <EmptyRow colSpan={7} />
          )}
          {!loading &&
            !error &&
            jobPostings?.data?.length > 0 &&
            jobPostings.data.map((d) => (
              <tr key={d.id}>
                <td className="text-center font-weight-bold fs-7">{d.id}</td>
                <td className="text-center font-weight-bold fs-7">{d.title}</td>
                <td className="text-center font-weight-bold fs-7">
                  <button
                    className="btn btn-purple"
                    type="button"
                    onClick={() => setViewData(d.description)}
                  >
                    <FaEye className="fs-6" /> View
                  </button>
                </td>
                <td className="text-center font-weight-bold fs-7">
                  {d.vacant_positions}
                </td>
                <td className="text-center ">
                  {/* {d.active} */}

                  <select
                    className="form-control fs-7 font-weight-bold"
                    onChange={changeStatus}
                    id={d.id}
                    defaultValue={d.active}
                  >
                    <option value={1}>Active</option>
                    <option value={2}>Inactive</option>
                  </select>
                </td>
                <td className="text-center font-weight-bold fs-7">
                  {moment(d.created_at).format("lll")}
                </td>
                <td className="text-center font-weight-bold fs-7">
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <button
                      className="btn btn-warning"
                      type="button"
                      onClick={() => onUpdate(d)}
                    >
                      <FaEdit className="fs-6" /> Update
                    </button>
                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={() => onDelete(d.id)}
                    >
                      <FaTrashAlt className="fs-6" /> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default JobPostingList;
