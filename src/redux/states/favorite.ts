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
      return action.payload;
    }
  }
});