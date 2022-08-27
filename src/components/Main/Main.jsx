import React from 'react';
import estilos from './main.module.css';

import gente from '../../assets/img/gente2.jpg'

const Main = ({ test, fecha, saludar}) => {


    //distintas formas
    //console.log(props); // {}
    //console.log(props);
    //console.log(props.alumno.nombre);
    //const comision = props.test;
    //const { test, fecha } = props


    return (
        <main className={estilos.main}>
            <div>
            <h2 onClick={saludar}>Bienvenidos a {test}</h2>
            <img src={gente} class={estilos.gente} alt="" />
            </div>
            <section>
                <p>Hoy es {fecha} de Agosto</p>
                <h3>Todo lo que buscas para TU PREVIA<br/> </h3>
            </section>
        </main>
    );
};

export default Main;
