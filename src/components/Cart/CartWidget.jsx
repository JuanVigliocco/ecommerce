import React from 'react'
import estilos from './CartWidget.module.css';
import { Link } from 'react-router-dom';
import './CartWidget.module.css'



export const CartWidget = () => {
  return (
    <div className={estilos.cartWidget}>
    <Link to= 'cart'>
    <div className={estilos.color}>
    <span className="material-symbols-outlined">shopping_cart</span>
    </div>
    </Link>
    </div>

  )
}

