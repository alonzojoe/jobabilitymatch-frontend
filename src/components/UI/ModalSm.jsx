import { createPortal } from "react-dom";
import { IoIosCloseCircle } from "react-icons/io";

const ModalSm = ({ title, client, children, onClose }) => {
  return createPortal(
    <div className="cst-modal2">
      <div className="cst-modal-body5 bg-white rounded position-relative">
        <span
          onClick={onClose}
          className="position-absolute"
          style={{
            fontSize: "20px",
            top: "3px",
            right: "5.5px",
            zIndex: "1000",
            fontWeight: "bold",
          }}
        >
          <IoIosCloseCircle className="fw-bolder text-pink cst-close fs-2" />
        </span>
        <div className="position-relative rounded p-2 m-2 mt-4">
          {title && (
            <div
              className="position-absolute bg-primary text-white px-2 rounded"
              style={{
                top: "-1px",
                left: "5px",
                zIndex: "10",
              }}
            >
              {title}
            </div>
          )}
          {client}
          <div className="pd-4">{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById("overlay")
  );
};

export default ModalSm;
