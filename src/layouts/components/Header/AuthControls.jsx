const AuthControls = ({ onSignIn, onSignUp, type }) => {
  const navClass = type === "lg" ? "profile-auth" : "";
  const mtClass = type === "lg" ? "mt-2" : "mt-0";

  return (
    <ul className={`navbar-nav navbar-right ${navClass}`}>
      <li>
        <div className={`d-flex align-items-center gap-2 ${mtClass}`}>
          <button className="btn btn-custom btn-md" onClick={onSignIn}>
            Sign In
          </button>
          <button
            className="btn btn-outline-custom btn-md mr-3"
            onClick={onSignUp}
          >
            Sign Up
          </button>
        </div>
      </li>
    </ul>
  );
};

export default AuthControls;
