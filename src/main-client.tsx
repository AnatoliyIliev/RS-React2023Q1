import React from 'react';

import { hydrateRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { store } from './RTK/store';
import { Provider } from 'react-redux';

const domNode = document.getElementById('root') as HTMLElement;

const reactNode = (
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

hydrateRoot(domNode, reactNode);
