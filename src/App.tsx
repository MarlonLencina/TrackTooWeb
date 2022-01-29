import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AuthContextProvider } from './src/hooks/authContext';

import { Routes } from './src/routes';
import { GlobalStyle } from './src/styles/GlobalStyle';
import {theme} from './src/styles/theme';
function App() {

  return (
    <ThemeProvider theme={theme}>
        <Routes/>
        <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
