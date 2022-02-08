import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import store from './store/index';

ReactDOM.render(
  // Redux store is passed to the Provider component.
  <Provider store={store}>
    {/* BrowserRouter is used to enable routing. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
