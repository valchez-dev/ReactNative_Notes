import React from 'react';
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';
import Done from './src/screens/Done';
import Details from './src/screens/Details';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{headerShown: false}} name="ToDo" component={Home} />
      <Tab.Screen options={{headerShown: false}} name="Done" component={Done} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Done" component={Done} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
