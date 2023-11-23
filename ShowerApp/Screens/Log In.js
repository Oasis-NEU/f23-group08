import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Button} from 'react-native';
import {useEffect, useState} from 'react';

export default function LogIn() {  
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    return (
        
        <SafeAreaView style={styles.container}>

          <Text>Welcome back!</Text>

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
            title = "Log in"
            onPress = {() => console.log("Your username is " + Username + " and your password is " + Password)}
         
         />

          
        </SafeAreaView>
      );
}

function addDatabase() {
    // Check if username and password combination exists in database
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
    }

    



  });