import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Home';
import Category from './src/components/sharedComponents/categoryCarousel';
export default function App() {
  return (
    <View style={styles.container}>
      <Home />   
      {/* <Category/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
