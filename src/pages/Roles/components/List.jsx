import Loader from "@/components/UI/Loader";
import { FaRegTrashAlt } from "react-icons/fa";

const List = ({ roles, onUpdate, isLoading, onDelete }) => {
  if (isLoading || !roles?.data) {
    return (
      <div className="col-12">
        <Loader />
      </div>
    );
  }

  return (
    <>
      {roles.data.map((r) => (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={r.id}>
          <ListItem role={r} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
      ))}
    </>
  );
};

const ListItem = ({ role, onUpdate, onDelete }) => {
  return (
    <div className="card border border">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h6 className="fw-semibold text-secondary fs-6 mb-2">
            Total users: {role.users_count}
          </h6>
        </div>
        <div className="d-flex justify-content-between align-items-end mt-1">
          <div className="role-heading">
            <h4 className="mb-3 fs-5">{role.name}</h4>
            <div className="cursor-pointer text-primary role-edit-modal">
              <span className="fs-6" onClick={() => onUpdate(role)}>
                Edit Role
              </span>
            </div>
          </div>

          <span
            className="cursor-pointer text-danger"
            onClick={() => onDelete(role.id)}
          >
            <FaRegTrashAlt className="fs-5" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default List;
