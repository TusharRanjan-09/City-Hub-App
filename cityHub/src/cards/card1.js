import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function card1({navigation}) {
  return (
    <View style={{alignContent: 'center',paddingHorizontal:10}}>  
    <TouchableOpacity>
    <View style={styles.container}>
    <FontAwesome name="hotel" size={44} color="white" />
    </View>   
    </TouchableOpacity>
    
        <Text style={{marginLeft: 20, color: 'black', fontWeight: 'bold'}}>Hotels</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#fc0',
    width: 80,
    height:80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  },
 
});
