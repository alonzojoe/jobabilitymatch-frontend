import React from "react";
import SearchInput from "@/pages/Feed/components/SearchInput";

const Feed = () => {
  React.useEffect(() => {
    document.body.style.backgroundColor = "#F8F7FA";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <SearchInput />
      <div className="d-flex align-items-center gap-3 justify-content-center rec-container">
        <h3 className="fw-bold mb-0 pb-2 rec-text cursor-pointer">
          Recent Jobs Postings
        </h3>
        <h3 className="fw-bold mb-0 pb-2 rec-text cursor-pointer">
          Job Recommendations
        </h3>
      </div>
    </>
  );
};

export default Feed;
