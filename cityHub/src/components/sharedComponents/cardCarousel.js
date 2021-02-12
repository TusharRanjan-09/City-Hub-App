import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,Dimensions, ImageBackground, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useTheme } from '@react-navigation/native';

export default function cardCarousel() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=> navigation.navigate("Hotels")}>
        <View style={{ backgroundColor: '#5dade2',borderWidth:1,borderColor: 'black', alignItems:'center', width: Width*.5, borderRadius: 30, height: Height*.28, }}>
      <Image source={{uri: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/273753077.webp?k=c4c2895f210b2bdaf9e220e82f99d4cdc97e344063f048380562554d1a83e3c6&o='}}
      style={{ width: Width*.498, height: Height*.14, borderTopLeftRadius:30, borderTopRightRadius: 30}}
      />
      <View style={{height: Height*.14}}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 26, width: Width*.4, alignSelf: 'center', alignContent: 'center', alignItems: 'center'}}>Holiday Inn</Text>
       <Text style={{fontSize: 14, paddingHorizontal: 5, margin:3, color: 'white', width: Width*.42}}>Aesthetically designed rooms,</Text>
       <Text style={{fontSize: 14, color: 'white', width: Width*.45}}>Comfortable budget stay !</Text>
      </View>
      
        </View>
        </TouchableOpacity>    
    </View>
  );
}
const Width = Dimensions.get('screen').width
const Height = Dimensions.get('screen').height
const styles = StyleSheet.create({
  container: {
   margin: 10
  },
 
});
