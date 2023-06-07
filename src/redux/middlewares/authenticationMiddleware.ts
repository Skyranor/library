import { AnyAction, Middleware } from '@reduxjs/toolkit';

import { logout, setUserData } from '../user/userSlice';

export const authenticationMiddleware: Middleware =
  (store) => (next) => (action: AnyAction) => {
    if (action.type === logout.type) {
      localStorage.clear();
    }

    if (action.type === setUserData.type) {
      localStorage.setItem('userData', JSON.stringify(action.payload));
      return next(action);
    }

    const userData = localStorage.getItem('userData');

    if (userData) {
      store.dispatch(setUserData(JSON.parse(userData)));
    }
    return next(action);
  };
