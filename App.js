import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from './src/screens/SplashScreen';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SplashScreen />
    </PaperProvider>
  );
}
