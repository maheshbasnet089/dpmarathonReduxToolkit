import {createSlice} from '@reduxjs/toolkit'
import { APIAuthenticated } from '../http'

const STATUSES = Object.freeze({
    SUCCESS : 'success',
    ERROR : 'error',
    LOADING : 'loading'
})





const cartSlice = createSlice({
    name : 'cart',
    initialState : {
       items : [],
       status : STATUSES.SUCCESS,
       
    },
    reducers : {
        setItem(state,action){
            state.items = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
        },
        deleteItem(state,action){
            const index = state.items.findIndex(item=>item._id === action.payload.cartId)
            state.items.splice(index,1)
        },
        updateItem(state,action){
            const index = state.items.findIndex(item=>item.product._id === action.payload.productId)
            if(index !== -1){
                state.items[index].quantity = action.payload.quantity
            }
        }
    }
})

export const {setItem,setStatus,deleteItem,updateItem} = cartSlice.actions
export default cartSlice.reducer


export function addToCart(productId){
    return async function addToCartThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await APIAuthenticated.post(`/cart/${productId}`)
            dispatch(setItem(response.data.data))
            dispatch(setStatus(STATUSES.SUCCESS))

        } catch (error) {
        dispatch(setStatus(STATUSES.ERROR))
            
        }
    }
}

export function fetchCartItems(){
    return async function fetchCartItems(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await APIAuthenticated.get("/cart")
            dispatch(setItem(response.data.data))
            dispatch(setStatus(STATUSES.SUCCESS))
        } catch (error) {
        dispatch(setStatus(STATUSES.ERROR))
            
        }
    }
}

export function deleteCartItem(cartId){
    return async function deleteCartItem(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await APIAuthenticated.delete(`/cart/${cartId}`)
            dispatch(deleteItem({cartId}))
        } catch (error) {
        dispatch(setStatus(STATUSES.ERROR))
            
        }
    }
}

export function updateCartItem(productId,quantity){
    return async function updateCartItem(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await APIAuthenticated.patch(`/cart/${productId}`,{quantity})
            dispatch(updateItem({productId,quantity}))
            dispatch(setStatus(STATUSES.SUCCESS))
        } catch (error) {
        dispatch(setStatus(STATUSES.ERROR))
            
        }
    }
}