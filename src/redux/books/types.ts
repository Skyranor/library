import { EntityState } from '@reduxjs/toolkit';

import { BookDTO } from '../../types/DTO/Book';

export interface BooksState extends EntityState<BookDTO> {
  activeFilter: ActiveFilter;
}

interface ActiveFilter {
  category: string;
  searchValue: string;
  sort: Sort;
}

export type Sort = 'desc' | 'asc';
