import { configureStore } from '@reduxjs/toolkit';
import { basketReducer, itemListReducer } from './reducer';
import modalReducer from './reducer/modalReducer';
import favoriteReducer from './reducer/favoriteReducer';
import filterReducer from './reducer/filterReducer';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    itemList: itemListReducer,
    modalVisible: modalReducer,
    favorite: favoriteReducer,
    filter: filterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch