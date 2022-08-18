import React from 'react';
import estilos from './main.module.css';


const Main = ({ test, fecha, alumno}) => {


    //distintas formas
    //console.log(props); // {}
    //console.log(props);
    //console.log(props.alumno.nombre);
    //const comision = props.test;
    //const { test, fecha } = props


    return (
        <main className={estilos.main}>
            <section>
                <h2>Bienvenidos a {test}</h2>
                <p>Hoy es {fecha} de Agosto</p>
                <h3>Choose a Plan to Join Golf Worldwide Today
Grow your business with Worldwide Visitors!<br/>Mi nombre es {alumno.nombre}</h3>
            </section>
        </main>
    );
};

export default Main;
