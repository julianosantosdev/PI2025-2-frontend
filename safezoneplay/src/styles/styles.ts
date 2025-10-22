import { globalCss } from '@stitches/react';

export const colors = {
  color: {
    brand1: {
      color: '$brand1'
    },

    brand2: {
      color: '$brand2'
    },

    brand3: {
      color: '$brand3'
    },

    brand4: {
      color: '$brand4'
    },
    grey1: {
      color: '$grey1'
    },

    grey2: {
      color: '$grey2'
    },

    grey3: {
      color: '$grey3'
    },

    grey4: {
      color: '$grey4'
    },

    grey5: {
      color: '$grey5'
    },
    grey6: {
      color: '$grey6'
    }
  }
};

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    fontFamily: "'Inter', sans-serif",
    boxSizing: 'border-box'
  },
  html: {
    scrollBehavior: 'smooth'
  },
  a: { textDecoration: 'none' }
});
