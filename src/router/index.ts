import React, { lazy } from 'react';

import AuthPage from '../pages/Auth';
import RegistrationPage from '../pages/Registration';

const MainPage = lazy(() => import('../pages/Main'));
const BookPage = lazy(() => import('../pages/Book'));
const ProfilePage = lazy(() => import('../pages/Profile'));

export interface Route {
  path: string;
  component: React.ComponentType;
}

export enum RouteNames {
  auth = '/auth',
  registration = '/registration',
  profile = '/profile',
  main = '/books',
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
