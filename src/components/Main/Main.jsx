import React from 'react';
import estilos from './main.module.css';
import fotoPalos1 from '../../assets/img/kitgolf.jpg'


const Main = ({ test, fecha, alumno,saludos, saludar}) => {


    //distintas formas
    //console.log(props); // {}
    //console.log(props);
    //console.log(props.alumno.nombre);
    //const comision = props.test;
    //const { test, fecha } = props


    return (
        <main className={estilos.main}>
            <section>
                <h2 onClick={saludar}>Bienvenidos a {test}</h2>
                <p>Hoy es {fecha} de Agosto</p>
                <h3>Choose a Plan to Join Golf Worldwide Today
Grow your business with Worldwide Visitors!<br/>Mi nombre es {alumno.nombre}</h3>
                <p>{saludos}</p>
            </section>
            <img src={fotoPalos1} alt="" />
        </main>
    );
};

export default Main;
