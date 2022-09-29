import React from 'react'
import estilos from './CartWidget.module.css';
import { Link } from 'react-router-dom';
import './CartWidget.module.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';



export const CartWidget = () => {
  const {sumarCantidad} = useContext(CartContext)
  return (
    <div className={estilos.cartWidget}>
    <Link to= 'cart'>
    <div className={estilos.color}>
      <>
    <span className="material-symbols-outlined">shopping_cart</span><i className={estilos.color2}>{(sumarCantidad() === 0 ? "": sumarCantidad())}</i>
      </>
    </div>
    </Link>
    </div>

  )
}

