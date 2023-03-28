import React from 'react';
import { Row } from 'react-bootstrap';
import InsideNavigationBannerBox from './InsideNavigationBannerBox';
import banner from './images/banner.jpeg';

function NavigationBanner() {
  return (
    <Row
      className='flex-column align-content-around justify-content-around text-center navigation-banner'
      style={{ backgroundImage: `url(${banner})`, backgroundSize: '100% auto' }}
    >
      <InsideNavigationBannerBox
        text='New season arrivals'
        address='/New_Arrivals'
      />
      <InsideNavigationBannerBox text='Trending now' address='/Trending_now' />
      <InsideNavigationBannerBox
        text='Our Bestsellers'
        address='/BestSellers'
      />
    </Row>
  );
}

export default NavigationBanner;
