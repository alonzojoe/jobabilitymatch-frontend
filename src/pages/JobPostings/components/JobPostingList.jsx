import moment from "moment";
import { LoadingRow, ErrorRow, EmptyRow } from "@/components/Data/TableData";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const JobPostingList = ({
  loading,
  error,
  jobPostings,
  onUpdate,
  onDelete,
}) => {
  return (
    <table className="table table-striped table-bordered table-td-valign-middle dataTable no-footer dtr-inline collapsed">
      <thead>
        <tr>
          <th className="text-center font-weight-bold fs-7">ID</th>
          <th className="text-center font-weight-bold fs-7">Job Title</th>
          <th className="text-center font-weight-bold fs-7">
            Vacant Position/s
          </th>
          <th className="text-center font-weight-bold fs-7">Job Description</th>
          <th className="text-center font-weight-bold fs-7">Status</th>
          <th className="text-center font-weight-bold fs-7">Date Posted</th>
          <th className="text-center font-weight-bold fs-7">Options</th>
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
                {d.vacant_positions}
              </td>
              <td className="text-center font-weight-bold fs-7">
                {d.description}
              </td>
              <td className="text-center font-weight-bold fs-7">{d.active}</td>
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
  );
};

export default JobPostingList;
