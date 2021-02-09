import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,Dimensions, ImageBackground, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function cardCarousel({navigation}) {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
        <View style={{ backgroundColor: '#5dade2',alignItems:'center', width: width-170, height: height-600, borderRadius: 30}}>
      <Image source={{uri: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/273753077.webp?k=c4c2895f210b2bdaf9e220e82f99d4cdc97e344063f048380562554d1a83e3c6&o='}}
      style={{ width: width-167, height: height-699, borderTopLeftRadius:30, borderTopRightRadius: 30}}
      />
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 28}}>Holiday Inn</Text>
       <Text style={{fontSize: 15, paddingHorizontal: 5, margin:3, color: 'white'}}>Aesthetically designed rooms,</Text>
       <Text style={{fontSize: 15, color: 'white'}}>Comfortable budget stay !</Text>

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
