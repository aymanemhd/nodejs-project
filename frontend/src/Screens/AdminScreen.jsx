import React, { useEffect } from "react";
import "../Styles/Admin.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Adminscreen = () => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      navigate("/");
    }
    //  else {
    //   navigate("/admin/AllPizzas");
    // }
  }, []);

  return (
    <div className="adminScreen">
      <div className="adminMenu">
        <h4 className="adminMenuItem_header">Hello Admin</h4>
        <ul className="adminMenuItem">
          <li>
            <Link to="/admin/AllPizzas" className="admin-link">
              All Food
            </Link>
          </li>
          <li>
            <Link to="/admin/AddPizzas" className="admin-link">
              Add Food
            </Link>
          </li>
          <li>
            <Link to="/admin/AllOrders" className="admin-link">
              All Orders
            </Link>
          </li>

          <li>
            <Link to="/admin/AllUser" className="admin-link">
              All User
            </Link>
          </li>
        </ul>
      </div>
      <div className="admin-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Adminscreen;
