import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Switch } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
export default function Profile() {
  const navigation = useNavigation();
  const [isDarkTheme, setISDarkTheme]= useState(false);
const toggleTheme = () => {
    
 setISDarkTheme(!isDarkTheme)
}
  return (
    <View style={styles.container}>
      <View style={{ flex: 2.5, backgroundColor: 'white', borderBottomWidth: 1,borderBottomColor:'#f4f4f4', alignContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <FontAwesome5 name="user-circle" size={110} style={{ marginLeft: 30, marginTop: 10 }} />
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ marginHorizontal: 20, fontSize: 26, color: 'black', fontWeight: 'bold' }}>Tushar Ranjan</Text>
          <Text style={{ marginHorizontal: 23, fontSize: 20, color: 'darkgrey', }}>@itzTushar</Text>
          <Text style={{ marginHorizontal: 23, fontSize: 20, color: 'darkgrey', }}>user@gmail.com</Text>
        </View>

      </View>
      <View style={{ flex: 7.5,}}>
        <TouchableOpacity style={{margin: 10, paddingTop:10}}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialIcons name='book-online' size={32} color='black' />
            <Text style={{fontSize: 15, color :'black', marginHorizontal:10}}>My Bookings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{margin: 10}}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialIcons name='bookmark-border' size={32} color='black' />
            <Text style={{fontSize: 15, color :'black', marginHorizontal:10}}>Bookmarks</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{margin: 10}}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather name='settings' size={32} color='black' />
            <Text style={{fontSize: 15, color :'black', marginHorizontal:10}}>Settings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{margin: 10, paddingLeft:2,borderTopWidth: 1,borderTopColor:'#f4f4f4',}}
        onPress={()=> {toggleTheme()}}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:10,justifyContent: 'space-between', }}>
            
            <Text style={{fontSize: 15, color :'black', marginHorizontal:10}}>Dark Theme</Text>
         <Text>{isDarkTheme ? "ON" : "OFF"}</Text>
          <Switch value={isDarkTheme}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{margin: 10, paddingLeft:2,borderTopWidth: 1,borderTopColor:'#f4f4f4',}}
        onPress={() => navigation.navigate("Login")}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:10 }}>
            <MaterialCommunityIcons name='logout' size={32} color='black' />
            <Text style={{fontSize: 15, color :'black', marginHorizontal:10}}>Sign Out</Text>
          </View>
        </TouchableOpacity>
       
        {/* <View style={styles.bottomDrawerSection}>
<Text>hi</Text>
        </View> */}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
}
});
