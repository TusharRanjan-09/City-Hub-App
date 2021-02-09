import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation, useTheme } from '@react-navigation/native';
export default function card5({navigation}) {
  const {colors} = useTheme()
  return (
    <View style={{alignContent: 'center',paddingHorizontal:10}}>  
    <TouchableOpacity>
    <View style={styles.container}>
    <Fontisto name="shopify" size={46} color="white" />
    </View>    
    </TouchableOpacity>
    
        <Text style={{marginLeft: 10, color: colors.txt, fontWeight: 'bold'}}>Shopping</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#6dd7bd',
    width: 80,
    height:80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  },
 
});
