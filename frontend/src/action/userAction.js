import axios from "axios";

export const userAction = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTRATION_REQUEST" });
  try {
    const res = await axios.post("/api/user/register", user);
    console.log(res);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAIL", payload: error });
  }
};

export const userlogin = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUIEST" });
  try {
    const res = await axios.post("/api/user/login", user);
    console.log(res.data);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: res.data });
    localStorage.setItem("currentUser", JSON.stringify(res.data));
    alert("user login");
    if (res.data.name === "admin") {
      window.location.href = "/admin/AllPizzas";
    } else {
      window.location.href = "/";
    }
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAIL", payload: error });
    alert("you are not user Sign up");
  }
};
export const getAllUser = () => async (dispatch) => {
  dispatch({ type: "GET_USER_REQUIEST" });
  try {
    const res = await axios.get("/api/user/allUsers");
    dispatch({ type: "GET_USER_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_USER_FAIL", payload: error });
  }
};

export const userLogout = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/login";
  // window.location.reload(true);
};
