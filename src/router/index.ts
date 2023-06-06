import React from 'react';

import AuthPage from '../pages/Auth';
import BookPage from '../pages/Book';
import MainPage from '../pages/Main';
import ProfilePage from '../pages/Profile';
import RegistrationPage from '../pages/Registration';

export interface Route {
  path: string;
  component: React.ComponentType;
}

export enum RouteNames {
  auth = '/auth',
  registration = '/registration',
  profile = '/profile',
  main = '/books/all',
  books = '/books/:category',
  book = '/books/:category/:id',
}

export const privateRoutes: Route[] = [
  {
    path: RouteNames.profile,
    component: ProfilePage,
  },
  {
    path: RouteNames.main,
    component: MainPage,
  },
  {
    path: RouteNames.books,
    component: MainPage,
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
  {
    path: RouteNames.registration,
    component: RegistrationPage,
  },
];
