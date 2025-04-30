import { useState } from "react";
import Modal from "@/components/UI/Modal";
import ModalSm from "@/components/UI/ModalSm";
import AuthHeader from "@/components/Auth/AuthHeader";

const Registry = ({ onClose }) => {
  const [type, setType] = useState(1);

  return (
    <>
      {type === 1 ? (
        <ModalSm onClose={onClose}>
          <>
            <AuthHeader />
          </>
        </ModalSm>
      ) : (
        <Modal onClose={() => setType(1)}>
          <>
            <AuthHeader />
          </>
        </Modal>
      )}
    </>
  );
};

export default Registry;
