import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import ErrorBoundary from './ErrorBoundary';
import Loader from './components/UI/Loader';
import store from './redux/store';
import './scss/index.scss';

store.dispatch({ type: 'initialAction' });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <ErrorBoundary>
        <Provider store={store}>
          <Suspense fallback={<Loader />}>
            <App />
          </Suspense>
          <ToastContainer />
        </Provider>
      </ErrorBoundary>
    </HashRouter>
  </React.StrictMode>
);
