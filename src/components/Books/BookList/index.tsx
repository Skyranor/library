import clsx from 'clsx';

import { DisplayBook } from '../../../types';
import { BookDTO } from '../../../types/DTO/Book';
import BookCard from '../BookCard';
import cl from './BookList.module.scss';

type BookListProps = {
  display?: DisplayBook;
  books: BookDTO[];
};
const BookList = ({ books, display = 'column' }: BookListProps) => {
  return (
    <ul className={clsx(cl.booksList, cl[`booksList-${display}`])}>
      {books &&
        books.map((book) => (
          <BookCard display={display} key={book.id} book={book} />
        ))}
    </ul>
  );
};

export default BookList;
