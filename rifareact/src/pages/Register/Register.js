import React, { useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

// import "./styles.css";

const Register = ({ history }) => {
    const [email_usuario, setEmail] = useState("");
    const [senha_usuario, setPassword] = useState("");
    const [nome_usuario, setName] = useState("");

    async function handleSignIn(e) {
        e.preventDefault();
        const r = await api.post("/users/register", { email_usuario, senha_usuario, nome_usuario });
        if (r.data !== '') {
            history.push('/');
        } else {
            alert("Usuário/Senha Errada");
        }
    }

    return (
        <div class="container">
            <form onSubmit={handleSignIn}>
                <div className="form-group">
                    <label for="name">Nome</label>
                    <input
                        className="form-control"
                        type="name"
                        name="name"
                        placeholder="Nome"
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label for="email">E-mail</label>
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label for="password">Senha</label>
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
            <Link to="/" className="btn btn-primary">Já está cadastrado?</Link>
        </div>

    );
};

export default Register;