import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react';
import {db} from "../../firebaseConfig"
import estilos from "./formCheckOut.module.css"

export const Form = ({cart,total, clearCart, handleId}) => {
    const [nombre, setNombre] = useState ('')
    const [apellido, setApellido] = useState ('')
    const [mail, setMail] = useState ('')
    const [telefono, setTelefono] = useState ('')
    const [calle, setCalle] = useState ('')
    const [codigoPostal, setCodigoPostal] = useState ('')
    const [ciudad, setCiudad] = useState ('')
    const [provincia, setProvincia] = useState ('')

    const handleSubmit= (event) =>{
    event.preventDefault();
    const order = {
        buyer: {nombre: nombre, apellido: apellido, mail: mail,
        telefono: telefono,
        calle: calle,
        codigoPostal: codigoPostal,
        ciudad: ciudad,
        provincia: provincia
    },
        items: cart,
        total: total,
        date: serverTimestamp()

    };

    const ordersCollection = collection(db, "orders")
    addDoc(ordersCollection, order)
    .then((res)=>{
        handleId(res.id);
        clearCart();
    })
};

    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
    };

    const handleChangeApellido = (event) => {
        setApellido(event.target.value)
    };

    const handleChangeMail = (event) => {
        setMail(event.target.value)
    };

    const handleChangeTelefono = (event) => {
        setTelefono(event.target.value)
    };

    const handleChangeCalle = (event) => {
        setCalle(event.target.value)
    };

    const handleChangeCodigoPostal = (event) => {
        setCodigoPostal(event.target.value)
    };

    const handleChangeCiudad = (event) => {
        setCiudad(event.target.value)
    };

    const handleChangeProvincia = (event) => {
        setProvincia(event.target.value)
    };







    return (
    <div className={estilos.caja}>
    <div className={estilos.formRegister}>
        <form action='' onSubmit={handleSubmit}>
            <input className={estilos.controls}
                type="text" 
                placeholder='Nombre...' 
                name='nombre' 
                value={nombre} 
                onChange={handleChangeNombre} 
            />



            <input className={estilos.controls}
                type="text" 
                placeholder='Apellido...' 
                name='apellido' 
                value={apellido} 
                onChange={handleChangeApellido} 
            />

            <input className={estilos.controls}
                type="text" 
                placeholder='Mail...' 
                name='mail' 
                value={mail} 
                onChange={handleChangeMail} 
            />

            <input className={estilos.controls}
                type="number" 
                placeholder='Telefono...' 
                name='Telefono' 
                value={telefono} 
                onChange={handleChangeTelefono} 
            />
            <input className={estilos.controls}
                type="text" 
                placeholder='Calle...' 
                name='Calle' 
                value={calle} 
                onChange={handleChangeCalle} 
            />
            <input className={estilos.controls}
                type="number" 
                placeholder='Codigo Postal...' 
                name='mail' 
                value={codigoPostal} 
                onChange={handleChangeCodigoPostal} 
            />
            <input className={estilos.controls}
                type="text" 
                placeholder='Ciudad...' 
                name='Ciudad' 
                value={ciudad} 
                onChange={handleChangeCiudad} 
            />
            <input className={estilos.controls}
                type="text" 
                placeholder='Provincia...' 
                name='Provincia' 
                value={provincia} 
                onChange={handleChangeProvincia} 
            />
            <button className={estilos.botons} type="submit">FINALIZAR COMPRA</button>
        </form>
    </div>
    </div>
)
}

