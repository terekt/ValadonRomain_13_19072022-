import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./slice";

export const store = configureStore({reducer : { employees: employeeReducer }});

store.subscribe(() => {
    console.log(store.getState())
})