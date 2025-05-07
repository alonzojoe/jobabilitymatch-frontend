import { useState, useContext } from "react";
import AuthContext from "@/store/auth/auth-context";
import useFetch from "@/hooks/useFetch";
import PageHeader from "@/components/Global/PageHeader";
import Panel from "@/components/UI/Panel";
import SearchJobPosting from "@/pages/JobPostings/components/SearchJobPosting";
import JobPostingApplicants from "@/pages/Applicants/components/JobPostingApplicants";
import Pagination from "@/components/UI/Pagination";

const initialParams = {
  title: "",
  description: "",
  status: 1,
  page: 1,
  rand: 0.1,
};

const Applicants = () => {
  const [params, setParams] = useState(initialParams);
  const { authUser } = useContext(AuthContext);
  const {
    data: jobPostings,
    loading,
    error,
  } = useFetch(`/posting/list`, {
    ...params,
    company_id: authUser?.company?.id,
  });

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
