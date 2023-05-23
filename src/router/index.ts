import React from 'react';

import AuthPage from '../pages/Auth';
import MainPage from '../pages/Main';

export interface Route {
  path: string;
  component: React.ComponentType;
}

export enum RouteNames {
  main = '/',
  auth = '/auth',
  registration = '/registration',
}

export const privateRoutes: Route[] = [
  {
    path: RouteNames.main,
    component: MainPage,
  },
];

export const publicRoutes: Route[] = [
  {
    path: RouteNames.auth,
    component: AuthPage,
  },
];
