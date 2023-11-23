import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Screens/Home';
import MySuite from './Screens/MySuite';
import Schedule from './Screens/Schedule';
import SignUp from './Screens/Sign Up';
import LogIn from './Screens/Log In';
import EditSchedule from './Screens/Edit Schedule';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';


const Stack = createNativeStackNavigator();

export default function App() {
  return LoggedOut()
}

const Tab = createBottomTabNavigator();

function Main() {
  return (
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
    
  );
}

function LoggedOut() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Sign up'>
        
      <Stack.Screen
        name = "Sign Up" 
        component = {SignUp} />

      <Stack.Screen
        name = "Log in" 
        component = {LogIn} />

      <Stack.Screen
        name="Tabs"
        component={Main} />

      <Stack.Screen
        name="Edit Schedule"
        component={EditSchedule} /> 
 
          
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
