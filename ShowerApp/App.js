import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Screens/Home';
import MySuite from './Screens/MySuite';
import Schedule from './Screens/Schedule';
import SignIn from './Screens/Sign Up Page';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen
          name = "Sign In" 
          component = {SignIn} />

        <Stack.Screen 
          name = "Home" 
          component = {Home} />

        <Stack.Screen 
          name = "My Suite" 
          component = {MySuite} />
        
        <Stack.Screen 
          name = "Schedule"
          component = {Schedule} />
          
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
