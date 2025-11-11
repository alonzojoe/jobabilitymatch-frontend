import useToggle from "@/hooks/useToggle";
import { useState } from "react";
import useFetch from "@/hooks/useFetch";
import api from "@/services/api";
import PageHeader from "@/components/Global/PageHeader";
import Panel from "@/components/UI/Panel";
import SearchUser from "@/pages/Users/components/SearchUser";
import UserList from "@/pages/Users/components/UserList";
import Pagination from "@/components/UI/Pagination";
import SelectType from "@/pages/Users/components/SelectType";
import { ConfirmDialog, ToastMessage, formatData } from "@/libs/utils";
import { FaPlus } from "react-icons/fa";
import UpdateFormType from "@/pages/Users/components/UpdateFormType";
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
  const { data: roles } = useFetch(`/role/all`, null);
  const { data: disabilityTypes } = useFetch(`/disability/all`, null);

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

  const handleUpdate = (user) => {
    const data = formatData(user);
    console.log("update", data);
    setSelected(data);
    toggleShowModal(true);
  };

  const handleDelete = (id) => {
    dialog
      .confirm("question", "Confirmation", "Are you sure to delete this user?")
      .then(async (result) => {
        if (result.isConfirmed) {
          notify.notif("success", "User deleted successfully!");
          try {
            await api.patch(`/user/destroy/${id}`);
            handleRefresh();
          } catch (error) {
            notify.notif("error", `Something went wrong: ${error?.message}`);
          }
        }
      });
  };

  const handleResetPassword = (userEmail) => {
    dialog
      .confirm(
        "question",
        "Confirmation",
        "Are you sure you want to reset this user's password?"
      )
      .then(async (result) => {
        if (result.isConfirmed) {
          notify.notif("success", "Password reset successfully!");
          try {
            await api.post("/auth/reset-password", {
              email: userEmail,
            });
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
        <UpdateFormType
          user={selected}
          role={roles}
          disabilityTypes={disabilityTypes}
          onClose={() => {
            toggleShowModal(false);
            handleRefresh();
          }}
        />
      )}
      {register && (
        <SelectType
          roles={roles}
          disabilityTypes={disabilityTypes}
          onClose={() => {
            toggleRegister(false);
            handleRefresh();
          }}
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
              <UserList
                loading={loading}
                error={error}
                users={users}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
                onReset={handleResetPassword}
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
