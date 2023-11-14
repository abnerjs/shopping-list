import './index.css';

import { StyledEngineProvider } from '@mui/styled-engine-sc';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
