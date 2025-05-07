import useToggle from "@/hooks/useToggle";
import { useState, useContext } from "react";
import AuthContext from "@/store/auth/auth-context";
import useFetch from "@/hooks/useFetch";
import api from "@/services/api";
import PageHeader from "@/components/Global/PageHeader";
import Panel from "@/components/UI/Panel";
import SearchJobPosting from "@/pages/JobPostings/components/SearchJobPosting";
import JobPostingApplicants from "@/pages/Applicants/components/JobPostingApplicants";
import Pagination from "@/components/UI/Pagination";
import { ConfirmDialog, ToastMessage } from "@/libs/utils";

const initialParams = {
  title: "",
  description: "",
  status: 1,
  page: 1,
  rand: 0.1,
};

const dialog = new ConfirmDialog();
const notify = new ToastMessage();

const Applicants = () => {
  const [showModal, toggleShowModal] = useToggle(false);
  const [params, setParams] = useState(initialParams);
  const [selected, setSelected] = useState(null);
  const { authUser } = useContext(AuthContext);
  const {
    data: jobPostings,
    loading,
    error,
  } = useFetch(`/posting/list`, {
    ...params,
    company_id: authUser?.company?.id,
  });
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

  return (
    <>
      <PageHeader title="Applicants" />
      <SearchJobPosting onSearch={handleSearch} onRefresh={handleRefresh} />
      <div className="my-2 d-flex align-items-center justify-content-end"></div>
      <Panel>
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <JobPostingApplicants
                loading={loading}
                error={error}
                jobPostings={jobPostings}
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

export default Applicants;
