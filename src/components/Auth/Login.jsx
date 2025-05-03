import api from "@/services/api";
import { setLocalStorage } from "@/libs/utils";
import ModalSm from "@/components/UI/ModalSm";
import AuthHeader from "@/components/Auth/AuthHeader";
import { useForm } from "react-hook-form";
import { authSchema } from "@/schemas/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastMessage } from "@/libs/utils";

const notify = new ToastMessage();

const Login = ({ onClose, onCreate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: isLoading },
  } = useForm({
    resolver: zodResolver(authSchema),
  });

  const handleSignIn = async (formData) => {
    console.log(formData);
    const { email, password } = formData;
    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      const { token } = res.data.authorization;
      const { user } = res.data;
      setLocalStorage("auth-token", token);
      setLocalStorage("auth-user", user);

      if (user?.role?.id === 2) {
        location.reload();
      } else {
        window.location.href = "/home";
      }
    } catch (error) {
      console.log(error?.message);
      notify.notif("error", "Invalid email or password");
      // toast.error("Invalid email or password", {
      //   duration: 3000,
      //   position: "top-right",
      // });
    }
  };

  return (
    <ModalSm onClose={onClose}>
      <>
        <AuthHeader />
        <h3 className="mb-2 font-weight-bold">
          Welcome! Sign in to get started.
        </h3>
        <p className="mb-2 text-secondary fs-6">
          Please sign-in to your account.
        </p>
        <form
          className="mb-3"
          onSubmit={handleSubmit((data) => handleSignIn(data))}
        >
          <div
            className={`mb-3 fv-plugins-icon-container ${
              errors?.email ? "group-invalid" : ""
            }`}
          >
            <label htmlFor="email" className="form-label fs-6">
              Email
            </label>
            <input
              {...register("email")}
              name="email"
              type="email"
              className="form-control"
              id="email"
              data-has-listeners="true"
            />
            <div className="mt-1 font-weight-bold text-validation">
              {errors.email?.message}
            </div>
          </div>

          <div
            className={`mb-3 fv-plugins-icon-container ${
              errors?.password ? "group-invalid" : ""
            }`}
          >
            <label htmlFor="password" className="form-label fs-6">
              Password
            </label>
            <input
              {...register("password")}
              name="password"
              type="password"
              className="form-control"
              id="password"
              data-has-listeners="true"
            />
            <div className="mt-1 font-weight-bold text-validation">
              {errors.password?.message}
            </div>
          </div>

          <div className="mb-4"></div>

          <button
            type="submit"
            className="btn btn-custom d-grid w-100 waves-effect waves-light d-flex align-items-center justify-content-center gap-1"
            disabled={isLoading}
          >
            <span>{isLoading ? "Signing in" : "Sign in"}</span>
            {isLoading && (
              <div className="spinner-border text-white" role="status">
                <span className="visually-hidden"></span>
              </div>
            )}
          </button>

          <input type="hidden" data-has-listeners="true" />
        </form>
        <div className="text-center">
          <span className="fs-6 text-secondary">New on our platform?</span>
          <div className="cursor-pointer text-primary fs-6" onClick={onCreate}>
            <span>Create an account</span>
          </div>
        </div>
      </>
    </ModalSm>
  );
};

export default Login;
