import React, { useEffect, useState} from "react";
import { products } from "../../mock/Product";
import {ItemList} from "../../ItemList/ItemList"


export const ItemListContainer = ({saludo}) =>{
    const [productList, setProductList] = useState ([]);
    

    useEffect(()=>{
        
        const getProducts = new Promise ((res,rej)=>{
            setTimeout(()=>{
                res(products);
            }, 2000);
    
        });
    
    
        getProducts.then((products)=>{
            setProductList(products);
            }
            )
            .catch((error)=>{
                console.log('Catch: ', error);
            })
            .finally(()=>{
                //console.log('Finally: ');
            }) 
            ;
    
    },[]);

    console.log(productList)

    
    return(
        <div>
            <ItemList productList={productList}/>
        </div>
    )
}
