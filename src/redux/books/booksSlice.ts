import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';

import { BookDTO } from '../../types/DTO/Book';
import apiSlice from '../api/apiSlice';
import { BooksState, Sort } from './types';

export const booksAdapter = createEntityAdapter<BookDTO>({
  selectId: (book) => book.id,
  sortComparer: (a, b) => {
    if (a.rating === undefined || b.rating === undefined) {
      return 0;
    }
    return b.rating - a.rating;
  },
});

const initialState: BooksState = booksAdapter.getInitialState({
  activeFilter: {
    category: 'Все книги',
    searchValue: '',
    sort: 'desc',
  },
});

const booksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.activeFilter.category = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.activeFilter.searchValue = action.payload;
    },
    setSort: (state, action: PayloadAction<Sort>) => {
      state.activeFilter.sort = action.payload;
    },

    resetFilter: (state) => {
      state.activeFilter = initialState.activeFilter;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.getBooks.matchFulfilled,
      (state, action) => {
        booksAdapter.setAll(state, action.payload);
      }
    );
  },
});

export default booksSlice.reducer;

export const { setCategory, setSearchValue, setSort, resetFilter } =
  booksSlice.actions;
