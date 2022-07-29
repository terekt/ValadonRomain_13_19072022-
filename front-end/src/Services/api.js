import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: [],
    },
    reducers: {
        createemployee: (state, action) => {
            state.value = action.payload[0];
        }
    }
})

export const { login, logout, editname } = userSlice.actions;
export default userSlice.reducer;

