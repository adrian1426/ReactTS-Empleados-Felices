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
      const newState = [...state, action.payload];
      setLocalStorage(LocalStorageTypes.FAVORITES, newState);
      return newState;
    },
    removeFavorite: (state, action) => {
      const newState = state.filter((p: Person) => p.id !== action.payload.id);
      setLocalStorage(LocalStorageTypes.FAVORITES, newState);
      return newState;
    }
  }
});

export const { addFavorite, removeFavorite } = favoriteslice.actions;