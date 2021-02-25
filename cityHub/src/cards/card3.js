import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground,Dimensions  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useTheme } from '@react-navigation/native';
import { color } from 'react-native-reanimated';
export const scaleSize = (size, width) => (width / 375) * size;
export default function card3({navigation}) {
  const {colors} = useTheme()
  return (
    <View style={{alignContent: 'center',paddingHorizontal:10}}> 
    <TouchableOpacity>
    <View style={styles.container}>
    <Ionicons name="fast-food" size={44} color="white" />
    </View>  
        </TouchableOpacity> 
      
        <Text style={{alignSelf:'center',color: colors.txt, fontWeight: 'bold'}}>Resturants</Text>
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
    backgroundColor: 'green',
    width: buttonWidth*.86,
    height:buttonWidth*.86,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 7
  },

});
