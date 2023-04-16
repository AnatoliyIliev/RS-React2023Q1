import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import { store } from '../RTK/store';

describe('App', () => {
  it('should render without crashing', () => {
    const root = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>,
      root
    );
    expect(root.querySelector('#root')).toBeDefined();
  });
});
