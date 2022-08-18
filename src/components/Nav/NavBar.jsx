import React from 'react'
import estilos from './navbar.module.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className= {estilos.nav}>
            <ul>
                <li>
                    <a href='https://google.com'>Inicio</a>
                </li>
                <li>
                    <a href='https://google.com'>Productos</a>
                </li>
                <li>
                    <a href='https://google.com'>Nosotros</a>
                </li>
                <li>
                    <a href='https://google.com'>Contacto</a>
                </li>
                <li>
                <p><CartWidget /></p>
                </li>
            </ul>

        </nav>
    );
};

export default NavBar;