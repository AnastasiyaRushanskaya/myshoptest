import React, { useState } from 'react';

function SearchBox({ searchValue, startSearch }) {
  return (
    <input
      placeholder='Search'
      value={searchValue}
      onChange={startSearch}
      style={{
        width: '120px',
        marginLeft: '20px',
        outline: 'none',
        borderTop: '#faf9f8',
        borderRight: '#faf9f8',
        borderLeft: '#faf9f8',
        borderBottom: '1px solid grey',
        backgroundColor: '#faf9f8',
        position: 'absolute',
        left: '20px',
        top: '88px',
      }}
    />
  );
}

export default SearchBox;
