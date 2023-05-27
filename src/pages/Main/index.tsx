import BookList from '../../components/Books/BookList';
import MenuLayout from '../../layouts/Menu';
import { useGetBooksQuery } from '../../redux/api/apiSlice';

const MainPage = () => {
  const { data: books } = useGetBooksQuery();

  return <MenuLayout>{books && <BookList books={books} />}</MenuLayout>;
};

export default MainPage;
