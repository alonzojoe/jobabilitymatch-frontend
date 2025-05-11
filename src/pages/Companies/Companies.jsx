import useToggle from "@/hooks/useToggle";
import { useState } from "react";
import useFetch from "@/hooks/useFetch";
import api from "@/services/api";
import PageHeader from "@/components/Global/PageHeader";
import Panel from "@/components/UI/Panel";
import UpdateEmployer from "@/components/Form/UpdateEmployer";
import SearchCompany from "@/pages/Companies/components/SearchCompany";
import CompanyList from "@/pages/Companies/components/CompanyList";
import Pagination from "@/components/UI/Pagination";
import { ConfirmDialog, ToastMessage } from "@/libs/utils";
import { FaPlus } from "react-icons/fa";

const initialParams = {
  name: "",
  lastname: "",
  firstname: "",
  middlename: "",
  page: 1,
  rand: 0.1,
};

const dialog = new ConfirmDialog();
const notify = new ToastMessage();

const Companies = () => {
  const [showModal, toggleShowModal] = useToggle(false);
  const [params, setParams] = useState(initialParams);
  const [selected, setSelected] = useState(null);

  const { data: companies, loading, error } = useFetch(`/company`, params);

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
      name: params.name,
      lastname: params.lastname,
      firstname: params.firstname,
      middlename: params.middlename,
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
        <UpdateEmployer
          authUser={selected}
          onClose={() => {
            toggleShowModal(false);
            setSelected(null);
          }}
          onRefresh={handleRefresh}
        />
      )}
      <PageHeader title="Comapnies" />
      <SearchCompany onSearch={handleSearch} onRefresh={handleRefresh} />
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
              <CompanyList
                loading={loading}
                error={error}
                companies={companies}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
              {!loading && companies?.data?.length > 0 && (
                <Pagination
                  totalRecords={companies.total_items}
                  currentPage={params.page}
                  totalPages={companies.total_pages}
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

export default Companies;
