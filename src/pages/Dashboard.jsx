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
        Page Header <small>header small text goes here...</small>
      </h1>

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
