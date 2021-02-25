import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,Dimensions, ImageBackground, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useTheme } from '@react-navigation/native';
export const scaleSize = (size, width) => (width / 375) * size;
export default function categoryCarousel() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=> navigation.navigate("Hotels")}>
        <View style={{backgroundColor: '#fc0',width: buttonWidth*.95, height: inputHeight*1.2, borderRadius: 20, flexDirection: 'row', alignItems: 'center',justifyContent:'center'}}>
         <Image source={{uri: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80'}}
         style={{width:inputHeight*1.0, height: inputHeight*1.0, borderRadius: inputHeight/2, margin:inputHeight*.1}}
         />
     <Text style={{fontSize: 29, color: 'white', fontWeight: 'bold'}}>Hotels</Text>
        </View>
        </TouchableOpacity>    
    </View>
  );
}
const {width, height} =  Dimensions.get('window')
const buttonWidth = scaleSize(200, width)
const buttonHeight = scaleSize(45, height)
const inputWidth = scaleSize(340, width)
const inputHeight = scaleSize(34, height)
const styles = StyleSheet.create({
  container: {
    width: width/1.8,
    height:buttonHeight,
    alignItems: 'center',
    justifyContent:'center',
  },
});