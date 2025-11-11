import { useState, useRef, useContext } from "react";
import AuthContext from "@/store/auth/auth-context";
import Modal from "@/components/UI/Modal";
import PageHeader from "@/components/Global/PageHeader";
import Select from "react-select";
import JobDescriptionEditor from "@/pages/JobPostings/components/JobDescriptionEditor";
import { FaRegSave } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postingSchema } from "@/schemas";
import { ToastMessage, handlePhoneInput } from "@/libs/utils";
import moment from "moment";
import api from "@/services/api";

const notify = new ToastMessage();

const TODAY = moment().format("YYYY-MM-DD");
console.log(TODAY);

const JobPostingForm = ({ onClose, onRefresh, selected, disabilityTypes }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: isLoading },
  } = useForm({
    resolver: zodResolver(postingSchema),
    defaultValues: {
      title: selected?.title ?? "",
      vacant_positions: selected?.vacant_positions?.toString() ?? "",
      hiring_from: selected?.hiring_from ?? TODAY,
      hiring_to: selected?.hiring_to ?? "",
    },
  });

  const { authUser } = useContext(AuthContext);

  console.log("auhtuser", authUser);

  const [selectedDisabilities, setSelectedDisabilities] = useState(
    () => selected?.disability_types ?? []
  );

  const [error, setError] = useState({
    select: "",
    description: "",
  });

  const editorRef = useRef();

  const handleChange = (selectedOptions) => {
    setSelectedDisabilities(selectedOptions || []);
    setError((prev) => ({
      ...prev,
      select: "",
    }));
  };

  const handleSave = async (data) => {
    if (selectedDisabilities.length === 0) {
      setError((prev) => ({
        ...prev,
        select: "Please select at least one disability type.",
      }));
      return;
    }

    if (editorRef.current?.getDescription() === "<p><br></p>") {
      setError((prev) => ({
        ...prev,
        description: "Job description is required.",
      }));
      return;
    }

    const formData = {
      ...data,
      company_id: authUser.company.id,
      description: editorRef.current?.getDescription(),
      disability_type_ids: selectedDisabilities.map((data) => data.value),
    };

    try {
      selected ? await update(formData) : await save(formData);

      onClose();
      onRefresh();
    } catch (error) {
      notify.notif("error", `Something went wrong.`);
    }
  };

  const save = async (data) => {
    console.log("pass", data);
    // return;
    await api.post(`/posting/create`, {
      ...data,
    });
    notify.notif("success", "Job posting created successfully!");
  };

  const update = async (data) => {
    await api.put(`/posting/update/${selected.id}`, {
      ...data,
    });
    notify.notif("success", "Job posting updated successfully!");
  };

  const mappedDisabilities =
    disabilityTypes?.map((d) => ({
      value: d.id,
      label: d.name,
    })) ?? [];

  return (
    <Modal onClose={onClose}>
      <>
        <PageHeader title="Job Posting Details" />
        <form
          className="mt-3 mb-3"
          onSubmit={handleSubmit((data) => handleSave(data))}
        >
          <div className="row mt-4">
            <div className="col-sm-12 col-md-6 col-lg-8 mb-2">
              <div
                className={`mb-2 fv-plugins-icon-container ${
                  errors.title ? "group-invalid" : ""
                }`}
              >
                <label
                  htmlFor="title"
                  className="form-label font-weight-bold fs-6"
                >
                  Job Title <span className="text-danger">*</span>
                </label>
                <input
                  {...register("title")}
                  type="text"
                  className="form-control text-uppercase"
                  maxLength={50}
                />
                <div className="mt-1 font-weight-bold text-validation">
                  {errors.title?.message}
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
              <div
                className={`mb-2 fv-plugins-icon-container ${
                  errors.vacant_positions ? "group-invalid" : ""
                }`}
              >
                <label
                  htmlFor="vacant_positions"
                  className="form-label font-weight-bold fs-6"
                >
                  Vacant Position/s <span className="text-danger">*</span>
                </label>
                <input
                  {...register("vacant_positions")}
                  type="text"
                  className="form-control"
                  maxLength={10}
                  onChange={handlePhoneInput}
                />
                <div className="mt-1 font-weight-bold text-validation">
                  {errors.vacant_positions?.message}
                </div>
              </div>
            </div>

            {/* StartDateEndDate Start */}
            <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
              <div
                className={`mb-2 fv-plugins-icon-container ${
                  errors.hiring_from ? "group-invalid" : ""
                }`}
              >
                <label
                  htmlFor="hiring_from"
                  className="form-label font-weight-bold fs-6"
                >
                  Hiring Start Date <span className="text-danger">*</span>
                </label>
                <input
                  {...register("hiring_from")}
                  type="date"
                  className="form-control text-uppercase"
                />
                <div className="mt-1 font-weight-bold text-validation">
                  {errors.hiring_from?.message}
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
              <div
                className={`mb-2 fv-plugins-icon-container ${
                  errors.hiring_to ? "group-invalid" : ""
                }`}
              >
                <label
                  htmlFor="hiring_to"
                  className="form-label font-weight-bold fs-6"
                >
                  Hiring End Date <span className="text-danger">*</span>
                </label>
                <input
                  {...register("hiring_to")}
                  type="date"
                  className="form-control text-uppercase"
                />
                <div className="mt-1 font-weight-bold text-validation">
                  {errors.hiring_to?.message}
                </div>
              </div>
            </div>

            {/* StartDateEndDate End */}

            <div className="col-sm-12 mb-2">
              <div
                className={`mb-2 fv-plugins-icon-container ${
                  error.select ? "group-invalid" : ""
                }`}
              >
                <label
                  htmlFor="disability_type_ids"
                  className="form-label font-weight-bold fs-6"
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
                  {error.select}
                </div>
              </div>
            </div>

            <div className="col-12 mb-2">
              <JobDescriptionEditor
                ref={editorRef}
                error={error}
                jdDescription={selected?.description}
              />
            </div>
          </div>

          <div className="mt-0 mb-0"></div>

          <button
            type="submit"
            className="btn btn-custom w-100 font-weight-bold fs-7 d-flex align-items-center justify-content-center gap-1"
            disabled={isLoading}
          >
            <FaRegSave className="fs-5" /> {isLoading ? "Saving" : "Save"}
            {isLoading && (
              <div className="spinner-border text-white" role="status">
                <span className="visually-hidden"></span>
              </div>
            )}
          </button>

          <input type="hidden" data-has-listeners="true" />
        </form>
      </>
    </Modal>
  );
};

export default JobPostingForm;
