import PageHeader from "@/components/General/PageHeader";
import Panel from "@/components/UI/Panel";
import { FaSearch, FaTrashAlt, FaEdit } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import useToggle from "@/hooks/useToggle";
import Pagination from "@/components/UI/Pagination";
import { useState } from "react";
import AddDisabilityType from "@/pages/DisabilityTypes/components/AddDisabilityType";
import useFetch from "@/hooks/useFetch";
import { EmptyRow, ErrorRow, LoadingRow } from "@/components/Data/TableData";
import SearchDisability from "@/pages/DisabilityTypes/components/SearchDisability";

const initialParams = {
  name: "",
  page: 1,
  rand: 0.1,
};

const DisabilityTypes = () => {
  const [showModal, toggleShowModal] = useToggle(false);
  const [params, setParams] = useState(initialParams);

  const {
    data: disabilityTypes,
    loading,
    error,
  } = useFetch(`/disability`, params);

  const handleRefresh = () => {
    console.log("page refresh");
    setParams({ ...initialParams, rand: Math.floor(Math.random() * 100) }); // Random whole number (0-999)
  };

  const handlePageChange = (page) => {
    setParams((prev) => ({
      ...prev,
      page,
    }));
  };

  const handleSearch = (name) => {
    setParams((prev) => ({ ...prev, name }));
  };

  return (
    <>
      {showModal && (
        <AddDisabilityType
          onClose={() => toggleShowModal(false)}
          onRefresh={handleRefresh}
        />
      )}
      <PageHeader title="Disability Types" />
      <SearchDisability onSearch={handleSearch} onRefresh={handleRefresh} />
      <Panel>
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-td-valign-middle dataTable no-footer dtr-inline collapsed">
                <thead>
                  <tr>
                    <th
                      className="text-center font-weight-bold fs-7"
                      width="20%"
                    >
                      ID
                    </th>
                    <th
                      className="text-center font-weight-bold fs-7"
                      width="50%"
                    >
                      Disablity Type
                    </th>
                    <th
                      className="text-center font-weight-bold fs-7"
                      width="30%"
                    >
                      Option
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loading && <LoadingRow colSpan={7} />}
                  {error && <ErrorRow colSpan={7} />}
                  {!loading &&
                    !error &&
                    disabilityTypes?.data?.length === 0 && (
                      <EmptyRow colSpan={7} />
                    )}
                  {!loading &&
                    !error &&
                    disabilityTypes?.data?.length > 0 &&
                    disabilityTypes.data.map((d) => (
                      <tr key={d.id}>
                        <td className="text-center font-weight-bold fs-7">
                          {d.id}
                        </td>
                        <td className="text-center font-weight-bold fs-7">
                          {d.name}
                        </td>
                        <td className="text-center font-weight-bold fs-7">
                          <div className="d-flex justify-content-center align-items-center gap-2">
                            <button className="btn btn-warning" type="button">
                              <FaEdit className="fs-6" /> Update
                            </button>
                            <button className="btn btn-danger" type="button">
                              <FaTrashAlt className="fs-6" /> Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {!loading && disabilityTypes?.data?.length > 0 && (
                <Pagination
                  totalRecords={disabilityTypes.total_items}
                  currentPage={params.page}
                  totalPages={disabilityTypes.total_pages}
                  onPageChange={handlePageChange}
                />
              )}
            </div>
          </div>
        </div>
      </Panel>
    </>
  );
};

export default DisabilityTypes;
