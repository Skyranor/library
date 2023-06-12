import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ReactComponent as RowLayout } from '../../assets/icons/action/Menu.svg';
import { ReactComponent as ColumnLayout } from '../../assets/icons/action/Square-four.svg';
import BookList from '../../components/Books/BookList';
import Search from '../../components/Search';
import Sort from '../../components/Sort';
import Loader from '../../components/UI/Loader';
import { IconButton } from '../../components/UI/buttons';
import { useAppDispatch, useAppSelector } from '../../hooks';
import MenuLayout from '../../layouts/Menu';
import {
  useGetBooksQuery,
  useGetCategoriesQuery,
  useGetUserDataQuery,
} from '../../redux/api/apiSlice';
import {
  setCategory,
  setSearchValue,
  setSort,
} from '../../redux/books/booksSlice';
import {
  selectActiveFilter,
  selectFilteredBooks,
} from '../../redux/books/selectors';
import { SortType } from '../../redux/books/types';
import { DisplayBooks } from '../../types';
import cl from './MainPage.module.scss';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const [layout, setLayout] = useState<DisplayBooks>('column');

  const {
    isSuccess: isBooksSuccess,
    isFetching: isBooksFetching,
    error: booksError,
  } = useGetBooksQuery();
  const {
    data: categories,
    isLoading: isLoadingCategories,
    error: categoriesError,
  } = useGetCategoriesQuery();
  const { isLoading: isUserDataLoading } = useGetUserDataQuery();

  const { category, sort, searchValue } = useAppSelector(selectActiveFilter);
  const booksToDisplay = useAppSelector(selectFilteredBooks);

  const booksInCategoryExist = Boolean(
    categories?.find((item) => item.name === category)?.booksCount
  );

  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get('category');
  const selectedSort = searchParams.get('sort') as SortType;
  const selectedSearch = searchParams.get('searchValue');

  const isMounted = useRef(false);

  useEffect(() => {
    if (
      !isMounted.current &&
      (selectedCategory || selectedSort || selectedSearch)
    ) {
      if (selectedCategory) {
        dispatch(setCategory(selectedCategory));
      }
      if (selectedSort) {
        dispatch(setSort(selectedSort));
      }
      if (selectedSearch) {
        dispatch(setSearchValue(selectedSearch));
      }
    }

    isMounted.current = true;
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (category && category !== 'Все книги') {
      params.set('category', category);
    }
    if (sort && sort !== 'desc') {
      params.set('sort', sort);
    }
    if (searchValue) {
      params.set('searchValue', searchValue);
    }

    if (params) {
      setSearchParams(params);
    }
  }, [category, sort, searchValue, setSearchParams]);

  if (booksError || categoriesError) {
    console.error(booksError || categoriesError);
    throw booksError || categoriesError;
  }

  return (
    <MenuLayout>
      {(isLoadingCategories || isBooksFetching || isUserDataLoading) && (
        <Loader />
      )}
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
      {booksToDisplay && <BookList books={booksToDisplay} display={layout} />}
      {!booksToDisplay.length && isBooksSuccess && booksInCategoryExist && (
        <h3 className={cl.noResults}>По запросу ничего не найдено</h3>
      )}
      {!booksInCategoryExist && isBooksSuccess && (
        <h3 className={cl.noBooks}>В этой категории книг ещё нет</h3>
      )}
    </MenuLayout>
  );
};

export default MainPage;
