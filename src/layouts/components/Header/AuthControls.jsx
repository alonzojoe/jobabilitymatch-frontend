import React from "react";

const AuthControls = ({ onSignIn, onSignUp }) => {
  return (
    <ul className="navbar-nav navbar-right">
      <li>
        <div className="d-flex align-items-center gap-2 mt-0">
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
