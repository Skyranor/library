import React, { ErrorInfo } from 'react';

import cl from './ErrorBoundary.module.scss';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Ошибка:', error);
    console.error('Информация об ошибке:', errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className={cl.errorContainer}>
          <h1 className={cl.errorHeading}>Что-то пошло не так!</h1>
          <p className={cl.errorMessage}>
            Приносим извинения за неудобства. Пожалуйста, попробуйте обновить
            страницу или зайдите позже.
          </p>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
