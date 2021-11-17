import React from 'react';
import welcome from './src/screens/welcome';
import home from './src/screens/home';
import done from './src/screens/done';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{headerShown: false}} name="ToDo" component={home} />
      <Tab.Screen options={{headerShown: false}} name="Done" component={done} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Done" component={done} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
