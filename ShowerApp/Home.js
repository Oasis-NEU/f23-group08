import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import Sliders from './Sliders';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
          <Text>Welcome to your home!</Text>
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