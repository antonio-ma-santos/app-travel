import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from './src/screens/Home';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='dark'/>
      <Routes />
    </NavigationContainer>
  );
}
