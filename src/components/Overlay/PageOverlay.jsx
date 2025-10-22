import React from "react";
import MockUpDevice from "@/assets/images/mockup-devices.png";
import { FaArrowRight } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { RiArrowUpDoubleLine } from "react-icons/ri";
import { MdDoubleArrow } from "react-icons/md";

const PageOverlay = () => {
  const [slideUp, setSlideUp] = React.useState(false);

  const handleSwipe = () => {
    setSlideUp(true);
  };

  return (
    <div className={`canvas-page ${slideUp ? "slide-up" : ""}`}>
      <div className="canvas-container">
        <div className="canvas-r">
          <h1>Welcome to Jobability-Match</h1>
          <p>
            A job portal for Persons with Disabilities (PWD), helping you find
            inclusive and meaningful employment opportunities.
          </p>
          <div className="d-flex align-items-center gap-5">
            <button
              className="btn py-3 px-4 fs-6 btn-maincs d-flex align-items-center gap-2"
              onClick={handleSwipe}
            >
              View Opportunities
              <FaArrowRight className="fw-bold" />
            </button>
          </div>
          <div className="feature-checks">
            <div className="check-item">
              <FaCheck /> <span>Inclusive jobs</span>
            </div>
            <div className="check-item">
              <FaCheck /> <span>Accessible employers</span>
            </div>
            <div className="check-item">
              <FaCheck /> <span>Career support</span>
            </div>
          </div>
        </div>
        <div className="canvas-l">
          <img src={MockUpDevice} alt="mock-up" className="mockup-img" />
        </div>
      </div>
    </div>
  );
};

export default PageOverlay;
