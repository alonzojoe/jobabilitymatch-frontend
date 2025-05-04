import { useState } from "react";
import Modal from "@/components/UI/Modal";
import PageHeader from "@/components/Global/PageHeader";
import Select from "react-select";
import ReactQuill from "react-quill-new";
import { FaRegSave } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postingSchema } from "@/schemas";
import { ToastMessage, handlePhoneInput } from "@/libs/utils";
import api from "@/services/api";

const notify = new ToastMessage();

const JobPostingForm = ({ onClose, onRefresh, selected, disabilityTypes }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: isLoading },
  } = useForm({
    resolver: zodResolver(postingSchema),
    // defaultValues: {
    //   name: selected?.name ?? "",
    // },
  });

  console.log("Job Posting Form re-render");

  const [selectedDisabilities, setSelectedDisabilities] = useState([]);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleChange = (selectedOptions) => {
    setSelectedDisabilities(selectedOptions || []);
    setError("");
  };

  const handleEditorChange = (content, editor) => {
    console.log("content", content);
    setDescription(content);
  };

  const handleSave = async (data) => {
    if (selectedDisabilities.length === 0) {
      setError("Please select at least one disability type.");
      return;
    }

    console.log("data", data);
    try {
      selected ? await update(data) : await save(data);
      onClose();
      onRefresh();
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.error) {
        const msgc = `Disability type has already been added`;
        notify.notif("error", `${msgc}`);
      } else {
        notify.notif("error", `Something went wrong.`);
      }
    }
  };

  const save = async (data) => {
    await api.post(`/disability/create`, {
      name: data.name,
    });
    notify.notif("success", "Disability type added successfully!");
  };

  const update = async (data) => {
    await api.put(`/disability/update/${selected.id}`, {
      name: data.name,
    });
    notify.notif("success", "Disability type updated successfully!");
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
                  maxLength={11}
                />
                <div className="mt-1 font-weight-bold text-validation">
                  {errors.vacant_positions?.message}
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
                  {error}
                </div>
              </div>
            </div>

            <div className="col-12 mb-2">
              <div
                className={`mb-2 fv-plugins-icon-container ${
                  errors.title ? "group-invalid" : ""
                }`}
              >
                <label
                  htmlFor="title"
                  className="form-label font-weight-bold fs-6"
                >
                  Job Description <span className="text-danger">*</span>
                </label>
                <ReactQuill
                  theme="snow"
                  value={description}
                  onChange={handleEditorChange}
                  style={{ height: "200px", width: "100%" }}
                />
                <div className="mt-5 font-weight-bold text-validation">
                  {errors.title?.message}
                </div>
              </div>
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
