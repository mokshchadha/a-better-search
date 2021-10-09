import React, { useEffect, useState } from "react";

const Alert = ({
  msg,
  show,
  onShow = () => {},
  onClose = () => {},
  modalName = "myModal",
}) => {
  const [showModal, setShow] = useState(false);
  const [message, setMessage] = useState(msg);

  useEffect(() => {
    onShow();
    const modal = document.getElementById(modalName);
    setShow(show);
    setMessage(msg);

    modal.style.display = showModal ? "block" : "none";
  }, [show, showModal, onShow, msg, modalName]);

  return (
    <div>
      <div id={modalName} className="modal">
        <div className="modal-content">
          <span
            className="close"
            onClick={() => {
              const modal = document.getElementById(modalName);
              setShow(false);
              modal.style.display = "none";
              onClose();
            }}
          >
            &times;
          </span>
          <p style={{ color: "white" }}>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
