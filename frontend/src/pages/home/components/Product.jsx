

import axios from 'axios'
import { useEffect, useState } from 'react'
import { fetchProducts } from '../../../store/productSlice'
import { useDispatch, useSelector } from 'react-redux'
  
  export default function Product() {
    const dispatch  = useDispatch()
    const {data:products,status}  = useSelector((state)=>state.product)
    console.log(products)


    useEffect(()=>{
       dispatch(fetchProducts())
    },[])

    return (
<div className="relative w-full">
     
     <div className="relative bg-white-50">
         <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
         <h1 className="text-2xl font-bold text-yellow-900 md:text-3xl lg:w-10/12">Our Popular Foods</h1>

       <div className="flex flex-wrap justify-between">
 

      {
        products.map((product)=>{
          return (
            <div key={product._id} className="mx-auto overflow-hidden duration-300 transform bg-white rounded-lg shadow-md mt-11 w-80 dark:bg-slate-800 hover:scale-105 hover:shadow-lg">
            <img className="object-cover object-center w-full h-48" src={product.productImage} alt="Product Image" />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">{product.productName}</h2>
              <p className="mb-2 text-base text-gray-700 dark:text-gray-300">{product.productDescription}</p>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">{product.productPrice}</p>
                <button className="px-4 py-2 mx-6 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-600">
      Add to Cart
    </button>
              </div>
            </div>
          </div>
          )
        })
      }


   
       </div>
         </div>
     </div>
 </div>


     
 
    )
  }