import PageHeader from "@/components/Global/PageHeader";
import { Link } from "react-router-dom";
const CompanyDashboard = () => {
  return (
    <>
      <PageHeader title="Company Dashboard" />

      <div className="row">
        {/* begin col-3 */}
        <div className="col-xl-3 col-md-6">
          <div class="widget widget-stats bg-warning">
            <div className="stats-icon stats-icon-square bg-custom text-white">
              <i className="ion-ios-create"></i>
            </div>
            <div class="stats-info">
              <h4 className="text-white">TOTAL JOB POSTINGS</h4>
              <p>3,291,922</p>
            </div>
            <div class="stats-link">
              <Link to="/home/job-postings">
                View Detail <i class="fa fa-arrow-alt-circle-right"></i>
              </Link>
            </div>
          </div>
        </div>
        {/* end col-3 */}

        {/* begin col-3 */}
        <div className="col-xl-3 col-md-6">
          <div class="widget widget-stats bg-info">
            <div className="stats-icon stats-icon-square bg-custom text-white">
              <i className="ion-ios-walk"></i>
            </div>
            <div class="stats-info">
              <h4 className="text-white">TOTAL APPLICANTS</h4>
              <p>3,291,922</p>
            </div>
            <div class="stats-link">
              <Link to="/home/applicants">
                View Detail <i class="fa fa-arrow-alt-circle-right"></i>
              </Link>
            </div>
          </div>
        </div>
        {/* end col-3 */}

        {/* begin col-3 */}
        <div className="col-xl-3 col-md-6">
          <div class="widget widget-stats bg-danger">
            <div className="stats-icon stats-icon-square bg-custom text-white">
              <i className="ion-ios-checkmark-circle"></i>
            </div>
            <div class="stats-info">
              <h4 className="text-white">TOTAL ACCEPTED</h4>
              <p>3,291,922</p>
            </div>
            <div class="stats-link">
              <Link to="/home/applicants">
                View Detail <i class="fa fa-arrow-alt-circle-right"></i>
              </Link>
            </div>
          </div>
        </div>
        {/* end col-3 */}

        {/* begin col-3 */}
        <div className="col-xl-3 col-md-6">
          <div class="widget widget-stats bg-purple">
            <div className="stats-icon stats-icon-square bg-custom text-white">
              <i className="ion-ios-close-circle"></i>
            </div>
            <div class="stats-info">
              <h4 className="text-white">TOTAL REJECTED</h4>
              <p>3,291,922</p>
            </div>
            <div class="stats-link">
              <Link to="/home/applicants">
                View Detail <i class="fa fa-arrow-alt-circle-right"></i>
              </Link>
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

export default CompanyDashboard;
