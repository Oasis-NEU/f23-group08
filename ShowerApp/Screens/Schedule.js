import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button} from 'react-native';

export default function Schedule( {navigation} ) {
    return (
        <SafeAreaView style={styles.container}>

          <StatusBar style="auto" />

            <SafeAreaView style = {styles.sliders}>

        <Button 
            title = "Change Schedule"
            onPress = {() => navigation.navigate('Edit Schedule')} />

            </SafeAreaView>
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

    



  });