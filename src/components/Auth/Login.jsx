import ModalSm from "@/components/UI/ModalSm";
import AuthHeader from "@/components/Auth/AuthHeader";

const Login = ({ onClose }) => {
  return (
    <ModalSm onClose={onClose}>
      <>
        <AuthHeader />
        <h3 class="mb-2 font-weight-bold">Welcome! Sign in to get started.</h3>
        <p class="mb-2 text-secondary fs-6">Please sign-in to your account.</p>
        <form className="mb-3">
          <div className="mb-3 fv-plugins-icon-container">
            <label htmlFor="email" className="form-label fs-6">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              data-has-listeners="true"
            />
            <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
          </div>

          <div className="mb-3 fv-plugins-icon-container">
            <label htmlFor="password" className="form-label fs-6">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password"
              data-has-listeners="true"
            />
            <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
          </div>

          <div className="mb-4"></div>

          <button
            type="button"
            className="btn btn-custom d-grid w-100 waves-effect waves-light"
          >
            Sign in
          </button>

          <input type="hidden" data-has-listeners="true" />
        </form>
        <div className="text-center">
          <span className="fs-6 text-secondary">New on our platform?</span>
          <div className="cursor-pointer text-primary fs-6">
            <span>Create an account</span>
          </div>
        </div>
      </>
    </ModalSm>
  );
};

export default Login;
