import {createSlice} from '@reduxjs/toolkit'

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
    }
})

export const {setProduct,setStatus} = productSlice.actions
export default productSlice.reducer