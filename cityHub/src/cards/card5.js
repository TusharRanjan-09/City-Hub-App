import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground,Dimensions } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation, useTheme } from '@react-navigation/native';
export const scaleSize = (size, width) => (width / 375) * size;
export default function card5() {
  const {colors} = useTheme()
  const navigation = useNavigation();
  return (
    <View style={{alignContent: 'center',paddingRight:10}}>  
    <TouchableOpacity onPress={()=> navigation.navigate("Shops")}>
    <View style={styles.container}>
    <Fontisto name="shopify" size={46} color="white" />
    </View>    
    </TouchableOpacity>
    
        <Text style={{alignSelf:'center',color: colors.txt, fontWeight: 'bold',fontSize:15}}>Shopping</Text>
    </View>
  );
}
const {width, height} =  Dimensions.get('window')
const buttonWidth = scaleSize(100, width)
const buttonHeight = scaleSize(45, height)
const inputWidth = scaleSize(300, width)
const inputHeight = scaleSize(60, height)
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fc0',
    width: buttonWidth*.80,
    height:buttonWidth*.80,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 7
  },
});