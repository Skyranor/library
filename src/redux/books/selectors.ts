import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { booksAdapter } from './booksSlice';

export const {
  selectAll: selectAllBooks,
  selectById: selectBookById,
  selectIds: selectBookIds,
} = booksAdapter.getSelectors<RootState>((state) => state.books);

export const selectActiveFilter = (state: RootState) =>
  state.books.activeFilter;

export const selectFilteredBooks = createSelector(
  [selectAllBooks, selectActiveFilter],
  (books, activeFilter) => {
    const { category, sort, searchValue } = activeFilter;

    if (category == 'Все книги' && searchValue == '' && sort == 'desc') {
      return books;
    }

    const filteredBooksByCategory =
      category === 'Все книги'
        ? books
        : books.filter((book) => book.categories?.includes(category));

    const sortedBooksByRating = [...filteredBooksByCategory].sort((a, b) => {
      if (sort === 'desc') {
        if (a.rating === undefined || b.rating === undefined) {
          return 0;
        }
        return b.rating - a.rating;
      } else {
        if (a.rating === undefined || b.rating === undefined) {
          return 0;
        }
        return a.rating - b.rating;
      }
    });

    const filteredBooksBySearchValue =
      searchValue === ''
        ? sortedBooksByRating
        : sortedBooksByRating.filter(
            (book) =>
              book.title.toLowerCase().includes(searchValue.toLowerCase()) ||
              book.authors
                ?.join(', ')
                .toLowerCase()
                .includes(searchValue.toLowerCase())
          );

    return filteredBooksBySearchValue;
  }
);
