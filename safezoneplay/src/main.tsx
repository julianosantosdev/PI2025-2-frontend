import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyle } from './styles/Global.tsx';
import { BrowserRouter } from 'react-router-dom';
import RoutesMain from './routes/index.routes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyle>
        <RoutesMain />
      </GlobalStyle>
    </BrowserRouter>
  </StrictMode>
);
