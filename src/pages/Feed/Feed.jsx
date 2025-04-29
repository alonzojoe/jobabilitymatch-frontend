import React from "react";
import SearchBanner from "@/pages/Feed/components/SearchBanner";

const Feed = () => {
  return (
    <>
      <SearchBanner />
      {Array.from({ length: 3 }).map((_, index) => (
        <PageContent key={index} />
      ))}
    </>
  );
};

export default Feed;

const PageContent = () => {
  return (
    <>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Page Options</a>
        </li>
        <li className="breadcrumb-item active">Page with Top Menu</li>
      </ol>

      {/* begin page-header */}
      <h1 className="page-header">
        Page with Top Menu <small>header small text goes here...</small>
      </h1>
      {/* end page-header */}

      {/* begin panel */}
      <div className="panel panel-inverse">
        <div className="panel-heading">
          <h4 className="panel-title">Panel Title here</h4>
          <div className="panel-heading-btn">
            <a
              href="#"
              className="btn btn-xs btn-icon btn-circle btn-default"
              data-click="panel-expand"
            >
              <i className="fa fa-expand"></i>
            </a>
            <a
              href="#"
              className="btn btn-xs btn-icon btn-circle btn-success"
              data-click="panel-reload"
            >
              <i className="fa fa-redo"></i>
            </a>
            <a
              href="#"
              className="btn btn-xs btn-icon btn-circle btn-warning"
              data-click="panel-collapse"
            >
              <i className="fa fa-minus"></i>
            </a>
            <a
              href="#"
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
