import { useState } from "react";
import PageHeader from "@/components/Global/PageHeader";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { pwdSchema } from "@/schemas";
import {
  ToastMessage,
  handlePhoneInput,
  handlePwdIdNo,
  setLocalStorage,
  limitBirthday,
} from "@/libs/utils";
import api from "@/services/api";
import phFlag from "@/assets/images/PH.svg";

const notify = new ToastMessage();

const PwdForm = ({
  pwd = null,
  roles,
  disabilityTypes,
  onClose,
  isViewing = false,
}) => {
  console.log(pwd);
  const [selectedDisabilities, setSelectedDisabilities] = useState(() =>
    pwd ? pwd.disability_types : []
  );
  const [error, setError] = useState("");

  console.log("selected", selectedDisabilities);
  console.log("selected", selectedDisabilities);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: isLoading },
  } = useForm({
    resolver: zodResolver(pwdSchema),
    defaultValues: {
      role_id: 2,
      id: pwd?.id ?? 0,
      firstname: pwd?.firstname ?? "",
      lastname: pwd?.lastname ?? "",
      middlename: pwd?.middlename ?? "",
      birthdate: pwd?.birthdate ?? "",
      gender: pwd?.gender ?? "",
      address: pwd?.address ?? "",
      phone: pwd?.phone ?? "",
      pwd_id_no: pwd?.pwd_id_no ?? "",
      email: pwd?.email ?? "",
      password: pwd?.password ?? "",
      confirmPassword: pwd?.confirmPassword ?? "",
    },
  });

  const handleSave = async (data) => {
    if (selectedDisabilities.length === 0) {
      setError("Please select at least one disability type.");
      return;
    }

    const user = {
      ...data,
      disability_type_ids: selectedDisabilities.map((d) => d.value),
    };
    console.log("user", user);

    try {
      pwd ? await update(user) : await save(user);
      const msg = pwd ? "updated" : "created";
      notify.notif("success", `Account ${msg} successfully`);
      onClose();
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.errors?.email) {
        const msg = error?.response?.data?.errors?.email[0];
        notify.notif("error", `${msg}`);
      } else {
        notify.notif("error", `Something went wrong.`);
      }
    }

    console.log(user);
  };

  const save = async (data) => {
    await api.post("/auth/register", {
      ...data,
      role_id: 2,
    });
  };

  const update = async (data) => {
    await api.patch(`/user/pwd/${pwd?.id}`, {
      ...data,
    });
    await updatedUser();
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

  const handleChange = (selectedOptions) => {
    console.log(selectedOptions);
    setSelectedDisabilities(selectedOptions || []);
    setError("");
  };
  console.log("pwd roles", roles);
  const filteredRoles = roles?.filter((r) => r.id !== 1) ?? [];

  const mappedDisabilities =
    disabilityTypes?.map((d) => ({
      value: d.id,
      label: d.name,
    })) ?? [];
  return (
    <div>
      <form
        className={`mt-4 mb-2 ${isViewing ? "pe-none" : ""}`}
        onSubmit={handleSubmit((data) => handleSave(data))}
      >
        <div className="row">
          <div
            className={`col-sm-12 col-md-6 ${pwd ? "col-lg-12" : "col-lg-8"}`}
          >
            <PageHeader title="Personal Information" />
            <div className="row">
              {/* Last Name */}
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
                    max={limitBirthday()}
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
                  className={`mb-2 fv-plugins-icon-container input-group ${
                    errors.phone ? "group-invalid" : ""
                  }`}
                >
                  <label htmlFor="phone" className="form-label fs-6">
                    Phone <span className="text-danger">*</span>
                  </label>
                  <div
                    className={` input-group ${
                      errors.phone ? "group-invalid" : ""
                    }`}
                  >
                    <span className="input-group-text phoneFlag d-flex align-items-center gap-1">
                      <img src={phFlag} alt="ph" height={15} width={15} />
                      <span>+63</span>
                    </span>
                    <input
                      {...register("phone")}
                      type="text"
                      className="form-control"
                      maxLength={10}
                      onChange={handlePhoneInput}
                    />
                  </div>
                  <div className="mt-1 font-weight-bold text-validation">
                    {errors.phone?.message}
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <div
                  className={`mb-2 fv-plugins-icon-container ${
                    errors.pwd_id_no ? "group-invalid" : ""
                  }`}
                >
                  <label htmlFor="pwd_id_no" className="form-label fs-6">
                    PWD ID No. <span className="text-danger">*</span>
                  </label>
                  <input
                    {...register("pwd_id_no")}
                    type="text"
                    className="form-control"
                    maxLength={30}
                    onChange={handlePwdIdNo}
                  />
                  <div className="mt-1 font-weight-bold text-validation">
                    {errors.pwd_id_no?.message}
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <div
                  className={`mb-2 fv-plugins-icon-container ${
                    errors.role_id ? "group-invalid" : ""
                  }`}
                >
                  <label htmlFor="role_id" className="form-label fs-6">
                    Role
                  </label>
                  <select
                    name="role_id"
                    {...register("role_id")}
                    className="form-control"
                    disabled={true}
                  >
                    <option value={``}>Please Select</option>
                    {}
                    {filteredRoles.map((r) => (
                      <option value={r.id} key={r.id}>
                        {r.name}
                      </option>
                    ))}
                  </select>
                  <div className="mt-1 font-weight-bold text-validation">
                    {errors.role_id?.message}
                  </div>
                </div>
              </div>

              <div className="col-sm-12 mb-2">
                <div
                  className={`mb-2 fv-plugins-icon-container ${
                    error ? "group-invalid" : ""
                  }`}
                >
                  <label
                    htmlFor="disability_type_ids"
                    className="form-label fs-6"
                  >
                    Disability Type/s <span className="text-danger">*</span>
                  </label>

                  <Select
                    isMulti
                    name="disability_type_ids"
                    value={selectedDisabilities}
                    onChange={handleChange}
                    options={mappedDisabilities}
                    className="react-select-container"
                    classNamePrefix="react-select"
                  />

                  <div className="mt-1 font-weight-bold text-validation">
                    {error}
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

          {!pwd && (
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
                      maxLength={100}
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
        {!isViewing && (
          <button
            type="submit"
            className="btn btn-custom d-grid w-100 waves-effect waves-light d-flex align-items-center justify-content-center gap-1"
            disabled={isLoading}
          >
            {pwd ? "Update Profile" : "Sign up"}
            {isLoading && (
              <div className="spinner-border text-white" role="status">
                <span className="visually-hidden"></span>
              </div>
            )}
          </button>
        )}

        <input type="hidden" data-has-listeners="true" />
      </form>
    </div>
  );
};

export default PwdForm;
