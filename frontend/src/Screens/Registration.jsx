import React from "react";
import { useState } from "react";
import "../Styles/Registration.css";
import { useSelector, useDispatch } from "react-redux";
import { userAction } from "../action/userAction";
import Error from "../components/Error";
import Success from "../components/Success";
import Loader from "../components/Loader";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const navigate = useNavigate();
  const registerState = useSelector((state) => state.registerUserReducer);
  const { loading, success, error } = registerState;

  const blankInput = () => {
    setName("");
    setEmail("");
    setPass("");
    setCpass("");
  };

  const dispatch = useDispatch();
  const registerhandler = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || pass === "" || cpass === "") {
      alert("every feild is required");
      return;
    } else if (pass !== cpass) {
      alert("Password do not match");
      return;
    } else {
      const user = { name, email, pass };
      dispatch(userAction(user));
      alert("user Registered");
      // console.log(user);
      blankInput();
      navigate("/login");
    }
  };

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {success && <Success />}
      <h1 className="header">Registration</h1>
      <div className="boxContain">
        <form>
          <div className="grom-group">
            <label> Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="grom-group">
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="grom-group">
            <label>Password:</label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>

          <div className="grom-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              value={cpass}
              onChange={(e) => setCpass(e.target.value)}
              required
            />
          </div>
          <div style={{ color: "blue" }} className="grom-group">
            <Link to="/login">Already User?</Link>
          </div>
          <div className="btns">
            <input
              type="submit"
              className="button"
              value="submit"
              onClick={registerhandler}
              style={{ marginTop: "2rem" }}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Registration;
