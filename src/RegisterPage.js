import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import CustomButton from './CustomButton';
import DateOfBirthBox from './DateOfBirthBox';
import LoginAndRegisterHeader from './LoginAndRegisterHeader';
import LoginAndRegisterInputBox from './LoginAndRegisterInputBox';
import LoginAndRegisterInputBoxName from './LoginAndRegisterInputBoxName';
import LoginAndRegisterCheckbox from './LoginAndRegisterCheckbox';
import TermsAndConditionsBox from './TermsAndConditionsBox';
import GenderSelectionBox from './GenderSelectionBox';

function RegisterPage() {
  const [isVisibleTermsAndConditionsBox, setIsVisibleTermsAndConditionsBox] =
    useState(false);
  const [isVisibleAddMoreInfoBox, setIsVisibleAddMoreInfoBox] = useState(false);

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [dayOfBirthValue, setDayOfBiirthValue] = useState('');
  const [monthOfBirthValue, setMonthOfBirthValue] = useState('');
  const [yearOfBirthValue, setYearOfBirthValue] = useState('');
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [genderValue, setGenderValue] = useState('');
  const [postecodeValue, setPostecodeValue] = useState('');

  function showAddInfoBox() {
    setIsVisibleAddMoreInfoBox(!isVisibleAddMoreInfoBox);
  }

  let termsAndConditionsBox;
  if (isVisibleTermsAndConditionsBox) {
    termsAndConditionsBox = <TermsAndConditionsBox />;
  }

  return (
    <form>
      <LoginAndRegisterHeader
        text='Become a member'
        desctription='Become a member — don’t miss out on deals, offers, discounts and bonus
vouchers.'
      />
      <div
        style={{
          width: '50%',
          margin: '0 auto',
        }}
      >
        <LoginAndRegisterInputBoxName name='Email' />
        <LoginAndRegisterInputBox
          value={emailValue}
          changeHandler={setEmailValue}
          width='100%'
        />
        <LoginAndRegisterInputBoxName name='Create password' />
        <LoginAndRegisterInputBox
          value={passwordValue}
          changeHandler={setPasswordValue}
          width='100%'
        />
        <DateOfBirthBox
          dayOfBirthValue={dayOfBirthValue}
          monthOfBirthValue={monthOfBirthValue}
          yearOfBirthValue={yearOfBirthValue}
          setDayOfBiirthValue={setDayOfBiirthValue}
          setMonthOfBirthValue={setMonthOfBirthValue}
          setYearOfBirthValue={setYearOfBirthValue}
        />
        <div
          style={{
            width: '100%',
            height: '40px',
            textAlign: 'center',
            backgroundColor: 'white',
            cursor: 'pointer',
          }}
          onClick={showAddInfoBox}
        >
          <p style={{ paddingTop: '10px' }}>
            ADD MORE & GET MORE{' '}
            <i
              className={
                isVisibleAddMoreInfoBox ? 'bi bi-arrow-up' : 'bi bi-arrow-down'
              }
            ></i>
          </p>
        </div>
        {isVisibleAddMoreInfoBox && (
          <div
            style={{
              width: '100%',
              height: 'auto',
              backgroundColor: 'white',
              marginTop: '-28px',
            }}
          >
            <LoginAndRegisterHeader desctription='Did you know that if you add some more information below you will earn more points and get a more personalised experience? How great is that?' />
            <LoginAndRegisterInputBoxName name='First name' />
            <LoginAndRegisterInputBox
              value={firstNameValue}
              changeHandler={setFirstNameValue}
              width='100%'
            />
            <LoginAndRegisterInputBoxName name='Last name' />
            <LoginAndRegisterInputBox
              value={lastNameValue}
              changeHandler={setLastNameValue}
              width='100%'
            />
            <LoginAndRegisterInputBoxName name='Gender' />
            <GenderSelectionBox
              value={genderValue}
              changeHandler={setGenderValue}
            />
            <LoginAndRegisterInputBoxName name='Postecode' />
            <LoginAndRegisterInputBox
              value={postecodeValue}
              changeHandler={setPostecodeValue}
              width='100%'
            />
          </div>
        )}
        <LoginAndRegisterCheckbox
          text='Yes, email me offers, style updates, and special invites to sales &
        events'
        />

        <p style={{ fontSize: '0.6em', textAlign: 'justify' }}>
          By clicking ‘Become a member’, I agree to the H&M Membership{' '}
          <a
            style={{ textDecoration: 'underline' }}
            className='linkStyles'
            onClick={() =>
              setIsVisibleTermsAndConditionsBox(!isVisibleTermsAndConditionsBox)
            }
          >
            {termsAndConditionsBox}
            Terms and conditions.
          </a>
        </p>
        <CustomButton
          text='Become a member'
          width='100%'
          height='40px'
          buttonBorder='none'
          buttonColor='black'
          buttonTextColor='#faf9f8'
        />

        <Link to='/login' className='linkStyles'>
          <p
            style={{
              fontSize: '0.7em',
              fontWeight: 'bold',
              textAlign: 'center',
              textDecoration: 'underline',
            }}
          >
            Back to Sign in
          </p>
        </Link>
      </div>
    </form>
  );
}

export default RegisterPage;

