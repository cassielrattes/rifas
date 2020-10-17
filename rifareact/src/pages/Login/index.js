import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

// import "./styles.css";

const Login = ({ history }) => {
  const [email_usuario, setEmail] = useState("");
  const [senha_usuario, setPassword] = useState("");

  async function handleSignIn(e) {
    e.preventDefault();
    const r = await api.post("/users/auth", { email_usuario, senha_usuario });
    console.log(r)
  }

  return (
    <div className="login-dark">
      <form onSubmit={handleSignIn}>
        <h2 className="sr-only">Login Form</h2>
        <div className="illustration">
          <i class="fa fa-lock"></i>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-block" type="submit">
            <strong>SignIn</strong>
          </button>
        </div>
        <Link to="/" className="forgot">
          Forgot your email or password?
        </Link>
      </form>
    </div>
  );
};

export default Login;