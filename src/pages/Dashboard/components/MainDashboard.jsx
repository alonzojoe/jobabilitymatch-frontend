import React, { useContext } from "react";
import Panel from "@/components/UI/Panel";
import AuthContext from "@/store/auth/auth-context";
import { Link } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import { formatCount, formatDateTime } from "@/libs/utils";
import { Bar, Pie } from "react-chartjs-2";

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
import DashboardLoader from "@/pages/Dashboard/components/DashboardLoader";

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

const MainDashboard = () => {
  const { authUser } = useContext(AuthContext);
  const { data: dashboardData, loading } = useFetch(
    `/dashboard/admin`,
    null,
    2000
  );

  console.log("dashboard", dashboardData?.data);
  const company = authUser?.company?.name ?? "";

  const labels = ["Users", "Companies", "Job Postings", "Applicants"];

  const barChartData = {
    labels,
    datasets: [
      {
        label: "System Statistics",
        data: [
          dashboardData?.data?.total_users || 0,
          dashboardData?.data?.total_companies || 0,
          dashboardData?.data?.total_job_postings || 0,
          dashboardData?.data?.total_applicants || 0,
        ],
        backgroundColor: ["#FF9500", "#5AC8FA", "#FF3B30", "#B503FF"],
      },
    ],
  };

  const pieChartData = {
    labels,
    datasets: [
      {
        label: "Data Distribution",
        data: [
          dashboardData?.data?.total_users || 0,
          dashboardData?.data?.total_companies || 0,
          dashboardData?.data?.total_job_postings || 0,
          dashboardData?.data?.total_applicants || 0,
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
        <DashboardLoader />
      ) : (
        <>
          <div className="row">
            {/* Job Postings */}
            <div className="col-xl-3 col-md-6">
              <div className="widget widget-stats bg-white text-inverse shadow-lg">
                <div className="stats-icon stats-icon-square bg-gradient-blue text-white">
                  <i className="ion-ios-person"></i>
                </div>
                <div className="stats-content">
                  <div className="stats-title text-inverse-lighter fw-bold">
                    Total Users
                  </div>
                  <div className="stats-number">
                    {formatCount(dashboardData?.data?.total_users)}
                  </div>
                  <div className="stats-progress progress">
                    <div
                      className="progress-bar"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <div className="stats-link">
                    <Link to="/home/users" className="fw-bold">
                      View Detail{" "}
                      <i className="fa fa-arrow-alt-circle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="widget widget-stats bg-white text-inverse shadow-lg">
                <div className="stats-icon stats-icon-square bg-gradient-blue text-white">
                  <i className="ion-ios-business"></i>
                </div>
                <div className="stats-content">
                  <div className="stats-title text-inverse-lighter fw-bold">
                    Total Companies
                  </div>
                  <div className="stats-number">
                    {formatCount(dashboardData?.data?.total_companies)}
                  </div>
                  <div className="stats-progress progress">
                    <div
                      className="progress-bar"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <div className="stats-link">
                    <Link to="/home/companies" className="fw-bold">
                      View Detail{" "}
                      <i className="fa fa-arrow-alt-circle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="widget widget-stats bg-white text-inverse shadow-lg">
                <div className="stats-icon stats-icon-square bg-gradient-blue text-white">
                  <i className="ion-ios-create"></i>
                </div>
                <div className="stats-content">
                  <div className="stats-title text-inverse-lighter fw-bold">
                    Total Job Postings
                  </div>
                  <div className="stats-number">
                    {formatCount(dashboardData?.data?.total_job_postings)}
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

            <div className="col-xl-3 col-md-6">
              <div className="widget widget-stats bg-white text-inverse shadow-lg">
                <div className="stats-icon stats-icon-square bg-gradient-blue text-white">
                  <i className="ion-ios-walk"></i>
                </div>
                <div className="stats-content">
                  <div className="stats-title text-inverse-lighter fw-bold">
                    Total Applicants
                  </div>
                  <div className="stats-number">
                    {formatCount(dashboardData?.data?.total_applicants)}
                  </div>
                  <div className="stats-progress progress">
                    <div
                      className="progress-bar"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <div className="stats-link pe-none opacity-0">
                    <Link to="/home/users">
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
              <Panel title="Recently Registered Users">
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
                              Full Name
                            </th>
                            {/* <th className="text-center font-weight-bold fs-7">
                          Email
                        </th> */}
                            <th className="text-center font-weight-bold fs-7">
                              Date Registered
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {dashboardData?.data?.recent_users?.length > 0 ? (
                            dashboardData.data.recent_users.map((d, index) => (
                              <tr key={d.id}>
                                <td className="text-center font-weight-bold fs-7">
                                  {index + 1}
                                </td>
                                <td className="text-center font-weight-bold fs-7">
                                  {`${d.lastname}, ${d.firstname} ${d.middlename}`}
                                </td>
                                {/* <td className="text-center font-weight-bold fs-7">
                              {d.email}
                            </td> */}
                                <td className="text-center font-weight-bold fs-7">
                                  {formatDateTime(d.created_at)}
                                </td>
                              </tr>
                            ))
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
              <Panel title="Recently Registered Companies">
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
                            {/* <th className="text-center font-weight-bold fs-7">
                          Email
                        </th> */}
                            <th className="text-center font-weight-bold fs-7">
                              Date Registered
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {dashboardData?.data?.recent_companies?.length > 0 ? (
                            dashboardData.data.recent_companies.map(
                              (d, index) => (
                                <tr key={d.id}>
                                  <td className="text-center font-weight-bold fs-7">
                                    {index + 1}
                                  </td>
                                  <td className="text-center font-weight-bold fs-7">
                                    {d.name}
                                  </td>
                                  {/* <td className="text-center font-weight-bold fs-7">
                              {d.email}
                            </td> */}
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
                            {/* <th className="text-center font-weight-bold fs-7">
                          Email
                        </th> */}
                            <th className="text-center font-weight-bold fs-7">
                              Date Registered
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {dashboardData?.data?.recent_job_postings?.length >
                          0 ? (
                            dashboardData.data.recent_job_postings.map(
                              (d, index) => (
                                <tr key={d.id}>
                                  <td className="text-center font-weight-bold fs-7">
                                    {index + 1}
                                  </td>
                                  <td className="text-center font-weight-bold fs-7">
                                    {d.title}
                                  </td>
                                  {/* <td className="text-center font-weight-bold fs-7">
                              {d.email}
                            </td> */}
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

export default MainDashboard;
