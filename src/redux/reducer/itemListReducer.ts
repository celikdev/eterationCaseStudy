import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ItemListState {
    itemList: any[];
    searchText: string;
}

const initialState: ItemListState = {
    itemList: [],
    searchText: ""
};

export const itemListSlice = createSlice({
    name: "itemList",
    initialState,
    reducers: {
        setItemList: (state, action: PayloadAction<string[]>) => {
            state.itemList = action.payload;
        },
        setSearchText: (state, action: PayloadAction<string>) => {
            state.searchText = action.payload;
        }
    },
});

export const { setItemList, setSearchText } = itemListSlice.actions;

export default itemListSlice.reducer;
