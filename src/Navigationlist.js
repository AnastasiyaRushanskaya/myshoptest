import React from 'react';
import menuList from './menuList';

function menuListClickHandler(event) {
  if (event.target.value === 'Skirts') {
    return alert('ololo');
  } else console.log(event.target);
}

function NavigationList() {
  const items = menuList.map((item, index) => {
    return (
      <li
        key={index}
        onClick={(event) => menuListClickHandler(event)}
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
  return <ul style={{ position: 'absolute', top: '120px' }}>{items}</ul>;
}

export default NavigationList;
