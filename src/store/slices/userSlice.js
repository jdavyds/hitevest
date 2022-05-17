import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userDetails: JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')): null,
        isVerified: false,
        message: '',
        error: '',
        loading: false,
    },
    reducers: {
        updateUser: (state, action) => {
            state.userDetails = action.payload
            state.loading = false
        },
        updateUse: (state, action) => {
            state.userInfo = action.payload
            state.loading = false
        },
        updateBal: (state, action) => {
            state.userBal = action.payload
            state.loading = false
        },
        updateRef: (state, action) => {
            state.userRef = action.payload
            state.loading = false
        },
        clearUse: (state) =>  {
            state.isVerified = false;
            state.userInfo = false
        },
        clearUser: (state) => {
            state.isVerified = false;
            state.user = null
        },
        updateMessage: (state, action) => {
            state.message = action.payload;
            state.loading = false
        },
        updateReg: (state, action) => {
            state.reg = action.payload;
        },
        isError: (state) => {
            state.error = "There was an error"
            state.loading = false
        },
        isLoading: (state) => {
            state.loading = true
        },
        verified: (state) => {
            state.isVerified = true
        },
        loaded: (state) => {
            state.loading = false
        },
        logout: (state) => {
            state.isVerified = false
            state.userDetails = null
        }
    }
})



export const {updateUser, updateUse, updateBal, clearUse, updateRef, clearUser, updateMessage, isError, isLoading, updateReg, loaded, verified, logout} = userSlice.actions

export default userSlice.reducer