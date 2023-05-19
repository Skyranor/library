import React from 'react';

import MainPage from '../pages/Main';

export interface Route {
  path: string;
  component: React.ComponentType;
}

export enum RouteNames {
  MAIN_PAGE = '/',
}

export const privateRoutes: Route[] = [
  {
    path: RouteNames.MAIN_PAGE,
    component: MainPage,
  },
];

export const publicRoutes: Route[] = [];
