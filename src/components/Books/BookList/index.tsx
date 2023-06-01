import clsx from 'clsx';

import { Book, DisplayBooks } from '../../../types';
import BookCard from '../BookCard';
import cl from './BookList.module.scss';

type BookListProps = {
  display?: DisplayBooks;
  books: Book[];
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
