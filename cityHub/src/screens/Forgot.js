import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
export default function Forgot({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}} >
          <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
        <Entypo name="cross" size={28} color="black" style={{marginTop: 22, paddingLeft:2}}/>
        </TouchableOpacity>
        <View style={styles.container}>
      
      <Text style={{fontSize:36, fontWeight: 'bold', color: 'black' ,marginTop: 25}}>Forgot password</Text>
      <Text style={{fontSize: 18, color: 'black', width: 300, marginTop: 35, marginBottom: 30}}>Please enter your email adress. you will receive a link to create new password via email.</Text>
        <TextInput placeholder="Username/Email" style={{width: 300,height: 60, borderBottomColor: 'lightgrey', borderBottomWidth: 1, fontSize: 20}}/>
      
        <TouchableOpacity style={styles.button}>
         <Text style={styles.btntxt}>SEND</Text>
     </TouchableOpacity>
        </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4cb8ff',
    width: 320,
    alignSelf :'center',
    height: 50,
    borderRadius: 10,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent :'center',
    marginTop: 88
},
btntxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
}
});
