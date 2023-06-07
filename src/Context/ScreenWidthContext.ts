import React from 'react';

import { ScreenWidth } from '../hooks';

export const ScreenWidthContext = React.createContext<ScreenWidth>(
  ScreenWidth.DESKTOP
);
