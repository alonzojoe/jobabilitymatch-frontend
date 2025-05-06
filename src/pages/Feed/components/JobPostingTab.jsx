import { useEffect, useState } from "react";
import { IoIosRefreshCircle } from "react-icons/io";

const JobPostingTab = ({ onSelect, onRefresh, authUser }) => {
  const [tab, setTab] = useState(() => (authUser ? 2 : 1));

  useEffect(() => {
    if (authUser) {
      handleSwitchTab(`/posting/recommended/${authUser.id}`, 2);
    }
  }, [authUser]);

  const handleSwitchTab = (endpoint, selected) => {
    setTab(selected);
    onSelect(endpoint);
  };

  return (
    <>
      <div className="rec-container">
        <h3
          className={`fw-bold mb-0 pb-2 text-center rec-text cursor-pointer ${
            tab === 1 ? "active" : ""
          }`}
          onClick={() => handleSwitchTab("/posting", 1)}
        >
          Recent Jobs Postings
        </h3>
        {authUser && (
          <h3
            className={`fw-bold mb-0 pb-2 text-center rec-text cursor-pointer ${
              tab === 2 ? "active" : ""
            }`}
            onClick={() =>
              handleSwitchTab(`/posting/recommended/${authUser.id}`, 2)
            }
          >
            Job Recommendations
          </h3>
        )}
      </div>
      <div className="d-flex justify-content-end mt-2">
        <IoIosRefreshCircle
          onClick={onRefresh}
          className="text-custom fs-2 cursor-pointer cst-refresh"
        />
      </div>
    </>
  );
};

export default JobPostingTab;
