import { LocalStorageTypes, Person } from '@/models';
import { setLocalStorage } from '@/utilities';
import { createSlice } from '@reduxjs/toolkit';

const initialState: Person[] = [];

export const pleopleSlice = createSlice({
  name: LocalStorageTypes.PEOPLE,
  initialState: localStorage.getItem(LocalStorageTypes.PEOPLE)
    ? JSON.parse(localStorage.getItem(LocalStorageTypes.PEOPLE) as string)
    : initialState,
  reducers: {
    addPeople: (state, action) => {
      setLocalStorage(LocalStorageTypes.PEOPLE, state);
      return action.payload;
    }
  }
});