export interface LoginFields {
  identifier: string;
  password: string;
}

export type DisplayBooks = 'row' | 'column';

export interface Book {
  id: number;
  title: string;
  issueYear?: string;
  rating?: number;
  authors?: string[];
  image?: {
    url: string;
  };
  categories?: string[];
  booking?: {
    id: number;
    order: boolean;
    dateOrder?: string;
    customerId?: number;
    customerFirstName?: string;
    customerLastName?: string;
  };
}

export interface Category {
  id: number;
  name: string;
  path: string;
  booksCount: number;
}
