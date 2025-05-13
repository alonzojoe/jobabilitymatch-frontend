import { LoadingRow, ErrorRow, EmptyRow } from "@/components/Data/TableData";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { formatDate } from "@/libs/utils";

const UserList = ({ loading, error, users, onUpdate, onDelete }) => {
  return (
    <table className="table table-striped table-bordered table-td-valign-middle dataTable no-footer dtr-inline collapsed">
      <thead>
        <tr>
          <th className="text-center font-weight-bold fs-7">ID</th>
          <th className="text-center font-weight-bold fs-7">Full Name</th>
          <th className="text-center font-weight-bold fs-7">Birthdate</th>
          <th className="text-center font-weight-bold fs-7">Gender</th>
          <th className="text-center font-weight-bold fs-7">Email</th>
          <th className="text-center font-weight-bold fs-7">Phone Number</th>
          <th className="text-center font-weight-bold fs-7">Role</th>
          <th className="text-center font-weight-bold fs-7">Option</th>
        </tr>
      </thead>
      <tbody>
        {loading && <LoadingRow colSpan={8} />}
        {error && <ErrorRow colSpan={8} />}
        {!loading && !error && users?.data?.length === 0 && (
          <EmptyRow colSpan={8} />
        )}
        {!loading &&
          !error &&
          users?.data?.length > 0 &&
          users.data.map((d) => (
            <tr key={d.id}>
              <td className="text-center font-weight-bold fs-7">{d.id}</td>
              <td className="text-center font-weight-bold fs-7">{`${d.lastname}, ${d.firstname} ${d.middlename}`}</td>
              <td className="text-center font-weight-bold fs-7">
                {formatDate(d.birthdate)}
              </td>
              <td className="text-center font-weight-bold fs-7">{d.gender}</td>
              <td className="text-center font-weight-bold fs-7">{d.email}</td>
              <td className="text-center font-weight-bold fs-7">{d.phone}</td>
              <td className="text-center font-weight-bold fs-7">
                {d?.role?.name}
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

export default UserList;
