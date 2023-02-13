import React from 'react';
import menuList from './menuList';
import SearchBox from './SearchBox';

function NavigationList({ searchNavigationResults, startSearch, searchValue }) {
  const items = menuList.map((item, index) => {
    return (
      <li
        key={index}
        onClick={(event) => searchNavigationResults(event.target.textContent)}
        style={{
          listStyleType: 'none',
          paddingBottom: '30px',
          cursor: 'pointer',
        }}
      >
        {item}
      </li>
    );
  });
  return (
    <div
      style={{
        width: '230px',
        display: 'inline-block',
        verticalAlign: 'text-top',
      }}
    >
      <SearchBox startSearch={startSearch} searchValue={searchValue} />

      <ul>{items}</ul>
    </div>
  );
}

export default NavigationList;
