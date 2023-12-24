import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const STATUSES = Object.freeze({
    SUCCESS : 'success',
    ERROR : 'error',
    LOADING : 'loading'
})





const productSlice = createSlice({
    name : 'product',
    initialState : {
       data : [],
       status : STATUSES.LOADING,
       
    },
    reducers : {
        setProduct(state,action){
         
            state.data = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.status = STATUSES.LOADING
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.data = action.payload
            state.status = STATUSES.SUCCESS
        })
        .addCase(fetchProducts.rejected,(state)=>{
            state.status = STATUSES.ERROR
        })
    }
})

export const {setProduct,setStatus} = productSlice.actions
export default productSlice.reducer

export const fetchProducts = createAsyncThunk('products/fetch',async()=>{
    const response = await axios.get('http://localhost:3000/api/products')
    const data = response.data.data 
    return data 
})

// export function fetchProducts(){
//     return async function fetchProductsThunk(dispatch){
//         dispatch(setStatus(STATUSES.LOADING))
//         try {
            
//         const response = await axios.get('http://localhost:3000/api/products')
//         dispatch(setProduct(response.data.data))
//         dispatch(setStatus(STATUSES.SUCCESS))
      
//         } catch (error) {
//             dispatch(setStatus(STATUSES.ERROR))
            
//         }
//     }
// }
