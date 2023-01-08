import React, { useState, Fragment } from "react";
import "../Styles/TopNavbar.css";
import { Link } from "react-router-dom";
const TopNavbar = () => {
  const [toggal, setToggal] = useState(true);
  return (
    <>
      <Fragment>
        <header className="nav_header">
          <div className="logo_section">
            <h5 className="nav_tag">
              <i className="fa-solid fa-tags tag"></i>Free home Delivery On
              order above 500Rs.
            </h5>
          </div>
          <nav className={toggal ? "navbar_section " : "navbar_section active"}>
            <ul className="nav_item">
              <li>
                <Link activeclassname="true" className="navLink" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/About" activeclassname="true" className="navLink">
                  About us
                </Link>
              </li>
              {/* <li>
                <div className="toggal " onClick={console.log("hii")}>
                  <i className="fa-solid fa-moon"></i>
                  <i className="fa-solid fa-sun"></i>
                  <div className="toggal-button"></div>
                </div>
              </li> */}
            </ul>
          </nav>
          <div className="toggal-button" onClick={() => setToggal(!toggal)}>
            <i
              className={
                toggal
                  ? "fa-solid fa-bars menu-icon activemenu"
                  : ". fa-solid fa-bars menu-icon"
              }
            ></i>

            <i
              className={
                toggal
                  ? "fa-solid fa-xmark menu-cross "
                  : "fa-solid fa-xmark activemenu  "
              }
            ></i>
          </div>
        </header>
      </Fragment>
    </>
  );
};
export default TopNavbar;
