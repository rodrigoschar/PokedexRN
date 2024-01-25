/* eslint-disable prettier/prettier */
import * as React from 'react';
import Home from './src/screens/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RealmProvider } from '@realm/react';
import Pokemon from './src/models/Pokemon';
import { ThemeContext } from './src/context/ThemeContext';
import { useEffect, useState } from 'react';
import { ThemeMode } from './src/constants/constants';
import { useColorScheme } from 'react-native';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const [theme, setTheme] = useState({ mode: 'light' });
  const isDarkMode = useColorScheme() === 'dark';


  const updateTheme = (darkMode: boolean) => {
    let mode: string;
    let newTheme: ThemeMode;
    if (darkMode) {
      mode = 'dark';
      newTheme = {mode};
    } else {
      mode = 'light';
      newTheme = {mode};
    }
    setTheme(newTheme);
  };

  useEffect(() => {
    updateTheme(isDarkMode);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{theme, updateTheme}}>
      <RealmProvider schema={[Pokemon]}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </RealmProvider>
    </ThemeContext.Provider>
  );
}

export default App;
