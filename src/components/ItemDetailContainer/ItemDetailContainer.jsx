import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
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


    return (
        <ItemDetail {...item} />
    )
}

