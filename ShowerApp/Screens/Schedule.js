import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';

export default function Schedule() {
    return (
        <SafeAreaView style={styles.container}>

          <StatusBar style="auto" />

            <SafeAreaView style = {styles.sliders}>
                
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