import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../action/userAction";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  // console.log(currentUser);

  const handleChange = (e) => {
    if (e.target.value === "Log out") {
      dispatch(userLogout());
      navigate("/login");
    } else if (e.target.value === "Order") {
      navigate("/order");
    }
  };

  return (
    <Fragment>
      <header className="mainNav_header ">
        <div className="mainNav_section">
          <h4>Order Online</h4>
        </div>
        <ul className="mainNav_item">
          {!currentUser ? (
            <>
              <li>
                <Link className="MainLinkNav" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="MainLinkNav" to="/Registration">
                  Register
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                {/* <Link className="MainLinkNav" to="/"> */}
                <select
                  className="nav-dropdown MainLinkNav"
                  onChange={handleChange}
                  defaultValue={currentUser.name}
                >
                  <option disabled>{currentUser.name}</option>
                  {currentUser.name !== "admin" ? (
                    <option value="Order">Order</option>
                  ) : (
                    ""
                  )}
                  <option value="Log out">Log Out</option>
                </select>
                {/* </Link> */}
              </li>
              {!currentUser.isAdmin ? (
                <li>
                  <Link className="MainLinkNav" to="/cart">
                    Cart({cartState.cartItems.length})
                  </Link>
                </li>
              ) : (
                ""
              )}
            </>
          )}
        </ul>
        {/* toggal */}
      </header>
    </Fragment>
  );
}

export default Navbar;
