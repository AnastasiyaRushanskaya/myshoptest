import React, { useState } from 'react';

function GenderSelectionBox({ value, changeHandler }) {
  const genders = ['Select a gender', 'Male', 'Female', 'Prefer not to say'];

  const genderOptions = genders.map((gender, index) => {
    return <option key={index}>{gender}</option>;
  });

  return (
    <select
      value={value}
      onChange={(event) => changeHandler(event.target.value)}
      style={{
        width: '100%',
        height: '40px',
        boxSizing: 'border-box',
        border: '0.3px solid grey',
      }}
    >
      {genderOptions}
    </select>
  );
}

export default GenderSelectionBox;
