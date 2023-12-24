import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const STATUSES = Object.freeze({
    SUCCESS : 'success',
    ERROR : 'error',
    LOADING : 'loading'
})





const cartSlice = createSlice({
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
    }
})

export const {setProduct,setStatus} = cartSlice.actions
export default cartSlice.reducer

export function fetchProducts(){
    return async function fetchProductsThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            
        const response = await axios.get('http://localhost:3000/api/products')
        dispatch(setProduct(response.data.data))
        dispatch(setStatus(STATUSES.SUCCESS))
      
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
            
        }
    }
}
