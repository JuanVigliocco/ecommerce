import React from 'react';
import estilos from './main.module.css';
import Button from '../Button/Button';
import gente from '../../assets/img/gente2.jpg'
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import { ItemListContainer } from '../ItemlistContainer/ItemListContainer';

const Main = ({ test, saludar}) => {


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
                    <div className={estilos.button}>
                    <Button value='Sign In' variant='primary'/>
                    <Button value='Log Out' variant='secondary'/>
                </div>
                <img src={gente} className={estilos.gente} alt="" />
                </div>
                <section>
                        <h3>Todo lo que buscas para TU PREVIA<br/> </h3>
                </section>
            <Routes>
                <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
                    
                    
            </Routes>
        </main>
    );
};

export default Main;
