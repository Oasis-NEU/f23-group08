import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';

export default function EditSchedule() {
    return (
        <SafeAreaView style={styles.container}>

          <StatusBar style="auto" />

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