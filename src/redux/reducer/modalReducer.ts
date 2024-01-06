import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
    visible: boolean
}

const initialState: ModalState = {
    visible: false
};

export const modalSlice = createSlice({
    name: "modalVisible",
    initialState,
    reducers: {
        setModalVisible: (state: any) => {
            state.visible = !state.visible
        }
    },
});

export const { setModalVisible } = modalSlice.actions;

export default modalSlice.reducer;
