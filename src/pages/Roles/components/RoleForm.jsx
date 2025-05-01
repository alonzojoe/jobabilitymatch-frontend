import React from "react";
import ModalSm from "@/components/UI/ModalSm";
import PageHeader from "@/components/Global/PageHeader";
import { FaRegSave } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { roleSchema } from "@/schema";
import { ToastMessage } from "@/libs/utils";
import api from "@/services/api";

const notify = new ToastMessage();

const RoleForm = ({ onClose, onRefresh, selected }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: isLoading },
  } = useForm({
    resolver: zodResolver(roleSchema),
    defaultValues: {
      name: selected?.name ?? "",
    },
  });

  const handleSave = async (data) => {
    console.log("data", data);
    try {
      selected ? await update(data) : await save(data);
      onClose();
      onRefresh();
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.error) {
        const msgc = `Role has already been added`;
        notify.notif("error", `${msgc}`);
      } else {
        notify.notif("error", `Something went wrong.`);
      }
    }
  };

  const save = async (data) => {
    await api.post(`/role/create`, {
      name: data.name,
    });
    notify.notif("success", "Role added successfully!");
  };

  const update = async (data) => {
    await api.patch(`/role/update/${selected.id}`, {
      name: data.name,
    });
    notify.notif("success", "Role updated successfully!");
  };

  return (
    <ModalSm onClose={onClose}>
      <>
        <PageHeader title="Role Details" />
        <form
          className="mb-3"
          onSubmit={handleSubmit((data) => handleSave(data))}
        >
          <div
            className={`mb-3 fv-plugins-icon-container ${
              errors.name ? "group-invalid" : ""
            }`}
          >
            <label htmlFor="name" className="form-label font-weight-bold fs-6">
              Role
            </label>
            <input
              {...register("name")}
              name="name"
              type="text"
              className="form-control"
            />
            <div className="mt-1 font-weight-bold text-validation">
              {errors.name?.message}
            </div>
          </div>

          <div className="mb-3"></div>

          <button
            type="submit"
            className="btn btn-custom w-100 font-weight-bold fs-7 d-flex align-items-center justify-content-center gap-1"
            disabled={isLoading}
          >
            <FaRegSave className="fs-5" /> Save
          </button>

          <input type="hidden" data-has-listeners="true" />
        </form>
      </>
    </ModalSm>
  );
};

export default RoleForm;
