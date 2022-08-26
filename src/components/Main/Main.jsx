import React from 'react';
import estilos from './main.module.css';
import absolute from '../../assets/img/absolute2.jpg'
import fernet from '../../assets/img/fernet3.jpg'
import campari from '../../assets/img/campari3.jpg'
import aperol from '../../assets/img/aperol.jpg'
import sky from '../../assets/img/sky1.jpg'
import havana from '../../assets/img/havana1.jpg'
import gancia from '../../assets/img/gancia.jpg'
import mumm from '../../assets/img/mumm2.jpg'
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
            <div className={estilos.imagenes}>
            <img src={absolute} class={estilos.img} alt="" />
            <img src={fernet} class={estilos.img} alt="" />
            <img src={campari} class={estilos.img} alt="" />
            <img src={aperol} class={estilos.img} alt="" />
            </div>
            <div className={estilos.imagenes}>
            <img src={sky} class={estilos.img} alt="" />
            <img src={havana} class={estilos.img} alt="" />
            <img src={gancia} class={estilos.img} alt="" />
            <img src={mumm} class={estilos.img} alt="" />
            </div>
        </main>
    );
};

export default Main;
