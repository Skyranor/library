import React from 'react';

import AuthPage from '../pages/Auth';
import MainPage from '../pages/Main';
import ProfilePage from '../pages/Profile';

export interface Route {
  path: string;
  component: React.ComponentType;
}

export enum RouteNames {
  main = '/',
  auth = '/auth',
  registration = '/registration',
  profile = '/profile',
}

export const privateRoutes: Route[] = [
  {
    path: RouteNames.main,
    component: MainPage,
  },
  {
    path: RouteNames.profile,
    component: ProfilePage,
  },
];

export const publicRoutes: Route[] = [
  {
    path: RouteNames.auth,
    component: AuthPage,
  },
];
