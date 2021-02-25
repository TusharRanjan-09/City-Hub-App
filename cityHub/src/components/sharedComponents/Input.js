import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Dimensions } from 'react-native';
export const scaleSize = (size, width) => (width / 375) * size;
import {FONTSIZE} from '../../utilities/font';
export default function Input(props) {
  return (
    <View >
     <TextInput placeholder={props.email.user} style={styles.txtinput}/>   
     <TextInput placeholder={props.email.email} style={styles.txtinput}/>   
     <TextInput placeholder={props.email.pass} style={styles.txtinput} secureTextEntry={true}/>   

    </View>
  );
}
const {width, height} =  Dimensions.get('window')
const buttonWidth = scaleSize(305, width)
const buttonHeight = scaleSize(24, height)
const inputWidth = scaleSize(305, width)
const inputHeight = scaleSize(34, height)
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 30,
        width: width,
        height: height,
        alignItems:'center',
        justifyContent:'center'
    },
    txtinput: {
        width: inputWidth,
        height:inputHeight, 
        borderBottomColor: 'lightgrey', 
        borderBottomWidth: 1, 
        fontSize: FONTSIZE.extra_large
    }
});

