import React from "react";
import { HiDesktopComputer } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";

const MyIntro = () => {
  return (
    <div style={{ marginTop: "200px", fontSize: "10px" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ marginRight: "5px", marginTop: "1px" }}>
          <HiDesktopComputer />
        </div>
        Designed and Developed by Moksh Chadha
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ marginRight: "5px", marginTop: "1px" }}>
          <AiOutlineMail />
        </div>
        Reach me at chadhamoksh@gmail.com
      </div>
    </div>
  );
};

export default MyIntro;
