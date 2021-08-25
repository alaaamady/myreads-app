import React, { Component } from 'react';
import ClosedSearchButton from './ClosedSearchButton';
import SearchBooksInput from './SearchBooksInput';

const SearchBar = props => {
    const { onSearch, onResetSearch } = props;
    return (
      <div className="search-books-bar">
        <ClosedSearchButton onResetSearch={onResetSearch} />
        <SearchBooksInput onSearch={onSearch}/>
      </div>
    );
  };

  export default SearchBar;