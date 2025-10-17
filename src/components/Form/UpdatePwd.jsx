import Modal from "@/components/UI/Modal";
import PwdForm from "@/components/Form/PwdForm";

const UpdatePwd = ({
  authUser,
  roles,
  disabilityTypes,
  onClose,
  isViewing = false,
}) => {
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
    pwdid_path: authUser?.pwdid_path,
    email: authUser?.email,
    disability_types: authUser?.disability_types?.map((d) => ({
      value: d.id,
      label: d.name,
    })),
    password: "authpassword",
    confirmPassword: "authpassword",
  };

  return (
    <Modal higher={true} onClose={onClose}>
      <PwdForm
        pwd={pwd}
        roles={roles}
        disabilityTypes={disabilityTypes}
        onClose={onClose}
        isViewing={isViewing}
      />
    </Modal>
  );
};

export default UpdatePwd;
