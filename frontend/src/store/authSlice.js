import {createSlice} from '@reduxjs/toolkit'
import { STATUSES } from './statuses'
import { API } from '../http'





const authSlice = createSlice({
    name : 'auth',
    initialState : {
       data : [],
       status : STATUSES.LOADING,
       token : null
       
    },
    reducers : {
        setUser(state,action){
            state.data = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
        },
        setToken(state,action){
            state.token = action.payload
        }
    }
})

export const {setUser,setStatus,setToken} = authSlice.actions
export default authSlice.reducer

export function registerUser(data){
    return async function registerUserThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        
        try {
            const response = await API.post("/auth/register",data)
            dispatch(setUser(response.data.data))
            dispatch(setStatus(STATUSES.SUCCESS))
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
            
        }
    }
}

export function loginUser(data){
    return async function loginUserThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        
        try {
            const response = await API.post("/auth/login",data)
            console.log(response.data)
            dispatch(setToken(response.data.data))
            dispatch(setStatus(STATUSES.SUCCESS))
            if(response.status == 200 ){
                console.log("Inside if")
                localStorage.setItem('token',response.data.data)
                window.location.href = "/"
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
            
        }
    }
}