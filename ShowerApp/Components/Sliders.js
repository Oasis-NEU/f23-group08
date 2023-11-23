import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button} from 'react-native';  
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Sliders( { navigation } ) {
    
    return(
            <SafeAreaView style= {styles.container}>
                <Button 
                    title = "My Suite"
                    onPress = {() => navigation.navigator('My Suite')} />
                <Button 
                    title = "Home"
                    onPress = {() => navigation.navigator('Home')} />

                <Button 
                    title = "Schedule"
                    onPress = {() => navigation.navigator('Schedule')} />
            </SafeAreaView>            
    );
}


const styles = StyleSheet.create({
    container: {
      height: 100,
      flexDirection: 'row',
      backgroundColor: '#ffff',
      justifyContent: 'flex-end',
    },

  });