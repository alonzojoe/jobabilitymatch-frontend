import React from "react";

const SearchInput = () => {
  return (
    // <div className="input-group input-group-lg mb-3">
    //   <input
    //     type="text"
    //     className="form-control input-white"
    //     placeholder="Enter keywords here..."
    //   />
    //   <div className="input-group-append">
    //     <div className="dropdown-menu dropdown-menu-right">
    //       <a href="#" className="dropdown-item">
    //         Action
    //       </a>
    //       <a href="#" className="dropdown-item">
    //         Another action
    //       </a>
    //       <a href="#" className="dropdown-item">
    //         Something else here
    //       </a>
    //       <div className="dropdown-divider"></div>
    //       <a href="#" className="dropdown-item">
    //         Separated link
    //       </a>
    //     </div>
    //     <button type="button" className="btn btn-primary">
    //       <i className="fa fa-search fa-fw"></i> Search
    //     </button>
    //   </div>
    // </div>
    <div className="search-container">
      <form className="form-send-message d-flex justify-content-between align-items-center">
        <input
          class="form-control message-input border-0 me-3 shadow-none fs-5"
          placeholder="Search job title, keywords, or company"
        />
        <div className="message-actions d-flex align-items-center">
          <button className="btn btn-primary gap-1 d-flex align-items-center send-msg-btn waves-effect font-weight-normal fs-5">
            {/* <i className="ti ti-search me-md-1 me-0"></i> */}
            <i className="fa fa-search fa-fw me-md-1 me-0"></i>
            <span className="align-middle d-md-inline-block d-none">
              Search
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
