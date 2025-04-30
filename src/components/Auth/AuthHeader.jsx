import React from "react";
import MainText from "@/assets/images/logo-text.png";
const AuthHeader = () => {
  return (
    <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
      <img
        src={MainText}
        alt="app-text"
        style={{
          height: "auto",
          width: "160px",
        }}
      />
    </div>
  );
};

export default AuthHeader;
