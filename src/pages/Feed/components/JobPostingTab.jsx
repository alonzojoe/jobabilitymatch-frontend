import { useState } from "react";
import { useContext } from "react";
import AuthContext from "@/store/auth/auth-context";

const JobPostingTab = ({ onSelect }) => {
  const [tab, setTab] = useState(1);
  const { authUser } = useContext(AuthContext);

  const handleSwitchTab = (endpoint, selected) => {
    setTab(selected);
    onSelect(endpoint);
  };

  return (
    <div className="d-flex align-items-center gap-3 justify-content-center rec-container">
      <h3
        className={`fw-bold mb-0 pb-2 rec-text cursor-pointer ${
          tab === 1 ? "active" : ""
        }`}
        onClick={() => handleSwitchTab("/posting", 1)}
      >
        Recent Jobs Postings
      </h3>
      <h3
        className={`fw-bold mb-0 pb-2 rec-text cursor-pointer ${
          tab === 2 ? "active" : ""
        }`}
        onClick={() =>
          handleSwitchTab(`/posting/recommended/${authUser?.id}`, 2)
        }
      >
        Job Recommendations
      </h3>
    </div>
  );
};

export default JobPostingTab;
