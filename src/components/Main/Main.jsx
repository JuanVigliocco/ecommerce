import React from 'react';
import estilos from './main.module.css';
import Button from '../Button/Button';
import gente from '../../assets/img/gente2.jpg'
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import { ItemListContainer } from '../ItemlistContainer/ItemListContainer';
import { Cart } from '../Cart/Cart';


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
                    <div className={estilos.button}>
                    <Button value='Sign In' variant='primary'/>
                    <Button value='Log Out' variant='secondary'/>
                    </div>
                <div className={estilos.contenedor}>    
                    <h2 className={estilos.textoEncima} onClick={saludar}>Bienvenidos a {test}</h2>    
                    <img src={gente} className={estilos.gente} alt="" />
                </div>
                </div>

            <Routes>
                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/category/:categoryName' element={<ItemListContainer/>}/>                  
                <Route path='/cart' element={<Cart/>}/>    
            </Routes>
        </main>
    );
};

export default Main;
