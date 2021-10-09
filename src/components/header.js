import React from "react";
import { FcGoogle } from "react-icons/fc";

const Header = () => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <span style={{ marginRight: "10px" }}>A Better</span>
      <span style={{ marginTop: "5" }}>
        <FcGoogle />
      </span>
      <span style={{ marginRight: "10px" }}> Search</span>
    </div>
  );
};

export default Header;
