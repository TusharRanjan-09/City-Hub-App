import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default function Input(props) {
  return (
    <View >
     <TextInput placeholder={props.email.user} style={{width: 330,height: 60, borderBottomColor: 'lightgrey', borderBottomWidth: 1, fontSize: 20}}/>   
     <TextInput placeholder={props.email.email} style={{width: 330,height: 60, borderBottomColor: 'lightgrey', borderBottomWidth: 1, fontSize: 20}}/>   
     <TextInput placeholder={props.email.pass} style={{width: 330,height: 60, borderBottomColor: 'lightgrey', borderBottomWidth: 1, fontSize: 20}} secureTextEntry={true}/>   

    </View>
  );
}

