import { useState } from 'react';
import { createContext } from 'react';


export const CartContext = createContext();





export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
           //le sumo la cantidad 
            //alert("Ya esta en el carrito");
            sumarCantidad(item,cantidad);
        } else {
            setCart([...cart,{...item, cantidad }]);
        }

    };

    //corroborar si el producto ya esta en el carrito (isInCart)

    const isInCart = (id) =>{
        return  cart.some((prod)=> prod.id === id) 
    };

    //sumar cantidad
    const sumarCantidad= (item, cantidad) =>{
        const carritoActualizado = cart.map ((prod)=> {
            if (prod.id === item.id) {
                const productoActualizado = {
                    ...prod,
                    cantidad: prod.cantidad + cantidad
                }
                return productoActualizado
            } else {
                return prod
            }
        });
        setCart(carritoActualizado);
    };

    //eliminar un solo producto pasandole el id

    const eliminarProd= (id) => {
        console.log(`Eliminando producto ${id}`)
        const carritoFiltrado = cart.filter((prod)=> prod.id !== id)
        setCart(carritoFiltrado);
    };


    //limpiar carrito
    const clearCart = () => {
        setCart([])
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, eliminarProd }}>
            {children}
        </CartContext.Provider>
    )
};

