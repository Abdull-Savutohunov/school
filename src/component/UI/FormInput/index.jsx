import React from 'react';

const FormInput = ({
                     inputType,
                     placeholder,
                     register,
                     registerName,
                     errors,
                   }) => {
  return (
    <label
      // className={cls.formInput}
    >
      <span>{errors}</span>
      <input
        placeholder={placeholder}
        type={inputType}
        {...register(registerName, {
          required: '⚠ Обязательное поле',
        })}
      />
    </label>
  )
}

export default FormInput;