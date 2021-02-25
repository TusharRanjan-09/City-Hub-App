import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, ImageBackground, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useTheme } from '@react-navigation/native';
export const scaleSize = (size, width) => (width / 375) * size;
export default function offerBanner() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Shops')}>
        <View style={{ alignItems: 'center',justifyContent:'center' }}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1575729312527-1bdecaae271e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' }}
            style={{ width: buttonWidth*.95, height:buttonWidth*.6 }}
          />
          <Text style={{ fontSize: 28, color: 'white', fontWeight: 'bold', position: 'absolute', top:buttonWidth*.27 }}>Book Now!</Text>
          <Text style={{ fontSize: 28, color: 'white', fontWeight: 'bold', position: 'absolute', top:buttonWidth*.39 }}>Starting at ₹ 799/-</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const { width, height } = Dimensions.get('window')
const buttonWidth = scaleSize(280, width)
const buttonHeight = scaleSize(45, height)
const inputWidth = scaleSize(100, width)
const inputHeight = scaleSize(100, height)
const styles = StyleSheet.create({
  container: {
    width: buttonWidth,
    height: buttonHeight * 1.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
