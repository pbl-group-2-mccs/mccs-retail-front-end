import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";

const userStore = createSlice({
    name:"user",
    initialState: {
        token:''
    },
    reducers:{
        setToken(state, action) {
            state.token = action.payload
        }
    }
})

const { setToken } = userStore.actions

const userReducer = userStore.reducer

const fetchLogin = (loginForm)=>{
    return async (dispatch) =>{
        //login api name
        const res = await request.post('', loginForm)
        dispatch(setToken(res.data.token))
    }
}

export{ fetchLogin, setToken }

export default userReducer