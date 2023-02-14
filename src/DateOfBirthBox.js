import React from 'react';
import MonthOfBirthOption from './MonthOfBirthOption';

function DateOfBirthBox() {
  return (
    <div style={{ width: '100%' }}>
      <span style={{ fontSize: '0.7em' }}>
        Date of Birth<sup style={{ color: 'red' }}>*</sup>
      </span>
      <div style={{ width: '100%' }}>
        <input
          style={{
            boxSizing: 'border-box',
            width: '30%',
            height: '30px',
            marginRight: '20px',
          }}
          value='date'
        ></input>
        <MonthOfBirthOption />
        <input
          style={{
            boxSizing: 'border-box',
            width: '30%',
            height: '30px',
          }}
          value='year'
        ></input>
      </div>
    </div>
  );
}

export default DateOfBirthBox;
