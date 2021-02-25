import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, ImageBackground, Image } from 'react-native';
export const scaleSize = (size, width) => (width / 375) * size;
import { useNavigation, useTheme } from '@react-navigation/native';
export default function IconCategory() {
    const {colors} = useTheme()  
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> navigation.navigate('Gyms')}>
                <View style={styles.card}>
                    <Image source={{ uri: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' }}
                        style={{ width: inputWidth, height: inputWidth, borderRadius: 50}}
                    />
                    <Text style={{ fontSize: 20, color: colors.iconCategory,fontWeight :'bold' }}>Gym</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
const {width, height} =  Dimensions.get('window')
const buttonWidth = scaleSize(112, width)
const buttonHeight = scaleSize(45, height)
const inputWidth = scaleSize(100, width)
const inputHeight = scaleSize(100, height)
const styles = StyleSheet.create({
  container: {
    width: buttonWidth,
    height:buttonHeight*1.7,
    alignItems: 'center',
    justifyContent:'center',
  },
  card: {
    alignItems: 'center', 
    width: inputWidth, 
    height: inputWidth, 
    borderRadius: 50, 
    borderWidth: 1 ,
    bottom:10
  }
});

