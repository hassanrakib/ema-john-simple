import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";
import "./Signup.css";

const Signup = () => {
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // check if password matched
    if (password !== confirmPassword) {
      setError("Password did not match.");
      return;
    }
    // create user in firebase
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // reset the form
        form.reset();

        // clear the error
        setError(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className="form-control">
          <p>
            <label htmlFor="email">Email:</label>
          </p>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="email"
            required
          />
        </div>
        <div className="form-control">
          <p>
            <label htmlFor="password">Password:</label>
          </p>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            required
          />
        </div>
        <div className="form-control">
          <p>
            <label htmlFor="confirm-password">Confirm Password:</label>
          </p>
          <input
            id="confirm-password"
            type="password"
            name="confirmPassword"
            placeholder="retype your password"
            required
          />
        </div>
        <p className="text-error">{error}</p>
        <div className="form-control">
          <input type="submit" value="Signup" />
        </div>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
