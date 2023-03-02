import React, { useState } from 'react';

function Slider({ sliderItems, ...rest }) {
  const [active, setActive] = useState(0);
  let scrollInterval = null;

  React.useEffect(() => {
    scrollInterval = setTimeout(() => {
      setActive((active + 1) % sliderItems.length);
    }, 4000);
    return () => clearTimeout(scrollInterval);
  });

  return (
    <div className='slider'>
      {sliderItems.map((item, index) => {
        const activeClass = active === index ? 'visible' : '';
        return React.cloneElement(item, {
          ...rest,
          className: `slider-item${activeClass}`,
        });
      })}
    </div>
  );
}

export default Slider;
