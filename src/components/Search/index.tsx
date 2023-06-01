import debounce from 'lodash.debounce';

import { ChangeEvent, useCallback, useRef, useState } from 'react';

import { ReactComponent as IconButtonClear } from '../../assets/icons/action/Close.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/action/Search.svg';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSearchValue } from '../../redux/books/booksSlice';
import { selectActiveFilter } from '../../redux/books/selectors';
import cl from './Search.module.scss';

const Search = () => {
  const dispatch = useAppDispatch();

  const { searchValue } = useAppSelector(selectActiveFilter);
  const [search, setSearch] = useState(searchValue);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleDebounceSearch = useCallback(
    debounce((value: string) => dispatch(setSearchValue(value)), 350),
    []
  );

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    handleDebounceSearch(e.target.value);
  };

  const handleClearSearch = () => {
    dispatch(setSearchValue(''));
    setSearch('');
    searchRef.current?.focus();
  };

  return (
    <div className={cl.search}>
      <SearchIcon className={cl.searchIcon} />
      <input
        value={search}
        onChange={handleChangeSearch}
        ref={searchRef}
        placeholder='Поиск книги или автора…'
      />
      {searchValue && (
        <IconButtonClear onClick={handleClearSearch} className={cl.clearIcon} />
      )}
    </div>
  );
};

export default Search;
