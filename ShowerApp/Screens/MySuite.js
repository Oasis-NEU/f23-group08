import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';

export default function MySuite() {
    return (
        <SafeAreaView style={styles.container}>

          <Text>Welcome to My Suite!</Text>

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