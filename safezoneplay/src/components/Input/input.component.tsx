import type { InputHTMLAttributes } from 'react';
import type { FieldError } from 'react-hook-form';
import StyledInputContainer from './input.style';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
}

const Input = ({ label, error, ...rest }: IInput) => {
  return (
    <StyledInputContainer>
      {label ? <label className='text-input-label'>{label}</label> : null}
      <input {...rest} />
      {error ? <p className='inputErrorMessage'>{error.message}</p> : <p></p>}
    </StyledInputContainer>
  );
};

export default Input;
