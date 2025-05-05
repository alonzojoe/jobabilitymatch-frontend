import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  totalRecords,
  showInfo = true,
}) => {
  const visiblePages = 5;
  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="mt-2 pagination-container m-0 p-3 d-flex justify-content-between align-items-center">
      {showInfo && (
        <>
          <div className="fs-7">Total Records: {totalRecords}</div>
          <div className="fs-7">
            Page{" "}
            <span>
              {" "}
              {currentPage} of {totalPages}
            </span>
          </div>
        </>
      )}

      <div>
        <ul className="pagination" style={{ marginBottom: "0" }}>
          <li
            className={`paginate_button page-item previous ${
              currentPage === 1 ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => onPageChange(currentPage - 1)}
            >
              Previous
            </button>
          </li>
          {pageNumbers.map((page) => (
            <li
              className={`paginate_button page-item ${
                page === currentPage ? "active" : ""
              }`}
              key={page}
              onClick={() => onPageChange(page)}
            >
              <button className="page-link">{page}</button>
            </li>
          ))}
          <li
            className={`paginate_button page-item next ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => onPageChange(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
