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
                <div>
                    <h1>Cadastre-se</h1>
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" onChange={e => setName(e.target.value)} required />
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" onChange={e => setEmail(e.target.value)} required />
                    <label for="senha">Senha:</label>
                    <input type="password" id="senha" name="senha" onChange={e => setPassword(e.target.value)} required />
                    <button type="submit" className="button red">Enviar</button>
                    <Link to="/" className="button blue">Já possui conta?</Link>
                </div>

            </form>
        </div>

    );
};

export default Register;