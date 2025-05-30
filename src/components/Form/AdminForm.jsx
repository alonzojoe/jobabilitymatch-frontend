import PageHeader from "@/components/Global/PageHeader";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { adminSchema } from "@/schemas";
import { ToastMessage, handlePhoneInput, setLocalStorage } from "@/libs/utils";
import api from "@/services/api";

const notify = new ToastMessage();
const AdminForm = ({
  admin = null,
  onClose,
  onRefresh = () => {},
  isNavbar = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: isLoading },
  } = useForm({
    resolver: zodResolver(adminSchema),
    defaultValues: {
      role_id: 1,
      id: admin?.id ?? 0,
      firstname: admin?.firstname ?? "",
      lastname: admin?.lastname ?? "",
      middlename: admin?.middlename ?? "",
      birthdate: admin?.birthdate ?? "",
      gender: admin?.gender ?? "",
      address: admin?.address ?? "",
      phone: admin?.phone ?? "",
      email: admin?.email ?? "",
      password: admin?.password ?? "",
      confirmPassword: admin?.confirmPassword ?? "",
    },
  });

  const handleSave = async (data) => {
    console.log("data", data);
    const adminData = {
      ...data,
      role_id: 1,
    };

    try {
      admin ? await update(adminData) : await save(adminData);
      const msg = admin ? "updated" : "created";
      notify.notif("success", `Admin account ${msg} successfully`);
      onRefresh();
      onClose();
    } catch (error) {
      console.log("error", error);
      if (error?.response?.data?.errors?.email) {
        const msg = error?.response?.data?.errors?.email[0];
        notify.notif("error", `${msg}`);
      } else {
        notify.notif("error", `Something went wrong.`);
      }
    }

    // console.log(user);
  };

  const save = async (data) => {
    await api.post("/auth/register", {
      ...data,
    });
  };

  const update = async (data) => {
    await api.patch(`/user/admin/${admin?.id}`, {
      ...data,
      company_id: admin?.company_id,
    });
    if (isNavbar) {
      await updatedUser();
    }
  };

  const updatedUser = async () => {
    try {
      const res = await api.post("/auth/me");
      const { user } = res.data;
      setLocalStorage("auth-user", user);
      console.log("res auth me", user);
    } catch (error) {
      console.log("error", error?.message);
    } finally {
      window.location.reload();
    }
  };

  return (
    <div>
      <form
        className="mt-4 mb-2"
        onSubmit={handleSubmit((data) => handleSave(data))}
      >
        <div className="row">
          <div
            className={`col-sm-12 col-md-6 ${admin ? "col-lg-12" : "col-lg-8"}`}
          >
            <PageHeader title="Admin Information" />

            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <div
                  className={`mb-2 fv-plugins-icon-container ${
                    errors.lastname ? "group-invalid" : ""
                  }`}
                >
                  <label htmlFor="lastname" className="form-label fs-6">
                    Last Name <span className="text-danger">*</span>
                  </label>
                  <input
                    {...register("lastname")}
                    type="text"
                    className="form-control text-uppercase"
                    maxLength={50}
                  />
                  <div className="mt-1 font-weight-bold text-validation">
                    {errors.lastname?.message}
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <div
                  className={`mb-2 fv-plugins-icon-container ${
                    errors.firstname ? "group-invalid" : ""
                  }`}
                >
                  <label htmlFor="firstname" className="form-label fs-6">
                    First Name <span className="text-danger">*</span>
                  </label>
                  <input
                    {...register("firstname")}
                    type="text"
                    className="form-control text-uppercase"
                    maxLength={50}
                  />
                  <div className="mt-1 font-weight-bold text-validation">
                    {errors.firstname?.message}
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <div className="mb-2 fv-plugins-icon-container">
                  <label htmlFor="middlename" className="form-label fs-6">
                    Middle Name
                  </label>
                  <input
                    {...register("middlename")}
                    type="text"
                    className="form-control text-uppercase"
                    maxLength={50}
                  />
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <div
                  className={`mb-2 fv-plugins-icon-container ${
                    errors.birthdate ? "group-invalid" : ""
                  }`}
                >
                  <label htmlFor="birthdate" className="form-label fs-6">
                    Birthdate <span className="text-danger">*</span>
                  </label>
                  <input
                    {...register("birthdate")}
                    type="date"
                    className="form-control"
                  />
                  <div className="mt-1 font-weight-bold text-validation">
                    {errors.birthdate?.message}
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <div
                  className={`mb-2 fv-plugins-icon-container ${
                    errors.gender ? "group-invalid" : ""
                  }`}
                >
                  <label htmlFor="gender" className="form-label fs-6">
                    Gender <span className="text-danger">*</span>
                  </label>
                  <select {...register("gender")} className="form-control">
                    <option value="">Please Select</option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                  </select>
                  <div className="mt-1 font-weight-bold text-validation">
                    {errors.gender?.message}
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <div
                  className={`mb-2 fv-plugins-icon-container ${
                    errors.phone ? "group-invalid" : ""
                  }`}
                >
                  <label htmlFor="phone" className="form-label fs-6">
                    Phone <span className="text-danger">*</span>
                  </label>
                  <input
                    {...register("phone")}
                    type="text"
                    className="form-control"
                    maxLength={11}
                    onChange={handlePhoneInput}
                  />
                  <div className="mt-1 font-weight-bold text-validation">
                    {errors.phone?.message}
                  </div>
                </div>
              </div>

              <div className="col-sm-12 mb-2">
                <div
                  className={`mb-2 fv-plugins-icon-container ${
                    errors.address ? "group-invalid" : ""
                  }`}
                >
                  <label htmlFor="address" className="form-label fs-6">
                    Address <span className="text-danger">*</span>
                  </label>
                  <textarea
                    {...register("address")}
                    className="form-control text-uppercase"
                    rows={2}
                  ></textarea>
                  <div className="mt-1 font-weight-bold text-validation">
                    {errors.address?.message}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {!admin && (
            <div className="col-sm-12 col-md-6 col-lg-4">
              <PageHeader title="Login Credentials" />
              <div className="row">
                <div className="col-12 mb-2">
                  <div
                    className={`mb-2 fv-plugins-icon-container ${
                      errors.email ? "group-invalid" : ""
                    }`}
                  >
                    <label htmlFor="email" className="form-label fs-6">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      {...register("email")}
                      type="text"
                      className="form-control"
                    />
                    <div className="mt-1 font-weight-bold text-validation">
                      {errors.email?.message}
                    </div>
                  </div>
                </div>

                <div className="col-12 mb-2">
                  <div
                    className={`mb-2 fv-plugins-icon-container ${
                      errors.password ? "group-invalid" : ""
                    }`}
                  >
                    <label htmlFor="password" className="form-label fs-6">
                      Password <span className="text-danger">*</span>
                    </label>
                    <input
                      {...register("password")}
                      type="password"
                      className="form-control"
                    />
                    <div className="mt-1 font-weight-bold text-validation">
                      {errors.password?.message}
                    </div>
                  </div>
                </div>

                <div className="col-12 mb-2">
                  <div
                    className={`mb-2 fv-plugins-icon-container ${
                      errors.confirmPassword ? "group-invalid" : ""
                    }`}
                  >
                    <label
                      htmlFor="confirmPassword"
                      className="form-label fs-6"
                    >
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
            </div>
          )}
        </div>

        <div className="mb-2"></div>

        <button
          type="submit"
          className="btn btn-custom d-grid w-100 waves-effect waves-light d-flex align-items-center justify-content-center gap-1"
          disabled={isLoading}
        >
          {admin ? "Update Profile" : "Sign Up"}
          {isLoading && (
            <div className="spinner-border text-white" role="status">
              <span className="visually-hidden"></span>
            </div>
          )}
        </button>

        <input type="hidden" data-has-listeners="true" />
      </form>
    </div>
  );
};

export default AdminForm;
