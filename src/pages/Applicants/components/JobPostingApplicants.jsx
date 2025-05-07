import { useState } from "react";
import moment from "moment";
import { LoadingRow, ErrorRow, EmptyRow } from "@/components/Data/TableData";
import { FaWalking } from "react-icons/fa";
import Modal from "@/components/UI/Modal";
import PageHeader from "@/components/Global/PageHeader";

import { ToastMessage } from "@/libs/utils";
import ViewApplicants from "./ViewApplicants";

const notify = new ToastMessage();

const initialParams = { id: 0, rand: 1 };
const JobPostingApplicants = ({ loading, error, jobPostings }) => {
  const [viewData, setViewData] = useState(null);
  const [jobData, setJobData] = useState(null);

  const handleClose = () => {
    setViewData(null);
  };

  const viewApplicants = (job) => {
    setJobData(job);
  };

  return (
    <>
      {viewData && (
        <Modal onClose={handleClose}>
          <>
            <PageHeader title="Job Description" />
            <div dangerouslySetInnerHTML={{ __html: viewData }} />
          </>
        </Modal>
      )}
      {jobData && (
        <ViewApplicants job={jobData} onClose={() => setJobData(null)} />
      )}
      <table className="table table-striped table-bordered table-td-valign-middle dataTable no-footer dtr-inline collapsed">
        <thead>
          <tr>
            <th className="text-center font-weight-bold fs-7">ID</th>
            <th className="text-center font-weight-bold fs-7">Job Title</th>

            <th className="text-center font-weight-bold fs-7">
              Vacant Position/s
            </th>
            <th className="text-center font-weight-bold fs-7">Status</th>
            <th className="text-center font-weight-bold fs-7">Date Posted</th>
            <th className="text-center font-weight-bold fs-7">Applicants</th>
          </tr>
        </thead>
        <tbody>
          {loading && <LoadingRow colSpan={7} />}
          {error && <ErrorRow colSpan={7} />}
          {!loading && !error && jobPostings?.data?.length === 0 && (
            <EmptyRow colSpan={7} />
          )}
          {!loading &&
            !error &&
            jobPostings?.data?.length > 0 &&
            jobPostings.data.map((d) => (
              <tr key={d.id}>
                <td className="text-center font-weight-bold fs-7">{d.id}</td>
                <td className="text-center font-weight-bold fs-7">
                  <span
                    className="cursor-pointer text-primary"
                    onClick={() => setViewData(d.description)}
                  >
                    {d.title}
                  </span>
                </td>
                <td className="text-center font-weight-bold fs-7">
                  {d.vacant_positions}
                </td>
                <td className="text-center ">
                  {d.active === 1 ? (
                    <span className="label label-custom text-gr fs-6">
                      Active
                    </span>
                  ) : (
                    <span className="label label-blood text-bl fs-6">
                      Inactive
                    </span>
                  )}
                </td>
                <td className="text-center font-weight-bold fs-7">
                  {moment(d.created_at).format("lll")}
                </td>
                <td className="text-center font-weight-bold fs-7">
                  <button
                    className="btn btn-warning"
                    type="button"
                    onClick={() => viewApplicants(d)}
                  >
                    <FaWalking className="fs-6" /> View Applicants
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default JobPostingApplicants;
