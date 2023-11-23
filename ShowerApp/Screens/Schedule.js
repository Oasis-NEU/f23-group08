import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import Sliders from '../Components/Sliders';

export default function Schedule() {
    return (
        <SafeAreaView style={styles.container}>

          <StatusBar style="auto" />

            <SafeAreaView style = {styles.sliders}>
                <Sliders />
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