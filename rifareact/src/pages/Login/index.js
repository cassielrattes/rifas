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
      const admin = await api.get("/users/admin")
      if (admin.data === 'admin') {
        history.push("/criarifa")
      } 
      history.push("/criarifa")
    } else {
      alert("Usuário/Senha Errada");
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSignIn}>
        <div>
          <h1>Login</h1>
          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" onChange={e => setEmail(e.target.value)} required />
          <label for="senha">Senha:</label>
          <input type="password" id="senha" name="senha" onChange={e => setPassword(e.target.value)} required />
          <button type="submit" className="button red">Enviar</button>
          <Link to="/register" className="button blue">Já está cadastrado?</Link>
        </div>

      </form>

    </div>

  );
};

export default Login;