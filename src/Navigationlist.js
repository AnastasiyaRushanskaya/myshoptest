import React from 'react';
import menuList from './menuList';
import SearchBox from './SearchBox';
import { Nav } from 'react-bootstrap';

function NavigationList({ startSearch, searchValue }) {
  const items = menuList.map((item, index) => {
    return (
      <Nav.Link
        key={index}
        href={item === 'All products' ? '/' : `/${item.split(' ').join('_')}`}
        className='linkStyles'
      >
        {item}
      </Nav.Link>
    );
  });
  return (
    <div
      className='d-inline-block mx-3'
      style={{
        width: '260px',
        verticalAlign: 'text-top',
      }}
    >
      <SearchBox startSearch={startSearch} searchValue={searchValue} />
      <Nav defaultActiveKey='/#' className='flex-column'>
        {items}
      </Nav>
    </div>
  );
}

export default NavigationList;
