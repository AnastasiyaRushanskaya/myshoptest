import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import CustomButton from './CustomButton';

function SignInBanner() {
  return (
    <Row className='sign-in-banner'>
      <Col as='h6' xs={12} className='py-2 red'>
        Members get free delivery and 10% off first purchase. Not a member yet?
        <br />
        Join now, it's free.
      </Col>

      <Col as='p' xs={12} className='no-margin fs-sm'>
        Members get free standard delivery and Click & Collect for orders over
        €20.
      </Col>

      <Link to='/register'>
        <CustomButton text='Become a member' variant='outline-dark' />
      </Link>
    </Row>
  );
}

export default SignInBanner;
