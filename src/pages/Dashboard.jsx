import React from "react";

const Dashboard = () => {
  return (
    <>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <a href="javascript:;">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="javascript:;">Library</a>
        </li>
        <li className="breadcrumb-item active">
          <a href="javascript:;">Data</a>
        </li>
      </ol>

      <h1 className="page-header">
        Dashboard <small>header small text goes here...</small>
      </h1>

      <div className="row">
        {/* begin col-3 */}
        <div className="col-xl-3 col-md-6">
          <div className="widget widget-stats bg-white text-inverse">
            <div className="stats-icon stats-icon-square bg-gradient-blue text-white">
              <i className="ion-ios-person-add"></i>
            </div>
            <div className="stats-content">
              <div className="text-inverse font-weight-bold">Users</div>
              <div className="stats-number">7,842,900</div>
              <div className="stats-progress progress">
                <div className="progress-bar" style={{ width: "70.1%" }}></div>
              </div>
              <div className="stats-desc text-inverse-lighter">
                Better than last week (70.1%)
              </div>
            </div>
          </div>
        </div>
        {/* end col-3 */}

        {/* begin col-3 */}
        <div className="col-xl-3 col-md-6">
          <div className="widget widget-stats bg-white text-inverse">
            <div className="stats-icon stats-icon-square bg-gradient-blue text-white">
              <i className="ion-ios-business"></i>
            </div>
            <div className="stats-content">
              <div className="text-inverse font-weight-bold">Companies</div>
              <div className="stats-number">180,200</div>
              <div className="stats-progress progress">
                <div className="progress-bar" style={{ width: "40.5%" }}></div>
              </div>
              <div className="stats-desc text-inverse-lighter">
                Better than last week (40.5%)
              </div>
            </div>
          </div>
        </div>
        {/* end col-3 */}

        {/* begin col-3 */}
        <div className="col-xl-3 col-md-6">
          <div className="widget widget-stats bg-white text-inverse">
            <div className="stats-icon stats-icon-square bg-gradient-blue text-white">
              <i className="ion-ios-create"></i>
            </div>
            <div className="stats-content">
              <div className="text-inverse font-weight-bold">Job Postings</div>
              <div className="stats-number">38,900</div>
              <div className="stats-progress progress">
                <div className="progress-bar" style={{ width: "76.3%" }}></div>
              </div>
              <div className="stats-desc text-inverse-lighter">
                Better than last week (76.3%)
              </div>
            </div>
          </div>
        </div>
        {/* end col-3 */}

        {/* begin col-3 */}
        <div className="col-xl-3 col-md-6">
          <div className="widget widget-stats bg-white text-inverse">
            <div className="stats-icon stats-icon-square bg-gradient-blue text-white">
              <i className="ion-ios-walk"></i>
            </div>
            <div className="stats-content">
              <div className="text-inverse font-weight-bold">Applicants</div>
              <div className="stats-number">3,988</div>
              <div className="stats-progress progress">
                <div className="progress-bar" style={{ width: "54.9%" }}></div>
              </div>
              <div className="stats-desc text-inverse-lighter">
                Better than last week (54.9%)
              </div>
            </div>
          </div>
        </div>
        {/* end col-3 */}
      </div>

      <div className="panel panel-inverse">
        <div className="panel-heading">
          <h4 className="panel-title">Panel Title here</h4>
          <div className="panel-heading-btn">
            <a
              href="javascript:;"
              className="btn btn-xs btn-icon btn-circle btn-default"
              data-click="panel-expand"
            >
              <i className="fa fa-expand"></i>
            </a>
            <a
              href="javascript:;"
              className="btn btn-xs btn-icon btn-circle btn-success"
              data-click="panel-reload"
            >
              <i className="fa fa-redo"></i>
            </a>
            <a
              href="javascript:;"
              className="btn btn-xs btn-icon btn-circle btn-warning"
              data-click="panel-collapse"
            >
              <i className="fa fa-minus"></i>
            </a>
            <a
              href="javascript:;"
              className="btn btn-xs btn-icon btn-circle btn-danger"
              data-click="panel-remove"
            >
              <i className="fa fa-times"></i>
            </a>
          </div>
        </div>
        <div className="panel-body">Panel Content Here</div>
      </div>
    </>
  );
};

export default Dashboard;
