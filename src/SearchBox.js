import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';

function SearchBox({ searchValue, startSearch }) {
  return (
    <InputGroup
      size='sm'
      className='mb-2 searchinput'
      style={{ ':focus': { outline: '0' } }}
    >
      <Form.Control
        placeholder='Search products'
        value={searchValue}
        onChange={startSearch}
      />
    </InputGroup>
    // <input
    //   className='px-5'
    //   placeholder='Search products'
    //   value={searchValue}
    //   onChange={startSearch}
    //   style={{
    //     width: '120px',
    //     marginBottom: '20px',
    //     outline: 'none',
    //     borderTop: '#faf9f8',
    //     borderRight: '#faf9f8',
    //     borderLeft: '#faf9f8',
    //     borderBottom: '1px solid grey',
    //     backgroundColor: '#faf9f8',
    //   }}
    // />
  );
}

export default SearchBox;
