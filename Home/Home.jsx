import { StatusBar } from 'expo-status-bar';
import {ImageBackground,  StyleSheet, Text, View, SafeAreaView,Platform} from 'react-native';
import type {StatusBarStyle} from 'react-native';

export default function Home() {

    const image = {
        uri:
          '/Assets/box.png',
      };


  return (
    <SafeAreaView style={styles.container}><StatusBar style="light-content" />
        <ImageBackground source={image} resizeMode="cover" style={{ height: "100%", width:"100%" }}>

             <Text>Open up App.js to start working on your app!</Text>
        </ImageBackground>
     
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
