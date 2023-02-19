import React from "react";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <p>
        Username: <input type="text" name="username" />
      </p>
      <p>
        Password: <input type="email" name="email" />
      </p>
      <Link to="/home">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Login;
