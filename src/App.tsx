import { ScreenWidthContext } from './Context/ScreenWidthContext';
import AppRouter from './components/AppRouter';
import { useScreenWidth } from './hooks';

const App = () => {
  const screenWidth = useScreenWidth();

  return (
    <ScreenWidthContext.Provider value={screenWidth}>
      <AppRouter />;
    </ScreenWidthContext.Provider>
  );
};

export default App;
