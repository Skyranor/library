import MenuLayout from '../../layouts/Menu';
import BookList from '../../components/Books/BookList';

const MainPage = () => {
  return (
    <MenuLayout>
      <BookList />
    </MenuLayout>
  );
};

export default MainPage;
