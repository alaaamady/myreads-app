import React, { Component } from 'react';
import SearchResults from './SearchResults';
import SearchBar from './SearchBar';

class BookSearch extends Component {
    render() {
      const { searchBooks, myBooks, onMove, onSearch, onResetSearch} = this.props;
      return (
        <div className="search-books">
          <SearchBar onSearch={onSearch} onResetSearch={onResetSearch} />
          <SearchResults 
            searchBooks={searchBooks}
            myBooks ={myBooks}
            onMove={onMove}
          />
        </div>
      );
    }
  }

  export default BookSearch;