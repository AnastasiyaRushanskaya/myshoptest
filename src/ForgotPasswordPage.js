import React, { useState } from 'react';
import EmailAndPasswordInputBox from './LoginAndRegisterInputBox';
import LoginAndRegisterHeader from './LoginAndRegisterHeader';
import CustomButton from './CustomButton';
import {
  Col,
  Row,
  InputGroup,
  Form,
  ToastContainer,
  Toast,
} from 'react-bootstrap';

function ForgotPasswordPage() {
  const [emailValue, setEmailValue] = useState('');
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <Row className='justify-content-center'>
        <LoginAndRegisterHeader
          text='Forgot password?'
          desctription='Please enter the email address you used to create your account, and we will send you a link to reset your password.'
        />
        <Col xs={9}>
          <InputGroup className='mb-3'>
            <Form.Control
              placeholder='email'
              aria-label='email'
              value={emailValue}
              onChange={(event) => setEmailValue(event.target.value)}
            />
            <CustomButton
              text='Submit'
              variant='dark'
              clickHandler={() => setShowToast(true)}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={9}>
          <ToastContainer position='middle-center' className='my-3'>
            <Toast
              onClose={() => setShowToast(false)}
              show={showToast}
              delay={5000}
              autohide
            >
              <Toast.Header className='justify-content-between'>
                <i className='bi bi-envelope'></i>
                <strong>Thank you!</strong>
              </Toast.Header>
              <Toast.Body>
                A letter with a link to reset your password has been sent to{' '}
                <strong>{emailValue}</strong>
              </Toast.Body>
            </Toast>
          </ToastContainer>
        </Col>
      </Row>
    </>
  );
}

export default ForgotPasswordPage;
