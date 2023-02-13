import React from 'react';

function FooterIcon({ iconName, href }) {
  return (
    <a href={href} target='_blank'>
      <i
        className={iconName}
        style={{ paddingRight: '30px', color: 'grey' }}
      ></i>
    </a>
  );
}

export default FooterIcon;
