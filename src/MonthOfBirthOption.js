import React, { useState } from 'react';

function MonthOfBirthOption({ value, changeHandler }) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const monthOptions = months.map((month, index) => {
    return <option key={index}>{month}</option>;
  });

  return (
    <select
      value={value}
      onChange={(event) => changeHandler(event.target.value)}
      style={{
        width: '30%',
        height: '40px',
        boxSizing: 'border-box',
        border: '0.3px solid grey',
      }}
    >
      {monthOptions}
    </select>
  );
}

export default MonthOfBirthOption;
