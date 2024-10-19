import { TGallery } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFavoritesState } from "./types";

const initialState: IFavoritesState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  selectors: {
    selectAllFavorites: (state) => state.favorites,
  },
  reducers: {
    addArtwork: (state, action: PayloadAction<TGallery>) => {
      state.favorites.push(action.payload);
    },

    deleteArtwork: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (el) => el.id !== action.payload
      );
    },
  },
});

export const { addArtwork, deleteArtwork } = favoritesSlice.actions;
export const { selectAllFavorites } = favoritesSlice.selectors;

export default favoritesSlice.reducer;
