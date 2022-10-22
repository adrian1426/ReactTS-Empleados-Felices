import { LocalStorageTypes, Person } from '@/models';
import { setLocalStorage } from '@/utilities';
import { createSlice } from '@reduxjs/toolkit';

const initialState: Person[] = [];

export const favoriteslice = createSlice({
  name: LocalStorageTypes.FAVORITES,
  initialState: localStorage.getItem(LocalStorageTypes.FAVORITES)
    ? JSON.parse(localStorage.getItem(LocalStorageTypes.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage(LocalStorageTypes.FAVORITES, state);
      return [...state, action.payload];
    },
    removeFavorite: (state, action) => {
      setLocalStorage(LocalStorageTypes.FAVORITES, state);
      return state.filter((p: Person) => p.id !== action.payload.id);
    }
  }
});

export const { addFavorite, removeFavorite } = favoriteslice.actions;