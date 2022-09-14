import React from 'react'
import { useContext } from 'react'
//import { Form } from '../Form/Form'
import { CartContext } from '../../context/CartContext'

export const Cart = () => {
  const {cart, clearCart, eliminarProd} = useContext(CartContext);
  console.log(cart);
  return (
    <div>
        {/* <Form/> */}
        {cart.map ((prod)=>(
        <div key={prod.id}>
            <h2>{prod.title}</h2>
            <button onClick={() => eliminarProd(prod.id)}>Eliminar Producto</button>
        </div>
))}
        <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

