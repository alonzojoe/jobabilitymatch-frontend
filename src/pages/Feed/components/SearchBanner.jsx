import React from "react";

const SearchBanner = () => {
  return (
    <div className="search-banner has-bg">
      {/* begin bg-cover */}
      <div
        className="bg-cover"
        data-paroller="true"
        data-paroller-factor="0.5"
        data-paroller-factor-xs="0.01"
        style={{ backgroundImage: "url('../assets/img/cover/cover-1.jpg')" }}
      ></div>
      {/* end bg-cover */}

      {/* begin container */}
      <div className="container">
        <h1>1,293 Post for discussion</h1>
        <div className="input-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search the forums"
          />
          <span className="input-group-append">
            <button type="submit" className="btn btn-lg">
              <i className="fa fa-search"></i>
            </button>
          </span>
        </div>
        <h5 className="f-s-14 m-b-10">Browse by Popular Categories</h5>
        <ul className="popular-tags">
          <li>
            <a href="#">
              <i className="fa fa-circle"></i> CSS
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-circle"></i> Bootstrap
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-circle"></i> Javascript
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-circle"></i> jQuery
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-circle"></i> Android
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-circle"></i> iOS
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-circle"></i> Template
            </a>
          </li>
        </ul>
      </div>
      {/* end container */}
    </div>
  );
};

export default SearchBanner;
