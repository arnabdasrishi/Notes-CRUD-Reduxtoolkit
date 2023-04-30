import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const loginVerify = useSelector((state) => state.auth);

  if (loginVerify.state && loginVerify.state.userCredentials && loginVerify.state.userCredentials.user.email !== undefined) {
    let user = "";
    return (
      <div className="d-flex justify-content-end bg-warning mb-4 p-2">
        <NavLink to="/">
          <h5 className="mx-3 text-dark">🏠Home</h5>
        </NavLink>
        <NavLink to="/signin">
          <h5 className="mx-3 text-dark">
            {loginVerify.state.userCredentials.user.email}
          </h5>
        </NavLink>
      </div>
    );
  } else {
    return (
      <div className="d-flex justify-content-end bg-warning mb-4 p-2">
        <NavLink to="/">
          <h5 className="mx-3 text-dark">🏠Home</h5>
        </NavLink>
        <NavLink to="/signin">
          <h5 className="mx-3 text-dark">🖊️Signup</h5>
        </NavLink>
        <NavLink to="/login">
          <h5 className="mx-3 text-dark">🛅Login</h5>
        </NavLink>
      </div>
    );
  }
};

export default Navbar;
