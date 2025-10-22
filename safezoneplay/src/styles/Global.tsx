import { createTheme, styled } from '@stitches/react';
import type { ReactNode } from 'react';
import { globalStyles } from './styles';

interface GlobalStyleProps {
  children: ReactNode;
}

export const Container = styled('div', {
  maxWidth: '$container',
  margin: '0 auto',
  padding: '0 1rem'
});

export const Flex = styled('div', {
  display: 'flex',
  gap: '$1'
});

export const GlobalStyle: React.FC<GlobalStyleProps> = ({ children }) => {
  const theme = createTheme({
    colors: {
      brand1: '#11091A',
      brand2: '#2F2F4D',
      brand3: '#626970',
      brand4: '#BAB195',
      brand5: '#E8D18E',
      grey0: '#f8f9fa',
      grey1: '#f1f3f5',
      grey2: '#e9ecef',
      grey3: '#dee2e6',
      grey4: '#ced4da',
      grey5: '#adb5bd',
      grey6: '#868e96',
      grey7: '#495057',
      grey8: '#343a40',
      grey9: '#212529',
      whiteFixed: '#ffffff',
      mode: '#ffffff'
    },
    sizes: {
      container: '75rem'
    },
    space: {
      1: '0.5rem',
      2: '1rem',
      3: '2rem'
    },
    fonts: {
      play: '"Play", sans-serif;',
      inter: '"Inter", sans-serif'
    },
    fontSizes: {
      title1: '2.75rem',
      title2: '1.75rem',
      title3: '1.50rem',
      title4: '1.25rem',
      text1: '1rem',
      text2: '0.875rem',

      // Mobile
      title1Mobile: '$title2',
      title2Mobile: '$title3'
    },
    lineHeights: {
      title1: '3.8rem',
      title2: '2.75rem',
      title3: '2.5rem',
      title4: '1.25rem',
      text1: '1.75rem',
      text2: '1.75rem',

      // Mobile
      title1Mobile: '$title2',
      title2Mobile: '$title3'
    },

    radii: {
      1: '0.5rem',
      2: '0.25rem'
    }
  });

  globalStyles();

  const App = styled('div', {
    minHeight: '100vh'
  });

  return <App className={theme}>{children}</App>;
};
