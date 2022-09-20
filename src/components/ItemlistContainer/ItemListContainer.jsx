import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
//import { products } from "../../mock/Product";
import {ItemList} from "../../ItemList/ItemList";
import ClipLoader from 'react-spinners/ClipLoader';
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "../../firebaseConfig"



export const ItemListContainer = ({saludo}) =>{
    const [productList, setProductList] = useState ([]);
    const [isLoading, setIsloading] = useState(true);
    
//    const parametroURL= useParams();
 //   console.log('parametroURL : ', parametroURL.categoryName);
    const {categoryName} = useParams();


    useEffect(()=>{
        const itemCollection = collection(db,"productos");
        const q = categoryName && query(itemCollection,where("category","==",categoryName))
        getDocs(categoryName ? q : itemCollection)
        .then((res)=>{
            //console.log(res) 
            //console.log(res.docs) 
            //data()=> metodo de Firestore para acceder
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


    // useEffect(()=>{

    //         const getProducts = new Promise ((res,rej)=>{
    //             const prodFiltrados = products.filter((prod)=> prod.category === categoryName)
    //             setTimeout(()=>{
    //                 res(categoryName ? prodFiltrados: products);
    //             },700);
        
    //         });
        
        
    //         getProducts.then((products)=>{
    //             setProductList(products);
    //             setIsloading(false)
    //             }
    //             )
    //             .catch((error)=>{
    //                 console.log('Catch: ', error);

    //             }); 
    //             return ()=>{
    //                 setIsloading(true)
    //             }

    //     }, [categoryName])         
        
    
    return(
        <div>
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
    
