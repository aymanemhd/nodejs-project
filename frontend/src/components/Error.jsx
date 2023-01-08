import React, { useState } from "react";
import "../Styles/Success.css";

const Error = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div
        class="alert"
        style={{ backgroundColor: "red", display: show ? "block" : "none" }}
      >
        <span class="closebtn" onClick={() => setShow((s) => !s)}>
          &times;
        </span>
        <strong>Error!</strong> action was not perform successfully
      </div>
    </>
  );
};

export default Error;
