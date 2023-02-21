import React from 'react';
import LoginAndRegisterInputBox from './LoginAndRegisterInputBox';
import MonthOfBirthOption from './MonthOfBirthOption';
import LoginAndRegisterInputBoxName from './LoginAndRegisterInputBoxName';

function DateOfBirthBox({
  dayOfBirthValue,
  monthOfBirthValue,
  yearOfBirthValue,
  setDayOfBiirthValue,
  setMonthOfBirthValue,
  setYearOfBirthValue,
}) {
  return (
    <>
      <LoginAndRegisterInputBoxName name='Date of Birth' />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <LoginAndRegisterInputBox
          value={dayOfBirthValue}
          changeHandler={setDayOfBiirthValue}
          width='30%'
          placeholder='day'
        />
        <MonthOfBirthOption
          value={monthOfBirthValue}
          changeHandler={setMonthOfBirthValue}
        />
        <LoginAndRegisterInputBox
          value={yearOfBirthValue}
          changeHandler={setYearOfBirthValue}
          width='30%'
          placeholder='year'
        />
      </div>
    </>
  );
}

export default DateOfBirthBox;
