import React, { useEffect } from 'react'
import { Redirect } from "react-router-dom";


const sair = () => {
    localStorage.removeItem('token');
}


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                    </li>

                    {localStorage.getItem('token') !== null ? (<li class="nav-item ml-auto">
                        <button class="nav-link" onClick={() => sair()}>Sair</button>
                    </li>) : <Redirect to="/" />}

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
