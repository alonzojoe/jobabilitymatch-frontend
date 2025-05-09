import ModalSm from "@/components/UI/ModalSm";
import PageHeader from "@/components/Global/PageHeader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePassSchema } from "@/schemas";
import api from "@/services/api";
import { ToastMessage } from "@/libs/utils";

const notify = new ToastMessage();

const ChangePassword = ({ authUser, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: isLoading },
  } = useForm({
    resolver: zodResolver(changePassSchema),
    defaultValues: {
      email: authUser?.email,
    },
  });

  const handleChangePassword = async (data) => {
    console.log("data", data);
    try {
      await api.post("/auth/change-password", {
        ...data,
      });
      notify.notif("success", `Password changed successfully!`);
      onClose();
    } catch (error) {
      if (error?.response?.data?.message) {
        const msg = error?.response?.data?.message;
        notify.notif("error", `${msg}`);
      } else {
        notify.notif("error", `Something went wrong.`);
      }
    }
  };

  return (
    <ModalSm onClose={onClose}>
      <>
        <PageHeader title="Change Password" />
        <form
          className="pdx- mb-2"
          onSubmit={handleSubmit((data) => handleChangePassword(data))}
        >
          <div className="row">
            <div className="col-12 mb-2">
              <div
                className={`mb-2 fv-plugins-icon-container ${
                  errors.email ? "group-invalid" : ""
                }`}
              >
                <label htmlFor="email" className="form-label fs-6">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="text"
                  className="form-control"
                  disabled={true}
                />
                <div className="mt-1 font-weight-bold text-validation">
                  {errors.email?.message}
                </div>
              </div>
            </div>

            <div className="col-12 mb-2">
              <div
                className={`mb-2 fv-plugins-icon-container ${
                  errors.oldpassword ? "group-invalid" : ""
                }`}
              >
                <label htmlFor="oldpassword" className="form-label fs-6">
                  Old Password <span className="text-danger">*</span>
                </label>
                <input
                  {...register("oldpassword")}
                  type="password"
                  className="form-control"
                />
                <div className="mt-1 font-weight-bold text-validation">
                  {errors.oldpassword?.message}
                </div>
              </div>
            </div>

            <div className="col-12 mb-2">
              <div
                className={`mb-2 fv-plugins-icon-container ${
                  errors.newpassword ? "group-invalid" : ""
                }`}
              >
                <label htmlFor="newpassword" className="form-label fs-6">
                  Confirm Password <span className="text-danger">*</span>
                </label>
                <input
                  {...register("newpassword")}
                  type="password"
                  className="form-control"
                />
                <div className="mt-1 font-weight-bold text-validation">
                  {errors.newpassword?.message}
                </div>
              </div>
            </div>

            <div className="col-12 mb-2">
              <div
                className={`mb-2 fv-plugins-icon-container ${
                  errors.confirmPassword ? "group-invalid" : ""
                }`}
              >
                <label htmlFor="confirmPassword" className="form-label fs-6">
                  Confirm Password <span className="text-danger">*</span>
                </label>
                <input
                  {...register("confirmPassword")}
                  type="password"
                  className="form-control"
                />
                <div className="mt-1 font-weight-bold text-validation">
                  {errors.confirmPassword?.message}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-2"></div>

          <button
            type="submit"
            className="btn btn-custom d-grid w-100 waves-effect waves-light d-flex align-items-center justify-content-center gap-1"
            disabled={isLoading}
          >
            {`Change Password`}
            {isLoading && (
              <div className="spinner-border text-white" role="status">
                <span className="visually-hidden"></span>
              </div>
            )}
          </button>
        </form>
      </>
    </ModalSm>
  );
};

export default ChangePassword;
