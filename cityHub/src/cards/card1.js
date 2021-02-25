import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground,Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useTheme } from '@react-navigation/native';
export const scaleSize = (size, width) => (width / 375) * size;
export default function card1() {
  const {colors} = useTheme()
  const navigation = useNavigation();
  return (
    <View style={{alignContent: 'center',paddingHorizontal:10}}>  
    <TouchableOpacity onPress={()=> navigation.navigate('Hotels')}>
    <View style={styles.container}>
    <FontAwesome name="hotel" size={48} color="white" />
    </View>   
    </TouchableOpacity>
    
        <Text style={{alignSelf:'center', color: colors.txt, fontWeight: 'bold', fontSize:15}}>Hotels</Text>
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
    backgroundColor: 'maroon',
    width: buttonWidth*.80,
    height:buttonWidth*.80,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 7
  },
});
