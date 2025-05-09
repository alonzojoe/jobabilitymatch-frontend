import Modal from "@/components/UI/Modal";
import PwdForm from "@/components/Form/PwdForm";

const UpdatePwd = ({ authUser, roles, disabilityTypes, onClose }) => {
  const pwd = {
    id: authUser.id,
    lastname: authUser?.lastname,
    firstname: authUser?.firstname,
    middlename: authUser?.middlename,
    birthdate: authUser?.birthdate,
    gender: authUser?.gender,
    address: authUser?.address,
    phone: authUser?.phone,
    pwd_id_no: authUser?.pwd_id_no,
    email: authUser?.email,
    disability_types: authUser?.disability_types?.map((d) => ({
      value: d.id,
      label: d.name,
    })),
    password: "authpassword",
    confirmPassword: "authpassword",
  };

  return (
    <Modal onClose={onClose}>
      <PwdForm
        pwd={pwd}
        roles={roles}
        disabilityTypes={disabilityTypes}
        onClose={onClose}
      />
    </Modal>
  );
};

export default UpdatePwd;
