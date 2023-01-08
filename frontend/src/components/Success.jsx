import React, { useState } from "react";
import "../Styles/Success.css";

const Success = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div class="alert" style={{ display: show ? "block" : "none" }}>
        <span class="closebtn" onClick={() => setShow((s) => !s)}>
          &times;
        </span>
        <strong>sucess!</strong> action perform successfully
      </div>
    </>
  );
};

export default Success;
