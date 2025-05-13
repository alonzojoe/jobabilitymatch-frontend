import Modal from "@/components/UI/Modal";
import AdminForm from "@/components/Form/AdminForm";

const UpdateUser = ({ authUser, onClose, isNavbar = false }) => {
  const user = {
    id: authUser.id,
    lastname: authUser?.lastname,
    firstname: authUser?.firstname,
    middlename: authUser?.middlename,
    birthdate: authUser?.birthdate,
    gender: authUser?.gender,
    address: authUser?.address,
    phone: authUser?.phone,
    email: authUser?.email,
    password: "authpassword",
    confirmPassword: "authpassword",
  };
  return (
    <Modal onClose={onClose}>
      <AdminForm admin={user} onClose={onClose} isNavbar={isNavbar} />
    </Modal>
  );
};

export default UpdateUser;
