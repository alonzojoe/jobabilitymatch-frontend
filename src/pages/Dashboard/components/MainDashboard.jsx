import React, { useContext } from "react";
import Panel from "@/components/UI/Panel";
import AuthContext from "@/store/auth/auth-context";
import { Link } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import { formatCount } from "@/libs/utils";
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
  const { data: dashboardData } = useFetch(`/dashboard/admin`, null);

  // console.log("dashboard", dashboardData?.data);
  // const company = authUser?.company?.name ?? "";

  // const labels = [
  //   "Job Postings",
  //   "Applicants",
  //   "Hired Applicants",
  //   "Rejected Applicants",
  // ];

  // const barChartData = {
  //   labels,
  //   datasets: [
  //     {
  //       label: "Company Statistics",
  //       data: [
  //         dashboardData?.data?.job_postings || 0,
  //         dashboardData?.data?.applicants || 0,
  //         dashboardData?.data?.accepted_applicants || 0,
  //         dashboardData?.data?.rejected_applicants || 0,
  //       ],
  //       backgroundColor: ["#FF9500", "#5AC8FA", "#FF3B30", "#B503FF"],
  //     },
  //   ],
  // };

  // const pieChartData = {
  //   labels,
  //   datasets: [
  //     {
  //       label: "Company Distribution",
  //       data: [
  //         dashboardData?.data?.job_postings || 0,
  //         dashboardData?.data?.applicants || 0,
  //         dashboardData?.data?.accepted_applicants || 0,
  //         dashboardData?.data?.rejected_applicants || 0,
  //       ],
  //       backgroundColor: ["#FF9500", "#5AC8FA", "#FF3B30", "#B503FF"],
  //     },
  //   ],
  // };

  // const options = {
  //   // responsive: true,
  //   maintainAspectRatio: false,
  //   plugins: {
  //     legend: { position: "top" },
  //     title: { display: true, text: `${company} STATISTICS` },
  //   },
  // };

  return (
    <>
      <div className="row">
        {/* Job Postings */}
        <div className="col-xl-3 col-md-6">
          <div class="widget widget-stats bg-white text-inverse shadow-lg">
            <div class="stats-icon stats-icon-square bg-gradient-blue text-white">
              <i class="ion-ios-person"></i>
            </div>
            <div class="stats-content">
              <div class="stats-title text-inverse-lighter">Total Users</div>
              <div class="stats-number">
                {formatCount(dashboardData?.data?.total_users)}
              </div>
              <div class="stats-progress progress">
                <div class="progress-bar" style={{ width: "100%" }}></div>
              </div>
              <div className="stats-link">
                <Link to="/home/users">
                  View Detail <i className="fa fa-arrow-alt-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div class="widget widget-stats bg-white text-inverse shadow-lg">
            <div class="stats-icon stats-icon-square bg-gradient-blue text-white">
              <i class="ion-ios-business"></i>
            </div>
            <div class="stats-content">
              <div class="stats-title text-inverse-lighter">
                Total Companies
              </div>
              <div class="stats-number">
                {formatCount(dashboardData?.data?.total_companies)}
              </div>
              <div class="stats-progress progress">
                <div class="progress-bar" style={{ width: "100%" }}></div>
              </div>
              <div className="stats-link">
                <Link to="/home/companies">
                  View Detail <i className="fa fa-arrow-alt-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div class="widget widget-stats bg-white text-inverse shadow-lg">
            <div class="stats-icon stats-icon-square bg-gradient-blue text-white">
              <i class="ion-ios-create"></i>
            </div>
            <div class="stats-content">
              <div class="stats-title text-inverse-lighter">
                Total Job Postings
              </div>
              <div class="stats-number">
                {formatCount(dashboardData?.data?.total_job_postings)}
              </div>
              <div class="stats-progress progress">
                <div class="progress-bar" style={{ width: "100%" }}></div>
              </div>
              <div className="stats-link">
                <Link to="/home/job-postings">
                  View Detail <i className="fa fa-arrow-alt-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div class="widget widget-stats bg-white text-inverse shadow-lg">
            <div class="stats-icon stats-icon-square bg-gradient-blue text-white">
              <i class="ion-ios-walk"></i>
            </div>
            <div class="stats-content">
              <div class="stats-title text-inverse-lighter">
                Total Applicants
              </div>
              <div class="stats-number">
                {formatCount(dashboardData?.data?.total_applicants)}
              </div>
              <div class="stats-progress progress">
                <div class="progress-bar" style={{ width: "100%" }}></div>
              </div>
              <div className="stats-link pe-none opacity-0">
                <Link to="/home/users">
                  View Detail <i className="fa fa-arrow-alt-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Panel with Chart */}
      <div className="row">
        <div className="col-sm-12 col-xl-6 col-md-6">
          {/* <Panel title="Bar Chart Analytics">
            <div className="d-flex align-items-center justify-content-center">
              <div
                style={{ width: "400px", height: "400px", margin: "0 auto" }}
              >
                <Bar
                  options={options}
                  data={barChartData}
                  className="pie-chart"
                />
              </div>
            </div>
          </Panel> */}
        </div>
        <div className="col-sm-12 col-xl-6 col-md-6">
          {/* <Panel title="Pie Chart Analytics">
            <div className="d-flex align-items-center justify-content-center">
              <div
                style={{ width: "400px", height: "400px", margin: "0 auto" }}
              >
                <Pie data={pieChartData} />
              </div>
            </div>
          </Panel> */}
        </div>
      </div>
    </>
  );
};

export default MainDashboard;
