import { useState } from 'react';

import { ReactComponent as RowLayout } from '../../assets/icons/action/Menu.svg';
import { ReactComponent as ColumnLayout } from '../../assets/icons/action/Square-four.svg';
import BookList from '../../components/Books/BookList';
import Search from '../../components/Search';
import Sort from '../../components/Sort';
import Loader from '../../components/UI/Loader';
import { IconButton } from '../../components/UI/buttons';
import { useAppSelector } from '../../hooks';
import MenuLayout from '../../layouts/Menu';
import {
  useGetBooksQuery,
  useGetCategoriesQuery,
} from '../../redux/api/apiSlice';
import {
  selectActiveFilter,
  selectFilteredBooks,
} from '../../redux/books/selectors';
import { DisplayBooks } from '../../types';
import cl from './MainPage.module.scss';

const MainPage = () => {
  const [layout, setLayout] = useState<DisplayBooks>('column');
  const { isSuccess: isBooksSuccess, isFetching: isBooksFetching } =
    useGetBooksQuery();
  const { category } = useAppSelector(selectActiveFilter);
  const { data: categories, isLoading: isLoadingCategories } =
    useGetCategoriesQuery();

  const haveBooksInCategory = Boolean(
    categories?.find((item) => item.name === category)?.booksCount
  );

  const filteredBooks = useAppSelector(selectFilteredBooks);

  return (
    <MenuLayout>
      {(isLoadingCategories || isBooksFetching) && <Loader />}
      <div className={cl.navigationList}>
        <Search />
        <Sort />
        <div className={cl.cardsLayout}>
          <IconButton
            onClick={() => setLayout('column')}
            isActive={layout === 'column' ? true : false}
            icon={<ColumnLayout />}
          />
          <IconButton
            onClick={() => setLayout('row')}
            isActive={layout === 'row' ? true : false}
            icon={<RowLayout />}
          />
        </div>
      </div>
      {/* <ModalReview /> */}
      {filteredBooks && <BookList books={filteredBooks} display={layout} />}
      {!filteredBooks.length && isBooksSuccess && haveBooksInCategory && (
        <h3 className={cl.noResults}>По запросу ничего не найдено</h3>
      )}
      {!haveBooksInCategory && isBooksSuccess && (
        <h3 className={cl.noBooks}>В этой категории книг ещё нет</h3>
      )}
    </MenuLayout>
  );
};

export default MainPage;
