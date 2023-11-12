import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button} from 'react-native';

function Sliders() {
    return(
        <SafeAreaView style = {[styles.container, styles.ButtonStyle]}>
            <SafeAreaView style= {styles.ButtonStyle}>
                <Button 
                    title = "My Suite"
                    onPress = {() => console.log("Button tapped") } />
                <Button 
                    title = "Home"
                    onPress = {() => console.log("Button tapped") } />
                    if (disabled?) {
                        disabled
                    }
                <Button 
                    title = "Schedule"
                    onPress = {() => console.log("Button tapped") } />
            </SafeAreaView>            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    ButtonStyle: {
        flexDirection: 'row',
        width: 70,
        height: 70,
        backgroundColor: "#fff5ee",
        justifyContent: "flex-end",
    },

    
    



  });