import { LoadingRow, ErrorRow, EmptyRow } from "@/components/Data/TableData";
import { FaTrashAlt, FaEdit, FaArrowUp, FaArrowDown } from "react-icons/fa";

const DisabilityTypeList = ({
  loading,
  error,
  disabilityTypes,
  onUpdate,
  onDelete,
  onChangeStatus,
}) => {
  return (
    <table className="table table-striped table-bordered table-td-valign-middle dataTable no-footer dtr-inline collapsed">
      <thead>
        <tr>
          <th className="text-center font-weight-bold fs-7" width="20%">
            ID
          </th>
          <th className="text-center font-weight-bold fs-7" width="50%">
            Disablity Type
          </th>
          <th className="text-center font-weight-bold fs-7" width="30%">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {loading && <LoadingRow colSpan={7} />}
        {error && <ErrorRow colSpan={7} />}
        {!loading && !error && disabilityTypes?.data?.length === 0 && (
          <EmptyRow colSpan={7} />
        )}
        {!loading &&
          !error &&
          disabilityTypes?.data?.length > 0 &&
          disabilityTypes.data.map((d) => (
            <tr key={d.id}>
              <td className="text-center font-weight-bold fs-7">{d.id}</td>
              <td className="text-center font-weight-bold fs-7">{d.name}</td>
              <td className="text-center font-weight-bold fs-7">
                <div className="d-flex justify-content-center flex-column align-items-center gap-2">
                  <button
                    className="btn btn-warning btn-sm w-100"
                    type="button"
                    onClick={() => onUpdate(d)}
                  >
                    <FaEdit className="fs-6" /> Update
                  </button>
                  {d.status === 1 ? (
                    <button
                      className="btn btn-danger btn-sm w-100"
                      type="button"
                      onClick={() => onChangeStatus(d.id, d.status)}
                    >
                      <FaArrowDown className="fs-6" /> Archived
                    </button>
                  ) : (
                    <button
                      className="btn btn-success btn-sm w-100"
                      type="button"
                      onClick={() => onChangeStatus(d.id, d.status)}
                    >
                      <FaArrowUp className="fs-6" /> Unarchived
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default DisabilityTypeList;
