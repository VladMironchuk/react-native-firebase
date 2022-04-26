import { configureStore } from '@reduxjs/toolkit';
import newsSlice from './slices/news';
import modalSlice from './slices/modal';

export const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
    modal: modalSlice.reducer,
  },
});
