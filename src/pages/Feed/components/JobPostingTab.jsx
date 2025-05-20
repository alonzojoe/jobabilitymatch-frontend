import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import { IoIosRefreshCircle } from "react-icons/io";
import { Tooltip } from "react-tooltip";

const JobPostingTab = forwardRef(
  ({ onSelect, onRefresh, authUser, setSelected }, ref) => {
    const [tab, setTab] = useState(() => (authUser ? 2 : 1));

    useImperativeHandle(ref, () => ({
      getCurrentTab: () => tab,
    }));

    useEffect(() => {
      if (authUser) {
        handleSwitchTab(`/posting/recommended/${authUser.id}`, 2);
      }
    }, [authUser]);

    const handleSwitchTab = (endpoint, selected) => {
      setTab(selected);
      onSelect(endpoint);
      setSelected(null);
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
          <div data-tooltip-id="refresh-tooltip">
            <IoIosRefreshCircle
              onClick={onRefresh}
              className="text-custom fs-2 cursor-pointer cst-refresh"
            />
          </div>
          <Tooltip id="refresh-tooltip" place="left">
            Refresh Feed
          </Tooltip>
        </div>
      </>
    );
  }
);

export default JobPostingTab;
