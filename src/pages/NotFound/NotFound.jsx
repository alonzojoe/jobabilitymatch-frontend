import { useNavigate } from "react-router-dom";
import ErrorImage from "@/assets/images/404page.png";
import { IoMdArrowRoundBack } from "react-icons/io";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="error-page-container">
      <img
        src={ErrorImage}
        height="250"
        width="250"
        className="responsive-img"
      />
      <button
        className="btn btn-pink btn-lg d-flex align-items-center gap-1"
        onClick={() => navigate(-1)}
      >
        <IoMdArrowRoundBack className="fs-6" /> Go Back
      </button>
    </div>
  );
};

export default NotFound;
