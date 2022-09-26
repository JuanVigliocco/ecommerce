import React from 'react';
import estilos from './main.module.css';
import Button from '../Button/Button';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import { ItemListContainer } from '../ItemlistContainer/ItemListContainer';
import { Cart } from '../Cart/Cart';
import { FormCheckOut } from '../Form/FormCheckOut';


const Main = ({main}) => {





    return (
        <main className={estilos.main}>
                <div>
                    <div className={estilos.button}>
                    <Button value='Sign In' variant='primary'/>
                    <Button value='Log Out' variant='secondary'/>
                    </div>
                </div>

            <Routes>
                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/category/:categoryName' element={<ItemListContainer/>}/>                  
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/formCheckOut' element={<FormCheckOut/>}/>    
            </Routes>
        </main>
    );
};

export default Main;
