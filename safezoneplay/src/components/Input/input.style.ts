import { styled } from '@stitches/react';

const StyledInputContainer = styled('fieldset', {
  display: 'flex',
  flexDirection: 'column',
  fontFamily: '$play',

  label: { font: '$text2', color: '$whiteFixed' },

  input: {
    height: '3rem',
    backgroundColor: '$brand2',
    borderRadius: '2rem',
    padding: '0 1rem',
    color: '$whiteFixed',

    '&:focus': {
      color: 'black',
      backgroundColor: '$whiteFixed',
      outline: 'none'
    }
  }
});

export default StyledInputContainer;
