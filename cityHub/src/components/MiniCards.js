import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function MiniCards({navigation}) {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
        <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'}}
           style={{width: 353, height: 350, marginLeft: 20, borderRadius: 30, opacity: .9, elevation:5}}
           > 
           <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
           <Entypo name="location-pin" size={28} color="white" />
          <Text style={{color :'white', fontWeight: 'bold', fontSize: 16}}>32,Leisure Valley Park,Gurgaon, Haryana</Text>
          <Ionicons name="bookmark" size={28} color="#0c659f" />
           </View>
            <Text style={{fontSize:38, color: 'white',marginLeft:5, fontWeight: 'bold', marginTop: 150}}>A Consortium of music</Text>
           <View style={{flexDirection: 'row'}}>
           <AntDesign name="star" size={28} color="orange" />
           <AntDesign name="star" size={28} color="orange" />
           <AntDesign name="star" size={28} color="orange" />
           <AntDesign name="star" size={28} color="orange" />
           <AntDesign name="star" size={28} color="white" />
           </View>         
            <Text style={{color: 'white', fontSize: 28, fontWeight: 'bold',marginLeft:5}}>Rs 1499/-</Text>
           </ImageBackground>
        </TouchableOpacity>
           
   
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#fff'  
  },
 
});
