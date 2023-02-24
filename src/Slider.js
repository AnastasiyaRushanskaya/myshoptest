import React, { useState } from 'react';
import discount from './images/discount.jpeg';
import beautybar from './images/beautybar.jpeg';
import hogwarts from './images/hogwarts.jpeg';
import { difference } from 'lodash';

function Slider() {
  const [items, setItems] = useState([discount, beautybar, hogwarts]);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }

    setSlide(slideNumber);
  };
}
