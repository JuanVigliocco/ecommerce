import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {ItemList} from "../../ItemList/ItemList";
import ClipLoader from 'react-spinners/ClipLoader';
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "../../firebaseConfig"
import gente from '../../assets/img/gente2.jpg'
import estilos from '../Main/main.module.css';





export const ItemListContainer = ({saludo}) =>{
    const [productList, setProductList] = useState ([]);
    const [isLoading, setIsloading] = useState(true);
    

    const {categoryName} = useParams();


    useEffect(()=>{
        const itemCollection = collection(db,"productos");
        const q = categoryName && query(itemCollection,where("category","==",categoryName))
        getDocs(categoryName ? q : itemCollection)
        .then((res)=>{

            const products = res.docs.map((prod)=>{
                return{
                    id: prod.id,
                    ...prod.data()
                }
            })
            setProductList(products);
        })
        .catch((error)=>{
            console.log(error) 
        })
        .finally(()=>{
            setIsloading(false)
        })
    },[categoryName]);


    return(
        <div>
        <div className={estilos.contenedor}>
        {
            !categoryName && <img src={gente} className={estilos.gente} alt="" />
        }   
        
        </div>
        
            {
                isLoading
                
                ? <ClipLoader
                color="purple"
                size={150}
                />
                :
                <ItemList productList={productList}/>
                
            }

        </div>
    );
    };



