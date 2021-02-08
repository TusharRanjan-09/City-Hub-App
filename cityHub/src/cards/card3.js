import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function card3({navigation}) {
  return (
    <View style={{alignContent: 'center',paddingHorizontal:10}}> 
    <TouchableOpacity>
    <View style={styles.container}>
    <Ionicons name="fast-food" size={44} color="white" />
    </View>  
        </TouchableOpacity> 
      
        <Text style={{marginLeft: 5, color: 'black', fontWeight: 'bold'}}>Resturants</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#fc5373',
    width: 80,
    height:80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  },
 
});
