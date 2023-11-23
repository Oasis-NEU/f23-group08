import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Screens/Home';
import MySuite from './Screens/MySuite';
import Schedule from './Screens/Schedule';
import SignUp from './Screens/Sign Up';
import LogIn from './Screens/Log In';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return Main()
}

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        
        <Tab.Screen 
          name = "My Suite" 
          component = {MySuite} />

        <Tab.Screen 
          name = "Home" 
          component = {Home} />
          
        <Tab.Screen 
          name = "Schedule"
          component = {Schedule} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function LoggedOut() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

      <Stack.Screen
          name = "Log in" 
          component = {LogIn} />

      <Stack.Screen
          name = "Sign Up" 
          component = {SignUp} />

        
          
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
