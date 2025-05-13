import { useState } from "react";
import useFetch from "@/hooks/useFetch";
import Modal from "@/components/UI/Modal";
import ModalSm from "@/components/UI/ModalSm";
import AuthHeader from "@/components/Auth/AuthHeader";
import PwdForm from "@/components/Form/PwdForm";
import AdminForm from "@/components/Form/AdminForm";
import EmployerForm from "@/components/Form/EmployerForm";
import { FaRegBuilding } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";

const SelectType = ({ onClose }) => {
  const [type, setType] = useState(1);
  const { data: roles } = useFetch(`/role/all`, null);
  const { data: disabilityTypes } = useFetch(`/disability/all`, null);
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
                  className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                  onClick={() => setType(4)}
                >
                  <GrUserAdmin className="fs-2" />
                  <span className="fs-2">Administrator</span>
                </div>
              </div>
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
        <Modal onClose={onClose}>
          <>
            <AuthHeader />
            {type === 2 ? (
              <PwdForm
                roles={roles?.data}
                disabilityTypes={disabilityTypes?.data}
                onClose={onClose}
              />
            ) : type === 3 ? (
              <EmployerForm onClose={onClose} />
            ) : (
              <AdminForm onClose={onClose} />
            )}
          </>
        </Modal>
      )}
    </>
  );
};

export default SelectType;
