import { configureStore } from '@reduxjs/toolkit';
import { Person } from "@/models";
import { favoriteslice, pleopleSlice } from './states';

export interface AppStore {
  people: Person[];
  favorites: Person[];
}

export default configureStore<AppStore>({
  reducer: {
    people: pleopleSlice.reducer,
    favorites: favoriteslice.reducer
  }
});