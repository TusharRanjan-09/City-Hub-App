import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Switch,Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation, useTheme } from '@react-navigation/native';
import { EventRegister } from 'react-native-event-listeners'
export const scaleSize = (size, width) => (width / 375) * size;
import { FONTSIZE } from "../utilities/font";
export default function Profile() {
  const navigation = useNavigation();
  const [isDarkTheme, setISDarkTheme]= useState(false);
  const {colors} = useTheme()
  const myColor = colors.iconColor
// const toggleTheme = () => {
    
//  setISDarkTheme(!isDarkTheme)
// }
  return (
    <View style={[styles.container,{backgroundColor: colors.iconColor}]}>
      <View style={{ flex: 2.5, backgroundColor: colors.profile, borderBottomWidth: 1,borderBottomColor:'#f4f4f4', alignContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <FontAwesome5 name="user-circle" size={FONTSIZE.big} color={myColor} style={{ marginLeft: 30, marginTop: 10 }} />
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ marginHorizontal: 20, fontSize: FONTSIZE.small_medium, color: colors.txt, fontWeight: 'bold' }}>Tushar Ranjan</Text>
          <Text style={{ marginHorizontal: 23, fontSize: FONTSIZE.regular, color: 'darkgrey', }}>@itzTushar</Text>
          <Text style={{ marginHorizontal: 23, fontSize: FONTSIZE.regular, color: 'darkgrey', }}>user@gmail.com</Text>
        </View>

      </View>
      <View style={{ flex: 7.5,backgroundColor: colors.profile}}>
        <TouchableOpacity style={{margin: 10, paddingTop:10}}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialIcons name='book-online' size={FONTSIZE.small} color={myColor} />
            <Text style={{fontSize: FONTSIZE.medium, color :colors.txt, marginHorizontal:10}}>My Bookings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{margin: 10}}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialIcons name='bookmark-border' size={FONTSIZE.small} color={myColor} />
            <Text style={{fontSize: FONTSIZE.medium, color :colors.txt, marginHorizontal:10}}>Bookmarks</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{margin: 10}}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather name='settings' size={FONTSIZE.small} color={myColor} />
            <Text style={{fontSize: FONTSIZE.medium, color :colors.txt, marginHorizontal:10}}>Settings</Text>
          </View>
        </TouchableOpacity>
        <View style={{margin: 10, paddingLeft:2,borderTopWidth: 1,borderTopColor:'#f4f4f4',}}
       
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:10,justifyContent: 'space-between', }}>
            
            <Text style={{fontSize: FONTSIZE.medium, color :colors.txt, marginHorizontal:10}}>Dark Theme</Text>
         <Text style={{color: colors.txt,fontSize: FONTSIZE.medium }}>{isDarkTheme ? "ON" : "OFF"}</Text>
          <Switch value={isDarkTheme}
           onValueChange={val => {
            setISDarkTheme(val);
            EventRegister.emit('ChangeThemeEvent', val)
          }}
          />
          </View>
        </View>
        <TouchableOpacity style={{margin: 10, paddingLeft:2,borderTopWidth: 1,borderTopColor:'#f4f4f4',}}
        onPress={() => navigation.navigate("Login")}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:10 }}>
            <MaterialCommunityIcons name='logout' size={FONTSIZE.small} color={myColor} />
            <Text style={{fontSize: FONTSIZE.medium, color :colors.txt, marginHorizontal:10}}>Sign Out</Text>
          </View>
        </TouchableOpacity>
       
      </View>

    </View>
  );
}
const {width, height} =  Dimensions.get('window')
const buttonWidth = scaleSize(305, width)
const buttonHeight = scaleSize(24, height)
const inputWidth = scaleSize(305, width)
const inputHeight = scaleSize(34, height)
const styles = StyleSheet.create({
  container: {
   width:width,
   height:height
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
}
});
