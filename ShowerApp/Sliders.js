import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button} from 'react-native';

export default function Sliders() {
    return(
        <SafeAreaView style = {[styles.container, styles.ButtonStyle]}>
            <SafeAreaView style= {styles.Sliders}>
                <Button 
                    title = "My Suite"
                    onPress = {() => console.log("Button tapped") } />
            </SafeAreaView>            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#ffff',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },

    ButtonStyle: {
        width: "33%",
        height: 70,
        backgroundColor: "#fff5ee",
    },

    sliders: {
        flexDirection: 'row'
    },

  });