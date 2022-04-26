import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalIsVisible: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state) {
      const modalState = state;
      modalState.modalIsVisible = true;
    },
    disableModal(state) {
      const modalState = state;
      modalState.modalIsVisible = false;
    },
  },
});

export default modalSlice;
export const modalActions = modalSlice.actions;
