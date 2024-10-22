
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = 'https://redux-json.onrender.com/users';

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () =>{
        try{
            const response = await axios.get(POSTS_URL)
            return [...response.data]
        }
        catch(err){
            return err.message
        }
})

    export const usersSlice = createSlice({
        name:"users",
        initialState,
        reducers:{

        },
        extraReducers(builder){
            builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                return action.payload
    
        })
        }
    })

    export const selectAllUsers = (state) => state.users
    export default usersSlice.reducer