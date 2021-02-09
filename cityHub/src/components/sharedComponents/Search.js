import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useTheme } from '@react-navigation/native';
export default function Explore() {
  const navigation = useNavigation();
  const { colors } = useTheme()
  const myColor = colors.iconColor
  return (
    <View style={{ marginTop: 30, width: '100%' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: colors.headerColor, paddingLeft: 15 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#eaede9d9', borderRadius: 10, width: 320, paddingLeft: 6, }}>
          <AntDesign name="search1" size={21} color={myColor} />
          <TextInput placeholder="Search" style={{ fontSize: 20, width: 280 }} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Prof")}>
          <FontAwesome5 name="user-circle" size={36} color={myColor} style={{ marginLeft: 13 }} />
        </TouchableOpacity>

      </View>


    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//   },
// });
