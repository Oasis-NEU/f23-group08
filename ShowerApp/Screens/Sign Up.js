import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Button} from 'react-native';
import {useEffect, useState} from 'react';

export default function SignUp( {navigation} ) {  
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    function addDatabase() {
      return console.log("Your username is " + Username + " and your password is " + Password)
        //   Change up to something that adds username and password to the database
    }

    
    return (
        
        <SafeAreaView style={styles.container}>

          <Text>Welcome to Suite Showers!</Text>

          <TextInput
            style={{height: 40}}          
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
         />

          <TextInput
            style={{height: 40}}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}       
         />

         <Button style = {styles.Button}
            title = "Sign Up"
            onPress = {addDatabase}
         
         />

        <Button
          title = "Already have an account? Log in"
          onPress = {() => navigation.navigate('Log in')} />
          
        </SafeAreaView>

      
      );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    Button: {
        backgroundColor: '#ffgff'
    },
    
  });