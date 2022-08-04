import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "employee",
    initialState: [],
    reducers: {
        createEmployee: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const AllEmployees = (state) => state.employees;
export const { createEmployee } = userSlice.actions;
export default userSlice.reducer;

