import Modal from "@/components/UI/Modal";
import EmployerForm from "./EmployerForm";

const UpdateEmployer = ({ authUser, onClose }) => {
  const employerDetails = {
    id: authUser.id,
    lastname: authUser?.lastname,
    firstname: authUser?.firstname,
    middlename: authUser?.middlename,
    birthdate: authUser?.birthdate,
    gender: authUser?.gender,
    address: authUser?.address,
    phone: authUser?.phone,
    company_id: authUser?.company?.id,
    company: authUser?.company?.name,
    company_address: authUser.company?.address,
    email: authUser?.email,
    password: "authpassword",
    confirmPassword: "authpassword",
  };

  console.log("employer", employerDetails);

  return (
    <Modal onClose={onClose}>
      <EmployerForm employer={employerDetails} onClose={onClose} />
    </Modal>
  );
};

export default UpdateEmployer;
