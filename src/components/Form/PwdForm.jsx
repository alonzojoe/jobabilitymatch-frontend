import { useState } from "react";
import PageHeader from "@/components/Global/PageHeader";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { pwdSchema } from "@/schema";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const PwdForm = ({ role, roles, disabilityTypes }) => {
  const [selectedDisabilities, setSelectedDisabilities] = useState([]);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: isLoading },
  } = useForm({
    resolver: zodResolver(pwdSchema),
    defaultValues: {
      role_id: role,
    },
  });

  const handleSave = async (data) => {
    if (selectedDisabilities.length === 0) {
      setError("Please select at least one disability type.");
      return;
    }

    const user = {
      ...data,
      disability_type_ids: selectedDisabilities.map((d) => d.id),
    };

    console.log(user);
  };

  const handleChange = (selectedOptions) => {
    setSelectedDisabilities(selectedOptions || []);
    setError("");
  };

  const filteredRoles = roles?.filter((r) => r.id !== 1) ?? [];

  const mappedDisabilities = disabilityTypes.map((d) => ({
    value: d.id,
    label: d.name,
  }));
  return (
    <div>
      <form
        className="mt-4 mb-2"
        onSubmit={handleSubmit((data) => handleSave(data))}
      >
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-8">
            <PageHeader title="Personal Information" />
            <div className="row mt-4">
              {/* Last Name */}
              <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <div
                  className={`mb-2 fv-plugins-icon-container ${
                    errors.lastname ? "group-invalid" : ""
                  }`}
                >
                  <label htmlFor="lastname" className="form-label fs-6">
                    Last Name
                  </label>
                  <input
                    {...register("lastname")}
                    type="text"
                    className="form-control"
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
                    First Name
                  </label>
                  <input
                    {...register("firstname")}
                    type="text"
                    className="form-control"
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
                    className="form-control"
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
                    Birthdate
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
                    Gender
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
                    Phone
                  </label>
                  <input
                    {...register("phone")}
                    type="text"
                    className="form-control"
                  />
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
                    PWD ID No.
                  </label>
                  <input
                    {...register("pwd_id_no")}
                    type="text"
                    className="form-control"
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
                    Disability Type/s
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
                    Address
                  </label>
                  <textarea
                    {...register("address")}
                    className="form-control"
                    rows={2}
                  ></textarea>
                  <div className="mt-1 font-weight-bold text-validation">
                    {errors.address?.message}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            <PageHeader title="Login Credentials" />
            <div className="row mt-4">
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
                    Password
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
                  <label htmlFor="confirmPassword" className="form-label fs-6">
                    Confirm Password
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
        </div>

        {/* <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
            <div className="mb-2 fv-plugins-icon-container">
              <label htmlFor="lname" className="form-label fs-6">
                Last Name
              </label>
              <input name="lname" type="text" className="form-control" />
              <div className="mt-1 font-weight-bold text-validation"></div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
            <div className="mb-2 fv-plugins-icon-container">
              <label htmlFor="fname" className="form-label fs-6">
                First Name
              </label>
              <input name="fname" type="text" className="form-control" />
              <div className="mt-1 font-weight-bold text-validation"></div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
            <div className="mb-2 fv-plugins-icon-container">
              <label htmlFor="mname" className="form-label fs-6">
                Middle Name
              </label>
              <input name="mname" type="text" className="form-control" />
              <div className="mt-1 font-weight-bold text-validation"></div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
            <div className="mb-2 fv-plugins-icon-container">
              <label htmlFor="bday" className="form-label fs-6">
                Birthdate
              </label>
              <input name="bday" type="date" className="form-control" />
              <div className="mt-1 font-weight-bold text-validation"></div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
            <div className="mb-2 fv-plugins-icon-container">
              <label htmlFor="gender" className="form-label fs-6">
                Gender
              </label>
              <select name="gender" className="form-control">
                <option value="">Please Select</option>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
              </select>
              <div className="mt-1 font-weight-bold text-validation"></div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
            <div className="mb-2 fv-plugins-icon-container">
              <label htmlFor="role" className="form-label fs-6">
                Role
              </label>
              <select name="role" className="form-control">
                <option value="">Please Select</option>
                <option value={2}>PWD</option>
                <option value={3}>EMPLOYER</option>
              </select>
              <div className="mt-1 font-weight-bold text-validation"></div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
            <div className="mb-2 fv-plugins-icon-container">
              <label htmlFor="phone" className="form-label fs-6">
                Phone
              </label>
              <input name="phone" type="text" className="form-control" />
              <div className="mt-1 font-weight-bold text-validation"></div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
            <div className="mb-2 fv-plugins-icon-container">
              <label htmlFor="mname" className="form-label fs-6">
                PWD ID No.
              </label>
              <input name="mname" type="text" className="form-control" />
              <div className="mt-1 font-weight-bold text-validation"></div>
            </div>
          </div>
          <div className="col-sm-12 mb-2">
            <div className="mb-2 fv-plugins-icon-container">
              <label htmlFor="address" className="form-label fs-6">
                Address
              </label>
              <textarea
                name="mname"
                type="text"
                className="form-control"
                rows={2}
              ></textarea>
              <div className="mt-1 font-weight-bold text-validation"></div>
            </div>
          </div>
        </div> */}

        <div className="mb-4"></div>

        <button
          type="submit"
          className="btn btn-custom d-grid w-100 waves-effect waves-light"
          disabled={isLoading}
        >
          Sign in
        </button>

        <input type="hidden" data-has-listeners="true" />
      </form>
    </div>
  );
};

export default PwdForm;
