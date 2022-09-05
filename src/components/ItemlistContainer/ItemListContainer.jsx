import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { products } from "../../mock/Product";
import {ItemList} from "../../ItemList/ItemList";



export const ItemListContainer = ({saludo}) =>{
    const [productList, setProductList] = useState ([]);
    
//    const parametroURL= useParams();
 //   console.log('parametroURL : ', parametroURL.categoryName);
    const {categoryName} = useParams();

    useEffect(()=>{

            const getProducts = new Promise ((res,rej)=>{
                const prodFiltrados = products.filter((prod)=> prod.category === categoryName)
                setTimeout(()=>{
                    res(categoryName ? prodFiltrados: products);
                }, 500);
        
            });
        
        
            getProducts.then((products)=>{
                setProductList(products);
                }
                )
                .catch((error)=>{
                    console.log('Catch: ', error);
                }); 

        }, [categoryName])         
        
    
    return(
        <div>
            <ItemList productList={productList}/>
        </div>
    );
    };


    // if (categoryName) {
    //     const getProducts = new Promise ((res,rej)=>{
    //         const prodFiltrados = products.filter((prod)=> prod.category === categoryName)
    //         setTimeout(()=>{
    //             res(prodFiltrados);
    //         }, 500);
    
    //     });
    
    
    //     getProducts.then((products)=>{
    //         setProductList(products);
    //         }
    //         )
    //         .catch((error)=>{
    //             console.log('Catch: ', error);
    //         }); 

    // }else {
    //     const getProducts = new Promise ((res,rej)=>{
    //         setTimeout(()=>{
    //             res(products);
    //         }, 500);
    
    //     });
    
    
    //     getProducts.then((products)=>{
    //         setProductList(products);
    //         }
    //         )
    //         .catch((error)=>{
    //             console.log('Catch: ', error);
    //         }); 
    //     }
    // }, [categoryName])         
    
