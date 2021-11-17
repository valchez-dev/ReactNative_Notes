import React from 'react';
import welcome from './src/screens/welcome';
import home from './src/screens/home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen 
        name="Home" 
        component={home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
