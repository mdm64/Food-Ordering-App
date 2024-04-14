import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        username: "User"
    },

    reducers: {
        addUser: (state, actions) => {
            state.username = actions.payload
        },
        clearName: (state) => {
            state.username = 0;
        }
    }
});

export const {addUser, clearName} = userSlice.actions;
export default userSlice.reducer;