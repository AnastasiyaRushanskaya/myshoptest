import React from 'react';
import FooterIcon from './FooterIcon';
import shopLogo from './images/shop_logo.png';
import { Col, Row } from 'react-bootstrap';

function Footer() {
  return (
    <Row className='text-center footer-bg-color py-2 fs-md'>
      <Col xs={12}>
        <FooterIcon
          iconName='bi bi-facebook'
          href='https://www.facebook.com/hm '
        />
        <FooterIcon
          iconName='bi bi-instagram'
          href='https://www.instagram.com/hm/'
        />
        <FooterIcon iconName='bi bi-twitter' href='https://twitter.com/hm' />
        <FooterIcon
          iconName='bi bi-youtube'
          href='https://www.youtube.com/user/hennesandmauritz'
        />
        <FooterIcon
          iconName='bi bi-pinterest'
          href='https://www.pinterest.com/hm/'
        />
      </Col>
      <Col as='p' xs={12} className='py-2'>
        Montenegro, <FooterIcon iconName='bi bi-currency-euro' />
      </Col>
      <Col as='p' xs={12}>
        The content of this site is copyright-protected and is the property of
        Anastasiya Rushanskaya
      </Col>
      <Col>
        <img
          src={shopLogo}
          style={{ width: '40px', marginRight: '40px', color: 'black' }}
        />
      </Col>
    </Row>
  );
}

// function Footer() {
//   return (
//     <div
//       className='text-align-center'
//       style={{
//         height: '160px',
//         marginTop: '20px',
//         backgroundColor: '#eae9e8',
//       }}
//     >
//       <div style={{ padding: '15px' }}>
//         <FooterIcon
//           iconName='bi bi-facebook'
//           href='https://www.facebook.com/hm '
//         />
//         <FooterIcon
//           iconName='bi bi-instagram'
//           href='https://www.instagram.com/hm/'
//         />
//         <FooterIcon iconName='bi bi-twitter' href='https://twitter.com/hm' />
//         <FooterIcon
//           iconName='bi bi-youtube'
//           href='https://www.youtube.com/user/hennesandmauritz'
//         />
//         <FooterIcon
//           iconName='bi bi-pinterest'
//           href='https://www.pinterest.com/hm/'
//         />
//       </div>
//       <p style={{ fontSize: '0.8em' }}>
//         Montenegro, <FooterIcon iconName='bi bi-currency-euro' />
//       </p>
//       <p style={{ fontSize: '0.8em' }}>
//         The content of this site is copyright-protected and is the property of
//         Anastasiya Rushanskaya
//       </p>
//       <img
//         src={shopLogo}
//         style={{ width: '40px', marginRight: '40px', color: 'black' }}
//       />
//     </div>
//   );
// }

export default Footer;
