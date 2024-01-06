import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { storage } from "../../services/Storage";

export interface BasketState {
    items: any[];
    itemCount: number;
    basketTotal: number;
}

const initialState: BasketState = {
    items: [],
    itemCount: 0,
    basketTotal: 0,
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<any>) => {
            const existingItemIndex = state.items.findIndex((item) => item.id == action.payload.id);

            if (existingItemIndex > -1) {
                state.items[existingItemIndex].count = (state.items[existingItemIndex].count || 0) + 1;
            } else {
                state.items.push({ ...action.payload, count: 1 });
            }

            state.itemCount = state.items.reduce((acc, item) => acc + (item.count || 0), 0);
            state.basketTotal = state.items.reduce((acc, item) => {
                return acc + (item.price || 0) * (item.count || 1);
            }, 0);

            // Storage
            const existingBasket = storage.getString("basket");
            const newBasket = existingBasket ? [...JSON.parse(existingBasket), action.payload] : [action.payload];
            storage.set("basket", JSON.stringify(newBasket));
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);

            state.itemCount = state.items.reduce((acc, item) => acc + (item.count || 0), 0);
            state.basketTotal = state.items.reduce((acc, item) => {
                return acc + (item.price || 0) * (item.count || 1);
            }, 0);

            // Storage
            const existingBasket = storage.getString("basket");
            const newBasket = existingBasket ? JSON.parse(existingBasket).filter((item: any) => item.id !== action.payload) : [];
            storage.set("basket", JSON.stringify(newBasket));
        },
        incrementItemCount: (state, action: PayloadAction<string>) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                item.count = (item.count || 0) + 1;
            }
            state.itemCount = state.items.reduce((acc, item) => acc + (item.count || 0), 0);
            state.basketTotal = state.items.reduce((acc, item) => {
                return acc + (item.price || 0) * (item.count || 1);
            }, 0);
        },
        decrementItemCount: (state, action: PayloadAction<string>) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                item.count = (item.count || 0) - 1;
            }
            state.itemCount = state.items.reduce((acc, item) => acc + (item.count || 0), 0);
            state.basketTotal = state.items.reduce((acc, item) => {
                return acc + (item.price || 0) * (item.count || 1);
            }, 0);
        },
        setBasket: (state, action: PayloadAction<any[]>) => {
            state.items.push({ ...action.payload, count: 1 });
            state.itemCount = state.items.reduce((acc, item) => acc + (item.count || 0), 0);
            state.basketTotal = state.items.reduce((acc, item) => {
                return acc + (item.price || 0) * (item.count || 1);
            }, 0);
        },
        getBasketCount: (state) => {
            state.itemCount = state.items.length;
        },
        getBasketTotal: (state) => {
            state.basketTotal = state.items.reduce((acc, item) => {
                return acc + item.price;
            }, 0);
        }
    },
});

export const { addItem, removeItem, getBasketTotal, getBasketCount, incrementItemCount, decrementItemCount, setBasket } = basketSlice.actions;

export default basketSlice.reducer;
