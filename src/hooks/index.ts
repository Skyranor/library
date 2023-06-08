import { useEffect, useRef, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from '../redux/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useClickOutside = <T extends HTMLElement>(
  callback: () => void
) => {
  const ref = useRef<T>(null);

  const handleClick = (event: MouseEvent) => {
    if (ref.current && !event.composedPath().includes(ref.current)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return ref;
};

export enum ScreenWidth {
  DESKTOP = 1440,
  LAPTOP = 1024,
  TABLET = 768,
  MOBILE = 320,
}

export const useScreenWidth = (): ScreenWidth => {
  const [width, setWidth] = useState<number>(
    document.documentElement.clientWidth
  );

  useEffect(() => {
    const handleResize = (): void =>
      setWidth(document.documentElement.clientWidth);
    window.addEventListener('resize', handleResize);

    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  if (width > ScreenWidth.LAPTOP) {
    return ScreenWidth.DESKTOP;
  }
  if (width > ScreenWidth.TABLET) {
    return ScreenWidth.LAPTOP;
  }
  if (width > ScreenWidth.MOBILE) {
    return ScreenWidth.TABLET;
  }

  return ScreenWidth.MOBILE;
};
