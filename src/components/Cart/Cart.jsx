import React from 'react'
import { useContext } from 'react'
//import { Form } from '../Form/Form'
import { CartContext } from '../../context/CartContext'
import estilos from './cart.module.css'

export const Cart = () => {
  const {cart, clearCart, eliminarProd, totalPrice} = useContext(CartContext);
  console.log(cart);

  if (cart.length === 0) {
    return <h1>Tu Carrito esta vacío</h1>;
  }

  return (
    <div className={estilos.containerCarrito}>
        {/* <Form/> */}
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
        <h1 className={estilos.h1}>Precio Total: ${totalPrice()}</h1>
        <button className={estilos.button2} onClick={clearCart}>Borrar Carrito</button>
        <button className={estilos.button3} onClick={clearCart}>Terminar Compra</button>
    </div>
  );
};

