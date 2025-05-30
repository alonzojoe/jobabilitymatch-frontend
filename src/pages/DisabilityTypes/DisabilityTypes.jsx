import useToggle from "@/hooks/useToggle";
import { useState } from "react";
import useFetch from "@/hooks/useFetch";
import api from "@/services/api";
import PageHeader from "@/components/Global/PageHeader";
import Panel from "@/components/UI/Panel";
import DisabilityTypeForm from "@/pages/DisabilityTypes/components/DisabilityTypeForm";
import SearchDisability from "@/pages/DisabilityTypes/components/SearchDisability";
import DisabilityTypeList from "@/pages/DisabilityTypes/components/DisabilityTypeList";
import Pagination from "@/components/UI/Pagination";
import { ConfirmDialog, ToastMessage } from "@/libs/utils";
import { FaPlus } from "react-icons/fa";

const initialParams = {
  name: "",
  page: 1,
  rand: 0.1,
};

const dialog = new ConfirmDialog();
const notify = new ToastMessage();

const DisabilityTypes = () => {
  const [showModal, toggleShowModal] = useToggle(false);
  const [params, setParams] = useState(initialParams);
  const [selected, setSelected] = useState(null);

  const {
    data: disabilityTypes,
    loading,
    error,
  } = useFetch(`/disability`, params);

  const handleRefresh = () => {
    console.log("page refresh");
    setParams({ ...initialParams, rand: Math.floor(Math.random() * 100) });
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

  const handleUpdate = (disability) => {
    console.log("update", disability);
    setSelected(disability);
    toggleShowModal(true);
  };

  const handleDelete = (id) => {
    dialog
      .confirm(
        "question",
        "Confirmation",
        "Are you sure to delete this disability type?"
      )
      .then(async (result) => {
        if (result.isConfirmed) {
          notify.notif("success", "Disability type deleted successfully!");
          try {
            await api.patch(`/disability/destroy/${id}`);
            handleRefresh();
          } catch (error) {
            notify.notif("error", `Something went wrong: ${error?.message}`);
          }
        }
      });
  };

  return (
    <>
      {showModal && (
        <DisabilityTypeForm
          selected={selected}
          onClose={() => {
            toggleShowModal(false);
            setSelected(null);
          }}
          onRefresh={handleRefresh}
        />
      )}
      <PageHeader title="Disability Types" />
      <SearchDisability onSearch={handleSearch} onRefresh={handleRefresh} />
      <div className="my-2 d-flex align-items-center justify-content-end">
        <button
          className="btn btn-primary btn-md d-flex align-items-center gap-1"
          onClick={() => toggleShowModal(true)}
        >
          <FaPlus className="fs-6" /> Add New
        </button>
      </div>
      <Panel>
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <DisabilityTypeList
                loading={loading}
                error={error}
                disabilityTypes={disabilityTypes}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
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
