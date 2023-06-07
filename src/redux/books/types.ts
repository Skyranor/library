import { EntityState } from '@reduxjs/toolkit';

import { BookDTO } from '../../types/DTO/Book';

export interface BooksState extends EntityState<BookDTO> {
  activeFilter: ActiveFilter;
}

export interface ActiveFilter {
  category: string;
  searchValue: string;
  sort: SortType;
}

export type SortType = 'desc' | 'asc';
