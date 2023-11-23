import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button} from 'react-native';

export default function Sliders( {navigation} ) {
    
    return(
            <SafeAreaView style= {styles.container}>
                <Button 
                    title = "My Suite"
                    onPress = {() => navigation.navigation('My Suite')} />
                <Button 
                    title = "Home"
                    onPress = {() => navigation.navigation('Home')} />

                <Button 
                    title = "Schedule"
                    onPress = {() => navigation.navigation('Schedule')} />
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