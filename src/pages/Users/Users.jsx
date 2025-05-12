import useToggle from "@/hooks/useToggle";
import { useState } from "react";
import useFetch from "@/hooks/useFetch";
import api from "@/services/api";
import PageHeader from "@/components/Global/PageHeader";
import Panel from "@/components/UI/Panel";
import Modal from "@/components/UI/Modal";
import ModalSm from "@/components/UI/ModalSm";
import UpdateEmployer from "@/components/Form/UpdateEmployer";
import AdminForm from "@/components/Form/AdminForm";
import EmployerForm from "@/components/Form/EmployerForm";
import PwdForm from "@/components/Form/PwdForm";
import SearchUser from "@/pages/Users/components/SearchUser";
import UserList from "@/pages/Users/components/UserList";
import Pagination from "@/components/UI/Pagination";
import AuthHeader from "@/components/Auth/AuthHeader";
import { ConfirmDialog, ToastMessage, formatData } from "@/libs/utils";
import { FaPlus } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

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

  const handleUpdate = (user) => {
    const data = formatData(user);
    console.log("update", data);
    // setSelected(formattedData);
    // toggleShowModal(true);
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
        <SelectType
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

const SelectType = ({ onClose }) => {
  const [type, setType] = useState(1);
  const { data: roles } = useFetch(`/role/all`, null);
  const { data: disabilityTypes } = useFetch(`/disability/all`, null);
  return (
    <>
      {type === 1 ? (
        <ModalSm onClose={onClose}>
          <>
            <AuthHeader />
            <h3 className="mt-2 mb-3 font-weight-bold text-center">
              Please Select
            </h3>
            <div className="row">
              <div className="col-12 mb-3">
                <div
                  className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                  onClick={() => setType(4)}
                >
                  <FaRegUserCircle className="fs-2" />
                  <span className="fs-2">Administrator</span>
                </div>
              </div>
              <div className="col-12 mb-3">
                <div
                  className="btn btn-custom w-100 d-flex align-items-center justify-content-center gap-2"
                  onClick={() => setType(2)}
                >
                  <FaRegUserCircle className="fs-2" />
                  <span className="fs-2">PWD</span>
                </div>
              </div>
              <div className="col-12 mb-3">
                <div
                  className="btn btn-pink w-100 d-flex align-items-center justify-content-center gap-1"
                  onClick={() => setType(3)}
                >
                  <FaRegBuilding className="fs-2" />
                  <span className="fs-2">EMPLOYER</span>
                </div>
              </div>
            </div>
          </>
        </ModalSm>
      ) : (
        <Modal onClose={onClose}>
          <>
            <AuthHeader />
            {type === 2 ? (
              <PwdForm
                roles={roles?.data}
                disabilityTypes={disabilityTypes?.data}
                onClose={onClose}
              />
            ) : type === 3 ? (
              <EmployerForm onClose={onClose} />
            ) : (
              <AdminForm onClose={onClose} />
            )}
          </>
        </Modal>
      )}
    </>
  );
};

export default Users;
