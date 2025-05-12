import useToggle from "@/hooks/useToggle";
import { useState } from "react";
import useFetch from "@/hooks/useFetch";
import api from "@/services/api";
import PageHeader from "@/components/Global/PageHeader";
import Panel from "@/components/UI/Panel";
import Modal from "@/components/UI/Modal";
import UpdateEmployer from "@/components/Form/UpdateEmployer";
import EmployerForm from "@/components/Form/EmployerForm";
import SearchUser from "@/pages/Users/components/SearchUser";
import CompanyList from "@/pages/Users/components/UserList";
import Pagination from "@/components/UI/Pagination";
import { ConfirmDialog, ToastMessage } from "@/libs/utils";
import { FaPlus } from "react-icons/fa";

const initialParams = {
  email: "",
  lastname: "",
  firstname: "",
  middlename: "",
  role_id: 0,
  page: 1,
  rand: 0.1,
};

const dialog = new ConfirmDialog();
const notify = new ToastMessage();

const Users = () => {
  const [showModal, toggleShowModal] = useToggle(false);
  const [register, toggleRegister] = useToggle(false);
  const [params, setParams] = useState(initialParams);
  const [selected, setSelected] = useState(null);

  const { data: users, loading, error } = useFetch(`/user`, params);

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

  const handleSearch = (params) => {
    setParams((prev) => ({
      ...prev,
      email: params.email,
      lastname: params.lastname,
      firstname: params.firstname,
      middlename: params.middlename,
      role_id: params.role_id,
    }));
  };

  const handleUpdate = (company) => {
    console.log("update", company);
    const formattedData = {
      ...company?.user,
      company: {
        id: company?.id,
        name: company?.name,
        address: company?.address,
      },
    };
    setSelected(formattedData);
    toggleShowModal(true);
  };

  const handleDelete = (id) => {
    dialog
      .confirm(
        "question",
        "Confirmation",
        "Are you sure to delete this comany?"
      )
      .then(async (result) => {
        if (result.isConfirmed) {
          notify.notif("success", "Company deleted successfully!");
          try {
            await api.patch(`/comany/destroy/${id}`);
            handleRefresh();
          } catch (error) {
            notify.notif("error", `Something went wrong: ${error?.message}`);
          }
        }
      });
  };

  return (
    <>
      {register && (
        <Modal onClose={() => toggleRegister(false)}>
          <EmployerForm
            onClose={() => toggleRegister(false)}
            onRefresh={handleRefresh}
          />
        </Modal>
      )}
      {showModal && (
        <UpdateEmployer
          authUser={selected}
          onClose={() => {
            toggleShowModal(false);
            setSelected(null);
          }}
          onRefresh={handleRefresh}
        />
      )}
      <PageHeader title="Users" />
      <SearchUser onSearch={handleSearch} onRefresh={handleRefresh} />
      <div className="my-2 d-flex align-items-center justify-content-end">
        <button
          className="btn btn-primary btn-md d-flex align-items-center gap-1"
          onClick={() => toggleRegister(true)}
        >
          <FaPlus className="fs-6" /> Add New
        </button>
      </div>
      <Panel>
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <CompanyList
                loading={loading}
                error={error}
                users={users}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
              {!loading && users?.data?.length > 0 && (
                <Pagination
                  totalRecords={users.total_items}
                  currentPage={params.page}
                  totalPages={users.total_pages}
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

export default Users;
