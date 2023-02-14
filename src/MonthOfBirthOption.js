import React, { useState } from 'react';

function MonthOfBirthOption() {
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
  const [value, setValue] = useState('');

  const monthOptions = months.map((month, index) => {
    return <option key={index}>{month}</option>;
  });

  return (
    <select
      value={value}
      onChange={(event) => setValue(event.target.value)}
      style={{
        boxSizing: 'border-box',
        width: '30%',
        height: '30px',
        marginRight: '20px',
      }}
    >
      {monthOptions}
    </select>
  );
}

export default MonthOfBirthOption;
