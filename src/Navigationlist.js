import React from 'react';
import menuList from './menuList';
import SearchBox from './SearchBox';
import { Link } from 'react-router-dom';

function NavigationList({ startSearch, searchValue }) {
  const items = menuList.map((item, index) => {
    return (
      <li
        className='c-pointer'
        key={index}
        style={{
          paddingBottom: '30px',
          listStyleType: 'none',
        }}
      >
        <Link
          to={item === 'All products' ? '/' : `/${item.split(' ').join('_')}`}
          className='linkStyles'
        >
          {item}
        </Link>
      </li>
    );
  });
  return (
    <div
      className='d-inline-block'
      style={{
        width: '260px',
        verticalAlign: 'text-top',
      }}
    >
      <SearchBox startSearch={startSearch} searchValue={searchValue} />
      <ul>{items}</ul>
    </div>
  );
}

export default NavigationList;
