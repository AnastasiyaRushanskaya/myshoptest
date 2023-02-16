import React from 'react';
import menuList from './menuList';
import SearchBox from './SearchBox';
import { Link } from 'react-router-dom';

function NavigationList({ startSearch, searchValue }) {
  const items = menuList.map((item, index) => {
    return (
      <li
        key={index}
        style={{
          paddingBottom: '30px',
          listStyleType: 'none',
          cursor: 'pointer',
        }}
      >
        <Link
          to={item === 'All products' ? '/' : `/${item.split(' ').join('')}`}
          className='linkStyles'
        >
          {item}
        </Link>
      </li>
    );
  });
  return (
    <div
      style={{
        display: 'inline-block',
        width: '230px',
        verticalAlign: 'text-top',
      }}
    >
      <SearchBox startSearch={startSearch} searchValue={searchValue} />
      <ul>{items}</ul>
    </div>
  );
}

export default NavigationList;
