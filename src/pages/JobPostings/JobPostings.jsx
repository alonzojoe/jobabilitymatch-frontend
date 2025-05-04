import useToggle from "@/hooks/useToggle";
import { useState } from "react";
import useFetch from "@/hooks/useFetch";
import api from "@/services/api";
import PageHeader from "@/components/Global/PageHeader";
import Panel from "@/components/UI/Panel";
import JobPostingForm from "@/pages/JobPostings/components/JobPostingForm";
import SearchJobPosting from "@/pages/JobPostings/components/SearchJobPosting";
import JobPostingList from "@/pages/JobPostings/components/JobPostingList";
import Pagination from "@/components/UI/Pagination";
import { ConfirmDialog, ToastMessage } from "@/libs/utils";
import { FaPlus } from "react-icons/fa";

const initialParams = {
  title: "",
  description: "",
  status: 0,
  page: 1,
  rand: 0.1,
};

const dialog = new ConfirmDialog();
const notify = new ToastMessage();

const JobPostings = () => {
  const [showModal, toggleShowModal] = useToggle(false);
  const [params, setParams] = useState(initialParams);
  const [selected, setSelected] = useState(null);

  const {
    data: jobPostings,
    loading,
    error,
  } = useFetch(`/posting/list`, { ...params, company_id: 1 });
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
    setParams((prev) => ({ ...prev, ...params }));
  };

  const handleUpdate = (jobDescription) => {
    console.log("update", jobDescription);
    const formattedJd = {
      ...jobDescription,
      disability_types:
        jobDescription.disability_types.map((d) => ({
          value: d.id,
          label: d.name,
        })) ?? [],
    };
    setSelected(formattedJd);
    toggleShowModal(true);
  };

  const handleDelete = (id) => {
    dialog
      .confirm(
        "question",
        "Confirmation",
        "Are you sure to delete this Job posting?"
      )
      .then(async (result) => {
        if (result.isConfirmed) {
          notify.notif("success", "Job posting deleted successfully!");
          try {
            await api.patch(`/posting/destroy/${id}`);
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
        <JobPostingForm
          selected={selected}
          onClose={() => {
            toggleShowModal(false);
            setSelected(null);
          }}
          onRefresh={handleRefresh}
          disabilityTypes={disabilityTypes?.data}
        />
      )}
      <PageHeader title="Job Postings" />
      <SearchJobPosting onSearch={handleSearch} onRefresh={handleRefresh} />
      <div className="my-2 d-flex align-items-center justify-content-end">
        <button
          className="btn btn-primary btn-md d-flex align-items-center gap-1"
          onClick={() => toggleShowModal(true)}
        >
          <FaPlus className="fs-6" /> Create New
        </button>
      </div>
      <Panel>
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <JobPostingList
                loading={loading}
                error={error}
                jobPostings={jobPostings}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
              {!loading && jobPostings?.data?.length > 0 && (
                <Pagination
                  totalRecords={jobPostings.total_items}
                  currentPage={params.page}
                  totalPages={jobPostings.total_pages}
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

export default JobPostings;
