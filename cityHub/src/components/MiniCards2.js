import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground, Touchable,Dimensions } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function MiniCards2({navigation}) {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
        <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=313&q=80'}}
           style={{width: width-40, height: height-450, marginLeft: 20, borderRadius: 30, opacity: .9, elevation:50}}
           > 
           <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
           <Entypo name="location-pin" size={28} color="white" />
          <Text style={{color :'white', fontWeight: 'bold', fontSize: 16}}>144,MG Road,Gurgaon, Haryana</Text>
          <Ionicons name="bookmark" size={28} color="#0c659f" />
           </View>
            <Text style={{fontSize:38, color: 'white',marginLeft:5, fontWeight: 'bold', marginTop: 150}}>Where taste meets the myth !</Text>
           <View style={{flexDirection: 'row'}}>
           <AntDesign name="star" size={28} color="orange" />
           <AntDesign name="star" size={28} color="orange" />
           <AntDesign name="star" size={28} color="orange" />
           <AntDesign name="star" size={28} color="orange" />
           <AntDesign name="star" size={28} color="orange" />
           </View>         
            <Text style={{color: 'white', fontSize: 28, fontWeight: 'bold',marginLeft:5}}>Rs 599/- per person</Text>
           </ImageBackground>
        </TouchableOpacity>
            
   
       
    </View>
  );
}
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#fff'  
  },
 
});
