import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import App from './App';
import { store } from './RTK/store';
import { Provider } from 'react-redux';

export function render(url: string, options: RenderToPipeableStreamOptions) {
  return renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  );
}
