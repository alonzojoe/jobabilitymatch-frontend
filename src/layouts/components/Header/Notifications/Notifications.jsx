import { useState } from "react";
import useFetch from "@/hooks/useFetch";
import api from "@/services/api";
import { formatDateTime } from "@/libs/utils";
import { IoIosNotifications } from "react-icons/io";
import { FaHourglass, FaCheck, FaCalendar, FaTimes } from "react-icons/fa";
import Modal from "@/components/UI/Modal";
import PageHeader from "@/components/Global/PageHeader";
import useToggle from "@/hooks/useToggle";
import { LoadingRow } from "@/components/Data/TableData";
import { ErrorRow } from "@/components/Data/TableData";

const renderIcon = (status) => {
  const icons = {
    Pending: { icon: <FaHourglass />, bg: "bg-warning" },
    "For Interview": { icon: <FaCalendar />, bg: "bg-primary" },
    Hired: { icon: <FaCheck />, bg: "bg-success" },
    Rejected: { icon: <FaTimes />, bg: "bg-danger" },
  };

  const { icon, bg } = icons[status] || {
    icon: <FaHourglass />,
    bg: "bg-muted",
  };

  return <i className={`fa media-object ${bg}`}>{icon}</i>;
};

const Notifications = ({ authUser }) => {
  const [params, setParams] = useState({
    rand: 1,
  });
  const [show, toggleShow] = useToggle(false);

  const { data: notif } = useFetch(
    `/notification/count/${authUser?.id}`,
    params
  );

  const { data: applicantNotifs, loading } = useFetch(
    `/applicant/user/${authUser?.id}`,
    params
  );

  const {
    data: notifTable,
    loading: isLoading,
    error,
  } = useFetch(`/applicant/user/${authUser?.id}`, null);

  const handleSeen = async () => {
    try {
      await api.patch(`/notification/seen/${authUser?.id}`);
      setParams((prev) => ({ ...prev, rand: Math.floor(Math.random() * 100) }));
    } catch (error) {
      console.log(error?.message);
    }
  };

  const notifList = applicantNotifs?.data ?? [];
  const notifCount = notif?.count;
  const applicationUpdates = notifTable?.data ?? [];

  console.log("applicationUpdates", applicationUpdates);

  return (
    <>
      {show && (
        <Modal onClose={() => toggleShow(false)}>
          <>
            <PageHeader title={`Application Updates`} />
            <div className="row mt-3">
              <div className="col-12">
                <ApplicationUpdates
                  applicationUpdates={applicationUpdates}
                  loading={isLoading}
                  error={error}
                />
              </div>
            </div>
          </>
        </Modal>
      )}
      <li className="dropdown">
        <a
          href="#"
          data-toggle="dropdown"
          className="dropdown-toggle icon"
          onClick={handleSeen}
        >
          <i className="ion-ios-notifications"></i>
          <span className="label">{notifCount}</span>
        </a>
        <div className="dropdown-menu media-list dropdown-menu-right">
          <div className="dropdown-header">
            NOTIFICATIONS ({notifList?.length})
          </div>
          {loading ? (
            <div className="text-center width-300 p-b-10 p-t-10">
              <div className="d-flex align-items-center justify-content-center my-2">
                <div className="sk-wave sk-primary">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="sk-wave-rect"></div>
                  ))}
                </div>
              </div>
            </div>
          ) : notifList?.length > 0 ? (
            notifList.map((notif) => (
              <a
                href="javascript:;"
                className="dropdown-item media"
                key={notif.id}
                onClick={() => toggleShow(true)}
              >
                <div className="media-left">{renderIcon(notif?.status)}</div>
                <div className="media-body">
                  <h6 className="d-block d-flex align-items-center gap-1 fs-7">
                    <IoIosNotifications className="fs-6" /> Application Update
                  </h6>
                  <p className="fs-7 fw-500">
                    <strong>Job Title:</strong> {notif?.job_posting?.title}
                  </p>
                  <div className="text-muted fw-500">
                    <strong>Received on:</strong>{" "}
                    {formatDateTime(notif?.updated_at)}
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className="text-center width-300 p-b-10 p-t-10">
              No notification(s) found
            </div>
          )}
          <div
            className="dropdown-header text-primary cursor-pointer text-center"
            onClick={() => toggleShow(true)}
          >
            VIEW ALL
          </div>
        </div>
      </li>
    </>
  );
};

const renderStatus = (status) => {
  const icons = {
    Pending: { bg: "bg-warning" },
    "For Interview": { icon: <FaCalendar />, bg: "bg-primary" },
    Hired: { bg: "bg-success" },
    Rejected: { bg: "bg-danger" },
  };

  const { bg } = icons[status] || {
    bg: "bg-muted",
  };

  return (
    <span className={`text-white px-3 py-2 rounded-custom ${bg}`}>
      {status}
    </span>
  );
};

const ApplicationUpdates = ({ applicationUpdates, loading, error }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered table-td-valign-middle dataTable no-footer dtr-inline collapsed">
        <thead>
          <tr>
            <th className="text-center font-weight-bold fs-7">No.</th>
            <th className="text-center font-weight-bold fs-7">Job Title</th>
            <th className="text-center font-weight-bold fs-7">Company</th>
            <th className="text-center font-weight-bold fs-7">Status</th>
            <th className="text-center font-weight-bold fs-7">Date Applied</th>
            <th className="text-center font-weight-bold fs-7">Updated At</th>
          </tr>
        </thead>
        <tbody>
          {loading && <LoadingRow colSpan={6} />}
          {error && <ErrorRow colSpan={6} />}
          {!loading &&
            !error &&
            applicationUpdates?.length > 0 &&
            applicationUpdates?.map((a, index) => (
              <tr key={a.id}>
                <td className="text-center font-weight-bold fs-7">
                  {index + 1}
                </td>
                <td className="text-center font-weight-bold fs-7">
                  {a.job_posting?.title}
                </td>
                <td className="text-center font-weight-bold fs-7">
                  {a.job_posting?.company?.name}
                </td>
                <td className="text-center font-weight-bold fs-7">
                  {renderStatus(a.status)}
                </td>
                <td className="text-center font-weight-bold fs-7">
                  {formatDateTime(a.created_at)}
                </td>
                <td className="text-center font-weight-bold fs-7">
                  {formatDateTime(a.updated_at)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Notifications;
