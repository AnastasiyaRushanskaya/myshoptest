import React from 'react';
import InsideMAinBannerBox from './InsideMainBannerBox';
import banner from './images/banner.jpeg';

function MainBanner() {
  return (
    <div
      style={{
        width: '100%',
        height: '250px',
        paddingTop: '25px',
        backgroundImage: `url(${banner})`,
        backgroundSize: '100% auto',
      }}
    >
      <InsideMAinBannerBox text='New season arrivals' address='/New_Arrivals' />
      <InsideMAinBannerBox text='Trending now' address='/Trending_now' />
      <InsideMAinBannerBox text='Our Bestsellers' address='/BestSellers' />
    </div>
  );
}

export default MainBanner;
