import { LoadingRow, ErrorRow, EmptyRow } from "@/components/Data/TableData";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const CompanyList = ({ loading, error, companies, onUpdate, onDelete }) => {
  return (
    <table className="table table-striped table-bordered table-td-valign-middle dataTable no-footer dtr-inline collapsed">
      <thead>
        <tr>
          <th className="text-center font-weight-bold fs-7">ID</th>
          <th className="text-center font-weight-bold fs-7">Company</th>
          <th className="text-center font-weight-bold fs-7">Emloyer</th>
          <th className="text-center font-weight-bold fs-7">
            Total Job Postings
          </th>
          <th className="text-center font-weight-bold fs-7">Option</th>
        </tr>
      </thead>
      <tbody>
        {loading && <LoadingRow colSpan={5} />}
        {error && <ErrorRow colSpan={5} />}
        {!loading && !error && companies?.data?.length === 0 && (
          <EmptyRow colSpan={5} />
        )}
        {!loading &&
          !error &&
          companies?.data?.length > 0 &&
          companies.data.map((d) => (
            <tr key={d.id}>
              <td className="text-center font-weight-bold fs-7">{d.id}</td>
              <td className="text-center font-weight-bold fs-7">{d.name}</td>
              <td className="text-center font-weight-bold fs-7">{`${d.user?.lastname}, ${d.user?.firstname} ${d.user?.middlename}`}</td>
              <td className="text-center font-weight-bold fs-7">
                {d.job_postings_count}
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
                  {/* <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => onDelete(d.id)}
                  >
                    <FaTrashAlt className="fs-6" /> Delete
                  </button> */}
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default CompanyList;
