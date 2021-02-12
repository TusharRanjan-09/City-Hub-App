import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,Dimensions, ImageBackground, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useTheme } from '@react-navigation/native';

export default function offerBanner() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=> navigation.navigate('Shops')}>
        <View style={{ alignItems: 'center'}}>
         <Image source={{uri: 'https://images.unsplash.com/photo-1575729312527-1bdecaae271e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'}}
         style={{width: width-120, height: height-600}}
         />
         <Text style={{fontSize: 28, color: 'white', fontWeight: 'bold', position: 'absolute', marginTop: height-700}}>Book Now!</Text>
     <Text style={{fontSize: 28, color: 'white', fontWeight: 'bold', position: 'absolute', marginTop: height-660}}>Starting at ₹ 799/-</Text>
        </View>
        </TouchableOpacity>    
    </View>
  );
}
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
const styles = StyleSheet.create({
  container: {
//    flex: 1,
    // backgroundColor: '#fff',
   margin: 10
  },
 
});
