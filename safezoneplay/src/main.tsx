import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyle } from './styles/Global.tsx';
import NavBar from './components/NavBar/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle>
      <NavBar />
    </GlobalStyle>
  </StrictMode>
);
