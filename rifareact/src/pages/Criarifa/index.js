import React, { useState } from 'react'
import api from '../../services/api'

const CriaRifa = (props) => {
    const [id_rifa, setId] = useState(0);
    const [nome_rifa, setNome] = useState("");
    const [foto_rifa, setFoto] = useState("");

    const submeter = async () => {
        const r = await api.post("/rifas", { id_rifa, nome_rifa, foto_rifa });
        console.log(r)
    }

    return (
        <div class="container">
            <form onSubmit={submeter}>
                <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input
                        className="form-control"
                        type="number"
                        name="id"
                        placeholder="ID"
                        onChange={e => setId(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input
                        className="form-control"
                        type="text"
                        name="nome"
                        placeholder="Nome"
                        onChange={e => setNome(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="foto">Foto</label>
                    <input
                        className="form-control"
                        type="text"
                        name="foto"
                        placeholder="Foto"
                        onChange={e => setFoto(e.target.value)}
                    />
                </div>


                <div className="form-group">
                    <button type="submit" className="btn btn-danger">Criar Rifa</button>
                </div>

            </form>
        </div>

    );
}

export default CriaRifa
