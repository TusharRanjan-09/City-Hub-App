import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
export default function Explore() {
    const navigation = useNavigation();
  return (
    <View style={{ marginTop: 30}}>
        <View style={{flexDirection :'row', alignItems :'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor :'#eaede9d9', borderRadius: 10, width: 320, marginLeft: 6, paddingLeft: 10}}>
<AntDesign name="search1" size={21} />
<TextInput placeholder="Search" style={{fontSize: 20,  width: 280}}/>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Prof")}>
        <FontAwesome5 name="user-circle" size={36} style={{marginLeft :13}} />
        </TouchableOpacity>
       
        </View>
   
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#fff',
    alignItems: 'center',
  },
 
});
