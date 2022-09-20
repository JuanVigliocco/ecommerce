import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
//import { products } from "../../mock/Product"
import { useParams } from "react-router-dom"
import { db } from "../../firebaseConfig"
import {getDoc, doc, collection} from 'firebase/firestore'


export const ItemDetailContainer = () => {
    

    const [item, setItem] = useState({});


    let { id } = useParams();

    useEffect(()=>{
        const itemCollection= collection(db, "productos")
        const ref = doc(itemCollection, id)
        getDoc(ref)
        .then((res)=>{
            setItem({
                id: res.id,
                ...res.data()
            })
        })
    },[id]);
    // useEffect(() => {
    // const getItem = new Promise(resolve => {
    //     setTimeout(() => {
    //     resolve(products.find((prod) => prod.id === idProdbynerico));
    //     }, 600);
    //     });

    //     getItem
    //     .then(result => {
    //     setItem(result);
    //     })
    //     .catch(error => {
    //     console.log('error', error)
    //     })
    // }, [idProdbynerico]);

    return (
        <ItemDetail {...item} />
    )
}

