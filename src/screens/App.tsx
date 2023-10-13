import * as React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import MainNavigation from '../navigation/MainNavigation'; // Projenizin ana bileşeni
import { StatusBar } from 'react-native';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <StatusBar barStyle={'light-content'} />
      <MainNavigation />
    </ThemeProvider>
  );
}

export default App;