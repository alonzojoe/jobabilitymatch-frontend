import React from "react";

const Pagination = () => {
  return (
    <div className="mt-2 pagination-container m-0 p-3 d-flex justify-content-between align-items-center">
      <div className="fs-7">Total Pages: 0</div>
      <div className="fs-7">
        Page <span>0 of 0</span>
      </div>
      <div>
        <ul className="pagination" style={{ marginBottom: "0" }}>
          <li className="paginate_button page-item previous disabled">
            <a href="#" className="page-link">
              Previous
            </a>
          </li>
          <li className="paginate_button page-item active">
            <a href="#" className="page-link">
              1
            </a>
          </li>
          <li className="paginate_button page-item">
            <a href="#" className="page-link">
              2
            </a>
          </li>
          <li className="paginate_button page-item">
            <a href="#" className="page-link">
              3
            </a>
          </li>
          <li className="paginate_button page-item">
            <a href="#" className="page-link">
              4
            </a>
          </li>
          <li className="paginate_button page-item">
            <a href="#" className="page-link">
              5
            </a>
          </li>
          <li className="paginate_button page-item next">
            <a href="#" className="page-link">
              Next
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
