import { Form } from '../Form/Form';
import React, {useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext'
import estilos from "./formCheckOut.module.css"

export const FormCheckOut = () => {
const [idCompra, setIdCompra] = useState("")
const {cart, clearCart, totalPrice} = useContext(CartContext);
console.log(cart);


const total = totalPrice();
const handleId = (id) =>{
    setIdCompra(id)
};

if (idCompra){
    return (<h1>Gracias por tu compra. El id de tu transacción es: {idCompra}</h1>)
}

return(
    <div className={estilos.caja}>
    <div className={estilos.body}>    
    <Form cart={cart} total={total} clearCart={clearCart} handleId={handleId}/>
    </div>
    </div>
    )}