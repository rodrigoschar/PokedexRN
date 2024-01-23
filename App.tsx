import * as React from 'react';
import Home from './src/screens/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RealmProvider } from '@realm/react';
import Pokemon from './src/models/Pokemon';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
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
  );
}

export default App;
