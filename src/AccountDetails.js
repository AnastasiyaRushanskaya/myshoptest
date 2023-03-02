import React, { useState } from 'react';

function AccountDetails() {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const savedUser = JSON.parse(localStorage.getItem('usersData'));
  return (
    <div style={{ fontSize: '0.8em' }}>
      <div
        className='d-flex c-pointer align-items-center justify-content-spacw-between '
        onClick={() => setIsDetailsVisible(!isDetailsVisible)}
        style={{
          height: '40px',
          marginTop: '10px',
          backgroundColor: 'white',
        }}
      >
        <p className='linkStyles'>My details</p>
        <i
          className={isDetailsVisible ? 'bi bi-arrow-up' : 'bi bi-arrow-down'}
        ></i>
      </div>

      {isDetailsVisible && (
        <div>
          <p>Email: {savedUser.email}</p>
          <p>
            Date of Birth:
            {savedUser.dayOfBirth +
              ' ' +
              savedUser.monthOfBirth +
              ' ' +
              savedUser.yearOfBirth}
          </p>
          <p>First name: {savedUser.firstname ? savedUser.firstname : ''}</p>
          <p>Last name: {savedUser.lastname ? savedUser.lastname : ''}</p>
          <p>
            Gender:
            {savedUser.gender === 'Select a gender' ? '' : savedUser.gender}
          </p>
          <p>
            Postcode:
            {savedUser.postcode ? savedUser.postcode : ''}
          </p>
        </div>
      )}
    </div>
  );
}

export default AccountDetails;
