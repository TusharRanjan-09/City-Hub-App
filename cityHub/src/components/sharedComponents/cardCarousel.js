import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,Dimensions, ImageBackground, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useTheme } from '@react-navigation/native';
export const scaleSize = (size, width) => (width / 375) * size;
export default function cardCarousel() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=> navigation.navigate("Hotels")}>
        <View style={styles.card}>
      <Image source={{uri: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/273753077.webp?k=c4c2895f210b2bdaf9e220e82f99d4cdc97e344063f048380562554d1a83e3c6&o='}}
      style={{ width: inputWidth*1.01, height: inputWidth/2, borderTopLeftRadius:30, borderTopRightRadius: 30}}
      />
      <View style={{height: inputWidth*.5, backgroundColor:'red', width:inputWidth, borderBottomLeftRadius:30, borderBottomRightRadius:30, alignItems: 'center'}}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 26, width: inputWidth,alignSelf:'center', marginLeft:inputWidth/4}}>Holiday Inn</Text>
       {/* <Text style={{fontSize: 14, paddingHorizontal: 5, margin:3, color: 'white', width: inputWidth,marginLeft:inputWidth*.19}}>Aesthetically designed rooms,</Text> */}
       <Text style={{fontSize: 15, color: 'white', width: inputWidth, marginLeft:inputWidth*.025}}>Comfortable budget stay</Text>
      </View>  
        </View>
        </TouchableOpacity>    
    </View>
  );
}
const {width, height} =  Dimensions.get('window')
const buttonWidth = scaleSize(240, width)
const buttonHeight = scaleSize(100, height)
const inputWidth = scaleSize(173, width)
const inputHeight = scaleSize(60, height)
const styles = StyleSheet.create({
  container: {
    width: buttonWidth*.86,
    height:buttonHeight*.95,
    alignItems: 'center',
    justifyContent:'center',
  },
  card: {
    backgroundColor: '#5dade2',
    borderWidth:1,
    borderColor: 'black', 
    alignItems:'center', 
    width:inputWidth, 
    borderRadius: 30, 
    height: inputWidth, 
    alignItems: 'center'
  }
});
