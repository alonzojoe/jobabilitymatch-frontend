import useToggle from "@/hooks/useToggle";
import { useState } from "react";
import useFetch from "@/hooks/useFetch";
import api from "@/services/api";
import PageHeader from "@/components/Global/PageHeader";
import Panel from "@/components/UI/Panel";
import RoleForm from "@/pages/Roles/components/RoleForm";
import SearchRole from "@/pages/Roles/components/SearchRole";
import Pagination from "@/components/UI/Pagination";
import { ConfirmDialog, ToastMessage } from "@/libs/utils";
import { FaPlus } from "react-icons/fa";
import List from "@/pages/Roles/components/List";

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

  const { data: roles, loading } = useFetch(`/role`, params);

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

  const handleUpdate = (role) => {
    console.log("update", role);
    setSelected(role);
    toggleShowModal(true);
  };

  const handleDelete = (id) => {
    dialog
      .confirm("question", "Confirmation", "Are you sure to delete this role?")
      .then(async (result) => {
        if (result.isConfirmed) {
          notify.notif("success", "Role deleted successfully!");
          try {
            await api.patch(`/role/destroy/${id}`);
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
        <RoleForm
          selected={selected}
          onClose={() => {
            toggleShowModal(false);
            setSelected(null);
          }}
          onRefresh={handleRefresh}
        />
      )}
      <PageHeader title="Roles" />
      <SearchRole onSearch={handleSearch} onRefresh={handleRefresh} />
      <div className="my-2 d-flex align-items-center justify-content-end">
        <button
          className="btn btn-primary btn-md d-flex align-items-center gap-1"
          onClick={() => toggleShowModal(true)}
        >
          <FaPlus className="fs-6" /> Add New
        </button>
      </div>
      <Panel>
        <>
          <div className="row">
            <List
              isLoading={loading}
              roles={roles}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
            {!loading && roles?.data?.length > 0 && (
              <div className="col-12">
                <Pagination
                  totalRecords={roles.total_items}
                  currentPage={params.page}
                  totalPages={roles.total_pages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </div>
        </>
      </Panel>
    </>
  );
};

export default DisabilityTypes;
