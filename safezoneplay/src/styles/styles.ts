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
    brand5: '$brand5',

    grey0: {
      color: '$grey0'
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
    },
    grey7: {
      color: '$grey7'
    },
    grey8: {
      color: '$grey8'
    },
    grey9: {
      color: '$grey9'
    }
  }
};

export const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'Play',
      src: 'url("/fonts/Play/Play-Regular.ttf") format("truetype")',
      fontWeight: 400,
      fontStyle: 'normal'
    },
    {
      fontFamily: 'Play',
      src: 'url("/fonts/Play/Play-Bold.ttf") format("truetype")',
      fontWeight: 700,
      fontStyle: 'normal'
    },
    {
      fontFamily: 'Inter',
      src: 'url("/fonts/Inter/Inter-VariableFont_opsz,wght.ttf") format("truetype")',
      fontWeight: '100 900',
      fontStyle: 'normal'
    }
  ],

  '*': {
    margin: 0,
    padding: 0,
    fontFamily: '$play',
    boxSizing: 'border-box'
  },
  html: {
    scrollBehavior: 'smooth'
  },
  a: { textDecoration: 'none' },
  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word'
  }
});
