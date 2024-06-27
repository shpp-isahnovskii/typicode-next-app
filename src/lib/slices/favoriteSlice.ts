import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type FavoriteState = {
  favorites: number[];
};

const initialState: FavoriteState = {
  favorites: [2],
};

const favoriteState = createSlice({
  name: 'myFavorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const isFavoriteExist = state.favorites.indexOf(action.payload);
      isFavoriteExist !== -1
        ? state.favorites.splice(isFavoriteExist, 1)
        : state.favorites.push(action.payload);
    },
  },
});

export const { toggleFavorite } = favoriteState.actions;

export const favoriteSlice = {
  name: favoriteState.name,
  reducer: favoriteState.reducer,
};
