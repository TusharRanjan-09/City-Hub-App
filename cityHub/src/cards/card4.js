import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground ,Dimensions } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useTheme } from '@react-navigation/native';
export const scaleSize = (size, width) => (width / 375) * size;
export default function card4() {
  const {colors} = useTheme()
  const navigation = useNavigation();
  return (
    <View style={{alignContent: 'center',}}>  
    <TouchableOpacity onPress={()=> navigation.navigate('Gyms')}>
    <View style={styles.container}>
    <FontAwesome5 name="dumbbell" size={40} color="white" />
    </View> 
    </TouchableOpacity>
       
        <Text style={{alignSelf:'center', color: colors.txt, fontWeight: 'bold'}}>Fitness</Text>
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
    backgroundColor: 'darkblue',
    width: buttonWidth*.86,
    height:buttonWidth*.86,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 7
  },
});