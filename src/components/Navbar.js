import React from "react";
import PropTypes from 'prop-types';
// import { NavLink, useLocation } from "react-router-dom";

const Navbar = (props) => {
  // const location = useLocation();

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.Title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" style={location.pathname === "/" ? props.activeStyle : null} href="#" >Home</a> */}
                <a className="nav-link active" aria-current="page" style={props.activeStyle} href="#" >Home</a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" style={location.pathname === "/about" ? props.activeStyle : null} to="/about">{props.About}</a> */}
                {/* <a className="nav-link" style={props.activeStyle} to="/about">{props.About}</a> */}
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form> */}
            <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable DarkMode</label> 
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {Title: PropTypes.string.isRequired}

Navbar.defaultProps = {About: "About"} 

export default Navbar;