import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  news: [
    {
      name: 'Google',
      anons: 'Google!!!',
      fullText: 'Google is cool!!',
      id: 'Google',
      img: 'https://pbs.twimg.com/profile_images/1072398951884697600/xLLyNSJL_400x400.jpg',
    },
    {
      name: 'Facebook',
      anons: 'Facebook!!!',
      fullText: 'Facebook is cool!!',
      id: 'Facebook',
      img: 'https://sites.google.com/site/thebreteastonellisuniverse/_/rsrc/1462384721883/patrick-bateman/patrick-bateman-tinder-american-psycho.jpg?height=400&width=400',
    },
    {
      name: 'Telegram',
      anons: 'Telegram!!!',
      fullText: 'Telegram is cool!!',
      id: 'Telegram',
      img: 'https://unrealitymag.com/wp-content/uploads/2014/11/sunglasses-e1415073233286.png',
    },
  ],
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    addArticle(state, action) {
      const newsState = state;
      newsState.news = [
        ...newsState.news,
        {
          ...action.payload,
          key: Math.random().toString(),
        },
      ];
    },
  },
});

export default newsSlice;
export const newsActions = newsSlice.actions;
