import React from 'react';
import MonthOfBirthOption from './MonthOfBirthOption';

function DateOfBirthBox() {
  return (
    <div style={{ width: '100%', marginBottom: '5px' }}>
      <span style={{ fontSize: '0.7em' }}>
        Date of Birth<sup style={{ color: 'red' }}>*</sup>
      </span>
      <div style={{ width: '100%' }}>
        <input
          style={{
            width: '30%',
            height: '30px',
            marginRight: '20px',
            boxSizing: 'border-box',
          }}
          value='date'
        ></input>
        <MonthOfBirthOption />
        <input
          style={{
            width: '30%',
            height: '30px',
            boxSizing: 'border-box',
          }}
          value='year'
        ></input>
      </div>
    </div>
  );
}

export default DateOfBirthBox;
