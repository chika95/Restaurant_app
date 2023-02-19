import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <form action="">
      <p>
        Firstname: <input type="text" name="firstname" />
      </p>
      <p>
        Lastname: <input type="text" name="lastname" />
      </p>
      <p>
        Email: <input type="email" name="email" />
      </p>
      <p>
        Password: <input type="text" name="password" />
      </p>
      <p>
        Phone Number: <input type="text" name="phone-number" />
      </p>
      <Link to="/home">
        <button>Register</button>
      </Link>
    </form>
  );
};

export default Register;
