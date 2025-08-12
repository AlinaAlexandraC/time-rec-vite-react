// Handles username/password input.
// Submits to login function (auth check against backend).
// On success, stores user data (role, token?) and redirects to main page.

import "./Login.css";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/logo.svg";
import { useState } from "react";
import seePasswordIcon from "../../assets/see-password.svg";
import hidePasswordIcon from "../../assets/hide-password.svg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <img src={logoIcon} alt="logo" className="login-logo" />
      <div className="login-wrapper">
        <span className="login-title">Login</span>
        <div className="login-input-container">
          <div className="login-email input-container">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email here"
              className="email-input"
            />
          </div>
          <div className="login-password input-container">
            <label for="password">Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password here"
                className="password-input"
              />
              <img
                src={showPassword ? hidePasswordIcon : seePasswordIcon}
                alt="password-visibility"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>
        </div>
        <div className="login-button">
          <Link to="/dashboard">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
