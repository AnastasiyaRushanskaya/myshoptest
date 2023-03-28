import React from 'react';
import menuList from './menuList';
import SearchBox from './SearchBox';
import { Col, Nav, Row } from 'react-bootstrap';

function NavigationList({ startSearch, searchValue }) {
  const items = menuList.map((item, index) => {
    return (
      <Nav.Link
        key={index}
        href={item === 'All products' ? '/' : `/${item.split(' ').join('_')}`}
        className='linkStyles px-1'
      >
        {item}
      </Nav.Link>
    );
  });

  return (
    <Col>
      <SearchBox startSearch={startSearch} searchValue={searchValue} />
      <Nav defaultActiveKey='/#' className='flex-column'>
        {items}
      </Nav>
    </Col>

    // <Row md={2} className='d-flex'>
    //   <Col xs={12}>
    //     <SearchBox startSearch={startSearch} searchValue={searchValue} />
    //   </Col>
    //   <Col xs={12}>
    //     <Nav defaultActiveKey='/#' className='flex-row'>
    //       {items}
    //     </Nav>
    //   </Col>
    // </Row>
  );
}

export default NavigationList;
