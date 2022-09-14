import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { products } from "../../mock/Product"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
    let { id } = useParams();
    const idProdbynerico = Number(id)
    const [item, setItem] = useState({});
  

    useEffect(() => {
    const getItem = new Promise(resolve => {
        setTimeout(() => {
        resolve(products.find((prod) => prod.id === idProdbynerico));
        }, 2000);
        });

        getItem
        .then(result => {
        setItem(result);
        })
        .catch(error => {
        console.log('error', error)
        })
    }, [idProdbynerico]);

    return (
        <ItemDetail {...item} />
    )
}

