import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function card4({navigation}) {
  return (
    <View style={{alignContent: 'center',}}>  
    <TouchableOpacity>
    <View style={styles.container}>
    <FontAwesome5 name="dumbbell" size={40} color="white" />
    </View> 
    </TouchableOpacity>
       
        <Text style={{marginLeft: 20, color: 'black', fontWeight: 'bold'}}>Fitness</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#5dade2',
    width: 80,
    height:80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  },
 
});
