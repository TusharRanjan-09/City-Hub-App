import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,Dimensions } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
export const scaleSize = (size, width) => (width / 375) * size;
import {FONTSIZE} from '../utilities/font';
export default function Forgot({navigation}) {
  return (
    <View style={styles.container} >
          <TouchableOpacity onPress={()=> navigation.navigate("Login")} style={{position: 'absolute', top:2,left:5}}>
        <Entypo name="cross" size={32} color="black" style={{marginTop: 22, paddingLeft:2}}/>
        </TouchableOpacity>    
      <Text style={{fontSize: FONTSIZE.larger, fontWeight: 'bold', color: 'black' ,marginTop: 25}}>Forgot password</Text>
      <Text style={{fontSize: FONTSIZE.regular, color: 'black', width: 300, marginTop: 35, marginBottom: 30}}>Please enter your email adress. you will receive a link to create new password via email.</Text>
        <TextInput placeholder="Username/Email" style={styles.txtinput}/>  
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Explore")}>
         <Text style={styles.btntxt}>SEND</Text>
     </TouchableOpacity>
        </View>
  );
}
const {width, height} =  Dimensions.get('window')
const buttonWidth = scaleSize(305, width)
const buttonHeight = scaleSize(24, height)
const inputWidth = scaleSize(305, width)
const inputHeight = scaleSize(34, height)
const styles = StyleSheet.create({
  con: {
    width: width,
    height: height,
    backgroundColor: 'red'
},
  container: {
    width: width,
    height: height,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center'
  },
  button: {
    backgroundColor: '#4cb8ff',
    width: buttonWidth,
    alignSelf: 'center',
    marginTop: buttonHeight*1.5,
    height: buttonHeight,
    borderRadius: 10,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
},
btntxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: FONTSIZE.extra_large
},
txtinput: {
  width: inputWidth,
  height:inputHeight, 
  borderBottomColor: 'lightgrey', 
  borderBottomWidth: 1, 
  fontSize: FONTSIZE.extra_large  
}
});
