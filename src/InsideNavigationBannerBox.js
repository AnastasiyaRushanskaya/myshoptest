import React from 'react';
import { Col, Nav } from 'react-bootstrap';

function InsideNavigationBannerBox({ text, address }) {
  return (
    <Col
      xs={4}
      sm={3}
      className='align-content-around justify-content-around text-center fs-md'
      style={{ border: '1px solid grey' }}
    >
      {text} <br />
      <Nav.Link href={address}>
        <i className='bi bi-arrow-right'></i>
      </Nav.Link>
    </Col>
  );
}

export default InsideNavigationBannerBox;
