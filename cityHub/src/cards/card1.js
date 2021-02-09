import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useTheme } from '@react-navigation/native';
export default function card1({navigation}) {
  const {colors} = useTheme()
  return (
    <View style={{alignContent: 'center',paddingHorizontal:10}}>  
    <TouchableOpacity>
    <View style={styles.container}>
    <FontAwesome name="hotel" size={44} color="white" />
    </View>   
    </TouchableOpacity>
    
        <Text style={{marginLeft: 20, color: colors.txt, fontWeight: 'bold'}}>Hotels</Text>
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
