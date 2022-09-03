import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { products } from "../../mock/Product"

export const ItemDetailContainer = ()=>{
    const[item, setItem] = useState ({})


    useEffect(()=>{
        const getProduct = () => new Promise ((res,rej)=>{
            const unicoProducto = products.find((prod)=> prod.id === 2)
            setTimeout(()=>{
                res(unicoProducto);
            },2000)
        })
        getProduct()
        .then((data)=>{
            setItem(data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
    return(
       <ItemDetail item={item}/> 
    )
}