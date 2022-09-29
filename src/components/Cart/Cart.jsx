import React, {useContext} from 'react'

import { CartContext } from '../../context/CartContext'
import estilos from './cart.module.css'
import { Link } from "react-router-dom";

export const Cart = () => {

  const {cart, clearCart, eliminarProd, totalPrice} = useContext(CartContext);
  console.log(cart);







  if(cart.length === 0 ){
    return (<h2 className={estilos.texto}>Aún no tenés productos, poder ir al <Link to="/"><p className={estilos.link}>INICIO</p></Link> para buscar algun producto.</h2>)
  }

  return (
    <div>
    <div className={estilos.containerCarrito}>
        
        {cart.map ((prod)=>(
        <div key={prod.id} className={estilos.containerListado}>
            <div className={estilos.img}>
                <img src={prod.img} alt=""/>
            </div>
            <h2>{prod.title}</h2>
            <h2>Cantidad: {prod.cantidadItem}</h2>
            <h2>Precio por unidad: ${prod.price}</h2>
            <h2>Precio Total: ${prod.price*prod.cantidadItem}</h2>
            <button className={estilos.button1} onClick={() => eliminarProd(prod.id)}>Eliminar Producto</button>
            
        </div>
))}
        <h1 className={estilos.h1}>Precio total a pagar: ${totalPrice()}</h1>
        <button className={estilos.button2} onClick={clearCart}>Borrar Carrito</button>
        <button className={estilos.button3}> <Link to="/formCheckOut">Terminar Compra</Link></button>
        
    </div>

    </div>
  );
};

