import React, { useEffect, useState } from "react";

const Alert = ({ msg, show }) => {
  const [showModal, setShow] = useState(false);

  useEffect(() => {
    const modal = document.getElementById("myModal");
    setShow(show);
    modal.style.display = showModal ? "block" : "none";
  });

  return (
    <div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span
            className="close"
            onClick={() => {
              console.log(msg);
              const modal = document.getElementById("myModal");
              setShow(false);
              modal.style.display = "none";
            }}
          >
            &times;
          </span>
          <p>The message is {msg}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
