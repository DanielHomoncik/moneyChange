import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles} from './styles/GlobalStyles';
import { Main } from './components/Main';
import { Background } from './components/styledElements/Background';
import { ContainerCenter } from './components/styledElements/ContainerCenter';
import { ErrorBoundary } from './components/ErrorBoundary';

export const App = () => (
  <>
    <GlobalStyles />
    <ErrorBoundary>
      <BrowserRouter>
        <Background>
          <ContainerCenter>
            <Main />
          </ContainerCenter>
        </Background>
      </BrowserRouter>
    </ErrorBoundary>
  </>
);
