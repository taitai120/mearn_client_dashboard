import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: "Tai",
    },
    {
        id: 2,
        name: "Tuan",
    },
];

export const testSlice = createSlice({
    name: "test",
    initialState,
});

export default testSlice.reducer;
