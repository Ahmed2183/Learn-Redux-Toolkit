import {createSlice} from '@reduxjs/toolkit';

const userReducer = createSlice({
    name: 'userReducer',
    initialState: {
        userData:{},
    },
    reducers: {  
        setUserData: (state, action) => {
            // console.log(action);
            state.userData = action.payload;
        },
    }
})

//Create Hook here
//export our reducers function its Hook
export const { setUserData } = userReducer.actions;

//export userReducers 
export default userReducer.reducer;