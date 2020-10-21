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
    if (r.data !== '') {
      const admin = api.get("/users/admin")
      if (admin === 'admin') {
        history.push("/home")
      }
    } else {
      alert("Usuário/Senha Errada");
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSignIn}>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">

          <button type="submit" className="btn btn-danger">Enviar</button>
        </div>

      </form>
      <Link to="/register" className="btn btn-primary">Cadastre-se</Link>

    </div>

  );
};

export default Login;