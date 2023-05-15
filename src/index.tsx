import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routes/AppRouter';
import 'normalize.css';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'theme/ThemeProvider';
import { Provider } from 'react-redux';
import { store } from 'store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <ThemeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
);
