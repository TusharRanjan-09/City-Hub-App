import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,Dimensions, ImageBackground, Image } from 'react-native';
import {FONTSIZE} from '../../utilities/font';
import { useNavigation, useTheme } from '@react-navigation/native';
export const scaleSize = (size, width) => (width / 375) * size;
export default function categoryCarousel() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=> navigation.navigate("Hotels")}>
        <View style={{backgroundColor: '#fc0',width: buttonWidth*.85, height: buttonWidth*.4, borderRadius: 20, flexDirection: 'row', alignItems: 'center',justifyContent:'center',}}>
         <Image source={{uri: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80'}}
         style={{width:buttonWidth*.33, height: buttonWidth*.33, borderRadius: buttonWidth*.166, }}
         />
     <Text style={{fontSize: FONTSIZE.extra_medium, color: 'white', fontWeight: 'bold'}}>Hotels</Text>
        </View>
        </TouchableOpacity>    
    </View>
  );
}
const {width, height} =  Dimensions.get('window')
const buttonWidth = scaleSize(180, width)
const buttonHeight = scaleSize(45, height)
const inputWidth = scaleSize(340, width)
const inputHeight = scaleSize(34, height)
const styles = StyleSheet.create({
  container: {
    width: buttonWidth*.9,
    height:buttonHeight,
    alignItems: 'center',
    justifyContent:'center',
  },
});