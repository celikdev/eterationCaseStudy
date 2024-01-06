import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { storage } from "../../services/Storage";

export interface FavoriteState {
    favoriteItems: any[];
}

const initialState: FavoriteState = {
    favoriteItems: [],
};

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<any>) => {
            state.favoriteItems.push({ ...action.payload })

            //Storage
            const existingFavoriteList = storage.getString("favoriteList");
            const newFavoriteList = existingFavoriteList ? [...JSON.parse(existingFavoriteList), action.payload] : [action.payload];
            storage.set("favoriteList", JSON.stringify(newFavoriteList));
        },
        setFavorite: (state, action: PayloadAction<any[]>) => {
            state.favoriteItems.push({ ...action.payload, count: 1 });

        },
        removeFavorite: (state, action: PayloadAction<any>) => {
            state.favoriteItems = state.favoriteItems.filter((item) => item.id !== action.payload.id);

            //Storage
            const existingFavoriteList = storage.getString("favoriteList");
            const newFavoriteList = existingFavoriteList ? JSON.parse(existingFavoriteList).filter((item: any) => item.id !== action.payload.id) : [];
            storage.set("favoriteList", JSON.stringify(newFavoriteList));
        }
    },
});

export const { addFavorite, setFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
