import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,Dimensions, ImageBackground, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useTheme } from '@react-navigation/native';
export default function categoryCarousel() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=> navigation.navigate("Hotels")}>
        <View style={{backgroundColor: '#fc0',width: width-170, height: height-680, borderRadius: 20, flexDirection: 'row', alignItems: 'center'}}>
         <Image source={{uri: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80'}}
         style={{width: width-315, height: height-725, borderRadius: 40, margin: 10}}
         />
     <Text style={{fontSize: 29, color: 'white', fontWeight: 'bold'}}>Hotels</Text>
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
