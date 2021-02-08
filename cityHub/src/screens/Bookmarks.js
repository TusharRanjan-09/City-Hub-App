import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Bookmarks({navigation}) {
  return (
    <View style={styles.container}>
        <Text>Bookmarks Screen</Text>
   
       
    </View>
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
