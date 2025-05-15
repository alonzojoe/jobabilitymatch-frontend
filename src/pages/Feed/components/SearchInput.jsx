import { useState, forwardRef, useImperativeHandle } from "react";

const SearchInput = forwardRef(({ onSearch, onReset }, ref) => {
  const [query, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query === "") return;
    onReset();
    onSearch(query);
  };

  useImperativeHandle(ref, () => ({
    clearQuery: () => setSearchQuery(""),
  }));

  return (
    <div className="search-container mb-5">
      <form
        className="form-send-message d-flex justify-content-between align-items-center"
        onSubmit={handleSearch}
      >
        <input
          value={query}
          className="form-control message-input border-0 me-3 shadow-none fs-5"
          placeholder="Search job title, keywords, or company"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="message-actions d-flex align-items-center">
          <button
            type="submit"
            className="btn btn-custom gap-1 d-flex align-items-center send-msg-btn waves-effect font-weight-normal fs-5"
          >
            <i className="fa fa-search fa-fw me-md-1 me-0"></i>
            <span className="align-middle d-md-inline-block d-none">
              Search
            </span>
          </button>
        </div>
      </form>
    </div>
  );
});

export default SearchInput;
