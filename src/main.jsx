import './styles/global.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { isEnvBrowser } from '@utils/index';
import { HashRouter, BrowserRouter } from 'react-router-dom';

import App from '@components/App';

import { VisibilityProvider } from '@contexts/Visibility';
import { ConfigurationProvider } from '@contexts/Configuration';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigurationProvider>
      <VisibilityProvider>
        {!isEnvBrowser() ? (
          <HashRouter>
            <App />
          </HashRouter>
        ) : (
          <BrowserRouter>
            <App />
          </BrowserRouter>
        )}
      </VisibilityProvider>
    </ConfigurationProvider>
  </React.StrictMode>
);
