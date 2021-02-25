import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useTheme } from '@react-navigation/native';
export const scaleSize = (size, width) => (width / 375) * size;
export default function Explore() {
  const navigation = useNavigation();
  const { colors } = useTheme()
  const myColor = colors.iconColor
  return (
    <View style={styles.container}>
      <View style={[styles.searchbar,{backgroundColor: colors.headerColor}]}>
        <View style={styles.search}>
          <AntDesign name="search1" size={21} color={myColor} />
          <TextInput placeholder="Search" style={styles.inputText} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Prof")}>
          <FontAwesome5 name="user-circle" size={36} color={myColor} style={{ marginLeft: 13 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const {width, height} =  Dimensions.get('window')
const buttonWidth = scaleSize(380, width*.80)
const buttonHeight = scaleSize(24, height)
const inputWidth = scaleSize(340, width*.80)
const inputHeight = scaleSize(34, height)
const styles = StyleSheet.create({
  container: {
    width: width,

    alignItems: 'center',
    justifyContent:'center',
    paddingTop:35
  },
  searchbar: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  search: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#eaede9d9', 
    borderRadius: 10, 
    width: buttonWidth, 
    paddingLeft: 6, 
  },
  inputText: {
    fontSize:20,
    width: inputWidth
  }
});
