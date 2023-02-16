import React from 'react';
import FooterIcon from './FooterIcon';
import shopLogo from './images/shop_logo.png';

function Footer() {
  return (
    <div
      style={{
        height: '160px',
        marginTop: '20px',
        backgroundColor: '#eae9e8',
        textAlign: 'center',
      }}
    >
      <div style={{ padding: '15px' }}>
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
      </div>
      <p style={{ fontSize: '0.8em' }}>
        Montenegro, <FooterIcon iconName='bi bi-currency-euro' />
      </p>
      <p style={{ fontSize: '0.8em' }}>
        The content of this site is copyright-protected and is the property of
        Anastasiya Rushanskaya
      </p>
      <img
        src={shopLogo}
        style={{ width: '40px', marginRight: '40px', color: 'black' }}
      />
    </div>
  );
}

export default Footer;
