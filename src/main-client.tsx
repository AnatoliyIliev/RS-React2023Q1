import React from 'react';

import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './RTK/store';
import { Provider } from 'react-redux';

const domNode = document.getElementById('root') as HTMLElement;

const reactNode = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

hydrateRoot(domNode, reactNode);
