import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { storage } from "../../services/Storage";

export interface FavoriteState {
    sortBy: string;
    brand: string;
    model: string;
}

const initialState: FavoriteState = {
    sortBy: "",
    brand: "",
    model: "",
};

export const filterReducer = createSlice({
    name: "filterKeywords",
    initialState,
    reducers: {
        setSortBy(state, action: PayloadAction<string>) {
            state.sortBy = action.payload;
        },
        setBrand(state, action: PayloadAction<string>) {
            state.brand = action.payload;
        },
        setModel(state, action: PayloadAction<string>) {
            state.model = action.payload;
        },
    }
});

export const { setSortBy, setBrand, setModel } = filterReducer.actions;

export default filterReducer.reducer;
