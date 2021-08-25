import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const ClosedSearchButton = (props) => {
    const {onResetSearch} = props;
    return (
      <Link to="/">
        <button className="close-search" onClick={onResetSearch}>Close</button>
      </Link>
    );
  };

  export default ClosedSearchButton;