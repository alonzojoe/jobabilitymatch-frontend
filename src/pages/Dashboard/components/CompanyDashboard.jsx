import React, { useContext } from "react";
import Panel from "@/components/UI/Panel";
import AuthContext from "@/store/auth/auth-context";
import { Link } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import { formatCount, formatDateTime } from "@/libs/utils";
import { Bar, Pie } from "react-chartjs-2";
import DashboardLoader from "@/pages/Dashboard/components/DashboardLoader";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const CompanyDashboard = () => {
  const { authUser } = useContext(AuthContext);
  const { data: dashboardData, loading } = useFetch(
    `/dashboard/company/${authUser?.company?.id}`,
    null,
    2000
  );

  console.log("dashboard", dashboardData?.data);
  const company = authUser?.company?.name ?? "";

  const labels = [
    "Job Postings",
    "Applicants",
    "Hired Applicants",
    "Rejected Applicants",
  ];

  const barChartData = {
    labels,
    datasets: [
      {
        label: "Company Statistics",
        data: [
          dashboardData?.data?.job_postings || 0,
          dashboardData?.data?.applicants || 0,
          dashboardData?.data?.accepted_applicants || 0,
          dashboardData?.data?.rejected_applicants || 0,
        ],
        backgroundColor: ["#FF9500", "#5AC8FA", "#FF3B30", "#B503FF"],
      },
    ],
  };

  const pieChartData = {
    labels,
    datasets: [
      {
        label: "Company Distribution",
        data: [
          dashboardData?.data?.job_postings || 0,
          dashboardData?.data?.applicants || 0,
          dashboardData?.data?.accepted_applicants || 0,
          dashboardData?.data?.rejected_applicants || 0,
        ],
        backgroundColor: ["#FF9500", "#5AC8FA", "#FF3B30", "#B503FF"],
      },
    ],
  };

  const options = {
    // responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: `${company} STATISTICS` },
    },
  };

  return (
    <>
      {loading ? (
        <DashboardLoader isMain={false} />
      ) : (
        <>
          <div className="row">
            {/* Job Postings */}
            <div className="col-xl-3 col-md-6">
              <div className="widget widget-stats bg-white text-inverse shadow-lg">
                <div className="stats-icon stats-icon-square bg-gradient-blue text-white">
                  <i className="ion-ios-create"></i>
                </div>
                <div className="stats-content">
                  <div className="stats-title text-inverse-lighter fw-bold">
                    TOTAL JOB POSTINGS
                  </div>
                  <div className="stats-number">
                    {formatCount(dashboardData?.data?.job_postings)}
                  </div>
                  <div className="stats-progress progress">
                    <div
                      className="progress-bar"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <div className="stats-link">
                    <Link to="/home/job-postings" className="fw-bold">
                      View Detail{" "}
                      <i className="fa fa-arrow-alt-circle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Applicants */}
            <div className="col-xl-3 col-md-6">
              <div className="widget widget-stats bg-white text-inverse shadow-lg">
                <div className="stats-icon stats-icon-square bg-gradient-blue text-white">
                  <i className="ion-ios-walk"></i>
                </div>
                <div className="stats-content">
                  <div className="stats-title text-inverse-lighter fw-bold">
                    TOTAL APPLICANTS
                  </div>
                  <div className="stats-number">
                    {formatCount(dashboardData?.data?.applicants)}
                  </div>
                  <div className="stats-progress progress">
                    <div
                      className="progress-bar"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <div className="stats-link">
                    <Link to="/home/applicants" className="fw-bold">
                      View Detail{" "}
                      <i className="fa fa-arrow-alt-circle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Hired Applicants */}
            <div className="col-xl-3 col-md-6">
              <div className="widget widget-stats bg-white text-inverse shadow-lg">
                <div className="stats-icon stats-icon-square bg-gradient-blue text-white">
                  <i className="ion-ios-checkmark-circle"></i>
                </div>
                <div className="stats-content">
                  <div className="stats-title text-inverse-lighter fw-bold">
                    TOTAL HIRED APPLICANTS
                  </div>
                  <div className="stats-number">
                    {formatCount(dashboardData?.data?.accepted_applicants)}
                  </div>
                  <div className="stats-progress progress">
                    <div
                      className="progress-bar"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <div className="stats-link">
                    <Link to="/home/applicants" className="fw-bold">
                      View Detail{" "}
                      <i className="fa fa-arrow-alt-circle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Rejected Applicants */}
            <div className="col-xl-3 col-md-6">
              <div className="widget widget-stats bg-white text-inverse shadow-lg">
                <div className="stats-icon stats-icon-square bg-gradient-blue text-white">
                  <i className="ion-ios-checkmark-circle"></i>
                </div>
                <div className="stats-content">
                  <div className="stats-title text-inverse-lighter fw-bold">
                    TOTAL REJECTED APPLICANTS
                  </div>
                  <div className="stats-number">
                    {formatCount(dashboardData?.data?.rejected_applicants)}
                  </div>
                  <div className="stats-progress progress">
                    <div
                      className="progress-bar"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <div className="stats-link">
                    <Link to="/home/applicants" className="fw-bold">
                      View Detail{" "}
                      <i className="fa fa-arrow-alt-circle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Panel with Chart */}
          <div className="row">
            <div className="col-sm-12 col-xl-6 col-md-6 mb-4">
              <Panel title="Bar Chart Analytics">
                <div className="d-flex align-items-center justify-content-center">
                  <div
                    style={{
                      width: "400px",
                      height: "400px",
                      margin: "0 auto",
                    }}
                  >
                    <Bar
                      options={options}
                      data={barChartData}
                      className="pie-chart"
                    />
                  </div>
                </div>
              </Panel>
            </div>
            <div className="col-sm-12 col-xl-6 col-md-6 mb-4">
              <Panel title="Pie Chart Analytics">
                <div className="d-flex align-items-center justify-content-center">
                  <div
                    style={{
                      width: "400px",
                      height: "400px",
                      margin: "0 auto",
                    }}
                  >
                    <Pie data={pieChartData} />
                  </div>
                </div>
              </Panel>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-xl-6 col-md-6 mb-4">
              <Panel title="Recent Job Postings">
                <div className="row">
                  <div className="col-12">
                    <div className="table-responsive">
                      <table className="table table-striped table-bordered table-td-valign-middle dataTable no-footer dtr-inline collapsed">
                        <thead>
                          <tr>
                            <th className="text-center font-weight-bold fs-7">
                              No.
                            </th>
                            <th className="text-center font-weight-bold fs-7">
                              Job Title
                            </th>
                            <th className="text-center font-weight-bold fs-7">
                              Date Registered
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {dashboardData?.data?.recent_jobpostings?.length >
                          0 ? (
                            dashboardData.data.recent_jobpostings.map(
                              (d, index) => (
                                <tr key={d.id}>
                                  <td className="text-center font-weight-bold fs-7">
                                    {index + 1}
                                  </td>
                                  <td className="text-center font-weight-bold fs-7">
                                    {d.title}
                                  </td>
                                  <td className="text-center font-weight-bold fs-7">
                                    {formatDateTime(d.created_at)}
                                  </td>
                                </tr>
                              )
                            )
                          ) : (
                            <tr>
                              <td
                                colSpan="4"
                                className="text-center font-weight-bold fs-7"
                              >
                                No data found
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Panel>
            </div>

            <div className="col-sm-12 col-xl-6 col-md-6 mb-4">
              <Panel title="Recent Applicants">
                <div className="row">
                  <div className="col-12">
                    <div className="table-responsive">
                      <table className="table table-striped table-bordered table-td-valign-middle dataTable no-footer dtr-inline collapsed">
                        <thead>
                          <tr>
                            <th className="text-center font-weight-bold fs-7">
                              No.
                            </th>
                            <th className="text-center font-weight-bold fs-7">
                              Name
                            </th>
                            <th className="text-center font-weight-bold fs-7">
                              Job Posting Applied
                            </th>
                            <th className="text-center font-weight-bold fs-7">
                              Date Applied
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {dashboardData?.data?.recent_applicants?.length >
                          0 ? (
                            dashboardData.data.recent_applicants.map(
                              (d, index) => (
                                <tr key={d.id}>
                                  <td className="text-center font-weight-bold fs-7">
                                    {index + 1}
                                  </td>
                                  <td className="text-center font-weight-bold fs-7">
                                    {`${d?.user?.lastname}, ${d?.user?.firstname} ${d?.user?.middlename}`}
                                  </td>
                                  <td className="text-center font-weight-bold fs-7">
                                    {d?.job_posting?.title}
                                  </td>
                                  <td className="text-center font-weight-bold fs-7">
                                    {formatDateTime(d.created_at)}
                                  </td>
                                </tr>
                              )
                            )
                          ) : (
                            <tr>
                              <td
                                colSpan="4"
                                className="text-center font-weight-bold fs-7"
                              >
                                No data found
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Panel>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CompanyDashboard;
