import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './app';

import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Router>
    <Provider store={store}>
      <Routes>
        <Route path="/analysis" element={<App />} />
      </Routes>
    </Provider>
  </Router>,
);