// function RegisterPage() {
//   const [isVisibleTermsAndConditionsBox, setIsVisibleTermsAndConditionsBox] =
//     useState(false);
//   const [isVisibleAddMoreInfoBox, setIsVisibleAddMoreInfoBox] = useState(false);

//   const [emailValue, setEmailValue] = useState('');
//   const [passwordValue, setPasswordValue] = useState('');
//   const [dayOfBirthValue, setDayOfBiirthValue] = useState('');
//   const [monthOfBirthValue, setMonthOfBirthValue] = useState('');
//   const [yearOfBirthValue, setYearOfBirthValue] = useState('');
//   const [firstNameValue, setFirstNameValue] = useState('');
//   const [lastNameValue, setLastNameValue] = useState('');
//   const [genderValue, setGenderValue] = useState('');
//   const [postecodeValue, setPostecodeValue] = useState('');

//   function showAddInfoBox() {
//     setIsVisibleAddMoreInfoBox(!isVisibleAddMoreInfoBox);
//   }

//   let termsAndConditionsBox;
//   if (isVisibleTermsAndConditionsBox) {
//     termsAndConditionsBox = <TermsAndConditionsBox />;
//   }

//   return (
//     <form>
//       <LoginAndRegisterHeader
//         text='Become a member'
//         desctription='Become a member — don’t miss out on deals, offers, discounts and bonus
// vouchers.'
//       />
//       <div
//         style={{
//           width: '50%',
//           margin: '0 auto',
//         }}
//       >
//         <LoginAndRegisterInputBoxName name='Email' />
//         <LoginAndRegisterInputBox
//           value={emailValue}
//           changeHandler={setEmailValue}
//           width='100%'
//         />
//         <LoginAndRegisterInputBoxName name='Create password' />
//         <LoginAndRegisterInputBox
//           value={passwordValue}
//           changeHandler={setPasswordValue}
//           width='100%'
//         />
//         <DateOfBirthBox
//           dayOfBirthValue={dayOfBirthValue}
//           monthOfBirthValue={monthOfBirthValue}
//           yearOfBirthValue={yearOfBirthValue}
//           setDayOfBiirthValue={setDayOfBiirthValue}
//           setMonthOfBirthValue={setMonthOfBirthValue}
//           setYearOfBirthValue={setYearOfBirthValue}
//         />
//         <div
//           style={{
//             width: '100%',
//             height: '40px',
//             textAlign: 'center',
//             backgroundColor: 'white',
//             cursor: 'pointer',
//           }}
//           onClick={showAddInfoBox}
//         >
//           <p style={{ paddingTop: '10px' }}>
//             ADD MORE & GET MORE{' '}
//             <i
//               className={
//                 isVisibleAddMoreInfoBox ? 'bi bi-arrow-up' : 'bi bi-arrow-down'
//               }
//             ></i>
//           </p>
//         </div>
//         {isVisibleAddMoreInfoBox && (
//           <div
//             style={{
//               width: '100%',
//               height: 'auto',
//               backgroundColor: 'white',
//               marginTop: '-28px',
//             }}
//           >
//             <LoginAndRegisterHeader desctription='Did you know that if you add some more information below you will earn more points and get a more personalised experience? How great is that?' />
//             <LoginAndRegisterInputBoxName name='First name' />
//             <LoginAndRegisterInputBox
//               value={firstNameValue}
//               changeHandler={setFirstNameValue}
//               width='100%'
//             />
//             <LoginAndRegisterInputBoxName name='Last name' />
//             <LoginAndRegisterInputBox
//               value={lastNameValue}
//               changeHandler={setLastNameValue}
//               width='100%'
//             />
//             <LoginAndRegisterInputBoxName name='Gender' />
//             <GenderSelectionBox
//               value={genderValue}
//               changeHandler={setGenderValue}
//             />
//             <LoginAndRegisterInputBoxName name='Postecode' />
//             <LoginAndRegisterInputBox
//               value={postecodeValue}
//               changeHandler={setPostecodeValue}
//               width='100%'
//             />
//           </div>
//         )}
//         <LoginAndRegisterCheckbox
//           text='Yes, email me offers, style updates, and special invites to sales &
//         events'
//         />

//         <p style={{ fontSize: '0.6em', textAlign: 'justify' }}>
//           By clicking ‘Become a member’, I agree to the H&M Membership{' '}
//           <a
//             style={{ textDecoration: 'underline' }}
//             className='linkStyles'
//             onClick={() =>
//               setIsVisibleTermsAndConditionsBox(!isVisibleTermsAndConditionsBox)
//             }
//           >
//             {termsAndConditionsBox}
//             Terms and conditions.
//           </a>
//         </p>
//         <CustomButton
//           text='Become a member'
//           width='100%'
//           height='40px'
//           buttonBorder='none'
//           buttonColor='black'
//           buttonTextColor='#faf9f8'
//         />

//         <Link to='/login' className='linkStyles'>
//           <p
//             style={{
//               fontSize: '0.7em',
//               fontWeight: 'bold',
//               textAlign: 'center',
//               textDecoration: 'underline',
//             }}
//           >
//             Back to Sign in
//           </p>
//         </Link>
//       </div>
//     </form>
//   );
// }
