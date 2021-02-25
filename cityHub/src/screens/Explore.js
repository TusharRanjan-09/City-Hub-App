import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView, Text, View, TouchableOpacity, TextInput, ImageBackground, ScrollView, Dimensions } from 'react-native';
import Carousel from '../components/sharedComponents/Carousel';
import Search from "../components/sharedComponents/Search";
import { useNavigation, useTheme } from '@react-navigation/native';
export const scaleSize = (size, width) => (width / 375) * size;
export default function Explore() {
    const {colors} = useTheme()
    return (
        <SafeAreaView style={[styles.container,{backgroundColor:colors.backGround}]}>
            <Search />
           <Carousel />
        </SafeAreaView>
    );
}
const {width, height} =  Dimensions.get('window')
const buttonWidth = scaleSize(305, width)
const buttonHeight = scaleSize(24, height)
const inputWidth = scaleSize(305, width)
const inputHeight = scaleSize(34, height)
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent:'center',
    paddingTop:35
  },
});
