import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Link to="/login">
        <button>LOGIN</button>
      </Link>
      <Link to="/register">
        <button>REGISTER</button>
      </Link>
      <Outlet />
    </div>
  );
};

export default Layout;
