import React, { useState, useEffect } from "react";
import "../Styles/Registration.css";
import { useDispatch, useSelector } from "react-redux";
import { userlogin } from "../action/userAction";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");

  const dispatch = useDispatch();

  const blankInput = () => {
    setEmail("");
    setPass("");
    setCpass("");
  };

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  const loginHandler = (e) => {
    e.preventDefault();
    if (email === "" || pass === "" || cpass === "") {
      alert("every feild is required");
      return;
    } else if (pass !== cpass) {
      alert("Password do not match");
      return;
    } else {
      const user = { email, pass };
      dispatch(userlogin(user));

      console.log(user);
      blankInput();
    }
  };

  return (
    <>
      <h1 className="header">Login</h1>
      <div className="boxContain" style={{ height: "70vh" }}>
        <form>
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
          <div className="grom-group">
            <Link style={{ color: "blue" }} to="/Registration">
              Not a User?
            </Link>
          </div>
          <div className="btns">
            <input
              type="submit"
              className="button"
              value="Login"
              onClick={loginHandler}
              style={{ marginTop: "2rem" }}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
