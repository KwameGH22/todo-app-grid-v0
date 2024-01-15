import React from 'react'
import { useState } from "react";


const Form = ({handleAddition}) => {
  const [textInputValue, setTextInputValue] = useState('');

  const handleInputChange = (event) => {
    setTextInputValue(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddition(textInputValue);
    setTextInputValue('');

  }




  return (
    <div>
      <div className='form-container'>
          <form action='' onSubmit={handleSubmit}>
            <input type='text'
                   className='text-input'
                   name='text'
                   placeholder='Create New Todo item'
                   value={textInputValue}
                   onChange={handleInputChange}
            />
            <button className='btn'
                    type='submit'
                    >
              Add
            </button>
          </form>
        </div>
    </div>
  )
}

export default Form
