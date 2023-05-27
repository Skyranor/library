import React from 'react';

import AuthPage from '../pages/Auth';
import BookPage from '../pages/Book';
import MainPage from '../pages/Main';
import ProfilePage from '../pages/Profile';

export interface Route {
  path: string;
  component: React.ComponentType;
}

export enum RouteNames {
  main = '/books',
  auth = '/auth',
  registration = '/registration',
  profile = '/profile',
  book = '/books/:category/:id',
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
  {
    path: RouteNames.book,
    component: BookPage,
  },
];

export const publicRoutes: Route[] = [
  {
    path: RouteNames.auth,
    component: AuthPage,
  },
];
