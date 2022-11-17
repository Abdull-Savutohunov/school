import React from 'react';

const FormButton = ({buttonText , isValid}) => {
  return (
    <div>
      <button
        // className={cls.formButton}
        type='submit'
        disabled={!isValid}
      >
        <span>{buttonText}</span>
      </button>
    </div>
  );
};

export default FormButton;