import { useState } from "react";
import Modal from "@/components/UI/Modal";
import ModalSm from "@/components/UI/ModalSm";
import AuthHeader from "@/components/Auth/AuthHeader";
import { FaRegBuilding } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import PwdForm from "@/components/Form/PwdForm";

const Registry = ({ onClose, roles, disabilityTypes }) => {
  const [type, setType] = useState(1);
  console.log("roles", roles);
  console.log("disablity", disabilityTypes);
  return (
    <>
      {type === 1 ? (
        <ModalSm onClose={onClose}>
          <>
            <AuthHeader />
            <h3 className="mt-2 mb-3 font-weight-bold text-center">
              Please Select
            </h3>
            <div className="row">
              <div className="col-12 mb-3">
                <div
                  className="btn btn-custom w-100 d-flex align-items-center justify-content-center gap-2"
                  onClick={() => setType(2)}
                >
                  <FaRegUserCircle className="fs-2" />
                  <span className="fs-2">PWD</span>
                </div>
              </div>
              <div className="col-12 mb-3">
                <div
                  className="btn btn-pink w-100 d-flex align-items-center justify-content-center gap-1"
                  onClick={() => setType(3)}
                >
                  <FaRegBuilding className="fs-2" />
                  <span className="fs-2">EMPLOYER</span>
                </div>
              </div>
            </div>
          </>
        </ModalSm>
      ) : (
        <Modal onClose={() => setType(1)}>
          <>
            <AuthHeader />
            <PwdForm
              role={type}
              roles={roles}
              disabilityTypes={disabilityTypes}
              onClose={onClose}
            />
          </>
        </Modal>
      )}
    </>
  );
};

export default Registry;
