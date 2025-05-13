import UpdateEmployer from "@/components/Form/UpdateEmployer";
import UpdateUser from "@/components/Form/UpdateUser";
import UpdatePwd from "@/components/Form/UpdatePwd";

const UpdateFormType = ({ user, roles, disabilityTypes, onClose }) => {
  const role = user?.role_id;
  if (role === 1) return <UpdateUser authUser={user} onClose={onClose} />;
  if (role === 2)
    return (
      <UpdatePwd
        authUser={user}
        roles={roles?.data}
        disabilityTypes={disabilityTypes?.data}
        onClose={onClose}
      />
    );
  if (role === 3) return <UpdateEmployer authUser={user} onClose={onClose} />;
};

export default UpdateFormType;
